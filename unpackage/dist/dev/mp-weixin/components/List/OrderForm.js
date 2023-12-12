"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_reservationApis = require("../../apis/reservationApis.js");
require("../../utils/http.js");
require("../../utils/baseUrl.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "OrderForm",
  props: {
    //子组件接收父组件传递过来的值
    formData: Object
  },
  setup(__props) {
    const props = __props;
    const {
      formData
    } = common_vendor.toRefs(props);
    const Rules = common_vendor.reactive({
      work: {
        rules: [{
          required: true,
          errorMessage: "工作内容不能为空"
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
          errorMessage: "薪资不能为空"
        }, {
          format: "number",
          errorMessage: "薪资必须是数字"
        }]
      }
    });
    const FormData = common_vendor.ref(null);
    const submit = () => {
      FormData.value.validate().then((res) => {
        console.log("成功", formData.value);
        apis_reservationApis.AddReservation(formData.value.work, formData.value.address, parseInt(formData.value.salary), formData.value.workTime);
      }).catch((err) => {
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => common_vendor.unref(formData).work = $event),
        b: common_vendor.p({
          placeholder: "请输入工作内容",
          modelValue: common_vendor.unref(formData).work
        }),
        c: common_vendor.p({
          label: "工作内容",
          name: "work",
          required: true
        }),
        d: common_vendor.o(($event) => common_vendor.unref(formData).workTime = $event),
        e: common_vendor.p({
          type: "datetime",
          modelValue: common_vendor.unref(formData).workTime
        }),
        f: common_vendor.p({
          label: "工作时间",
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
        j: common_vendor.o(($event) => common_vendor.unref(formData).salary = $event),
        k: common_vendor.p({
          placeholder: "请输入薪资",
          modelValue: common_vendor.unref(formData).salary
        }),
        l: common_vendor.p({
          label: "薪资",
          name: "salary",
          required: true
        }),
        m: common_vendor.o(($event) => common_vendor.unref(formData).request = $event),
        n: common_vendor.p({
          type: "textarea",
          placeholder: "请输入工作经历",
          modelValue: common_vendor.unref(formData).request
        }),
        o: common_vendor.p({
          label: "要求",
          name: "experience"
        }),
        p: common_vendor.o(($event) => common_vendor.unref(formData).remark = $event),
        q: common_vendor.p({
          type: "textarea",
          placeholder: "请输入自我评价",
          modelValue: common_vendor.unref(formData).remark
        }),
        r: common_vendor.p({
          label: "备注",
          name: "remark"
        }),
        s: common_vendor.sr(FormData, "a0fa2e65-0", {
          "k": "FormData"
        }),
        t: common_vendor.p({
          modelValue: common_vendor.unref(formData),
          rules: Rules
        }),
        v: common_vendor.o(submit)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a0fa2e65"], ["__file", "D:/HBuilderX/for_nest/components/List/OrderForm.vue"]]);
wx.createComponent(Component);
