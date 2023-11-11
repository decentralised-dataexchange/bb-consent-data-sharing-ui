import { Card, Divider, Space } from "antd";
import PropTypes from "prop-types";

// DataAttributes
const DataAttributes = ({ dataAttributes }) => {
  return (
    <>
      <Card bodyStyle={{ padding: "12px", background: "#f7f6f6" }}>
        <Space
          direction="vertical"
          style={{ width: "100%" }}
          split={<Divider style={{ margin: 0, backgroundColor: "#dfdfdf" }} />}
        >
          {dataAttributes.map((dataAttribute, i) => {
            return (
              <>
                <p key={i} style={{ margin: 0 }}>
                  {dataAttribute.name}
                </p>
              </>
            );
          })}
        </Space>
      </Card>
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
