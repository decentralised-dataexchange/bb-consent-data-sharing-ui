import { Avatar, Space } from "antd";
import PropTypes from "prop-types";
import { BsArrowLeftRight } from "react-icons/bs";

// DataTransferIndicator
const DataTransferIndicator = ({
  thirdPartyOrgLogoImageUrl,
  dataSourceOrgLogoImageUrl,
}) => {
  return (
    <>
      <Space size={16} style={{ display: "flex", justifyContent: "center" }}>
        {thirdPartyOrgLogoImageUrl !== undefined ? (
          <Avatar
            size={70}
            src={<img src={thirdPartyOrgLogoImageUrl} alt="avatar" />}
          />
        ) : (
          <Avatar size={70}>Data Using Service</Avatar>
        )}

        <BsArrowLeftRight size={35} color="#aaaaaa" />
        {dataSourceOrgLogoImageUrl !== undefined ? (
          <Avatar
            size={70}
            src={<img src={dataSourceOrgLogoImageUrl} alt="avatar" />}
          />
        ) : (
          <Avatar size={70}>Data Source</Avatar>
        )}
      </Space>
    </>
  );
};

// Prop types
DataTransferIndicator.propTypes = {
  thirdPartyOrgLogoImageUrl: PropTypes.string,
  dataSourceOrgLogoImageUrl: PropTypes.string,
};

export default DataTransferIndicator;
