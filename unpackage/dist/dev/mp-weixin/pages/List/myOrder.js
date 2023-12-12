"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
const apis_myReservationApis = require("../../apis/myReservationApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  (_easycom_uni_nav_bar2 + _easycom_uni_segmented_control2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_segmented_control + orders)();
}
const orders = () => "../../components/List/order.js";
const _sfc_main = {
  __name: "myOrder",
  setup(__props) {
    let items = common_vendor.reactive(["已发布", "进行中", "已完成", "已取消"]);
    let current = common_vendor.ref(0);
    common_vendor.ref("新建简历");
    const Order = common_vendor.ref([]);
    const onClickItem = (e) => {
      current.value = e.currentIndex;
      if (current.value === 0) {
        apis_reservationApis.getReservationList(1, 10, 1).then((res) => {
          Order.value = res.data.items;
        });
      } else if (current.value === 1) {
        apis_myReservationApis.reservationInProgress(1, 10).then((res) => {
          console.log("ss");
          console.log(res);
        });
      } else if (current.value === 2) {
        apis_myReservationApis.historyEmployerReservation(1, 10).then((res) => {
          console.log("11");
          console.log(res);
        });
      }
    };
    const leave = () => {
      common_vendor.index.navigateBack();
    };
    const changemode = () => {
      common_vendor.index.navigateTo({
        url: "/pages/List/createOrder"
      });
    };
    common_vendor.onMounted(() => {
      apis_reservationApis.getReservationList(1, 10, 1).then((res) => {
        Order.value = res.data.items;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => leave()),
        b: common_vendor.o(changemode),
        c: common_vendor.p({
          ["left-icon"]: "left",
          ["right-icon"]: "plusempty",
          title: "订单",
          border: false
        }),
        d: common_vendor.o(onClickItem),
        e: common_vendor.p({
          current: common_vendor.unref(current),
          values: common_vendor.unref(items),
          styleType: "text",
          activeColor: "#4cd964"
        }),
        f: common_vendor.p({
          Order: Order.value
        }),
        g: common_vendor.unref(current) === 0,
        h: common_vendor.p({
          Order: Order.value
        }),
        i: common_vendor.unref(current) === 1,
        j: common_vendor.p({
          Order: Order.value
        }),
        k: common_vendor.unref(current) === 2,
        l: common_vendor.p({
          Order: Order.value
        }),
        m: common_vendor.unref(current) === 3
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e9d4045b"], ["__file", "D:/HBuilderX/for_nest/pages/List/myOrder.vue"]]);
wx.createPage(MiniProgramPage);
