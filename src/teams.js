const { handleRequest, HTTP } = require("./meta");

const ENDPOINTS = {
  TEAMS: () => "/teams"
};

const getTeams = ({ token }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.TEAMS(),
    token
  }).then(({ teams }) => teams);

module.exports = {
  getTeams
};
