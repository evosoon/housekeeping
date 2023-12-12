"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_resumeApis = require("../../apis/resumeApis.js");
const hooks_ArraySort = require("../../hooks/ArraySort.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + Goodslist)();
}
const Goodslist = () => "../../components/List/GoodsList.js";
const _sfc_main = {
  __name: "particulars",
  setup(__props) {
    common_vendor.ref("");
    const introduction = common_vendor.ref([]);
    const navigationStrong = common_vendor.ref(true);
    const arrangeStrong = common_vendor.ref(true);
    introduction.value;
    const Strong = (number) => {
      if (!number) {
        navigationStrong.value = true;
        arrangeStrong.value = false;
        apis_resumeApis.getResumeList(1, 10, "已发布").then((res) => {
          introduction.value = res.data.items;
        });
      } else {
        if (navigationStrong.value) {
          navigationStrong.value = false;
          arrangeStrong.value = true;
          introduction.value = hooks_ArraySort.Arraysort(introduction.value, "salary", arrangeStrong.value);
        } else {
          arrangeStrong.value = !arrangeStrong.value;
          introduction.value = hooks_ArraySort.Arraysort(introduction.value, "salary", arrangeStrong.value);
        }
      }
    };
    common_vendor.onMounted(() => {
      apis_resumeApis.getResumeList(1, 10, "已发布").then((res) => {
        introduction.value = res.data.items;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: navigationStrong.value ? "bold" : "normal",
        b: common_vendor.o(($event) => Strong(0)),
        c: common_vendor.p({
          type: "top",
          size: "15",
          color: !navigationStrong.value && arrangeStrong.value ? "black" : "#d1d1d1"
        }),
        d: common_vendor.p({
          type: "bottom",
          size: "15",
          color: !navigationStrong.value && !arrangeStrong.value ? "black" : "#d1d1d1"
        }),
        e: navigationStrong.value ? "normal" : "bold",
        f: common_vendor.o(($event) => Strong(1)),
        g: common_vendor.p({
          introduction: introduction.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a9e20029"], ["__file", "D:/HBuilderX/for_nest/pages/List/particulars.vue"]]);
wx.createPage(MiniProgramPage);
