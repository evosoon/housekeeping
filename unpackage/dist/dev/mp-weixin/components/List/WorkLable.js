"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "WorkLable",
  props: {
    //子组件接收父组件传递过来的值
    selected: Array
  },
  setup(__props) {
    const props = __props;
    const {
      selected
    } = common_vendor.toRefs(props);
    const toparticulars = (item) => {
      console.log(item);
      common_vendor.index.navigateTo({
        url: "/pages/List/orderDetails"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(selected), (item, index, i0) => {
          return {
            a: common_vendor.t(item.info),
            b: common_vendor.t(item.date),
            c: common_vendor.t(item.address),
            d: common_vendor.t(item.salary),
            e: common_vendor.o(($event) => toparticulars(item), index),
            f: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc024cf2"], ["__file", "D:/HBuilderX/for_nest/components/List/WorkLable.vue"]]);
wx.createComponent(Component);
