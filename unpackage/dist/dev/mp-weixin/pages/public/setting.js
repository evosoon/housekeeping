"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_userinfo = require("../../stores/userinfo.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  _easycom_uni_list_item2();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  _easycom_uni_list_item();
}
const _sfc_main = {
  __name: "setting",
  setup(__props) {
    const Info = stores_userinfo.useUserInfoStore();
    function leave() {
      common_vendor.index.showModal({
        title: "提示",
        content: "确认退出登录",
        success: (res) => {
          if (res.confirm) {
            out();
          }
        }
      });
    }
    function out() {
      common_vendor.index.removeStorageSync("access_token");
      common_vendor.index.removeStorageSync("refresh_token");
      Info.clear();
      common_vendor.index.switchTab({
        url: "/pages/home/user"
      });
    }
    function jump(url) {
      common_vendor.index.redirectTo({
        url
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "资料编辑",
          to: `/pages/public/about`
        }),
        b: common_vendor.p({
          title: "绑定邮箱",
          to: `/pages/public/about`
        }),
        c: common_vendor.p({
          title: "密码修改",
          to: `/pages/public/about`
        }),
        d: common_vendor.p({
          title: "意见反馈",
          to: `/pages/public/about`
        }),
        e: common_vendor.p({
          title: "隐私政策",
          to: `/pages/public/about`
        }),
        f: common_vendor.p({
          title: "关于我们",
          to: `/pages/public/about`
        }),
        g: common_vendor.p({
          title: "服务条款",
          to: `/pages/public/protocol`
        }),
        h: !common_vendor.unref(Info).username
      }, !common_vendor.unref(Info).username ? {
        i: common_vendor.o(($event) => jump("/pages/login/login")),
        j: common_vendor.p({
          title: "加入我们",
          rightText: "登录 / 注册",
          clickable: true
        })
      } : {}, {
        k: common_vendor.unref(Info).username
      }, common_vendor.unref(Info).username ? {
        l: common_vendor.o(leave),
        m: common_vendor.p({
          title: "退出登录",
          clickable: true
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5fed78fb"], ["__file", "D:/HBuilderX/for_nest/pages/public/setting.vue"]]);
wx.createPage(MiniProgramPage);
