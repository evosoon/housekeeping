"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_ArraySort = require("../../hooks/ArraySort.js");
const apis_myReservationApis = require("../../apis/myReservationApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  (_easycom_uni_nav_bar2 + _easycom_uni_calendar2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
if (!Math) {
  (_easycom_uni_nav_bar + segmentedcontrol + _easycom_uni_calendar)();
}
const segmentedcontrol = () => "../../components/List/SegmentedControl.js";
const _sfc_main = {
  __name: "schedule",
  setup(__props) {
    common_vendor.onShow(() => {
      selected = hooks_ArraySort.Arraysort(selected, "date", true, true);
    });
    const selected = common_vendor.ref([
      {
        date: "2023-11-15",
        salary: 30,
        info: "王总家打扫卫生",
        address: "天津宁河区翻斗大街翻斗花园二号楼1001室"
      },
      {
        date: "2023-11-18",
        salary: 30,
        info: "锋总家照护锋总",
        address: "天津南开区翻斗大街翻斗花园二号楼1245室"
      },
      {
        date: "2023-11-08",
        salary: 30,
        info: "小杰家喂狗",
        address: "翻斗大街翻斗花园二号楼0564室"
      },
      {
        date: "2023-10-09",
        salary: 30,
        info: "小杰家喂猫",
        address: "翻斗大街翻斗花园二号楼0564室"
      }
    ]);
    const mode = common_vendor.ref(true);
    const modetext = common_vendor.ref("卡片");
    const leave = () => {
      common_vendor.index.navigateBack();
    };
    const changemode = () => {
      mode.value = !mode.value;
      modetext.value = mode.value ? "卡片" : "日历";
    };
    common_vendor.onMounted(() => {
      apis_myReservationApis.workingReservation(1, 10).then((res) => {
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
          title: "标题",
          border: false
        }),
        d: mode.value
      }, mode.value ? {
        e: common_vendor.p({
          selected: selected.value
        })
      } : {}, {
        f: !mode.value
      }, !mode.value ? {
        g: common_vendor.p({
          showMonth: false,
          lunar: true,
          selected: selected.value,
          ["start-date"]: "2019-3-2",
          ["end-date"]: "2019-5-20"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-438d9166"], ["__file", "D:/HBuilderX/for_nest/pages/List/schedule.vue"]]);
wx.createPage(MiniProgramPage);
