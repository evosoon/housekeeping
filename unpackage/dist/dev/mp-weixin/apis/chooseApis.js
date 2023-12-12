"use strict";
const utils_http = require("../utils/http.js");
let request = new utils_http.Request().http;
async function chooseReservation(id) {
  return await request({
    url: "/choose",
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    data: {
      id
    }
  });
}
async function chooseWorker(chooseid) {
  return await request({
    url: "/choose",
    method: "PUT",
    data: {
      chooseid
    }
  });
}
exports.chooseReservation = chooseReservation;
exports.chooseWorker = chooseWorker;
