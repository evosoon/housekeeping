"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
const _sfc_main = {
  __name: "OrderList",
  props: {
    //子组件接收父组件传递过来的值
    introduction: Array
  },
  setup(__props) {
    const props = __props;
    const {
      introduction
    } = common_vendor.toRefs(props);
    const particulars = (good) => {
      common_vendor.index.navigateTo({
        url: "/pages/List/orderParticulars?orderid=" + good.id
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(introduction), (goods, i, i0) => {
          return {
            a: common_vendor.t(goods.request),
            b: common_vendor.t(goods.salary),
            c: common_vendor.t(goods.workTime),
            d: common_vendor.o(($event) => particulars(goods), i),
            e: i
          };
        }),
        b: common_vendor.unref(utils_imgs_baseImg.baseImg)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c60db75"], ["__file", "D:/HBuilderX/for_nest/components/List/OrderList.vue"]]);
wx.createComponent(Component);
