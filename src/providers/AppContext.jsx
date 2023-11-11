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
  cancelRedirectUrl,
  authoriseRedirectUrl,
  thirdPartyOrgName,
  thirdPartyOrgLogoImageUrl,
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
  // Cancel redirect url
  const [cancelRedirectUrlState, setCancelRedirectUrlState] =
    useState(cancelRedirectUrl);
  // Authorise redirect url
  const [authoriseRedirectUrlState, setAuthoriseRedirectUrlState] =
    useState(authoriseRedirectUrl);
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
    cancelRedirectUrlState,
    setCancelRedirectUrlState,
    authoriseRedirectUrlState,
    setAuthoriseRedirectUrlState,
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
  cancelRedirectUrl: PropTypes.string,
  authoriseRedirectUrl: PropTypes.string,
  thirdPartyOrgName: PropTypes.string,
  thirdPartyOrgLogoImageUrl: PropTypes.string,
  dataAgreementId: PropTypes.string,
  children: PropTypes.node,
};

export { AppContextProvider, useAppContext };
