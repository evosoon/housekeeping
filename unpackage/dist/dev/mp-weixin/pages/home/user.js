"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_userinfo = require("../../stores/userinfo.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  (_easycom_uni_icons2 + _easycom_uni_list_item2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const works = common_vendor.ref([{ id: 1, title: "功能1" }, { id: 2, title: "功能2" }, { id: 3, title: "功能3" }]);
    const Info = stores_userinfo.useUserInfoStore();
    function jump(address) {
      hooks_RouteIntercept.RouteIntercept(address);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_imgs_baseImg.baseImg),
        b: common_vendor.t(common_vendor.unref(Info).nickname ? common_vendor.unref(Info).nickname : "未登录"),
        c: common_vendor.t(common_vendor.unref(Info).username ? "个人中心" : "去登录"),
        d: common_vendor.p({
          type: "right",
          size: "16",
          color: "#959595"
        }),
        e: common_vendor.o(($event) => jump("/pages/user/center")),
        f: common_vendor.f(works.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id
          };
        }),
        g: common_vendor.o(($event) => jump("/pages/user/message")),
        h: common_vendor.p({
          title: "消息中心",
          clickable: true
        }),
        i: common_vendor.p({
          title: "常见问题",
          to: `/pages/public/assist`
        }),
        j: common_vendor.p({
          title: "设置",
          rightText: "进入设置",
          to: `/pages/public/setting`
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e13bad76"], ["__file", "D:/HBuilderX/for_nest/pages/home/user.vue"]]);
wx.createPage(MiniProgramPage);
