"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
require("../../apis/resumeApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Math) {
  Orderlist();
}
const Orderlist = () => "../../components/List/OrderList.js";
const _sfc_main = {
  __name: "productList",
  setup(__props) {
    const serve = common_vendor.reactive(["家庭保洁", "管道疏通", "数码维修", "房屋维修", "上门安装", "便民服务"]);
    const introduction = common_vendor.ref([]);
    const select = common_vendor.ref(0);
    const changestyle = (index) => {
      select.value = index;
    };
    common_vendor.onMounted(() => {
      apis_reservationApis.getReservationList(1, 10).then((res) => {
        introduction.value = res.data.items;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(serve, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(select.value === index ? "select_navbar_li" : "navbar_li"),
            c: common_vendor.o(($event) => changestyle(index), index),
            d: index
          };
        }),
        b: common_vendor.p({
          introduction: introduction.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-36c99c83"], ["__file", "D:/HBuilderX/for_nest/pages/home/productList.vue"]]);
wx.createPage(MiniProgramPage);
