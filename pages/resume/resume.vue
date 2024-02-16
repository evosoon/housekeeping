<template>
	<view class="box">
		<view class="user flex" @click.stop="jump('/pages/user/showUser?item='+JSON.stringify(reservation))">
			<image class="user-pic" :src="baseImg" mode="aspectFill"></image>
			<view class="">
				<view class="nickname">昵称：{{reservation.nickname}}</view>
				<view class="email">邮箱：{{reservation.email}}</view>
			</view>
		
		</view>
		<view class="type flex">
			<view class="type-item" v-for='item in work_type' :key="item" >{{item.workType}}</view>
		</view>
		<view class="work">
			<view class="info">性别：{{reservation.gender}}</view>
			<view class="info">年龄：{{reservation.age}}</view>
			<view class="info">期望薪资：{{reservation.salary}}</view>
			
			<view class="info">评分：{{reservation.score | 5 }} star</view>
		</view>
		<view class="work">
			<view class="info">介绍：{{reservation.introduction}}</view>
			<view class="info">经验：{{reservation.exprience}}</view>
			<view class="info" v-if="reservation.detail">详细介绍：{{reservation.detail}}</view>
		</view>
		
	</view>
	{{reservation}}
</template>

<script lang="ts" setup>
	import { onShow,onLoad } from '@dcloudio/uni-app'
	import {reactive,ref} from 'vue'
	import {useWorkInfoStore} from '@/stores/workinfo.ts'
	import {baseUrl} from '@/utils/baseUrl' 
	import baseImg from '@/utils/imgs/baseImg'
	import {ResumeDetails} from '@/apis/resumeApis'
	const WorkInfoStore = useWorkInfoStore()
	const reservation = ref({})
	const user_pic = ref()
	const work_type = ref()
	const jump = (url) => {
		uni.navigateTo({
			url
		})
	}
	onLoad((option)=>{
		reservation.value = JSON.parse(option.item)
		work_type.value = reservation.value.work_type.split(',').reduce((pre,item)=>{
			return [...pre,WorkInfoStore.workTypeList[item-0]]
		},[])
		user_pic.value = `${baseUrl}/static/upload/${reservation.value.user_pic}` | baseImg
		console.log(user_pic.value)
	})

</script>

<style lang="scss" scoped>
	.box{
		.user{
			margin: 30rpx 10rpx;
			.user-pic{
				width: 150rpx;
				height: 150rpx;
			}
			.email,.nickname{
				height: 75rpx;
				line-height: 75rpx;
				padding: 0 20rpx;
			}
			
		}
		.type{
			padding: 20rpx;
			line-height: 50rpx;
			.type-item{
				flex: 1;
				text-align: center;
				padding: 10rpx;
				border-radius: 10rpx;
				background-color: #e2e2e2;
				margin: 10rpx 20rpx;
			}
		}
	.work{
		border-top: 50rpx solid #f3f3f3;
		.info{
			
			margin: 20rpx 10rpx;
		}
	}
	}

</style>
