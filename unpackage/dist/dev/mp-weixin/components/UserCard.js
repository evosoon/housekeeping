"use strict";
const common_vendor = require("../common/vendor.js");
const utils_imgs_baseImg = require("../utils/imgs/baseImg.js");
if (!Array) {
  const _easycom_uni_list_chat2 = common_vendor.resolveComponent("uni-list-chat");
  _easycom_uni_list_chat2();
}
const _easycom_uni_list_chat = () => "../uni_modules/uni-list/components/uni-list-chat/uni-list-chat.js";
if (!Math) {
  _easycom_uni_list_chat();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "UserCard",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "uni-app",
          avatar: common_vendor.unref(utils_imgs_baseImg.baseImg),
          note: "您收到一条新的消息",
          time: "2020-02-02 20:20",
          ["badge-positon"]: "left",
          ["badge-text"]: "dot"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1913f9c0"], ["__file", "D:/HBuilderX/for_nest/components/UserCard.vue"]]);
wx.createComponent(Component);
