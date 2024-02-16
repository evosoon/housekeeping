"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "reservationParticulars",
  setup(__props) {
    const reservation = common_vendor.ref({});
    common_vendor.onLoad((option) => {
      reservation.value = JSON.parse(option.item);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(reservation.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item)
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilderX/for_nest/pages/reservation/reservationParticulars.vue"]]);
wx.createPage(MiniProgramPage);
