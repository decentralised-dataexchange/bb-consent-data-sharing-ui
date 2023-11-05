import { useState } from "react";
import tw from "./consent.module.css";
import cx from "classnames";
import {
  Col,
  Row,
  Card,
  Button,
  Divider,
  Avatar,
  Space,
  Typography,
  ConfigProvider,
  Modal,
} from "antd";
import { BsArrowLeftRight } from "react-icons/bs";
import DataAgreement from "../dataAgreement";

const { Text, Link } = Typography;

export const Consent = () => {
  const [dus] = useState("Data4Diabetes");
  const [ds] = useState("Skatteverket");
  const [purpose] = useState("user registration");
  const [dataAttributes] = useState([
    "Name",
    "Personnel Number",
    "Mobile",
    "Address",
  ]);
  const [showDataAgreement, setShowDataAgreement] = useState(false);

  const handleAuthoriseClick = () => {
    window.location.href = "https://govstack.global/?agree=true";
  };

  return (
    <>
      <Space size={16} direction="vertical">
        <Row justify={"center"} align={"middle"}>
          <Col xs={24}>
            <Space
              size={16}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Avatar
                size={70}
                src={
                  <img
                    src={
                      "https://storage.googleapis.com/data4diabetes/web%20(5).jpeg"
                    }
                    alt="avatar"
                  />
                }
              />
              <BsArrowLeftRight size={35} color="#aaaaaa" />
              <Avatar
                size={70}
                src={
                  <img
                    src={
                      "https://storage.googleapis.com/data4diabetes/images%20(1).png"
                    }
                    alt="avatar"
                  />
                }
              />
            </Space>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Text>
              <Text strong>{dus}</Text> wants to access the following data from{" "}
              <Text strong>{ds}</Text> for {purpose}.
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Text>
              By clicking CONSENT, {dus} will be able to read the following data
              attributes:
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Card bodyStyle={{ padding: "12px", background: "#f7f6f6" }}>
              <Space
                direction="vertical"
                style={{ width: "100%" }}
                split={
                  <Divider style={{ margin: 0, backgroundColor: "#dfdfdf" }} />
                }
              >
                {dataAttributes.map((dataAttribute, i) => {
                  return (
                    <>
                      <p key={i} style={{ margin: 0 }}>
                        {dataAttribute}
                      </p>
                    </>
                  );
                })}
              </Space>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Text strong>Make sure that you trust {dus}</Text>
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
                href="https://www.govstack.global/privacy/"
                target="_blank"
              >
                Terms of Service
              </Link>
              .
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={24} style={{ display: "flex", justifyContent: "center" }}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimaryHover: "#fff",
                  colorPrimaryActive: "#fff",
                },
                components: {
                  Button: {
                    defaultBorderColor: "#dfdfdf",
                    defaultBg: "#fff",
                  },
                },
              }}
            >
              <Button
                shape="round"
                type="default"
                size={"large"}
                className={cx(tw.btn)}
                style={{
                  width: "80%",
                }}
                onClick={handleAuthoriseClick}
              >
                CONSENT
              </Button>
            </ConfigProvider>
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
        <DataAgreement />
      </Modal>
    </>
  );
};
