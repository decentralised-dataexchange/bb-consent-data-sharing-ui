import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();
const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({
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
  children,
}) => {
  // Api key
  const [apiKeyState, setApiKeyState] = useState(apiKey);
  // Individual id
  const [individualIdState, setIndividualIdState] = useState(individualId);
  // Data agreement id
  const [dataAgreementIdState, setDataAgreementIdState] =
    useState(dataAgreementId);
  // Access token
  const [accessTokenState, setAccessTokenState] = useState(accessToken);
  // Base url
  const [baseUrlState, setBaseUrlState] = useState(baseUrl);
  // Cancel button label
  const [cancelBtnLabelState, setCancelBtnLabelState] =
    useState(cancelBtnLabel);
  // Authorise button label
  const [authoriseBtnLabelState, setAuthoriseBtnLabelState] =
    useState(authoriseBtnLabel);
  // Data sharing ui redirect url
  const [dataSharingUiRedirectUrlState, setDataSharingUiRedirectUrlState] =
    useState(dataSharingUiRedirectUrl);
  // Loading
  const [loadingState, setLoadingState] = useState(true);
  // Organisation
  const [organisationState, setOrganisationState] = useState(undefined);
  // Data agreement
  const [dataAgreementState, setDataAgreementState] = useState(undefined);
  // Org logo
  const [orgLogoImageState, setOrgLogoImageState] = useState(undefined);
  // Third party org name
  const [thirdPartyOrgNameState, setThirdPartyOrgNameState] =
    useState(thirdPartyOrgName);
  // Third party org logo image url
  const [thirdPartyOrgLogoImageUrlState, setThirdPartyOrgLogoImageUrlState] =
    useState(thirdPartyOrgLogoImageUrl);
  // Authorisation redirect url
  const [authorisationRedirectUrlState, setAuthorisationRedirectUrlState] =
    useState(authorisationRedirectUrl);
  // Authorisation code
  const [authorisationCodeState, setAuthorisationCodeState] =
    useState(authorisationCode);
  // Consent record
  const [consentRecordState, setConsentRecordState] = useState(undefined);
  // Exchange code for access token response
  const [
    exchangeCodeForAccessTokenResponseState,
    setExchangeCodeForAccessTokenResponseState,
  ] = useState(undefined);

  const contextValue = {
    apiKeyState,
    setApiKeyState,
    individualIdState,
    setIndividualIdState,
    accessTokenState,
    setAccessTokenState,
    baseUrlState,
    setBaseUrlState,
    cancelBtnLabelState,
    setCancelBtnLabelState,
    authoriseBtnLabelState,
    setAuthoriseBtnLabelState,
    dataSharingUiRedirectUrlState,
    setDataSharingUiRedirectUrlState,
    dataAgreementIdState,
    setDataAgreementIdState,
    loadingState,
    setLoadingState,
    dataAgreementState,
    setDataAgreementState,
    organisationState,
    setOrganisationState,
    orgLogoImageState,
    setOrgLogoImageState,
    thirdPartyOrgNameState,
    setThirdPartyOrgNameState,
    thirdPartyOrgLogoImageUrlState,
    setThirdPartyOrgLogoImageUrlState,
    authorisationRedirectUrlState,
    setAuthorisationRedirectUrlState,
    authorisationCodeState,
    setAuthorisationCodeState,
    consentRecordState,
    setConsentRecordState,
    exchangeCodeForAccessTokenResponseState,
    setExchangeCodeForAccessTokenResponseState,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  apiKey: PropTypes.string,
  individualId: PropTypes.string,
  accessToken: PropTypes.string,
  baseUrl: PropTypes.string,
  cancelBtnLabel: PropTypes.string,
  authoriseBtnLabel: PropTypes.string,
  dataSharingUiRedirectUrl: PropTypes.string,
  thirdPartyOrgName: PropTypes.string,
  thirdPartyOrgLogoImageUrl: PropTypes.string,
  dataAgreementId: PropTypes.string,
  children: PropTypes.node,
  authorisationRedirectUrl: PropTypes.string,
  authorisationCode: PropTypes.string,
};

export { AppContextProvider, useAppContext };
