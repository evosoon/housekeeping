"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Swiper",
  setup(__props) {
    const info = common_vendor.reactive([
      {
        colorClass: "uni-bg-red",
        url: "baseImg",
        content: "内容 A"
      },
      {
        colorClass: "uni-bg-green",
        url: "baseImg",
        content: "内容 B"
      },
      {
        colorClass: "uni-bg-blue",
        url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",
        content: "内容 C"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(info, (item, index, i0) => {
          return {
            a: item.url,
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-edff6b0c"], ["__file", "D:/HBuilderX/for_nest/components/Home/Swiper.vue"]]);
wx.createComponent(Component);
