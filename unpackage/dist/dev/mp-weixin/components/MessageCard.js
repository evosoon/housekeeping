"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "MessageCard",
  props: ["message"],
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.message.title),
        b: common_vendor.t(__props.message.tab),
        c: __props.message.status
      }, __props.message.status ? {} : {}, {
        d: common_vendor.t(__props.message.data)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3fdf58cb"], ["__file", "D:/HBuilderX/for_nest/components/MessageCard.vue"]]);
wx.createComponent(Component);
