"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_resumeApis = require("../../apis/resumeApis.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_nav_bar2 + _easycom_uni_card2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_card + Resumeform)();
}
const Resumeform = () => "../../components/List/ResumeForm.js";
const _sfc_main = {
  __name: "showResume",
  setup(__props) {
    const mode = common_vendor.ref(true);
    const modetext = common_vendor.ref("修改");
    const userid = common_vendor.ref("");
    const formData = common_vendor.ref({});
    const ischange = common_vendor.ref(1);
    const leave = () => {
      common_vendor.index.navigateBack();
    };
    const changemode = () => {
      mode.value = !mode.value;
      modetext.value = mode.value ? "修改" : "取消";
    };
    common_vendor.onLoad((option) => {
      userid.value = option.userid;
      apis_resumeApis.ResumeDetails(userid.value).then((res) => {
        formData.value = res.data;
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => leave()),
        b: common_vendor.o(changemode),
        c: common_vendor.p({
          ["left-icon"]: "left",
          ["right-text"]: modetext.value,
          title: "简历",
          border: false
        }),
        d: mode.value
      }, mode.value ? {
        e: common_vendor.unref(utils_imgs_baseImg.baseImg),
        f: common_vendor.t(formData.value.salary),
        g: common_vendor.t(formData.value.profession),
        h: common_vendor.t(formData.value.age),
        i: common_vendor.t(formData.value.sex),
        j: common_vendor.t(formData.value.salary),
        k: common_vendor.t(formData.value.address),
        l: common_vendor.t(formData.value.exprience),
        m: common_vendor.t(formData.value.introduction),
        n: common_vendor.p({
          title: "服务详情",
          isFull: true,
          padding: "15px"
        })
      } : {}, {
        o: !mode.value
      }, !mode.value ? {
        p: common_vendor.p({
          formData: formData.value,
          ischange: ischange.value
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-683bce6f"], ["__file", "D:/HBuilderX/for_nest/pages/List/showResume.vue"]]);
wx.createPage(MiniProgramPage);
