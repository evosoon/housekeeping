"use strict";
const common_vendor = require("../common/vendor.js");
const utils_http = require("../utils/http.js");
let request = new utils_http.Request().http;
async function NewResume(data) {
  const res = await request({
    url: "/resume",
    method: "POST",
    header: {
      "content-type": "application/json"
    },
    data
  });
  console.log(res);
}
async function GetResumeList(pageNum, pageSize, state) {
  var _a, _b;
  const _data = {
    pageNum: pageNum | 1,
    pageSize: pageSize | 10,
    state
  };
  const res = await request({
    url: "/resume",
    method: "GET",
    data: _data
  });
  if (res.status >= 400) {
    common_vendor.index.showToast({
      title: "网络出错",
      duration: 2e3,
      icon: "error"
    });
  } else {
    return {
      total: (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.total,
      items: (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.items
    };
  }
}
exports.GetResumeList = GetResumeList;
exports.NewResume = NewResume;
