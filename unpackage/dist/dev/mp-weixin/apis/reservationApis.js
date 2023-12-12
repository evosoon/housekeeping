"use strict";
const utils_http = require("../utils/http.js");
let request = new utils_http.Request().http;
async function AddReservation(requests, address, salary, workTime) {
  return await request({
    url: "/reservation",
    method: "POST",
    header: {
      "content-type": "application/json"
    },
    data: {
      request: requests,
      address,
      salary,
      workTime
    }
  });
}
async function getReservationList(pageNum, pageSize, operationType) {
  return request({
    url: "/reservation",
    method: "GET",
    data: {
      pageNum,
      pageSize,
      operationType
    }
  });
}
async function ReservationDetails(id) {
  return await request({
    url: "/reservation/detail",
    method: "GET",
    data: {
      id
    }
  });
}
exports.AddReservation = AddReservation;
exports.ReservationDetails = ReservationDetails;
exports.getReservationList = getReservationList;
