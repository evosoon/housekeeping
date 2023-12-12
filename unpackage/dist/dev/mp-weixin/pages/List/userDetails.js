"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_resumeApis = require("../../apis/resumeApis.js");
const apis_chooseApis = require("../../apis/chooseApis.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (Evaluate + _easycom_uni_goods_nav)();
}
const Evaluate = () => "../../components/List/Evaluate.js";
const _sfc_main = {
  __name: "userDetails",
  setup(__props) {
    const userId = common_vendor.ref("");
    const userdetails = common_vendor.ref({});
    const options = common_vendor.ref([{
      icon: "home",
      text: "首页"
    }]);
    const buttonGroup = common_vendor.ref([{
      text: "立即购买",
      backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
      color: "#fff"
    }]);
    const buttonClick = (e) => {
      apis_chooseApis.chooseWorker(userId.value).then((res) => {
      });
    };
    const onClick = (e) => {
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    };
    common_vendor.onLoad((option) => {
      userId.value = option.userid;
      apis_resumeApis.ResumeDetails(userId.value).then((res) => {
        userdetails.value = res.data;
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_imgs_baseImg.baseImg),
        b: common_vendor.t(userdetails.value.introduction),
        c: common_vendor.t(userdetails.value.exprience),
        d: common_vendor.t(userdetails.value.salary),
        e: common_vendor.o(onClick),
        f: common_vendor.o(buttonClick),
        g: common_vendor.p({
          fill: true,
          options: options.value,
          buttonGroup: buttonGroup.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-62e484ce"], ["__file", "D:/HBuilderX/for_nest/pages/List/userDetails.vue"]]);
wx.createPage(MiniProgramPage);
