const { fetch, HTTP } = require("./api.js");

const ENDPOINTS = {
  DOMAINS: () => "/domains",
  DOMAIN: name => `/domains/${name}`,
  RECORDS: domain => `/domains/${domain}/records`,
  RECORD: (domain, record) => `/domains/${domain}/records/${record}`
};

const getDomains = ({ token }) =>
  fetch({
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
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.DOMAINS(),
    token,
    data
  });

const deleteDomain = ({ token, name }) =>
  fetch({
    method: HTTP.DELETE,
    url: ENDPOINTS.DOMAIN(name),
    token
  });

const getDomainRecords = ({ token, domain }) =>
  fetch({
    method: HTTP.GET,
    url: ENDPOINTS.RECORDS(domain),
    token
  });

const addDomainRecord = ({ token, domain, data }) =>
  fetch({
    method: HTTP.POST,
    url: ENDPOINTS.RECORDS(domain),
    token,
    data
  });

const deleteDomainRecord = ({ token, domain, recordId }) =>
  fetch({
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
