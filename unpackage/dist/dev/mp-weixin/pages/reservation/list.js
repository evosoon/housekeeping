"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list",
  setup(__props) {
    let nowState = common_vendor.ref("已发布");
    const title = [
      { id: 1, title: "已发布", state: "已发布" },
      { id: 1, title: "进行中", state: "进行中" },
      { id: 1, title: "已完成", state: "已完成" }
    ];
    let list = common_vendor.reactive({
      total: 0,
      items: []
    });
    const enter = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/reservation/reservationParticulars?item=" + JSON.stringify(item)
      });
    };
    const getReservation = async (state) => {
      nowState.value = state;
      const { total, items } = await apis_reservationApis.GetReservation({ state, pageNum: 1, pageSize: 10 });
      list.total = total;
      list.items = items;
    };
    common_vendor.onShow(async () => {
      hooks_RouteIntercept.RouteIntercept();
      const { total, items } = await apis_reservationApis.GetReservation({ state: "已发布", pageNum: 1, pageSize: 10 });
      list.total = total;
      list.items = items;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(title, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.unref(nowState) == item.state ? 1 : "",
            c: common_vendor.o(($event) => getReservation(item.state), item.id),
            d: item.id
          };
        }),
        b: !common_vendor.unref(list).total
      }, !common_vendor.unref(list).total ? {} : {}, {
        c: common_vendor.f(common_vendor.unref(list).items, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => enter(item), item.id),
            b: "9c055285-0-" + i0,
            c: common_vendor.p({
              title: item.request,
              ["sub-title"]: item.address,
              extra: item.workTime
            }),
            d: item.id
          };
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9c055285"], ["__file", "D:/HBuilderX/for_nest/pages/reservation/list.vue"]]);
wx.createPage(MiniProgramPage);
