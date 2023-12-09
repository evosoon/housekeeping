"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
const stores_userinfo = require("../../stores/userinfo.js");
require("../../utils/baseUrl.js");
const _sfc_main = {
  __name: "center",
  setup(__props) {
    const Info = stores_userinfo.useUserInfoStore();
    common_vendor.onShow(() => {
      hooks_RouteIntercept.RouteIntercept();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(Info).user_pic || "../static/baseImage.jpg",
        b: common_vendor.t(common_vendor.unref(Info).nickname),
        c: common_vendor.unref(Info).username
      }, common_vendor.unref(Info).username ? {
        d: common_vendor.t(common_vendor.unref(Info).username)
      } : {}, {
        e: common_vendor.unref(Info).email
      }, common_vendor.unref(Info).email ? {
        f: common_vendor.t(common_vendor.unref(Info).email)
      } : {}, {
        g: common_assets._imports_0
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ba03e1e9"], ["__file", "D:/HBuilderX/for_nest/pages/user/center.vue"]]);
wx.createPage(MiniProgramPage);
