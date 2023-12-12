"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_rate2 + _easycom_uni_card2)();
}
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "Evaluate",
  setup(__props) {
    const rate = common_vendor.reactive([
      {
        id: 1,
        name: "test",
        rate: 3,
        content: "服务良好，值得信赖下次还来"
      },
      {
        id: 2,
        name: "sa",
        rate: 4,
        content: "haohaohao"
      },
      {
        id: 3,
        name: "wd",
        rate: 5,
        content: "haohaohao"
      },
      {
        id: 4,
        name: "sad",
        rate: 1,
        content: "不咋地"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(rate, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: "b4ba5787-2-" + i0 + "," + ("b4ba5787-1-" + i0),
            c: common_vendor.p({
              readonly: true,
              value: item.rate
            }),
            d: common_vendor.t(item.content),
            e: index,
            f: "b4ba5787-1-" + i0 + ",b4ba5787-0"
          };
        }),
        b: common_vendor.unref(utils_imgs_baseImg.baseImg),
        c: common_vendor.p({
          isFull: true
        }),
        d: common_vendor.p({
          title: "评价",
          isFull: true
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b4ba5787"], ["__file", "D:/HBuilderX/for_nest/components/List/Evaluate.vue"]]);
wx.createComponent(Component);
