import tw from "./app.module.css";
import cx from "classnames";
import { Consent } from "./components/consent";
import { Card, Spin, notification } from "antd";
import { useAppContext } from "./providers/AppContext";
import { useEffect } from "react";
import { HttpService, getAuthenticationHeaders } from "./services/http";

const base64UrlEncode = (jsonObject) => {
  // Convert JSON object to a string
  const jsonString = JSON.stringify(jsonObject);

  // Base64 encode the string
  const base64String = btoa(jsonString);

  // Make the Base64 string URL-safe
  const urlSafeBase64 = base64String
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return urlSafeBase64;
};

const App = () => {
  const context = useAppContext();

  const populateDataSharingUi = async (httpService) => {
    try {
      // Read organisation and data agreement
      const [orgRes, dataAgreementRes] = await Promise.all([
        httpService.readOrganisation(),
        httpService.readDataAgreement(context.dataAgreementIdState),
      ]);

      if (orgRes.status === 200) {
        // Set organisation state
        context.setOrganisationState(orgRes.data.organisation);

        // Read organisation logo image
        const [orgLogoImageRes] = await Promise.all([
          httpService.getImage(orgRes.data.organisation.logoImageUrl),
        ]);

        if (orgLogoImageRes.status === 200) {
          // Base64 encode the image
          const base64Image = btoa(
            new Uint8Array(orgLogoImageRes.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          // Set organisation logo image state
          context.setOrgLogoImageState(`data:image/jpeg;base64,${base64Image}`);
        }
      }

      if (dataAgreementRes.status === 200) {
        // Set data agreement state
        context.setDataAgreementState(dataAgreementRes.data.dataAgreement);
        context.setLoadingState(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Show notification for the error
      notification.error({
        message: "Error",
        description: "Failed to fetch data. Please try again.",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Instantiate authentication headers
      let headers = getAuthenticationHeaders(
        context.accessTokenState,
        context.apiKeyState,
        context.individualIdState
      );

      if (
        context.authorisationCodeState !== undefined &&
        context.authorisationRedirectUrlState !== undefined
      ) {
        // OIDC authorisation code flow
        // If `authorisationCode` and `authorisationRedirectUrl` is provided then
        // perform exchange code to obtain access token workflow.

        // Instantiate HTTP service
        const httpService = HttpService(context.baseUrlState, {});
        const exchangeAuthorisationCodeForTokenRes =
          await httpService.exchangeAuthorisationCodeForToken(
            context.authorisationRedirectUrlState,
            context.authorisationCodeState
          );

        if (exchangeAuthorisationCodeForTokenRes.status === 200) {
          // Save response to state
          context.setExchangeCodeForAccessTokenResponseState(
            base64UrlEncode(exchangeAuthorisationCodeForTokenRes.data)
          );

          // Update access token in state
          context.setAccessTokenState(
            exchangeAuthorisationCodeForTokenRes.data.token.accessToken
          );

          // Update headers with new access token
          headers = getAuthenticationHeaders(
            exchangeAuthorisationCodeForTokenRes.data.token.accessToken,
            undefined,
            undefined
          );
        }
      }

      // Instantiate HTTP service
      const httpService2 = HttpService(context.baseUrlState, headers);

      // Read consent record for the data agreement
      httpService2
        .readConsentRecord(context.dataAgreementIdState)
        .then((readConsentRecordRes) => {
          if (readConsentRecordRes.status === 200) {
            if (readConsentRecordRes.data.consentRecord !== null) {
              // Consent record is present
              // Then it should be updated
              context.setConsentRecordState(
                readConsentRecordRes.data.consentRecord
              );
              populateDataSharingUi(httpService2);
            } else {
              // Consent record present
              // Show data agreement UI and collect authorisation
              populateDataSharingUi(httpService2);
            }
          }
        })
        .catch((readConsentRecordErr) => {
          // Consent record is not present
          // Show data agreement UI and collect authorisation
          console.log(
            "Error occured while reading consent record: ",
            readConsentRecordErr
          );
          populateDataSharingUi(httpService2);
        });
    };

    fetchData();
  }, []);

  return (
    <div className={cx(tw.app)}>
      <div style={{ padding: "15px" }}>
        <Spin spinning={context.loadingState}>
          {context.loadingState ? null : (
            <Card
              style={{
                minWidth: "300px",
                maxWidth: "400px",
                display: "flex",
                justifyContent: "center",
                border: "0.5px solid grey",
              }}
            >
              <Consent />
            </Card>
          )}
        </Spin>
      </div>
    </div>
  );
};

export default App;
