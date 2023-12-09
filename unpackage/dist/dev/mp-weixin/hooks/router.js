"use strict";
const common_vendor = require("../common/vendor.js");
function router() {
  let Auth = common_vendor.index.getStorageSync("access_token") ? true : false;
  let pages = getCurrentPages();
  let currentPages = pages[pages.length - 1];
  let url = currentPages.route;
  if (url == "pages/login/login") {
    if (pages[pages.length - 2] == void 0 || pages[pages.length - 2].route == url) {
      common_vendor.nextTick$1(() => {
        Auth ? common_vendor.index.reLaunch({ url: "/pages/home/user" }) : common_vendor.index.reLaunch({ url: "/pages/home/home" });
      });
      return;
    }
    if (Auth) {
      common_vendor.index.navigateBack({ delta: 1 });
    } else {
      common_vendor.nextTick$1(() => {
        common_vendor.index.navigateBack({
          delta: 2,
          fail() {
            alert("f");
            common_vendor.nextTick$1(() => {
              common_vendor.index.reLaunch({
                url: "/pages/home/home"
              });
            });
          },
          success() {
            if (common_vendor.index.getSystemInfoSync().platform == "mp-weixin" || common_vendor.index.getSystemInfoSync().platform == "ios") {
              common_vendor.nextTick$1(() => {
                common_vendor.index.reLaunch({
                  url: "/pages/home/user"
                });
              });
            }
          }
        });
      });
    }
  }
  if (!Auth) {
    jump("/pages/login/login");
  }
}
const jump = function(url) {
  common_vendor.index.navigateTo({
    url
  });
};
exports.router = router;
