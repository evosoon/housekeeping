"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
const apis_chooseApis = require("../../apis/chooseApis.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_td2 + _easycom_uni_tr2 + _easycom_uni_table2 + _easycom_uni_card2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_td + _easycom_uni_tr + _easycom_uni_table + _easycom_uni_card + _easycom_uni_goods_nav)();
}
const _sfc_main = {
  __name: "orderParticulars",
  setup(__props) {
    const orderId = common_vendor.ref("");
    const order = common_vendor.ref({});
    const options = common_vendor.ref([{
      icon: "home",
      text: "首页"
    }]);
    const buttonGroup = common_vendor.ref([{
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff"
    }]);
    const buttonClick = (e) => {
      apis_chooseApis.chooseReservation(orderId.value).then((res) => {
        console.log(res);
      });
    };
    const onClick = (e) => {
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    };
    common_vendor.onLoad((option) => {
      orderId.value = option.orderid;
      apis_reservationApis.ReservationDetails(orderId.value).then((res) => {
        order.value = res.data;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_imgs_baseImg.baseImg),
        b: common_vendor.t(order.value.request),
        c: common_vendor.t(order.value.salary),
        d: common_vendor.t(order.value.request),
        e: common_vendor.t(order.value.request),
        f: common_vendor.t(order.value.salary),
        g: common_vendor.t(order.value.workTime),
        h: common_vendor.t(order.value.address),
        i: common_vendor.p({
          title: "服务详情",
          isFull: true,
          padding: "15px"
        }),
        j: common_vendor.o(onClick),
        k: common_vendor.o(buttonClick),
        l: common_vendor.p({
          fill: true,
          options: options.value,
          buttonGroup: buttonGroup.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a7e2242a"], ["__file", "D:/HBuilderX/for_nest/pages/List/orderParticulars.vue"]]);
wx.createPage(MiniProgramPage);
