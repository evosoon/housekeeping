"use strict";
const utils_http = require("../utils/http.js");
let request = new utils_http.Request().http;
async function AddResume(introduction, exprience, salary, state) {
  return request({
    url: "/resume",
    method: "POST",
    header: {
      "content-type": "application/json"
    },
    data: {
      introduction,
      exprience,
      salary,
      state
    }
  });
}
async function getResumeList(pageNum, pageSize, state) {
  return request({
    url: "/resume",
    method: "GET",
    data: {
      pageNum,
      pageSize,
      state
    }
  });
}
async function updateResume(id, introduction, exprience, salary) {
  return await request({
    url: "/resume",
    method: "PUT",
    data: {
      id,
      introduction,
      exprience,
      salary
    }
  });
}
async function ResumeDetails(id) {
  return await request({
    url: "/resume/detail",
    method: "GET",
    data: {
      id
    }
  });
}
exports.AddResume = AddResume;
exports.ResumeDetails = ResumeDetails;
exports.getResumeList = getResumeList;
exports.updateResume = updateResume;
