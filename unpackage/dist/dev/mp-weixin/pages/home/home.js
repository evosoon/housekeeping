"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    let longitude = common_vendor.ref(0);
    let latitude = common_vendor.ref(0);
    function getlocation() {
      common_vendor.index.getLocation({
        type: "wgs84",
        success: function(res) {
          longitude.value = res.longitude, latitude.value = res.latitude;
        },
        fail: function() {
          console.log(1);
          common_vendor.index.showToast({
            title: "获取地址失败，将导致部分功能不可用",
            icon: "none"
          });
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(getlocation),
        b: common_vendor.t(common_vendor.unref(longitude)),
        c: common_vendor.t(common_vendor.unref(latitude)),
        d: common_vendor.f(5, (i, k0, i0) => {
          return {
            a: "07e72d3c-0-" + i0
          };
        }),
        e: common_vendor.p({
          ["is-shadow"]: false,
          extra: "列表"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/HBuilderX/for_nest/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
