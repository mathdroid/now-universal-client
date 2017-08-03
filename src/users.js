const { handleRequest, HTTP } = require("./meta");

const ENDPOINTS = {
  USER: () => "/www/user"
};

const getUser = ({ token }) =>
  handleRequest({
    method: HTTP.GET,
    url: ENDPOINTS.USER(),
    token
  }).then(({ user }) => user);

module.exports = {
  getUser
};
