const { handleRequest, HTTP } = require("./meta");

const ENDPOINTS = {
  EVENTS: () => "/events",
  EVENT: id => `/events/${id}`
};

const getEvents = ({ token }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.EVENTS(),
    token
  });
// uev_4jDOiPTvZS7tarxKT4ofXdMU
const getEvent = ({ token, id }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.EVENT(id),
    token
  });

module.exports = {
  getEvents,
  getEvent
};
