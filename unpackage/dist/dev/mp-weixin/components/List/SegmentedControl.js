"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  _easycom_uni_segmented_control2();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (_easycom_uni_segmented_control + Worklable)();
}
const Worklable = () => "./WorkLable.js";
const _sfc_main = {
  __name: "SegmentedControl",
  props: {
    //子组件接收父组件传递过来的值
    selected: Array
  },
  setup(__props) {
    const props = __props;
    const {
      selected
    } = common_vendor.toRefs(props);
    let items = common_vendor.reactive(["请求订单", "进行中", "已完成"]);
    let current = common_vendor.ref(0);
    const onClickItem = (e) => {
      current.value = e.currentIndex;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickItem),
        b: common_vendor.p({
          current: common_vendor.unref(current),
          values: common_vendor.unref(items),
          styleType: "text",
          activeColor: "#4cd964"
        }),
        c: common_vendor.p({
          selected: common_vendor.unref(selected)
        }),
        d: common_vendor.unref(current) === 0,
        e: common_vendor.p({
          selected: common_vendor.unref(selected)
        }),
        f: common_vendor.unref(current) === 1,
        g: common_vendor.p({
          selected: common_vendor.unref(selected)
        }),
        h: common_vendor.unref(current) === 2
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilderX/for_nest/components/List/SegmentedControl.vue"]]);
wx.createComponent(Component);
