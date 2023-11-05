import { Card, Col, Divider, Row, Space } from "antd";
import tw from "./dataAgreement.module.css";
import cx from "classnames";

const DataAgreement = () => {
  return (
    <Space size={16} direction="vertical">
      <Row justify={"center"} align={"middle"}>
        <Col xs={24}>
          <Space size={16} direction="vertical">
            <Card bodyStyle={{ padding: "12px", background: "#f7f6f6" }}>
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                split={
                  <Divider style={{ margin: 0, backgroundColor: "#dfdfdf" }} />
                }
              >
                <Row>
                  <Col flex="100px">Purpose</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    User registration
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Purpose Description</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    The data is used for the purpose of registration from data
                    coming from SIP
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Lawful basis of processing</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    Consent
                  </Col>
                </Row>
              </Space>
            </Card>
            <Card bodyStyle={{ padding: "12px", background: "#f7f6f6" }}>
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                split={
                  <Divider style={{ margin: 0, backgroundColor: "#dfdfdf" }} />
                }
              >
                <Row>
                  <Col flex="100px">Policy URL</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    https://application.com/privacy-policy/
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Jurisdiction</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    Sweden
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Third party disclosure</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    True
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Industry scope</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    Healthcare
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Geographic restriction</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    Europe
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Retention period</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    3 years
                  </Col>
                </Row>
                <Row>
                  <Col flex="200px">Storage location</Col>
                  <Col flex="auto" className={cx(tw.dataAgreementValue)}>
                    Europe
                  </Col>
                </Row>
              </Space>
            </Card>
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default DataAgreement;
