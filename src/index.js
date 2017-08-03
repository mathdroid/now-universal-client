const aliases = require("./aliases");
const certs = require("./certs");
const deployments = require("./deployments");
const domains = require("./domains");
const events = require("./events");
const secrets = require("./secrets");
const teams = require("./teams");
const users = require("./users");

const client = Object.assign(
  {},
  aliases,
  certs,
  deployments,
  domains,
  events,
  secrets,
  teams,
  users
);

module.exports = client;
