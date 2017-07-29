const { handleRequest, HTTP } = require("./api");

const ENDPOINTS = {
  DOMAINS: () => "/domains",
  DOMAIN: name => `/domains/${name}`,
  RECORDS: domain => `/domains/${domain}/records`,
  RECORD: (domain, record) => `/domains/${domain}/records/${record}`
};

const getDomains = ({ token }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.DOMAINS(),
    token
  });

// Example `data` for addDomain:
// {
//   name: "zeit.rocks",
//   isExternal: false
// }
const addDomain = ({ token, data }) =>
  handleRequest({
    method: HTTP.POST,
    url: ENDPOINTS.DOMAINS(),
    token,
    data
  });

const deleteDomain = ({ token, name }) =>
  handleRequest({
    method: HTTP.DELETE,
    url: ENDPOINTS.DOMAIN(name),
    token
  });

const getDomainRecords = ({ token, domain }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.RECORDS(domain),
    token
  });

const addDomainRecord = ({ token, domain, data }) =>
  handleRequest({
    method: HTTP.POST,
    url: ENDPOINTS.RECORDS(domain),
    token,
    data
  });

const deleteDomainRecord = ({ token, domain, recordId }) =>
  handleRequest({
    method: HTTP.DELETE,
    url: ENDPOINTS.RECORD(domain, recordId),
    token
  });

module.exports = {
  getDomains,
  addDomain,
  deleteDomain,
  getDomainRecords,
  addDomainRecord,
  deleteDomainRecord
};
