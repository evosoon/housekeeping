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
  let url = "/user/usernameLogin";
  if (form.email)
    url = "/user/emailLogin";
  try {
    const res = await request({
      url,
      method: "POST",
      data: form
    });
    if (res.status >= 400) {
      if (res.status == 401)
        common_vendor.index.navigateTo({ url: "/pages/login/login" });
      common_vendor.index.removeStorageSync("access_token");
      common_vendor.index.removeStorageSync("refresh_token");
      return res.message;
    } else {
      common_vendor.index.setStorageSync("access_token", res.data.access_token);
      common_vendor.index.setStorageSync("refresh_token", res.data.refresh_token);
      UserInfostore(res.data.userinfo);
      if (jumpAddress) {
        common_vendor.index.reLaunch({
          url: jumpAddress
        });
      } else {
        common_vendor.index.switchTab({
          url: "/pages/home/user"
        });
      }
      return "登录成功";
    }
  } catch (e) {
    console.log(e);
    return "请求失败，检查网络后重试";
  }
}
async function Register(data) {
  let _data = { ...data, roleId: 1 };
  try {
    const res = await request({
      url: "/user/register",
      method: "POST",
      data: _data
    });
    return res.message;
  } catch (e) {
    console.log(e);
    return "请求失败，检查网络后重试";
  }
}
exports.Login = Login;
exports.Register = Register;
