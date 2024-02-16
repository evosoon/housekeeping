"use strict";
require("../common/vendor.js");
const utils_http = require("../utils/http.js");
require("../stores/userinfo.js");
let request = new utils_http.Request().http;
async function ForgetPwd(info) {
  const data = await request({
    url: "/user/forgetPwd",
    method: "GET",
    data: info
  });
  return data.message;
}
async function UpdatePwd(info) {
  const _info = {
    old_pwd: info.oldPwd,
    new_pwd: info.newPwd,
    re_pwd: info.rePwd
  };
  const data = await request({
    url: "/user/updatePwd",
    method: "PUT",
    data: _info
  });
  return data.message;
}
async function UpdateEmail(info) {
  const _info = {
    captcha: info.captcha
  };
  const data = await request({
    url: "/user/updatePwd",
    method: "PUT",
    data: _info
  });
  return data.message;
}
exports.ForgetPwd = ForgetPwd;
exports.UpdateEmail = UpdateEmail;
exports.UpdatePwd = UpdatePwd;
