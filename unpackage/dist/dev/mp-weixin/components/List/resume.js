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
  __name: "resume",
  props: {
    //子组件接收父组件传递过来的值
    Resume: Array
  },
  setup(__props) {
    const props = __props;
    const {
      Resume
    } = common_vendor.toRefs(props);
    const toResume = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/List/showResume?id=" + item.createId
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(Resume), (item, index, i0) => {
          return {
            a: common_vendor.t(item.profession),
            b: common_vendor.o(($event) => toResume(item), index),
            c: "877936a1-2-" + i0 + "," + ("877936a1-1-" + i0),
            d: common_vendor.t(item.age),
            e: "877936a1-3-" + i0 + "," + ("877936a1-1-" + i0),
            f: "877936a1-1-" + i0 + "," + ("877936a1-0-" + i0),
            g: "877936a1-5-" + i0 + "," + ("877936a1-4-" + i0),
            h: common_vendor.t(item.sex),
            i: "877936a1-6-" + i0 + "," + ("877936a1-4-" + i0),
            j: "877936a1-4-" + i0 + "," + ("877936a1-0-" + i0),
            k: "877936a1-8-" + i0 + "," + ("877936a1-7-" + i0),
            l: common_vendor.t(item.address),
            m: "877936a1-9-" + i0 + "," + ("877936a1-7-" + i0),
            n: "877936a1-7-" + i0 + "," + ("877936a1-0-" + i0),
            o: "877936a1-11-" + i0 + "," + ("877936a1-10-" + i0),
            p: common_vendor.t(item.salary),
            q: "877936a1-12-" + i0 + "," + ("877936a1-10-" + i0),
            r: "877936a1-10-" + i0 + "," + ("877936a1-0-" + i0),
            s: "877936a1-14-" + i0 + "," + ("877936a1-13-" + i0),
            t: common_vendor.t(item.exprience),
            v: "877936a1-15-" + i0 + "," + ("877936a1-13-" + i0),
            w: "877936a1-13-" + i0 + "," + ("877936a1-0-" + i0),
            x: "877936a1-17-" + i0 + "," + ("877936a1-16-" + i0),
            y: common_vendor.t(item.introduction),
            z: "877936a1-18-" + i0 + "," + ("877936a1-16-" + i0),
            A: "877936a1-16-" + i0 + "," + ("877936a1-0-" + i0),
            B: "877936a1-0-" + i0,
            C: index
          };
        }),
        b: common_vendor.p({
          stripe: true,
          emptyText: "暂无更多数据"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-877936a1"], ["__file", "D:/HBuilderX/for_nest/components/List/resume.vue"]]);
wx.createComponent(Component);
