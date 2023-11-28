import { Card, ConfigProvider, Divider, Space, Switch } from "antd";
import PropTypes from "prop-types";

// DataAttributes
const DataAttributes = ({ dataAttributes }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#71ce74",
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
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
                <div
                  key={i}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ margin: 0 }}>{dataAttribute.name}</p>
                  <Switch disabled={true} defaultChecked />
                </div>
              );
            })}
          </Space>
        </Card>
      </ConfigProvider>
    </>
  );
};

// Prop types
DataAttributes.propTypes = {
  dataAttributes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sensitivity: PropTypes.bool.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataAttributes;
