"use strict";
const common_vendor = require("../../common/vendor.js");
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
  __name: "orderDetails",
  setup(__props) {
    const formData = common_vendor.reactive({
      work: "小杰家喂猫",
      //工作内容
      time: "2023-05-13 14：00：00",
      //工作时间
      address: "天津宁河区翻斗大街翻斗花园二号楼1001室",
      //地址
      salary: 30,
      //薪资
      request: "仅限性别女 工作两年以上",
      //要求
      remark: "好好干，干好了有奖励"
      //备注
    });
    const show = common_vendor.ref(1);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(formData.work),
        b: common_vendor.t(formData.work),
        c: common_vendor.t(formData.time),
        d: common_vendor.t(formData.address),
        e: common_vendor.t(formData.salary),
        f: formData.request
      }, formData.request ? {
        g: common_vendor.t(formData.request)
      } : {}, {
        h: common_vendor.t(formData.remark),
        i: show.value
      }, show.value ? {} : {}, {
        j: show.value
      }, show.value ? {} : {}, {
        k: !show.value
      }, !show.value ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a865c504"], ["__file", "D:/HBuilderX/for_nest/pages/List/orderDetails.vue"]]);
wx.createPage(MiniProgramPage);
