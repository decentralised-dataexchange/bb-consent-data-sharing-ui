import axios from "axios";
import { ENDPOINTS } from "./endpoints";

const httpClient = axios.create({});

export const getAuthenticationHeaders = (accessToken, apiKey, individualId) => {
  if (accessToken !== undefined) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  } else {
    return {
      Authorization: `ApiKey ${apiKey}`,
      "X-ConsentBB-IndividualId": `ApiKey ${individualId}`,
    };
  }
};

export const HttpService = (baseUrl, headers) => {
  return {
    readDataAgreement: async (dataAgreementId) => {
      const config = {
        headers: { ...headers },
      };
      return httpClient.get(
        ENDPOINTS.readDataAgreement(dataAgreementId, baseUrl),
        config
      );
    },
    readOrganisation: async () => {
      const config = {
        headers: { ...headers },
      };
      return httpClient.get(ENDPOINTS.readOrganisation(baseUrl), config);
    },
    getImage: async (imageUrl) => {
      const config = {
        responseType: "arraybuffer",
        headers: { ...headers },
      };
      return httpClient.get(imageUrl, config);
    },
    createConsentRecord: async (dataAgreementId) => {
      const config = {
        headers: { ...headers },
      };
      return httpClient.post(
        ENDPOINTS.createConsentRecord(dataAgreementId, baseUrl),
        null,
        config
      );
    },
    readConsentRecord: async (dataAgreementId) => {
      const config = {
        headers: { ...headers },
      };
      return httpClient.get(
        ENDPOINTS.readConsentRecord(dataAgreementId, baseUrl),
        config
      );
    },
  };
};
