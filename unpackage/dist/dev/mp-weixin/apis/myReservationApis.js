"use strict";
const utils_http = require("../utils/http.js");
let request = new utils_http.Request().http;
async function workingReservation(pageNum, pageSize) {
  return await request({
    url: "/reservation/workingReservation",
    method: "GET",
    data: {
      pageNum,
      pageSize
    }
  });
}
async function reservationInProgress(pageNum, pageSize) {
  return await request({
    url: "/reservation/reservationInProgress",
    method: "GET",
    data: {
      pageNum,
      pageSize
    }
  });
}
async function historyEmployerReservation(pageNum, pageSize) {
  return await request({
    url: "/reservation/historyEmployerReservation",
    method: "GET",
    data: {
      pageNum,
      pageSize
    }
  });
}
exports.historyEmployerReservation = historyEmployerReservation;
exports.reservationInProgress = reservationInProgress;
exports.workingReservation = workingReservation;
