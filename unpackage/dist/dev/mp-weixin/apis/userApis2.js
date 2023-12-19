"use strict";
const common_vendor = require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const stores_userinfo = require("../stores/userinfo.js");
const utils_baseUrl = require("../utils/baseUrl.js");
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
async function UpLoad(e) {
  console.log("Selected file:", e);
  const formData = new FormData();
  formData.append("file", e);
  common_vendor.index.uploadFile({
    url: utils_baseUrl.baseUrl + "/user/updateAvatar",
    // 服务器上传接口地址
    filePath: e.path,
    // 本地文件路径
    name: "file",
    // 上传文件对应的 key
    formData,
    // 添加额外的表单数据
    header: {
      "Authorization": `${common_vendor.index.getStorageSync("refresh_token")}`
    },
    success: (uploadRes) => {
      console.log("Upload successful:", uploadRes);
    },
    fail: (err) => {
      console.error("Failed to upload file:", err);
    }
  });
}
exports.GetInfo = GetInfo;
exports.UpLoad = UpLoad;
