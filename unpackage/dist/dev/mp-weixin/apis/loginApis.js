"use strict";
const common_vendor = require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const stores_userinfo = require("../stores/userinfo.js");
let request = new utils_http.Request().http;
function UserInfostore(userInfo) {
  const useUserInfo = stores_userinfo.useUserInfoStore();
  useUserInfo.changeInfo(userInfo);
}
async function Login(form, val) {
  let jumpAddress = val;
  try {
    const data = await request({
      url: "/user/login",
      method: "POST",
      data: form
    });
    if (data.status >= 400) {
      if (data.status == 401)
        common_vendor.index.navigateTo({ url: "/pages/login/login" });
      common_vendor.index.removeStorageSync("access_token");
      common_vendor.index.removeStorageSync("refresh_token");
      return data.data;
    } else {
      common_vendor.index.setStorageSync("access_token", data.data.access_token);
      common_vendor.index.setStorageSync("refresh_token", data.data.refresh_token);
      UserInfostore(data.data.userinfo);
      if (jumpAddress) {
        common_vendor.index.reLaunch({
          url: jumpAddress
        });
      } else {
        common_vendor.index.switchTab({
          url: "/pages/home/home"
        });
      }
      return "登录成功";
    }
  } catch (e) {
    console.log(e);
    return "请求失败，检查网络后重试";
  }
}
function FindPassword(data) {
  return request({
    url: "/user/updatePassword",
    method: "POST",
    data
  });
}
exports.FindPassword = FindPassword;
exports.Login = Login;
