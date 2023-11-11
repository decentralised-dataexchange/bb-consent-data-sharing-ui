import { useState } from "react";
import { Col, Row, Space, Typography, Modal, notification } from "antd";
import DataAgreement from "../dataAgreement";
import Headline from "./Headline";
import CustomButton from "../button";
import { useAppContext } from "../../providers/AppContext";
import DataTransferIndicator from "./DataTransferIndicator";
import DataAttributes from "./DataAttributes";
import { HttpService, getAuthenticationHeaders } from "../../services/http";

const { Text, Link } = Typography;

const formatLawfulBasisOfProcessing = (inputString) => {
  const words = inputString.split("_");
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return formattedWords.join(" ");
};

export const Consent = () => {
  const context = useAppContext();
  const [showDataAgreement, setShowDataAgreement] = useState(false);

  const handleClickAuthorise = () => {
    // Instantiate HTTP service
    const httpService = HttpService(
      context.baseUrlState,
      getAuthenticationHeaders(
        context.accessTokenState,
        context.apiKeyState,
        context.individualIdState
      )
    );

    // Create consent record
    httpService
      .createConsentRecord(context.dataAgreementIdState)
      .then((createConsentRecordRes) => {
        if (createConsentRecordRes.status === 200) {
          // If consent record created successfully then
          // redirect to authorisation redirect url with consent record id
          window.location.href = `${context.authoriseRedirectUrlState}?consentRecordId=${createConsentRecordRes.data.consentRecord.id}`;
        }
      })
      .catch((createConsentRecordErr) => {
        console.error(
          `Error occured while recording consent: ${createConsentRecordErr}`
        );
        // Show notification for the error
        notification.error({
          message: "Error",
          description: "Failed to record consent. Please try again.",
        });
      });
  };

  const handleClickCancel = () => {
    const error = "authorise_cancelled";
    const error_description = "Authorisation has been cancelled";
    window.location.href = `${context.cancelRedirectUrlState}?error=${error}&error_description=${error_description}`;
  };

  return (
    <>
      <Space size={16} direction="vertical">
        <Row justify={"center"} align={"middle"}>
          <Col xs={24}>
            <DataTransferIndicator
              thirdPartyOrgLogoImageUrl={context.thirdPartyOrgLogoImageUrlState}
              dataSourceOrgLogoImageUrl={context.orgLogoImageState}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Headline
              dus={context.thirdPartyOrgNameState}
              ds={context.organisationState.name}
              purpose={context.dataAgreementState.purpose}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Text>
              By clicking Authorise, {context.thirdPartyOrgNameState} will be
              able to read the following data attributes:
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <DataAttributes
              dataAttributes={context.dataAgreementState.dataAttributes}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Text strong>
              Make sure that you trust {context.thirdPartyOrgNameState}
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Text>
              You may be sharing sensitive info with this site or app. See the{" "}
              <Link underline onClick={() => setShowDataAgreement(true)}>
                data agreement details
              </Link>{" "}
              and{" "}
              <Link
                underline
                href={context.organisationState.policyUrl}
                target="_blank"
              >
                Terms of Service
              </Link>
              .
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              onClick={handleClickCancel}
              label={
                context.cancelBtnLabelState !== undefined
                  ? context.cancelBtnLabelState
                  : "Cancel"
              }
            />
          </Col>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              onClick={handleClickAuthorise}
              label={
                context.authoriseBtnLabelState !== undefined
                  ? context.authoriseBtnLabelState
                  : "Authorise"
              }
            />
          </Col>
        </Row>
      </Space>
      <Modal
        title="Data Agreement"
        centered
        open={showDataAgreement}
        onOk={() => setShowDataAgreement(false)}
        onCancel={() => setShowDataAgreement(false)}
        footer={null}
      >
        <DataAgreement
          version={context.dataAgreementState.version}
          purpose={context.dataAgreementState.purpose}
          purposeDescription={context.dataAgreementState.purposeDescription}
          lawfulBasisOfProcessing={formatLawfulBasisOfProcessing(
            context.dataAgreementState.lawfulBasis
          )}
          policyUrl={context.dataAgreementState.policy.url}
          jurisdiction={context.dataAgreementState.policy.jurisdiction}
          industrySector={context.dataAgreementState.policy.industrySector}
          dataRetentionPeriodInYears={(
            context.dataAgreementState.policy.dataRetentionPeriodDays / 365
          ).toFixed(1)}
          geographicRestriction={
            context.dataAgreementState.policy.geographicRestriction
          }
          storageLocation={context.dataAgreementState.policy.storageLocation}
          thirdPartyDataSharing={context.dataAgreementState.policy.thirdPartyDataSharing.toString()}
        />
      </Modal>
    </>
  );
};
