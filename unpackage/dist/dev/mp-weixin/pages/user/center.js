"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
const stores_userinfo = require("../../stores/userinfo.js");
require("../../apis/userApis2.js");
require("../../utils/baseUrl.js");
require("../../utils/http.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "center",
  setup(__props) {
    const changeAvatar = common_vendor.ref(false);
    function changePicture(event) {
      console.log(1);
      if (event.target.files[0]) {
        event.target.files[0];
      }
    }
    const Info = stores_userinfo.useUserInfoStore();
    function jump(url) {
      common_vendor.index.redirectTo({
        url
      });
    }
    const isEdit = common_vendor.ref(false);
    const setIsEdit = () => {
      if (!isEdit.value)
        getElementScoollTop();
      isEdit.value = !isEdit.value;
    };
    function getElementScoollTop() {
      common_vendor.index.createSelectorQuery().select(".Box").boundingClientRect((data) => {
        common_vendor.index.createSelectorQuery().select(".JumpView").boundingClientRect((res) => {
          common_vendor.index.pageScrollTo({
            duration: 0,
            //过渡时间必须为0，uniapp bug，否则运行到手机会报错
            scrollTop: res.top - data.top - 50
          });
        }).exec();
      }).exec();
    }
    common_vendor.onShow(() => {
      hooks_RouteIntercept.RouteIntercept();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_vendor.t(common_vendor.unref(Info).nickname),
        c: common_vendor.t(isEdit.value ? "取消编辑" : "编辑信息"),
        d: common_vendor.o(setIsEdit),
        e: common_vendor.unref(Info).username
      }, common_vendor.unref(Info).username ? {
        f: common_vendor.t(common_vendor.unref(Info).username)
      } : {}, {
        g: common_vendor.unref(Info).email
      }, common_vendor.unref(Info).email ? {
        h: common_vendor.t(common_vendor.unref(Info).email)
      } : {}, {
        i: common_vendor.unref(Info).username
      }, common_vendor.unref(Info).username ? {
        j: common_vendor.p({
          type: "paperplane",
          size: "16"
        })
      } : {}, {
        k: common_vendor.p({
          type: "heart",
          color: "gray",
          size: "16"
        }),
        l: common_vendor.p({
          type: "star",
          color: "gray",
          size: "16"
        }),
        m: common_vendor.p({
          type: "notification",
          color: "gray",
          size: "16"
        }),
        n: !changeAvatar.value
      }, !changeAvatar.value ? {
        o: common_vendor.o(($event) => !changeAvatar.value)
      } : {}, {
        p: !changeAvatar.value
      }, !changeAvatar.value ? {
        q: common_vendor.o(changePicture)
      } : {}, {
        r: common_vendor.t(isEdit.value ? "编辑资料" : "基本信息"),
        s: common_vendor.t(common_vendor.unref(Info).username),
        t: !isEdit.value,
        v: isEdit.value ? 1 : "",
        w: common_vendor.unref(Info).nickname,
        x: !isEdit.value ? 1 : "",
        y: !isEdit.value,
        z: isEdit.value ? 1 : "",
        A: common_vendor.unref(Info).nickname,
        B: !isEdit.value ? 1 : "",
        C: !isEdit.value,
        D: isEdit.value ? 1 : "",
        E: common_vendor.unref(Info).nickname ? common_vendor.unref(Info).nickname : "暂无内容",
        F: !isEdit.value ? 1 : "",
        G: !isEdit.value,
        H: isEdit.value ? 1 : "",
        I: common_vendor.unref(Info).phone_number ? common_vendor.unref(Info).phone_number : "暂无内容",
        J: !isEdit.value ? 1 : "",
        K: !isEdit.value,
        L: isEdit.value ? 1 : "",
        M: common_vendor.unref(Info).phone_number ? common_vendor.unref(Info).phone_number : "暂无内容",
        N: !isEdit.value ? 1 : "",
        O: common_vendor.t(common_vendor.unref(Info).email),
        P: isEdit.value
      }, isEdit.value ? {
        Q: common_vendor.o(setIsEdit)
      } : {}, {
        R: isEdit.value
      }, isEdit.value ? {
        S: common_vendor.o(($event) => jump("/pages/public/setting"))
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ba03e1e9"], ["__file", "D:/HBuilderX/for_nest/pages/user/center.vue"]]);
wx.createPage(MiniProgramPage);
