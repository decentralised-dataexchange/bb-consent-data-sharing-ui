export const ENDPOINTS = {
  readDataAgreement: (dataAgreementId, baseUrl) => {
    return `${baseUrl}/service/data-agreement/${dataAgreementId}`;
  },
  readOrganisation: (baseUrl) => {
    return `${baseUrl}/service/organisation`;
  },
  createConsentRecord: (dataAgreementId, baseUrl) => {
    return `${baseUrl}/service/individual/record/data-agreement/${dataAgreementId}`;
  },
  readConsentRecord: (dataAgreementId, baseUrl) => {
    return `${baseUrl}/service/individual/record/data-agreement/${dataAgreementId}`;
  },
  updateConsentRecord: (
    consentRecordId,
    dataAgreementId,
    individualId,
    baseUrl
  ) => {
    return `${baseUrl}/service/individual/record/consent-record/${consentRecordId}?individualId=${individualId}&dataAgreementId=${dataAgreementId}`;
  },
  exchangeAuthorisationCodeForToken: (
    authorisationRedirectUrl,
    authorisationCode,
    baseUrl
  ) => {
    return `${baseUrl}/onboard/token/exchange?redirectUri=${authorisationRedirectUrl}&authorisationCode=${authorisationCode}`;
  },
};
