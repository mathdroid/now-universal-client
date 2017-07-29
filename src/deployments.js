const { handleRequest, HTTP } = require("./api");

const ENDPOINTS = {
  DEPLOYMENTS: () => "/deployments",
  DEPLOYMENT_BY_ID: id => `/deployments/${id}`,
  DEPLOYMENT_FILES: id => `/deployments/${id}/files`,
  DEPLOYMENT_FILES_BY_ID: (id, fileId) => `/deployments/${id}/files/${fileId}`
};

const getDeployments = ({ token }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.DEPLOYMENTS(),
    token
  });

const getDeployment = ({ token, id }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.DEPLOYMENT_BY_ID(id),
    token
  }).then(({ deployments }) => deployments);

const deleteDeployment = ({ token, id }) =>
  handleRequest({
    method: HTTP.DELETE,
    url: ENDPOINTS.DEPLOYMENT_BY_ID(id),
    token
  });

const createDeployment = ({ token, data }) =>
  handleRequest({
    method: HTTP.POST,
    url: ENDPOINTS.DEPLOYMENTS(),
    token,
    data
  });

const getFiles = ({ token, id }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.DEPLOYMENT_FILES(id),
    token
  });

const getFile = ({ token, id, fileId }) =>
  handleRequest({
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
