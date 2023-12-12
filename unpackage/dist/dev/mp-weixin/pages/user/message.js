"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + UserCard)();
}
const UserCard = () => "../../components/UserCard.js";
const _sfc_main = {
  __name: "message",
  setup(__props) {
    function jump(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
    common_vendor.onShow(() => {
      hooks_RouteIntercept.RouteIntercept();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "chat-filled",
          color: "gray",
          size: "40"
        }),
        b: common_vendor.o(($event) => jump("/pages/user/messageList")),
        c: common_vendor.p({
          type: "hand-up-filled",
          color: "gray",
          size: "40"
        }),
        d: common_vendor.o(($event) => jump("/pages/user/messageList")),
        e: common_vendor.p({
          type: "notification-filled",
          color: "gray",
          size: "40"
        }),
        f: common_vendor.o(($event) => jump("/pages/user/messageList")),
        g: common_vendor.p({
          type: "person-filled",
          color: "gray",
          size: "40"
        }),
        h: common_vendor.o(($event) => jump("/pages/user/messageList")),
        i: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: "eba5faec-4-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eba5faec"], ["__file", "D:/HBuilderX/for_nest/pages/user/message.vue"]]);
wx.createPage(MiniProgramPage);
