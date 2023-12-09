"use strict";
const common_vendor = require("../common/vendor.js");
const utils_baseUrl = require("./baseUrl.js");
class Request {
  http(param) {
    let url = param.url;
    let method = param.method;
    let header = param.header || {};
    let data = Object.assign(param.data || {});
    let requestUrl = utils_baseUrl.baseUrl + url;
    if (method) {
      method = method.toUpperCase();
      if (method == "POST") {
        header = {
          "content-type": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${common_vendor.index.getStorageSync("access_token")}`
        };
      } else {
        header = {
          "content-type": "application/json",
          "Authorization": `Bearer ${common_vendor.index.getStorageSync("access_token")}`
        };
      }
    }
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: requestUrl,
        data,
        method,
        header,
        success: (res) => {
          resolve(res.data);
        },
        //请求失败
        fail: (e) => {
          common_vendor.index.showToast({
            title: "" + e.data.msg,
            icon: "none"
          });
          resolve(e.data);
        },
        //请求完成
        complete() {
          return;
        }
      });
    });
  }
}
exports.Request = Request;
