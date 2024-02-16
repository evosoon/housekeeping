"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_userAPis = require("../../apis/userAPis.js");
const apis_emailApis = require("../../apis/emailApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
require("../../stores/userinfo.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "changeInfo",
  setup(__props) {
    const curInstance = common_vendor.getCurrentInstance();
    const flag = common_vendor.ref(0);
    const loading = common_vendor.ref(false);
    const message = common_vendor.ref("");
    const userinfo = common_vendor.reactive({
      email: "",
      password: "",
      captcha: "",
      newPwd: "",
      oldPwd: "",
      rePwd: ""
    });
    const flagTitle = common_vendor.computed(() => {
      return flag.value ? flag.value == 2 ? "更换绑定邮箱" : "修改密码" : "忘记密码";
    });
    common_vendor.computed(() => {
      if (message.value) {
        setTimeout(() => {
          message.value = "";
        }, 5e3);
      }
    });
    function setFlag(value) {
      flag.value = value;
    }
    async function sendEmail() {
      if (flag.value == 1)
        message.value = await apis_emailApis.SendCode(userinfo.email, 3);
      if (flag.value == 2)
        message.value = await apis_emailApis.SendCode(userinfo.email, 4);
    }
    async function submit() {
      loading.value = true;
      if (!flag.value)
        message.value = await apis_userAPis.UpdatePwd(userinfo);
      if (flag.value == 1)
        message.value = await apis_userAPis.ForgetPwd(userinfo);
      if (flag.value == 2)
        message.value = await apis_userAPis.UpdateEmail(userinfo);
      loading.value = false;
    }
    common_vendor.onShow(() => {
      if (curInstance.attrs.type == "pwd")
        flag.value = 0;
      if (curInstance.attrs.type == "email")
        flag.value = 2;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(common_vendor.unref(flagTitle)),
        b: flag.value == 1
      }, flag.value == 1 ? {
        c: userinfo.email,
        d: common_vendor.o(($event) => userinfo.email = $event.detail.value)
      } : {}, {
        e: flag.value == 2
      }, flag.value == 2 ? {
        f: userinfo.email,
        g: common_vendor.o(($event) => userinfo.email = $event.detail.value)
      } : {}, {
        h: flag.value
      }, flag.value ? {
        i: userinfo.captcha,
        j: common_vendor.o(($event) => userinfo.captcha = $event.detail.value),
        k: !userinfo.email,
        l: common_vendor.o(sendEmail)
      } : {}, {
        m: !flag.value
      }, !flag.value ? {
        n: userinfo.oldPwd,
        o: common_vendor.o(($event) => userinfo.oldPwd = $event.detail.value)
      } : {}, {
        p: flag.value != 2
      }, flag.value != 2 ? {
        q: userinfo.newPwd,
        r: common_vendor.o(($event) => userinfo.newPwd = $event.detail.value)
      } : {}, {
        s: flag.value != 2
      }, flag.value != 2 ? {
        t: userinfo.rePwd,
        v: common_vendor.o(($event) => userinfo.rePwd = $event.detail.value)
      } : {}, {
        w: common_vendor.t(loading.value ? "loading..." : "提交"),
        x: loading.value,
        y: common_vendor.o(submit),
        z: common_vendor.t(message.value),
        A: flag.value == 1
      }, flag.value == 1 ? {
        B: common_vendor.o(($event) => setFlag(0))
      } : {}, {
        C: !flag.value
      }, !flag.value ? {
        D: common_vendor.o(($event) => setFlag(1))
      } : {});
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a6ab6c2e"], ["__file", "D:/HBuilderX/for_nest/pages/user/changeInfo.vue"]]);
wx.createPage(MiniProgramPage);
