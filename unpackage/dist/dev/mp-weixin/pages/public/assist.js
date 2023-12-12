"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "assist",
  setup(__props) {
    function jump(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => jump("/pages/public/feedback"))
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-20321afb"], ["__file", "D:/HBuilderX/for_nest/pages/public/assist.vue"]]);
wx.createPage(MiniProgramPage);
