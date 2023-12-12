"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../apis/reservationApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  (_easycom_uni_td2 + _easycom_uni_tr2 + _easycom_uni_table2)();
}
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
if (!Math) {
  (_easycom_uni_td + _easycom_uni_tr + _easycom_uni_table)();
}
const _sfc_main = {
  __name: "order",
  props: {
    //子组件接收父组件传递过来的值
    Order: Array
  },
  setup(__props) {
    const props = __props;
    const {
      Order
    } = common_vendor.toRefs(props);
    const toOrder = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/List/showOrder?userid" + item.createId
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(Order), (item, index, i0) => {
          return {
            a: common_vendor.t(item.request),
            b: common_vendor.o(($event) => toOrder(item), index),
            c: "81808596-2-" + i0 + "," + ("81808596-1-" + i0),
            d: common_vendor.t(item.request),
            e: "81808596-3-" + i0 + "," + ("81808596-1-" + i0),
            f: "81808596-1-" + i0 + "," + ("81808596-0-" + i0),
            g: "81808596-5-" + i0 + "," + ("81808596-4-" + i0),
            h: common_vendor.t(item.workTime),
            i: "81808596-6-" + i0 + "," + ("81808596-4-" + i0),
            j: "81808596-4-" + i0 + "," + ("81808596-0-" + i0),
            k: "81808596-8-" + i0 + "," + ("81808596-7-" + i0),
            l: common_vendor.t(item.address),
            m: "81808596-9-" + i0 + "," + ("81808596-7-" + i0),
            n: "81808596-7-" + i0 + "," + ("81808596-0-" + i0),
            o: "81808596-11-" + i0 + "," + ("81808596-10-" + i0),
            p: common_vendor.t(item.salary),
            q: "81808596-12-" + i0 + "," + ("81808596-10-" + i0),
            r: "81808596-10-" + i0 + "," + ("81808596-0-" + i0),
            s: "81808596-0-" + i0,
            t: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-81808596"], ["__file", "D:/HBuilderX/for_nest/components/List/order.vue"]]);
wx.createComponent(Component);
