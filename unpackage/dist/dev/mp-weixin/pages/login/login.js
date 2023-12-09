"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_loginApis = require("../../apis/loginApis.js");
const apis_emailApis = require("../../apis/emailApis.js");
require("../../stores/userinfo.js");
const hooks_RouteIntercept = require("../../hooks/RouteIntercept.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    let jumpAddress = "";
    let type = common_vendor.ref(0);
    const typeTitle = common_vendor.computed(() => {
      return type.value ? type.value == 1 ? "注册" : "找回密码" : "登录";
    });
    let loading = common_vendor.ref(false);
    let message = common_vendor.ref("");
    common_vendor.watch(message, (newValue, oldValue) => {
      if (newValue != "")
        setTimeout(() => {
          message.value = "";
        }, 5e3);
    }, { immediate: true });
    const userInfo = common_vendor.reactive({
      username: "",
      nickname: "",
      password: "",
      email: "",
      captcha: ""
    });
    function clear() {
      userInfo.username = "";
      userInfo.nickname = "";
      userInfo.password = "";
      userInfo.rePassword = "";
      userInfo.email = "";
      userInfo.captcha = "";
    }
    function change(val) {
      type.value = val;
      clear();
    }
    async function submit() {
      if (type.value == 0)
        await login();
      if (type.value == 1)
        await register();
      if (type.value == 2)
        await changePassword();
    }
    async function login() {
      loading.value = true;
      message.value = await apis_loginApis.Login(userInfo, jumpAddress);
      loading.value = false;
    }
    async function changePassword() {
      loading.value = true;
      try {
        const data = await apis_loginApis.FindPassword(userInfo);
        if (data.status >= 400) {
          message.value = data.data;
          return;
        } else
          console.log("修改成功");
      } catch (e) {
        console.log(e);
        message.value = "请求失败，检查网络后重试";
      } finally {
        loading.value = false;
      }
    }
    async function register() {
      loading.value = true;
      try {
        const data = await Sign(userInfo);
        if (data.status >= 400) {
          message.value = data.data;
          return;
        }
        message.value = "注册成功";
        type.value = 0;
      } catch (e) {
        console.log(e);
        message.value = "请求失败，检查网络后重试";
      } finally {
        loading.value = false;
      }
    }
    async function sendEmail() {
      try {
        const data = {};
        if (type.value == 1)
          data = await apis_emailApis.SignInCode(userInfo.email);
        if (type.value == 2)
          data = await apis_emailApis.UpdatePasswordCode(userInfo.email);
        if (data.status >= 400) {
          message.value = data.data.data;
          return;
        } else
          message.value = data.data || "发送成功";
      } catch (e) {
        console.log(e);
        message.value = "发送失败";
      } finally {
        loading.value = false;
      }
    }
    common_vendor.onLoad((option) => {
      jumpAddress = option.address;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(typeTitle)),
        b: userInfo.username,
        c: common_vendor.o(common_vendor.m(($event) => userInfo.username = $event.detail.value, {
          trim: true
        })),
        d: common_vendor.unref(type) == 0,
        e: userInfo.username,
        f: common_vendor.o(common_vendor.m(($event) => userInfo.username = $event.detail.value, {
          trim: true
        })),
        g: common_vendor.unref(type) == 1,
        h: userInfo.nickname,
        i: common_vendor.o(common_vendor.m(($event) => userInfo.nickname = $event.detail.value, {
          trim: true
        })),
        j: common_vendor.unref(type) == 1,
        k: userInfo.password,
        l: common_vendor.o(common_vendor.m(($event) => userInfo.password = $event.detail.value, {
          trim: true
        })),
        m: common_vendor.unref(type) != 2,
        n: userInfo.password,
        o: common_vendor.o(common_vendor.m(($event) => userInfo.password = $event.detail.value, {
          trim: true
        })),
        p: common_vendor.unref(type) == 2,
        q: userInfo.rePassword,
        r: common_vendor.o(common_vendor.m(($event) => userInfo.rePassword = $event.detail.value, {
          trim: true
        })),
        s: common_vendor.unref(type) == 1,
        t: userInfo.email,
        v: common_vendor.o(common_vendor.m(($event) => userInfo.email = $event.detail.value, {
          trim: true
        })),
        w: common_vendor.o(sendEmail),
        x: common_vendor.unref(type),
        y: userInfo.captcha,
        z: common_vendor.o(common_vendor.m(($event) => userInfo.captcha = $event.detail.value, {
          trim: true
        })),
        A: common_vendor.unref(type),
        B: common_vendor.t(common_vendor.unref(message)),
        C: common_vendor.unref(message) ? 1 : "",
        D: common_vendor.t(common_vendor.unref(loading) ? "loading..." : common_vendor.unref(typeTitle)),
        E: common_vendor.o(submit),
        F: common_vendor.o((...args) => common_vendor.unref(hooks_RouteIntercept.RouteIntercept) && common_vendor.unref(hooks_RouteIntercept.RouteIntercept)(...args)),
        G: common_vendor.o(clear),
        H: common_vendor.unref(type) != 2,
        I: common_vendor.o(($event) => change(2)),
        J: common_vendor.unref(type) != 1,
        K: common_vendor.o(($event) => change(1)),
        L: common_vendor.unref(type) != 0,
        M: common_vendor.o(($event) => change(0))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/HBuilderX/for_nest/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
