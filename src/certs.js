const { handleRequest, HTTP } = require("./api");

const ENDPOINTS = {
  CERTS: () => "/certs",
  CERT: cn => `/certs/${cn}`
};

const getCertificates = ({ token, cn }) =>
  handleRequest({
    method: HTTP.GET,
    url: (cn && ENDPOINTS.CERT(cn)) || ENDPOINTS.CERTS(),
    token
  });

const createCertificate = ({ token, cn }) =>
  handleRequest({
    method: HTTP.POST,
    url: ENDPOINTS.CERTS(),
    data: {
      domains: [cn]
    },
    token
  });

const renewCertificate = ({ token, cn }) =>
  handleRequest({
    method: HTTP.POST,
    url: ENDPOINTS.CERTS(),
    data: {
      domains: [cn],
      renew: true
    },
    token
  });

const replaceCertificate = ({ token, cn, cert, key, ca }) =>
  handleRequest({
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
  handleRequest({
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
