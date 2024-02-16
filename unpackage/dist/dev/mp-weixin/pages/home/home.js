"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
const apis_resumeApis = require("../../apis/resumeApis.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
const stores_userinfo = require("../../stores/userinfo.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Math) {
  ResumeList();
}
const ResumeList = () => "../../components/Home/ResumeList.js";
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const Info = stores_userinfo.useUserInfoStore();
    let resumeList = common_vendor.reactive({});
    const getResumeList = async () => {
      const { total, items } = await apis_resumeApis.GetResumeList({ pageNum: 1, pageSize: 10 });
      console.log(items);
      resumeList.total = total;
      resumeList.items = items;
    };
    let reservationList = common_vendor.reactive({});
    const getReservationList = async () => {
      const { total, items } = await apis_reservationApis.GetReservation({ state: "已发布", pageNum: 1, pageSize: 10 });
      reservationList.total = total;
      reservationList.items = items;
    };
    common_vendor.onLoad(async () => {
      if (Info && Info.roleId === 2) {
        getReservationList();
      } else {
        await getResumeList();
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_imgs_baseImg.baseImg),
        b: common_vendor.unref(Info).roleId && common_vendor.unref(Info).roleId === 1
      }, common_vendor.unref(Info).roleId && common_vendor.unref(Info).roleId === 1 ? {
        c: common_vendor.f(common_vendor.unref(resumeList).items, (item, k0, i0) => {
          return {
            a: "07e72d3c-0-" + i0,
            b: common_vendor.p({
              Info: item
            }),
            c: common_vendor.t(item)
          };
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/HBuilderX/for_nest/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
