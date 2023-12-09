"use strict";
const utils_http = require("../utils/http.js");
function SignInCode(address) {
  return utils_http.Request({
    url: `/email/signup_captcha?address=${address}`
  });
}
function UpdatePasswordCode(address) {
  return utils_http.Request({
    url: `/email/reset_password_captcha?address=${address}`
  });
}
exports.SignInCode = SignInCode;
exports.UpdatePasswordCode = UpdatePasswordCode;
