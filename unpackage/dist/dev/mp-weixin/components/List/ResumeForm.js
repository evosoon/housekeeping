"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_resumeApis = require("../../apis/resumeApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_checkbox2 + _easycom_uni_data_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_checkbox + _easycom_uni_data_picker + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "ResumeForm",
  props: {
    //子组件接收父组件传递过来的值
    formData: Object,
    ischange: Number
  },
  setup(__props) {
    const props = __props;
    const {
      formData,
      ischange
    } = common_vendor.toRefs(props);
    const Rules = common_vendor.reactive({
      age: {
        rules: [{
          required: true,
          errorMessage: "年龄不能为空"
        }, {
          format: "number",
          errorMessage: "年龄必须是数字"
        }]
      },
      address: {
        rules: [{
          required: true,
          errorMessage: "地址不能为空"
        }]
      },
      salary: {
        rules: [{
          required: true,
          errorMessage: "期望薪资不能为空"
        }, {
          format: "number",
          errorMessage: "期望薪资必须是数字"
        }]
      },
      experience: {
        rules: [{
          required: true,
          errorMessage: "工作经历不能为空"
        }]
      },
      introduction: {
        rules: [{
          required: true,
          errorMessage: "自我评价不能为空"
        }]
      }
    });
    const sexs = common_vendor.reactive([{
      "value": "男",
      "text": "男"
    }, {
      "value": "女",
      "text": "女"
    }]);
    const professions = common_vendor.reactive([{
      text: "日常保洁",
      value: "日常保洁"
    }, {
      text: "管道疏通",
      value: "管道疏通"
    }, {
      text: "数码维修",
      value: "数码维修"
    }, {
      text: "房屋维修",
      value: "房屋维修"
    }, {
      text: "上门安装",
      value: "上门安装"
    }, {
      text: "便民服务",
      value: "便民服务"
    }]);
    const FormData = common_vendor.ref(null);
    const onchange = (e) => {
      formData.profession = e.detail.value[0].text;
    };
    const submit = (isshow) => {
      FormData.value.validate().then((res) => {
        console.log("成功", formData.value);
        if (!isshow) {
          apis_resumeApis.AddResume(formData.value.profession, formData.value.experience, formData.value.salary, "草稿").then((res2) => {
            console.log(res2);
          });
        } else {
          apis_resumeApis.AddResume(formData.value.profession, formData.value.experience, formData.value.salary, "发布");
        }
      }).catch((err) => {
      });
    };
    const change = () => {
      FormData.value.validate().then((res) => {
        console.log("成功", formData.value);
        apis_resumeApis.updateResume(1, formData.value.profession, formData.value.experience, formData.value.salary).then(
          (res2) => {
            console.log(res2);
          }
        );
      }).catch((err) => {
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => common_vendor.unref(formData).age = $event),
        b: common_vendor.p({
          placeholder: "请输入年龄",
          modelValue: common_vendor.unref(formData).age
        }),
        c: common_vendor.p({
          label: "年龄",
          name: "age",
          required: true
        }),
        d: common_vendor.o(($event) => common_vendor.unref(formData).sex = $event),
        e: common_vendor.p({
          localdata: sexs,
          modelValue: common_vendor.unref(formData).sex
        }),
        f: common_vendor.p({
          label: "性别",
          required: true
        }),
        g: common_vendor.o(($event) => common_vendor.unref(formData).address = $event),
        h: common_vendor.p({
          placeholder: "请输入地址",
          modelValue: common_vendor.unref(formData).address
        }),
        i: common_vendor.p({
          label: "地址",
          name: "address",
          required: true
        }),
        j: common_vendor.o(onchange),
        k: common_vendor.o(($event) => common_vendor.unref(formData).profession = $event),
        l: common_vendor.p({
          localdata: professions,
          ["popup-title"]: "请选择工种",
          ["clear-icon"]: false,
          modelValue: common_vendor.unref(formData).profession
        }),
        m: common_vendor.p({
          label: "工种",
          required: true
        }),
        n: common_vendor.o(($event) => common_vendor.unref(formData).salary = $event),
        o: common_vendor.p({
          placeholder: "请输入期望薪资",
          modelValue: common_vendor.unref(formData).salary
        }),
        p: common_vendor.p({
          label: "薪资",
          name: "salary",
          required: true
        }),
        q: common_vendor.o(($event) => common_vendor.unref(formData).exprience = $event),
        r: common_vendor.p({
          type: "textarea",
          placeholder: "请输入工作经历",
          modelValue: common_vendor.unref(formData).exprience
        }),
        s: common_vendor.p({
          label: "工作经历",
          name: "experience",
          required: true
        }),
        t: common_vendor.o(($event) => common_vendor.unref(formData).introduction = $event),
        v: common_vendor.p({
          type: "textarea",
          placeholder: "请输入自我评价",
          modelValue: common_vendor.unref(formData).introduction
        }),
        w: common_vendor.p({
          label: "自我评价",
          name: "introduction",
          required: true
        }),
        x: common_vendor.sr(FormData, "fd4a5b1e-0", {
          "k": "FormData"
        }),
        y: common_vendor.p({
          modelValue: common_vendor.unref(formData),
          rules: Rules
        }),
        z: !common_vendor.unref(ischange)
      }, !common_vendor.unref(ischange) ? {
        A: common_vendor.o(($event) => submit(0))
      } : {}, {
        B: !common_vendor.unref(ischange)
      }, !common_vendor.unref(ischange) ? {
        C: common_vendor.o(($event) => submit(1))
      } : {}, {
        D: common_vendor.unref(ischange)
      }, common_vendor.unref(ischange) ? {
        E: common_vendor.o(change)
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fd4a5b1e"], ["__file", "D:/HBuilderX/for_nest/components/List/ResumeForm.vue"]]);
wx.createComponent(Component);
