"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const apis_userApis = require("./apis/userApis2.js");
require("./utils/http.js");
require("./utils/baseUrl.js");
require("./stores/userinfo.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/home/user.js";
  "./pages/login/login.js";
  "./pages/home/info.js";
  "./pages/user/center.js";
  "./pages/user/message.js";
  "./pages/public/setting.js";
  "./pages/public/about.js";
  "./pages/public/protocol.js";
  "./pages/user/changeInfo.js";
  "./pages/public/feedback.js";
  "./pages/public/privacyPolicy.js";
  "./pages/user/information.js";
  "./pages/user/messageList.js";
  "./pages/public/assist.js";
  "./pages/home/productList.js";
  "./pages/reservation/reservation.js";
  "./pages/reservation/list.js";
  "./pages/reservation/reservationParticulars.js";
  "./pages/user/showUser.js";
  "./pages/resume/resume.js";
  "./pages/resume/writeResume.js";
}
const _sfc_main = {
  onLaunch: async function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
    if (common_vendor.index.getStorageSync("access_token")) {
      await apis_userApis.GetInfo();
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilderX/for_nest/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return { app, Pinia: common_vendor.Pinia };
}
createApp().app.mount("#app");
exports.createApp = createApp;
