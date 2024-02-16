"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  (_easycom_uni_easyinput2 + _easycom_uni_section2 + _easycom_uni_datetime_picker2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_section + _easycom_uni_datetime_picker)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "reservation",
  setup(__props) {
    const reservation = common_vendor.reactive({
      request: "",
      address: "",
      salary: 0,
      workTime: ""
    });
    const submit = async () => {
      const { status } = await apis_reservationApis.NewReservation(reservation);
      if (status)
        clear();
    };
    const clear = () => {
      reservation.request = "", reservation.address = "", reservation.salary = 0, reservation.workTime = "";
    };
    common_vendor.onShow(() => {
      hooks_RouteIntercept.RouteIntercept();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => reservation.request = $event),
        b: common_vendor.p({
          trim: "all",
          placeholder: "请输入内容",
          modelValue: reservation.request
        }),
        c: common_vendor.p({
          title: "服务内容",
          subTitle: "介绍你的需求,更好找到优质服务",
          padding: true
        }),
        d: common_vendor.o(($event) => reservation.address = $event),
        e: common_vendor.p({
          trim: "all",
          placeholder: "请输入内容",
          modelValue: reservation.address
        }),
        f: common_vendor.p({
          title: "地址",
          subTitle: "填写您的地址",
          padding: true
        }),
        g: common_vendor.o(($event) => reservation.salary = $event),
        h: common_vendor.p({
          type: "number",
          trim: "all",
          placeholder: "请输入内容",
          modelValue: reservation.salary
        }),
        i: common_vendor.p({
          title: "薪水",
          subTitle: "写出您提供的报酬 单位:元",
          padding: true
        }),
        j: common_vendor.p({
          title: "工作时间"
        }),
        k: common_vendor.o(($event) => reservation.workTime = $event),
        l: common_vendor.p({
          type: "datetime",
          modelValue: reservation.workTime
        }),
        m: common_vendor.o(clear),
        n: common_vendor.o(submit)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-62da1e1c"], ["__file", "D:/HBuilderX/for_nest/pages/reservation/reservation.vue"]]);
wx.createPage(MiniProgramPage);
