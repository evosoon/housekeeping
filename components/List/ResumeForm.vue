<template>
	<view>
		<view class="form">
			<uni-forms :modelValue="formData" :rules="Rules" ref="FormData">
				<uni-forms-item label="年龄" name="age" required>
					<uni-easyinput v-model="formData.age" placeholder="请输入年龄" />
				</uni-forms-item>
				<uni-forms-item label="性别" required>
					<uni-data-checkbox v-model="formData.sex" :localdata="sexs" />
				</uni-forms-item>
				<uni-forms-item label="地址" name="address" required>
					<uni-easyinput v-model="formData.address" placeholder="请输入地址" />
				</uni-forms-item>
				<uni-forms-item label="工种" required>
					<uni-data-picker :localdata="professions" popup-title="请选择工种" @change="onchange"
						v-model="formData.profession" :clear-icon='false'></uni-data-picker>
				</uni-forms-item>
				<uni-forms-item label="薪资" name="salary" required>
					<uni-easyinput v-model="formData.salary" placeholder="请输入期望薪资" />
				</uni-forms-item>
				<uni-forms-item label="工作经历" name="experience" required>
					<uni-easyinput type="textarea" v-model="formData.exprience" placeholder="请输入工作经历" />
				</uni-forms-item>
				<uni-forms-item label="自我评价" name="introduction" required>
					<uni-easyinput type="textarea" v-model="formData.introduction" placeholder="请输入自我评价" />
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="submit">
			<button class="btn" type="primary" @click="submit(0)" v-if="!ischange">存为草稿</button>
			<button class="btn" type="primary" @click="submit(1)" v-if="!ischange">保存简历</button>
			<button class="btn" type="primary" @click="change" v-if="ischange">确认修改</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		toRefs,
		defineProps
	} from 'vue'

	import {
		AddResume,
		updateResume
	} from "../../apis/resumeApis"
	const props = defineProps({
		//子组件接收父组件传递过来的值
		formData: Object,
		ischange: Number
	})
	//使用父组件传递过来的值
	const {
		formData,
		ischange
	} = toRefs(props)

	//校验规则
	const Rules = reactive({
		age: {
			rules: [{
				required: true,
				errorMessage: '年龄不能为空'
			}, {
				format: 'number',
				errorMessage: '年龄必须是数字'
			}]
		},
		address: {
			rules: [{
				required: true,
				errorMessage: '地址不能为空'
			}]
		},
		salary: {
			rules: [{
				required: true,
				errorMessage: '期望薪资不能为空'
			}, {
				format: 'number',
				errorMessage: '期望薪资必须是数字'
			}]
		},
		experience: {
			rules: [{
				required: true,
				errorMessage: '工作经历不能为空'
			}]
		},
		introduction: {
			rules: [{
				required: true,
				errorMessage: '自我评价不能为空'
			}]
		}
	})


	const sexs = reactive([{
		"value": "男",
		"text": '男'
	}, {
		"value": "女",
		"text": '女'
	}])
	const professions = reactive([{
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
	}])

	const FormData = ref(null)

	const onchange = (e) => {
		formData.profession = e.detail.value[0].text
	}


	const submit = (isshow) => {
		FormData.value.validate().then(res => {
			console.log("成功", formData.value)
			if (!isshow) {
				AddResume(formData.value.profession, formData.value.experience, formData.value.salary, "草稿")
					.then(res => {
						console.log(res)
					})
			} else {
				AddResume(formData.value.profession, formData.value.experience, formData.value.salary, "发布")
			}
		}).catch(err => {})
	}
	const change = () => {
		FormData.value.validate().then(res => {
			console.log("成功", formData.value)
			updateResume(1,formData.value.profession, formData.value.experience, formData.value.salary).then(
				res => {
					console.log(res)
				})

		}).catch(err => {})
	}
</script>

<style scoped>
	.form {
		margin-top: 30upx;
		padding: 15px;
		background-color: #fff;
	}

	.submit {
		display: flex;
		flex-direction: row;
	}
</style>