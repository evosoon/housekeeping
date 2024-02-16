"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_imgs_baseImg = require("../../utils/imgs/baseImg.js");
const utils_baseUrl = require("../../utils/baseUrl.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ResumeList",
  props: {
    Info: Object
  },
  setup(__props) {
    const props = __props;
    const { Info } = common_vendor.toRefs(props);
    const getPic = common_vendor.computed(() => {
      let path = utils_imgs_baseImg.baseImg;
      if (Info.user_pic)
        path = utils_baseUrl.baseUrl + "/static/uploads" + Info.user_pic;
      return path;
    });
    const jump = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(Info).introduction),
        b: common_vendor.t(common_vendor.unref(Info).salary + " / 次 "),
        c: common_vendor.t(common_vendor.unref(Info).exprience),
        d: common_vendor.unref(getPic),
        e: common_vendor.o(($event) => jump("/pages/user/showUser")),
        f: common_vendor.t(common_vendor.unref(Info).nickname),
        g: common_vendor.t(common_vendor.unref(Info).score),
        h: common_vendor.o(($event) => jump("/pages/user/showUser")),
        i: common_vendor.o(($event) => jump("/pages/resume/resume?item=" + JSON.stringify(common_vendor.unref(Info))))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c4d600f1"], ["__file", "D:/HBuilderX/for_nest/components/Home/ResumeList.vue"]]);
wx.createComponent(Component);
