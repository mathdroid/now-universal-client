const { create } = require("axios");
const { resolve, reject } = require("bluebird");

const api = create({
  baseURL: "https://api.zeit.co/now",
  responseType: "json",
  timeout: 10000
});

api.fetch = ({ method, url, params, data, token }) => {
  let payload;

  if (/(post|put|patch)/i.test(method)) {
    payload = data;
  }

  return api({
    method,
    url,
    params,
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
      return reject(data);
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
