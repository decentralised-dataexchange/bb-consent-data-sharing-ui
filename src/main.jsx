import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.module.css";
import { AppContextProvider } from "./providers/AppContext.jsx";

const elementId = document
  .getElementById("consentBbDataSharingUi-script")
  ?.getAttribute("data-element-id");

window.ConsentBbDataSharingUi = ({
  apiKey,
  individualId,
  dataAgreementId,
  accessToken,
  baseUrl,
  cancelBtnLabel,
  authoriseBtnLabel,
  dataSharingUiRedirectUrl,
  thirdPartyOrgName,
  thirdPartyOrgLogoImageUrl,
  authorisationRedirectUrl,
  authorisationCode,
}) => {
  ReactDOM.createRoot(document.getElementById(elementId)).render(
    <React.StrictMode>
      <AppContextProvider
        dataAgreementId={dataAgreementId}
        apiKey={apiKey}
        individualId={individualId}
        accessToken={accessToken}
        baseUrl={baseUrl}
        cancelBtnLabel={cancelBtnLabel}
        authoriseBtnLabel={authoriseBtnLabel}
        dataSharingUiRedirectUrl={dataSharingUiRedirectUrl}
        thirdPartyOrgName={thirdPartyOrgName}
        thirdPartyOrgLogoImageUrl={thirdPartyOrgLogoImageUrl}
        authorisationRedirectUrl={authorisationRedirectUrl}
        authorisationCode={authorisationCode}
      >
        <App />
      </AppContextProvider>
    </React.StrictMode>
  );
};
