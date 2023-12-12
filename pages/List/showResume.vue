<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar left-icon="left" :right-text="modetext" title="简历" :border="false" @clickLeft="leave()"
				@clickRight="changemode" />
		</view>
		<view v-if="mode">
			<view class="order">
				<image :src="baseImg" class="order-pic" align="middle" />
				<h4 class="order_name">text</h4>
			</view>
			<view class="labelview">
				<view class="salary">￥{{formData.salary}}</view>
				<view class="label">{{formData.profession}}</view>
			</view>
			<uni-card title="服务详情" :isFull="true" class="card" padding="15px">
				<table>
					<tr class="work">
						<td>年龄： </td>
						<td>{{formData.age}}</td>
					</tr>
					<tr class="work">
						<td>性别： </td>
						<td>{{formData.sex}}</td>
					</tr>
					<tr class="work">
						<td>期望薪水：</td>
						<td>￥{{formData.salary}}</td>
					</tr>
					<tr class="work">
						<td>地址：</td>
						<td>{{formData.address}}</td>
					</tr>
					<tr class="work">
						<td>工作经历：</td>
						<td>{{formData.exprience}}</td>
					</tr>
					<tr class="work">
						<td>自我评价：</td>
						<td>{{formData.introduction}}</td>
					</tr>
				</table>
			</uni-card>
		</view>
		<Resumeform :formData="formData" :ischange="ischange" v-if="!mode"></Resumeform>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import Resumeform from '../../components/List/ResumeForm.vue'
	import {
		ResumeDetails
	} from '../../apis/resumeApis'
	import baseImg from '@/utils/imgs/baseImg'
	const mode = ref(true)
	const modetext = ref('修改')
	const userid = ref('')
	const formData = ref({})
	const ischange = ref(1)
	const leave = () => {
		uni.navigateBack();
	}
	const changemode = () => {
		mode.value = !mode.value
		modetext.value = mode.value ? '修改' : "取消"
	}
	onLoad((option) => {
		userid.value = option.userid
		ResumeDetails(userid.value).then(res => {
			formData.value = res.data
		})
	})
</script>

<style scoped>
	.order {
		display: flex;
		padding: 10px 5px;
	}

	.order-pic {
		width: 80px;
		height: 80px;
		border-radius: 40upx;
		display: block;
		margin: 5upx;
	}

	.order_name {
		padding: 50upx 10upx;
	}

	.labelview {
		border-bottom: 1px solid #f0f0f0;
		margin-bottom: 20upx;
	}

	.label {
		margin: 10upx 40upx;
	}

	.salary {
		color: red;
		margin: 10upx 40upx;
		font-size: 20px;
	}
</style>