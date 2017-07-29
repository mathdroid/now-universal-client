const { handleRequest, HTTP } = require("./api");

const ENDPOINTS = {
  ALIASES: () => "/aliases",
  ALIAS: id => `/aliases/${id}`,
  DEPLOYMENTS_ALIASES: id => `/deployments/${id}/aliases`
};

const getAliases = ({ token, id }) =>
  handleRequest({
    method: HTTP.GET,
    url: (id && ENDPOINTS.DEPLOYMENTS_ALIASES(id)) || ENDPOINTS.ALIASES(),
    token
  });

const createAlias = ({ token, id, alias }) =>
  handleRequest({
    method: HTTP.POST,
    url: ENDPOINTS.DEPLOYMENTS_ALIASES(id),
    data: { alias },
    token
  });

const deleteAlias = ({ token, id }) =>
  handleRequest({
    method: HTTP.DELETE,
    url: ENDPOINTS.ALIAS(id),
    token
  });

module.exports = {
  getAliases,
  createAlias,
  deleteAlias
};
