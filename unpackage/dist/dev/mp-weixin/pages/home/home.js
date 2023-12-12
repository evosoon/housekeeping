"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (Swiper + labelcard)();
}
const Swiper = () => "../../components/Home/Swiper.js";
const labelcard = () => "../../components/Home/LabelCard.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    common_vendor.ref(0);
    common_vendor.ref("round");
    const tag = ["家庭保洁", "空调清洗", "地毯清洗", "沙发清洗", "开荒保洁", "玻璃清洗", "地板打蜡", "油烟机清洗"];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tag, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        b: common_vendor.f(tag, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/HBuilderX/for_nest/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
