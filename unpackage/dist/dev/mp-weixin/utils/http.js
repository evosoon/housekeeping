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
        if (!header["content-type"]) {
          header = {
            "content-type": "application/x-www-form-urlencoded",
            "Authorization": `${common_vendor.index.getStorageSync("access_token")}`
          };
        } else {
          header = {
            "content-type": "application/json",
            "Authorization": `${common_vendor.index.getStorageSync("access_token")}`
          };
        }
      } else {
        header = {
          "content-type": "application/json",
          "Authorization": `${common_vendor.index.getStorageSync("access_token")}`
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
          if (res.data.status == 401 && !requestUrl.includes("/user/refresh_token")) {
            common_vendor.index.request({
              url: utils_baseUrl.baseUrl + "/user/refresh_token",
              method: "POST",
              header: {
                "Authorization": `${common_vendor.index.getStorageSync("refresh_token")}`
              },
              data: {
                "refresh_token": common_vendor.index.getStorageSync("refresh_token")
              },
              success: (res2) => {
                console.log(res2);
                if (res2.data.status >= 400 || res2.data.statusCode >= 400) {
                  common_vendor.index.removeStorageSync("access_token");
                  common_vendor.index.removeStorageSync("refresh_token");
                  common_vendor.index.switchTab({
                    url: "/pages/home/home"
                  });
                  reject({
                    status: 401,
                    message: "登陆过期"
                  });
                } else {
                  common_vendor.index.setStorageSync("access_token", res2.data.data.access_token);
                  common_vendor.index.setStorageSync("refresh_token", res2.data.data.refresh_token);
                  common_vendor.index.request({
                    url: requestUrl,
                    data,
                    method,
                    header: {
                      "Authorization": `${common_vendor.index.getStorageSync("access_token")}`
                    },
                    success: (res3) => {
                      resolve(res3.data);
                    }
                  });
                }
              },
              fail: () => {
                common_vendor.index.removeStorageSync("access_token");
                common_vendor.index.removeStorageSync("refresh_token");
              }
            });
          } else {
            resolve(res.data);
          }
        },
        //请求失败
        fail: (e) => {
          console.log(e);
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
