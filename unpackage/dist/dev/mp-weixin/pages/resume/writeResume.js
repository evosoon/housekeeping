"use strict";
const common_vendor = require("../../common/vendor.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
const apis_resumeApis = require("../../apis/resumeApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_section)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "writeResume",
  setup(__props) {
    const resume = common_vendor.reactive({
      exprience: "",
      introduction: "",
      salary: 0,
      state: ""
    });
    const submit = async () => {
      const { status } = await apis_resumeApis.NewResume(resume);
      if (status)
        clear();
    };
    const clear = () => {
      resume.exprience = "", resume.introduction = "", resume.salary = 0, resume.state = "";
    };
    common_vendor.onShow(() => {
      hooks_RouteIntercept.RouteIntercept();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => resume.introduction = $event),
        b: common_vendor.p({
          trim: "all",
          placeholder: "请输入内容",
          modelValue: resume.introduction
        }),
        c: common_vendor.p({
          title: "简介",
          subTitle: "介绍一下自己,找到心仪的工作",
          padding: true
        }),
        d: common_vendor.o(($event) => resume.exprience = $event),
        e: common_vendor.p({
          trim: "all",
          placeholder: "请输入内容",
          modelValue: resume.exprience
        }),
        f: common_vendor.p({
          title: "工作经验",
          subTitle: "写出你异于常人的经验",
          padding: true
        }),
        g: common_vendor.o(($event) => resume.salary = $event),
        h: common_vendor.p({
          type: "number",
          trim: "all",
          placeholder: "请输入内容",
          modelValue: resume.salary
        }),
        i: common_vendor.p({
          title: "薪水",
          subTitle: "写出您提供的报酬 单位:元",
          padding: true
        }),
        j: common_vendor.o(clear),
        k: common_vendor.o(submit)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ba2736b8"], ["__file", "D:/HBuilderX/for_nest/pages/resume/writeResume.vue"]]);
wx.createPage(MiniProgramPage);
