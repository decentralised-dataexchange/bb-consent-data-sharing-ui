import tw from "./app.module.css";
import cx from "classnames";
import { Consent } from "./components/consent";

const App = () => {
  return (
    <div className={cx(tw.app)}>
      <div
        style={{
          minWidth: "300px",
          maxWidth: "400px",
          display: "flex",
          padding: "15px",
          justifyContent: "center",
        }}
      >
        <Consent />
      </div>
    </div>
  );
};

export default App;
