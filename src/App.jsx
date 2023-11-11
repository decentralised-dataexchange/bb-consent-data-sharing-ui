import tw from "./app.module.css";
import cx from "classnames";
import { Consent } from "./components/consent";
import { Card, Spin, notification } from "antd";
import { useAppContext } from "./providers/AppContext";
import { useEffect } from "react";
import { HttpService, getAuthenticationHeaders } from "./services/http";

const App = () => {
  const context = useAppContext();

  const redirectToAuthoriseUrl = (consentRecordId) => {
    window.location.href = `${context.authoriseRedirectUrlState}?consentRecordId=${consentRecordId}`;
  };

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
      // Instantiate HTTP service
      const httpService = HttpService(
        context.baseUrlState,
        getAuthenticationHeaders(
          context.accessTokenState,
          context.apiKeyState,
          context.individualIdState
        )
      );

      // Read consent record for the data agreement
      httpService
        .readConsentRecord(context.dataAgreementIdState)
        .then((readConsentRecordRes) => {
          if (readConsentRecordRes.status === 200) {
            // Consent record is present
            // Execute the 'authorise' flow and return consent record id
            if (readConsentRecordRes.data.consentRecord !== null) {
              redirectToAuthoriseUrl(
                readConsentRecordRes.data.consentRecord.id
              );
            } else {
              // Consent record is not present
              // Show data agreement UI and collect authorisation
              populateDataSharingUi(httpService);
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
          populateDataSharingUi(httpService);
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
