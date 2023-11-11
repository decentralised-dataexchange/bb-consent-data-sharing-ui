import { Typography } from "antd";
import PropTypes from "prop-types";
const { Text } = Typography;

// Headline
const Headline = ({ dus, ds, purpose }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Text style={{ fontSize: "16px" }}>
        <Text strong style={{ fontSize: "16px" }}>
          {dus}
        </Text>{" "}
        wants to access the following data from{" "}
        <Text strong style={{ fontSize: "16px" }}>
          {ds}
        </Text>{" "}
        for {purpose}
      </Text>
    </div>
  );
};

// Prop types
Headline.propTypes = {
  dus: PropTypes.string.isRequired,
  ds: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
};

export default Headline;
