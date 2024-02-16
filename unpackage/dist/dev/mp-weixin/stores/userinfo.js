"use strict";
const common_vendor = require("../common/vendor.js");
const utils_baseUrl = require("../utils/baseUrl.js");
const useUserInfoStore = common_vendor.defineStore("user", {
  state: () => {
    return {
      id: "",
      username: "",
      nickname: "",
      email: "",
      userPic: "",
      age: "",
      createTime: "",
      gender: "",
      number: "",
      roleId: "",
      updateTime: ""
    };
  },
  // 开启后对 state 的数据读写都将持久化
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
    changeInfo(obj) {
      this.id = obj.id;
      this.username = obj.username;
      this.nickname = obj.nickname;
      this.email = obj.email;
      if (obj.userPic)
        this.userPic = `${utils_baseUrl.baseUrl}/static/upload/${obj.userPic}`;
      this.age = obj.age;
      this.createTime = obj.createTime;
      this.gender = obj.gender;
      this.number = obj.number;
      this.roleId = obj.roleId;
      this.updateTime = obj.updateTime;
    },
    clear() {
      this.id = "";
      this.username = "";
      this.nickname = "";
      this.email = "";
      this.userPic = "";
      this.age = "";
      this.createTime = "";
      this.gender = "";
      this.number = "";
      this.roleId = "";
      this.updateTime = "";
    }
  }
});
exports.useUserInfoStore = useUserInfoStore;
