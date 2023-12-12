"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  MessageCard();
}
const MessageCard = () => "../../components/MessageCard.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "messageList",
  setup(__props) {
    const message = common_vendor.reactive([
      {
        id: 1,
        title: "预约成功",
        tab: "系统消息",
        data: "您的身份信息更新成功",
        status: 0
      },
      {
        id: 2,
        title: "预约成功",
        tab: "个人消息",
        data: "您预约的 2023年12月1日的服务已签约，服务人员 @李大婶",
        status: 0
      },
      {
        id: 3,
        title: "预约成功",
        tab: "个人消息",
        data: "您预约的 2023年12月1日的服务已签约，服务人员 @李大婶",
        status: 0
      },
      {
        id: 4,
        title: "预约成功",
        tab: "订单消息",
        data: "您预约的 2023年12月1日的服务已签约，服务人员 @李大婶",
        status: 1
      },
      {
        id: 5,
        title: "预约成功",
        tab: "系统消息",
        data: "您预约的 2023年12月1日的服务已签约，服务人员 @李大婶",
        status: 1
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(message, (item, k0, i0) => {
          return {
            a: "5747b019-0-" + i0,
            b: common_vendor.p({
              message: item
            }),
            c: item.id
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5747b019"], ["__file", "D:/HBuilderX/for_nest/pages/user/messageList.vue"]]);
wx.createPage(MiniProgramPage);
