"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  resumeform();
}
const resumeform = () => "../../components/List/ResumeForm.js";
const _sfc_main = {
  __name: "createResume",
  setup(__props) {
    const formData = common_vendor.ref({
      age: "",
      //年龄
      sex: "",
      //性别
      profession: "",
      //工种
      address: "",
      //地址
      salary: "",
      //期望薪资
      experience: "",
      //工作经历
      introduction: ""
      //自我评价
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-02a549ae"], ["__file", "D:/HBuilderX/for_nest/pages/List/createResume.vue"]]);
wx.createPage(MiniProgramPage);
