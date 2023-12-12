"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  orderform();
}
const orderform = () => "../../components/List/OrderForm.js";
const _sfc_main = {
  __name: "createOrder",
  setup(__props) {
    const formData = common_vendor.ref({
      work: "",
      //工作内容
      time: "",
      //工作时间
      address: "",
      //地址
      salary: "",
      //薪资
      request: "",
      //要求
      remark: ""
      //备注
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          formData: formData.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilderX/for_nest/pages/List/createOrder.vue"]]);
wx.createPage(MiniProgramPage);
