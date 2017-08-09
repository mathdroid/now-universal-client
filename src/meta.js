const { create } = require("axios");
const { resolve, reject } = require("bluebird");

const meta = create({
  baseURL: "https://zeit.co/api",
  responseType: "json",
  timeout: 10000
});

meta.handleRequest = ({ method, url, data, token }) => {
  let payload;

  if (/(post|put|patch)/i.test(method)) {
    payload = data;
  }

  return meta({
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

meta.HTTP = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE"
};

module.exports = meta;
