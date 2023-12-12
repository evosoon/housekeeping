"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_td2 = common_vendor.resolveComponent("uni-td");
  const _easycom_uni_tr2 = common_vendor.resolveComponent("uni-tr");
  const _easycom_uni_table2 = common_vendor.resolveComponent("uni-table");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_nav_bar2 + _easycom_uni_td2 + _easycom_uni_tr2 + _easycom_uni_table2 + _easycom_uni_card2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_td = () => "../../uni_modules/uni-table/components/uni-td/uni-td.js";
const _easycom_uni_tr = () => "../../uni_modules/uni-table/components/uni-tr/uni-tr.js";
const _easycom_uni_table = () => "../../uni_modules/uni-table/components/uni-table/uni-table.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_td + _easycom_uni_tr + _easycom_uni_table + _easycom_uni_card + orderform)();
}
const orderform = () => "../../components/List/OrderForm.js";
const _sfc_main = {
  __name: "showOrder",
  setup(__props) {
    const mode = common_vendor.ref(true);
    const modetext = common_vendor.ref("修改");
    const userid = common_vendor.ref("");
    const order = common_vendor.ref({
      id: 2,
      createId: 1,
      address: "天津市滨海区",
      request: "帮忙给小孩做午饭，打扫卫生",
      salary: 30,
      state: "草稿",
      workTime: "2023-12-01",
      createTime: "2023-11-16T22:50:26",
      updateTime: "2023-11-16T22:50:26"
    });
    const leave = () => {
      common_vendor.index.navigateBack();
    };
    const changemode = () => {
      mode.value = !mode.value;
      modetext.value = mode.value ? "修改" : "取消";
    };
    common_vendor.onLoad((option) => {
      userid.value = option.userid;
      apis_reservationApis.ReservationDetails(userid.value).then((res) => {
        console.log(res);
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => leave()),
        b: common_vendor.o(changemode),
        c: common_vendor.p({
          ["left-icon"]: "left",
          ["right-text"]: modetext.value,
          title: "简历",
          border: false
        }),
        d: mode.value
      }, mode.value ? {
        e: common_vendor.unref(utils_imgs_baseImg.baseImg),
        f: common_vendor.t(order.value.salary),
        g: common_vendor.t(order.value.request),
        h: common_vendor.t(order.value.request),
        i: common_vendor.t(order.value.salary),
        j: common_vendor.t(order.value.workTime),
        k: common_vendor.t(order.value.address),
        l: common_vendor.p({
          title: "服务详情",
          isFull: true,
          padding: "15px"
        })
      } : {}, {
        m: !mode.value
      }, !mode.value ? {
        n: common_vendor.p({
          formData: order.value
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8c3a5f39"], ["__file", "D:/HBuilderX/for_nest/pages/List/showOrder.vue"]]);
wx.createPage(MiniProgramPage);
