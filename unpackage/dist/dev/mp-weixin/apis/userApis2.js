"use strict";
require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const stores_userinfo = require("../stores/userinfo.js");
let request = new utils_http.Request().http;
async function GetInfo() {
  const data = await request({
    url: "/user/detail",
    method: "GET"
  });
  if (data.status >= 200 && data.status < 300) {
    const useUserInfo = stores_userinfo.useUserInfoStore();
    useUserInfo.changeInfo(data.data);
  }
}
exports.GetInfo = GetInfo;
