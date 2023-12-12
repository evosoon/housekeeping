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
      return type.value ? type.value == 1 ? "注册" : "验证码登录" : "用户名登录";
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
        await login();
    }
    async function login() {
      loading.value = true;
      message.value = await apis_loginApis.Login(userInfo, jumpAddress);
      loading.value = false;
    }
    async function register() {
      loading.value = true;
      message.value = await apis_loginApis.Register(userInfo);
      loading.value = false;
    }
    async function sendEmail() {
      if (type.value == 1)
        message.value = await apis_emailApis.SendCode(userInfo.email, 1);
      if (type.value == 2)
        message.value = await apis_emailApis.SendCode(userInfo.email, 3);
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
        d: common_vendor.unref(type) !== 2,
        e: userInfo.nickname,
        f: common_vendor.o(common_vendor.m(($event) => userInfo.nickname = $event.detail.value, {
          trim: true
        })),
        g: common_vendor.unref(type) == 1,
        h: userInfo.password,
        i: common_vendor.o(common_vendor.m(($event) => userInfo.password = $event.detail.value, {
          trim: true
        })),
        j: common_vendor.unref(type) != 2,
        k: userInfo.rePassword,
        l: common_vendor.o(common_vendor.m(($event) => userInfo.rePassword = $event.detail.value, {
          trim: true
        })),
        m: common_vendor.unref(type) == 1,
        n: userInfo.email,
        o: common_vendor.o(common_vendor.m(($event) => userInfo.email = $event.detail.value, {
          trim: true
        })),
        p: common_vendor.o(sendEmail),
        q: common_vendor.unref(type),
        r: userInfo.captcha,
        s: common_vendor.o(common_vendor.m(($event) => userInfo.captcha = $event.detail.value, {
          trim: true
        })),
        t: common_vendor.unref(type),
        v: common_vendor.t(common_vendor.unref(message)),
        w: common_vendor.unref(message) ? 1 : "",
        x: common_vendor.t(common_vendor.unref(loading) ? "loading..." : common_vendor.unref(typeTitle)),
        y: common_vendor.o(submit),
        z: common_vendor.o((...args) => common_vendor.unref(hooks_RouteIntercept.RouteIntercept) && common_vendor.unref(hooks_RouteIntercept.RouteIntercept)(...args)),
        A: common_vendor.o(clear),
        B: common_vendor.unref(type) != 2,
        C: common_vendor.o(($event) => change(2)),
        D: common_vendor.unref(type) != 1,
        E: common_vendor.o(($event) => change(1)),
        F: common_vendor.unref(type) != 0,
        G: common_vendor.o(($event) => change(0))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/HBuilderX/for_nest/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
