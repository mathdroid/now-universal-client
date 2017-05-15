const aliases = require("./aliases");
const certs = require("./certs");
const deployments = require("./deployments");
const domains = require("./domains");
const secrets = require("./secrets");

const client = Object.assign({}, aliases, certs, deployments, domains, secrets);

module.exports = client;
