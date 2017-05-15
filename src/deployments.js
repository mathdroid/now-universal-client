const { fetch, HTTP } = require("./api.js");

const ENDPOINTS = {
  DEPLOYMENTS: () => "/deployments",
  DEPLOYMENT_BY_ID: id => `/deployments/${id}`,
  DEPLOYMENT_FILES: id => `/deployments/${id}/files`,
  DEPLOYMENT_FILES_BY_ID: (id, fileId) => `/deployments/${id}/files/${fileId}`
};

const getDeployments = ({ token }) =>
  fetch({
    method: HTTP.GET,
    url: ENDPOINTS.DEPLOYMENTS(),
    token
  });

const getDeployment = ({ token, id }) =>
  fetch({
    method: HTTP.GET,
    url: ENDPOINTS.DEPLOYMENT_BY_ID(id),
    token
  });

const deleteDeployment = ({ token, id }) =>
  fetch({
    method: HTTP.DELETE,
    url: ENDPOINTS.DEPLOYMENT_BY_ID(id),
    token
  });

const createDeployment = ({ token, data }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.DEPLOYMENTS(),
    token,
    data
  });

const getFiles = ({ token, id }) =>
  fetch({
    method: HTTP.GET,
    url: ENDPOINTS.DEPLOYMENT_FILES(id),
    token
  });

const getFile = ({ token, id, fileId }) =>
  fetch({
    method: HTTP.GET,
    url: ENDPOINTS.DEPLOYMENT_FILES_BY_ID(id, fileId),
    token
  });

module.exports = {
  getDeployments,
  getDeployment,
  deleteDeployment,
  createDeployment,
  getFiles,
  getFile
};
