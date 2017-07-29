const { handleRequest, HTTP } = require("./api");

const ENDPOINTS = {
  SECRETS: () => "/secrets",
  SECRET: id => `/secrets/${id}`
};

const getSecrets = ({ token }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.SECRETS(),
    token
  });

const createSecret = ({ token, name, value }) =>
  handleRequest({
    method: HTTP.POST,
    url: ENDPOINTS.SECRETS(),
    data: {
      name,
      value
    },
    token
  });

const renameSecret = ({ token, id, name }) =>
  handleRequest({
    method: HTTP.PATCH,
    url: ENDPOINTS.SECRET(id),
    data: { name },
    token
  });

const deleteSecret = ({ token, id }) =>
  handleRequest({
    method: HTTP.DELETE,
    url: ENDPOINTS.SECRET(id),
    token
  });

module.exports = {
  getSecrets,
  createSecret,
  renameSecret,
  deleteSecret
};
