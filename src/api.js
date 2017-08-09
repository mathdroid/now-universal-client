const { create } = require("axios");
const { resolve, reject } = require("bluebird");

const api = create({
  baseURL: "https://api.zeit.co/now",
  // baseURL: "https://zeit.co/api",
  responseType: "json",
  timeout: 10000
});

api.handleRequest = ({ method, url, data, token }) => {
  let payload;

  if (/(post|put|patch)/i.test(method)) {
    payload = data;
  }

  return api({
    method,
    url,

    headers: {
      Authorization: `Bearer ${token}`
    },
    data: payload
  })
    .then(({ data }) => {
      return resolve(data);
    })
    .catch(err => {
      const { response: { data = { error: "No data" } } } = err;
      return reject(new Error(data));
    });
};

api.HTTP = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE"
};

module.exports = api;
