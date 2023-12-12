<template>
	<view>
		<view class="userdetails">
			<image :src="baseImg" class="goods-pic" align="middle" />
			<h4 class="user_name">test</h4>
		</view>

		<view class="labelview">
			<view class="label">擅长方面：{{userdetails.introduction}}</view>
			<view class="label">工作经历：{{userdetails.exprience}}</view>
			<view class="label">期望薪资：{{userdetails.salary}}</view>
		</view>
		<Evaluate></Evaluate>
		<view class="goods-carts">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" class="nav" />
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
	} from 'vue'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import {ResumeDetails} from '../../apis/resumeApis'
	import {chooseWorker} from '../../apis/chooseApis'
	import Evaluate from "../../components/List/Evaluate.vue"
	import baseImg from '@/utils/imgs/baseImg'
	const userId = ref('')
	const userdetails = ref({})
	const options = ref([{
		icon: 'home',
		text: '首页'
	}])
	const buttonGroup = ref([{
		text: '立即购买',
		backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
		color: '#fff'
	}])

	const buttonClick = (e) => {
		// console.log("111")
		chooseWorker(userId.value).then(res=>{
			// console.log(res)
		})
	}
	const onClick = (e) => {
		uni.reLaunch({
			url: '/pages/home/home'
		})
	}
	onLoad((option) => {
		userId.value = option.userid
		ResumeDetails(userId.value).then(res=>{
			userdetails.value = res.data
		})
	})
</script>

<style scoped>
	.userdetails {
		display: flex;
		padding: 10px 5px;
	}

	.goods-pic {
		width: 80px;
		height: 80px;
		border-radius: 40upx;
		display: block;
		margin: 5upx;
	}

	.user_name {
		padding: 50upx 10upx;
	}

	.labelview {
		border-bottom: 1px solid #f0f0f0;
	}

	.label {
		margin: 10upx 40upx;
	}
	.goods-carts {
			display: flex;
			flex-direction: column;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
		}
</style>