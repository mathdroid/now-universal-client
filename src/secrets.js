const { fetch, HTTP } = require("./api.js");

const ENDPOINTS = {
  SECRETS: () => "/secrets",
  SECRET: id => `/secrets/${id}`
};

const getSecrets = ({ token }) =>
  fetch({
    method: HTTP.GET,
    url: ENDPOINTS.SECRETS(),
    token
  });

const createSecret = ({ token, name, value }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.SECRETS(),
    data: {
      name,
      value
    },
    token
  });

const renameSecret = ({ token, id, name }) =>
  fetch({
    method: HTTP.PATCH,
    url: ENDPOINTS.SECRET(id),
    data: { name },
    token
  });

const deleteSecret = ({ token, id }) =>
  fetch({
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
