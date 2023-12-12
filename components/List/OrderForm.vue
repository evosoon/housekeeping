<template>
	<view>
		<view class="form">
			<uni-forms :modelValue="formData" :rules="Rules" ref="FormData">
				<uni-forms-item label="工作内容" name="work" required>
					<uni-easyinput v-model="formData.work" placeholder="请输入工作内容" />
				</uni-forms-item>
				<uni-forms-item label="工作时间" required>
					<uni-datetime-picker type="datetime" v-model="formData.workTime"/>
				</uni-forms-item>
				<uni-forms-item label="地址" name="address" required>
					<uni-easyinput v-model="formData.address" placeholder="请输入地址" />
				</uni-forms-item>
				<uni-forms-item label="薪资" name="salary" required>
					<uni-easyinput v-model="formData.salary" placeholder="请输入薪资" />
				</uni-forms-item>
				<uni-forms-item label="要求" name="experience">
					<uni-easyinput type="textarea" v-model="formData.request" placeholder="请输入工作经历" />
				</uni-forms-item>
				<uni-forms-item label="备注" name="remark">
					<uni-easyinput type="textarea" v-model="formData.remark" placeholder="请输入自我评价" />
				</uni-forms-item>
			</uni-forms>
		</view>
		<view class="submit">
			<button class="btn" type="primary" @click="submit">发布订单</button>
			<!-- <button class="btn" type="primary" @click="submit">存为草稿</button> -->
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
	
	import {AddReservation} from '../../apis/reservationApis'
	const props = defineProps({
		//子组件接收父组件传递过来的值
		formData: Object,
	})
	//使用父组件传递过来的值
	const {
		formData
	} = toRefs(props)

	
	//校验规则
	const Rules = reactive({
		work: {
			rules: [{
				required: true,
				errorMessage: '工作内容不能为空'
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
				errorMessage: '薪资不能为空'
			}, {
				format: 'number',
				errorMessage: '薪资必须是数字'
			}]
		}
	})

	const FormData = ref(null)

	const submit = () => {
		FormData.value.validate().then(res => {
			console.log("成功", formData.value)
			AddReservation(formData.value.work,formData.value.address,parseInt(formData.value.salary),formData.value.workTime)
		}).catch(err => {})
	}
	
</script>

<style scoped>
	.form {
		margin-top: 30upx;
		padding: 15px;
		background-color: #fff;
	}

	.btn{
		width: 80%;
	}
	.submit{
		display: flex;
		flex-direction: row;
	}
	.btn{
		width: 40%;
	}
</style>