"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
require("../../stores/userinfo.js");
require("../../apis/userApis2.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
require("../../utils/baseUrl.js");
require("../../utils/http.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "showUser",
  setup(__props) {
    const getPic = common_vendor.computed(() => {
      let path = utils_imgs_baseImg.baseImg;
      if (Info.userPic)
        path = Info.userPic;
      return path;
    });
    const Info = {
      username: "zs",
      nickname: "ss",
      email: "sdf"
    };
    common_vendor.onShow(() => {
      hooks_RouteIntercept.RouteIntercept();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(getPic),
        b: common_vendor.t(Info.nickname),
        c: Info.username
      }, {
        d: common_vendor.t(Info.username)
      }, {
        e: Info.email
      }, {
        f: common_vendor.t(Info.email)
      }, {
        g: common_vendor.p({
          type: "heart",
          color: "gray",
          size: "16"
        }),
        h: common_vendor.p({
          type: "star",
          color: "gray",
          size: "16"
        }),
        i: common_vendor.p({
          type: "notification",
          color: "gray",
          size: "16"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a13dfbb1"], ["__file", "D:/HBuilderX/for_nest/pages/user/showUser.vue"]]);
wx.createPage(MiniProgramPage);
