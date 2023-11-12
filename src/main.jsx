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
  const sanitizeValue = (value) =>
    value === undefined || value.length === 0 ? undefined : value;

  const contextProps = {
    dataAgreementId: sanitizeValue(dataAgreementId),
    apiKey: sanitizeValue(apiKey),
    individualId: sanitizeValue(individualId),
    accessToken: sanitizeValue(accessToken),
    baseUrl: sanitizeValue(baseUrl),
    cancelBtnLabel: sanitizeValue(cancelBtnLabel),
    authoriseBtnLabel: sanitizeValue(authoriseBtnLabel),
    dataSharingUiRedirectUrl: sanitizeValue(dataSharingUiRedirectUrl),
    thirdPartyOrgName: sanitizeValue(thirdPartyOrgName),
    thirdPartyOrgLogoImageUrl: sanitizeValue(thirdPartyOrgLogoImageUrl),
    authorisationRedirectUrl: sanitizeValue(authorisationRedirectUrl),
    authorisationCode: sanitizeValue(authorisationCode),
  };

  ReactDOM.createRoot(document.getElementById(elementId)).render(
    <React.StrictMode>
      <AppContextProvider {...contextProps}>
        <App />
      </AppContextProvider>
    </React.StrictMode>
  );
};
