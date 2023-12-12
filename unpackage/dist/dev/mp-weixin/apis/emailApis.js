"use strict";
const utils_http = require("../utils/http.js");
let request = new utils_http.Request().http;
async function SendCode(email, type) {
  const data = await request({
    url: `/user/sendEmailCode?email=${email}&type=${type}`,
    method: "GET"
  });
  return data.status >= 200 && data.status < 300 ? "发送成功" : "发送失败";
}
exports.SendCode = SendCode;
