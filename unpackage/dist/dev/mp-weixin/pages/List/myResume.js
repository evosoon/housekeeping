"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_resumeApis = require("../../apis/resumeApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  (_easycom_uni_nav_bar2 + _easycom_uni_segmented_control2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_segmented_control + resumes)();
}
const resumes = () => "../../components/List/resume.js";
const _sfc_main = {
  __name: "myResume",
  setup(__props) {
    let items = common_vendor.reactive(["我的简历", "草稿箱"]);
    let current = common_vendor.ref(0);
    const onClickItem = (e) => {
      current.value = e.currentIndex;
    };
    common_vendor.ref("新建简历");
    const Resume = common_vendor.ref([]);
    const leave = () => {
      common_vendor.index.navigateBack();
    };
    const changemode = () => {
      common_vendor.index.navigateTo({
        url: "/pages/List/createResume"
      });
    };
    common_vendor.onMounted(() => {
      apis_resumeApis.getResumeList(1, 10).then((res) => {
        console.log(res);
        Resume.value = res.data.items;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => leave()),
        b: common_vendor.o(changemode),
        c: common_vendor.p({
          ["left-icon"]: "left",
          ["right-icon"]: "plusempty",
          title: "简历",
          border: false
        }),
        d: common_vendor.o(onClickItem),
        e: common_vendor.p({
          current: common_vendor.unref(current),
          values: common_vendor.unref(items),
          styleType: "text",
          activeColor: "#4cd964"
        }),
        f: common_vendor.p({
          Resume: Resume.value
        }),
        g: common_vendor.unref(current) === 0,
        h: common_vendor.p({
          Resume: Resume.value
        }),
        i: common_vendor.unref(current) === 1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-710abd95"], ["__file", "D:/HBuilderX/for_nest/pages/List/myResume.vue"]]);
wx.createPage(MiniProgramPage);
