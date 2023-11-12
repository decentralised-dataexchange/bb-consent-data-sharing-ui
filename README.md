<h1 align="center">
    GovStack Consent BB Data Sharing UI
</h1>

<p align="center">
    <a href="/../../commits/" title="Last Commit"><img src="https://img.shields.io/github/last-commit/decentralised-dataexchange/bb-consent-data-sharing-ui?style=flat"></a>
    <a href="/../../issues" title="Open Issues"><img src="https://img.shields.io/github/issues/decentralised-dataexchange/bb-consent-data-sharing-ui?style=flat"></a>
    <a href="./LICENSE" title="License"><img src="https://img.shields.io/badge/License-Apache%202.0-yellowgreen?style=flat"></a>
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#release-status">Release Status</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#licensing">Licensing</a>
</p>

## About

This repository hosts source code for the reference implementation of the GovStack Consent Building Block Data Sharing UI towards individuals.

## Release Status

The key deliverables of the project are as given. The table summarises the release status of all the deliverables.

| Identifier | Date          | Deliverable             |
| :--------- | :------------ | :---------------------- |
| D3.1.1     | November 15th | Developer documentation |
| D3.1.2     | November 15th | Test protocol           |

## Other resources

* Wiki - https://github.com/decentralised-dataexchange/consent-dev-docs/wiki

## Usage
Include the provided HTML in your project to integrate the Consent BB Data Sharing UI. Adjust the configuration parameters based on your requirements.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Consent BB Data Sharing UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/decentralised-dataexchange/bb-consent-data-sharing-ui/dist/consentBbDataSharingUi.css" />
  </head>
  <body style="margin: 0px">
    <div id="consentBbDataSharingUi"></div>

    <script
      data-element-id="consentBbDataSharingUi"
      id="consentBbDataSharingUi-script"
      src="https://cdn.jsdelivr.net/gh/decentralised-dataexchange/bb-consent-data-sharing-ui/dist/consentBbDataSharingUi.js"
    ></script>
    <script>
      window.ConsentBbDataSharingUi({
        baseUrl: "CONSENT_BB_API_BASE_URL",
        dataAgreementId: "DATA_AGREEMENT_ID",
        accessToken:"YOUR_ACCESS_TOKEN",
        apiKey: "YOUR_API_KEY",
        individualId: "INDIVIDUAL_ID",
        thirdPartyOrgName: "THIRD_PARTY_ORG_NAME",
        thirdPartyOrgLogoImageUrl: "THIRD_PARTY_ORG_LOGO_IMAGE_URL",
        dataSharingUiRedirectUrl: "DATA_SHARING_UI_REDIRECT_URL",
        authorisationCode: "AUTHORISATION_CODE",
        authorisationRedirectUrl: "AUTHORISATION_REDIRECT_URI",
      });
    </script>
  </body>
</html>
```

## Configuration

- `baseUrl`: Base URL for API requests.
- `dataAgreementId`: ID of the data agreement.
- `accessToken`: (Optional) Access token for authentication.
- `apiKey`: API key for authentication.
- `individualId`: ID of the individual.
- `thirdPartyOrgName`: Name of the third-party organization.
- `thirdPartyOrgLogoImageUrl`: (Optional) URL of the third-party organization's logo image.
- `dataSharingUiRedirectUrl`: URL for redirection after authorisation/cancellation of consent.
- `authorisationCode`: Authorisation code from OpenID connect flow.
- `authorisationRedirectUrl`: Authorisation redirect url from OpenID connect flow.

## Contributing

Feel free to improve the plugin and send us a pull request. If you find any problems, please create an issue in this repo.

## Licensing
Copyright (c) 2023-25

Licensed under the Apache 2.0 License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the LICENSE for the specific language governing permissions and limitations under the License.