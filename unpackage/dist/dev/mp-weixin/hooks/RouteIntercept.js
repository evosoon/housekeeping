"use strict";
const common_vendor = require("../common/vendor.js");
function RouteIntercept(url) {
  let pages = getCurrentPages();
  let nowUrl = pages[pages.length - 1].route;
  let preUrl = pages[pages.length - 2];
  let LoginPage = nowUrl == "pages/login/login" ? true : false;
  let Auth = common_vendor.index.getStorageSync("access_token") ? true : false;
  let Preposition = url ? true : false;
  if (LoginPage) {
    if (!Auth) {
      common_vendor.index.navigateBack({
        delta: 1
      });
      if (common_vendor.index.getSystemInfoSync().platform != "mp-weixin")
        return;
      common_vendor.index.reLaunch({
        url: `/${preUrl.route}`
      });
    }
  }
  if (Preposition) {
    if (Auth) {
      common_vendor.index.navigateTo({ url });
      return;
    } else {
      common_vendor.index.navigateTo({ url: `/pages/login/login?address=${url}` });
      return;
    }
  } else {
    if (Auth) {
      return;
    } else {
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    }
  }
}
exports.RouteIntercept = RouteIntercept;
