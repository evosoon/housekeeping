"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "LabelCard",
  setup(__props) {
    const cardColor = [{
      backgroundColor: "#d7d5ff"
    }, {
      backgroundColor: "#ffffdd"
    }, {
      backgroundColor: "#c2ffe1"
    }, {
      backgroundColor: "#f1c7ff"
    }, {
      backgroundColor: "#ffe1c2"
    }, {
      backgroundColor: "#ffc5c6"
    }];
    const serve = common_vendor.reactive([
      {
        id: 0,
        content: "日常保洁",
        synopsis: "洁净 舒适 爱家"
      },
      {
        id: 1,
        content: "管道疏通",
        synopsis: "便捷 实时 响应"
      },
      {
        id: 2,
        content: "数码维修",
        synopsis: "专业 方便 快捷"
      },
      {
        id: 3,
        content: "房屋维修",
        synopsis: "快速 贴心 保障"
      },
      {
        id: 4,
        content: "上门安装",
        synopsis: "服务 迅速 放心"
      },
      {
        id: 5,
        content: "便民服务",
        synopsis: "跑腿 搬重 回收"
      }
    ]);
    const particulars = (content) => {
      common_vendor.index.navigateTo({
        url: "/pages/List/particulars"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(serve, (item, index, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: common_vendor.t(item.synopsis),
            c: common_vendor.s(cardColor[index]),
            d: common_vendor.o(($event) => particulars(item.content), item.id),
            e: item.id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-591777fe"], ["__file", "D:/HBuilderX/for_nest/components/Home/LabelCard.vue"]]);
wx.createComponent(Component);
