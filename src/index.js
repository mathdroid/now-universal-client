const aliases = require("./aliases");
const certs = require("./certs");
const deployments = require("./deployments");
const domains = require("./domains");
const events = require("./events");
const secrets = require("./secrets");

const client = Object.assign(
  {},
  aliases,
  certs,
  deployments,
  domains,
  events,
  secrets
);

module.exports = client;
