import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.module.css";

const elementId = document
  .getElementById("consentBbDataSharingUi-script")
  ?.getAttribute("data-element-id");

window.ConsentBbDataSharingUi = () => {
  ReactDOM.createRoot(document.getElementById(elementId)).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
