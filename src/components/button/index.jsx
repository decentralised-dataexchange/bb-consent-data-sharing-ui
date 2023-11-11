import { Button, ConfigProvider } from "antd";
import cx from "classnames";
import PropTypes from "prop-types";
import tw from "./button.module.css";

const CustomButton = ({ label, onClick }) => {
  return (
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
          width: "90%",
        }}
        onClick={onClick}
      >
        {label}
      </Button>
    </ConfigProvider>
  );
};

// Prop types
CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
