"use strict";
const common_vendor = require("../common/vendor.js");
const utils_baseUrl = require("../utils/baseUrl.js");
const useUserInfoStore = common_vendor.defineStore("userinfo", {
  state: () => {
    return {
      id: "",
      username: "",
      nickname: "",
      email: "",
      user_pic: ""
    };
  },
  // 开启后对 state 的数据读写都将持久化
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    changeInfo(obj) {
      this.username = obj.username;
      this.nickname = obj.nickname;
      this.email = obj.email;
      if (obj.user_pic)
        this.user_pic = utils_baseUrl.baseUrl + obj.user_pic;
    },
    clear() {
      this.username = "";
      this.nickname = "";
      this.email = "";
      this.user_pic = "";
    }
  }
});
exports.useUserInfoStore = useUserInfoStore;
