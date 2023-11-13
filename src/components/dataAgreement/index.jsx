import { Card, Col, Divider, Row, Space, Typography } from "antd";
import tw from "./dataAgreement.module.css";
import cx from "classnames";
import PropTypes from "prop-types";

const { Link } = Typography;

// DataAgreement
const DataAgreement = ({
  version,
  purpose,
  purposeDescription,
  lawfulBasisOfProcessing,
  policyUrl,
  jurisdiction,
  industrySector,
  dataRetentionPeriodInYears,
  geographicRestriction,
  storageLocation,
  thirdPartyDataSharing,
}) => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col xs={24}>
        <Card
          bodyStyle={{
            padding: "12px",
            background: "#f7f6f6",
            minWidth: "100%",
          }}
        >
          <Space
            direction="vertical"
            style={{ minWidth: "100%" }}
            split={
              <Divider style={{ margin: 0, backgroundColor: "#dfdfdf" }} />
            }
          >
            <Row>
              <Col flex="100px">Version</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {version}
              </Col>
            </Row>
            <Row>
              <Col flex="100px">Purpose</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {purpose}
              </Col>
            </Row>
            <Row>
              <Col flex="200px">Purpose Description</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {purposeDescription}
              </Col>
            </Row>
            <Row>
              <Col flex="200px">Lawful basis of processing</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {lawfulBasisOfProcessing}
              </Col>
            </Row>
          </Space>
        </Card>
        <Card
          style={{ marginTop: "16px" }}
          bodyStyle={{
            padding: "12px",
            background: "#f7f6f6",
            minWidth: "100%",
          }}
        >
          <Space
            direction="vertical"
            style={{ minWidth: "100%" }}
            split={
              <Divider style={{ margin: 0, backgroundColor: "#dfdfdf" }} />
            }
          >
            <Row>
              <Col flex="100px">Policy URL</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                <Link underline href={policyUrl} target="_blank">
                  {policyUrl}
                </Link>
              </Col>
            </Row>
            <Row>
              <Col flex="200px">Jurisdiction</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {jurisdiction}
              </Col>
            </Row>
            <Row>
              <Col flex="200px">Industry scope</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {industrySector}
              </Col>
            </Row>
            <Row>
              <Col flex="200px">Storage location</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {storageLocation}
              </Col>
            </Row>
            <Row>
              <Col flex="200px">Data retention period in year (s)</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {dataRetentionPeriodInYears} years
              </Col>
            </Row>

            <Row>
              <Col flex="200px">Geographic restriction</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {geographicRestriction}
              </Col>
            </Row>
            <Row>
              <Col flex="200px">Third party data sharing</Col>
              <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                {thirdPartyDataSharing}
              </Col>
            </Row>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

// Prop types
DataAgreement.propTypes = {
  version: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  purposeDescription: PropTypes.string.isRequired,
  lawfulBasisOfProcessing: PropTypes.string.isRequired,
  policyUrl: PropTypes.string.isRequired,
  jurisdiction: PropTypes.string.isRequired,
  industrySector: PropTypes.string.isRequired,
  dataRetentionPeriodInYears: PropTypes.number.isRequired,
  geographicRestriction: PropTypes.string.isRequired,
  storageLocation: PropTypes.string.isRequired,
  thirdPartyDataSharing: PropTypes.bool.isRequired,
};

export default DataAgreement;
