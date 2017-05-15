const { fetch, HTTP } = require("./api.js");

const ENDPOINTS = {
  CERTS: () => "/certs",
  CERT: cn => `/certs/${cn}`
};

const getCertificates = ({ token, cn }) =>
  fetch({
    method: HTTP.GET,
    url: (cn && ENDPOINTS.CERT(cn)) || ENDPOINTS.CERTS(),
    token
  });

const createCertificate = ({ token, cn }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.CERTS(),
    data: {
      domains: [cn]
    },
    token
  });

const renewCertificate = ({ token, cn }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.CERTS(),
    data: {
      domains: [cn],
      renew: true
    },
    token
  });

const replaceCertificate = ({ token, cn, cert, key, ca }) =>
  fetch({
    method: HTTP.PUT,
    url: ENDPOINTS.CERTS(),
    data: {
      domains: [cn],
      ca,
      cert,
      key
    },
    token
  });

const deleteCertificate = ({ token, cn }) =>
  fetch({
    method: HTTP.DELETE,
    url: ENDPOINTS.CERT(cn),
    token
  });

module.exports = {
  getCertificates,
  createCertificate,
  renewCertificate,
  replaceCertificate,
  deleteCertificate
};
