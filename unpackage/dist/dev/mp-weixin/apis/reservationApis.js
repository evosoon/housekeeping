"use strict";
const common_vendor = require("../common/vendor.js");
const utils_http = require("../utils/http.js");
let request = new utils_http.Request().http;
async function GetReservation(data) {
  const res = await request({
    url: "/reservation",
    method: "GET",
    data
  });
  return { total: res.data.data.total, items: res.data.data.items };
}
async function NewReservation(data) {
  const res = await request({
    url: "/reservation",
    method: "POST",
    data,
    header: {
      "content-type": "application/json",
      "Authorization": `${common_vendor.index.getStorageSync("access_token")}`
    }
  });
  if (res.status >= 200 && res.status < 300) {
    common_vendor.index.showToast({
      title: "上传成功",
      duration: 2e3
    });
    return { status: 1 };
  } else {
    common_vendor.index.showToast({
      title: "上传失败",
      duration: 2e3,
      icon: "error"
    });
    return { status: 0 };
  }
}
exports.GetReservation = GetReservation;
exports.NewReservation = NewReservation;
