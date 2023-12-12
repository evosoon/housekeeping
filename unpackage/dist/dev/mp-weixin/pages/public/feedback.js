"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_section)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "feedback",
  setup(__props) {
    const feedback = common_vendor.ref("");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => feedback.value = $event),
        b: common_vendor.p({
          type: "textarea",
          autoHeight: true,
          placeholder: "请输入内容",
          modelValue: feedback.value
        }),
        c: common_vendor.p({
          title: "提供宝贵建议,帮助我们改进",
          padding: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1992d2b5"], ["__file", "D:/HBuilderX/for_nest/pages/public/feedback.vue"]]);
wx.createPage(MiniProgramPage);
