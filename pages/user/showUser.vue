<template>
	<view class="Box flex">
		<view class="background" >
			<image :src="getPic" mode="widthFix" alt="" />
		</view>
		<view class="info backgroundColor">
			<text class="info_username color">{{Info.nickname}}</text>
			<text v-if="Info.username" class="color">用户名： {{Info.username}}\n</text>
			<text v-if="Info.email" class="color">邮箱号： {{Info.email}}\n</text>
		</view>

		<view class="cards flex backgroundColor">
			<view class="button flex color">
				<view><uni-icons type="heart" color="gray" size="16"></uni-icons> 0</view>
				<text>喜欢</text>
			</view>

			<view class="button flex color">
				<view><uni-icons type="star" color="gray" size="16"></uni-icons> 0</view>
				<text>收藏</text>
			</view>
			<view class="button flex color">
				<text><uni-icons type="notification" color="gray" size="16"></uni-icons></text>
				<text>通知</text>
			</view>
		</view>
		
		<view class="list changeInfo backgroundColor JumpView">
		
		</view>
	<!-- 	<view class="list backgroundColor">
			这里是占位置用的
		</view> -->
		<view style="height:500upx"></view>
	</view>
</template>

<script setup>
	import { ref,reactive,computed } from 'vue'
	import { onLoad, onShow } from "@dcloudio/uni-app"
	import RouteIntercept from '../../hooks/RouteIntercept';
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	import { UpLoad,UpdateInfo } from '../../apis/userApis.ts'
	import {baseUrl} from '../../utils/baseUrl'
	import baseImg from '../../utils/imgs/baseImg'
	
	const getPic = computed(()=>{
			let path = baseImg
			if(Info.userPic) path = Info.userPic
			return path
	})
	const Info = {
		username:"zs",
		nickname:'ss',
		email:'sdf'
	}
	onShow(()=>{
		RouteIntercept()
	})
</script>

<style lang="scss" scoped>
	
	.Box {
		flex-direction: column;
		.background {
			image {
				width: 100%;
			}
		}

		.info {
			position: relative;
			border-radius: 0 0 40upx 40upx;
			padding: 40upx;
			box-shadow: 0 0 10upx 1upx var(--gray);

			.info_username {
				position: absolute;
				height: 100upx;
				line-height: 120upx;
				font-size: 50upx;
				font-weight: 600;
				padding-top: 10upx;
				top: -100upx;
			}

			.info_button {
				position: absolute;
				top: -60upx;
				right: 40upx;
				color: var(--backgroundColor);
				background-color: var(--borderColor);
				border-radius: 30upx;
			}
			.info_label{
				margin-top: 40upx;
				flex-wrap: wrap;
				.info_label_item{
					height: 50upx;
					line-height: 50upx;
					border-radius: 30upx;
					padding: 0 30upx;
					margin: 10upx;
					background-color: var(--borderColor);
					color:var(--backgroundColor);
				}
			}
		}

		.info::before {
			content: "";
			position: absolute;
			height: 100upx;
			border-radius: 40upx 40upx 0 0;
			background-color: var(--backgroundColor);
			left: 0;
			right: 0;
			top: -100upx;
			bottom: 0;
		}

		.cards {
			margin: 20upx;

			.button {
				flex: 1;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 160upx;
				margin: 20upx;
				border: 1upx solid var(--gray);
				border-radius: 20upx;
				color: var(--borderColor);
				background-color: var(--backgroundColor);
			}
		}
	}

	.list {
		padding: 40upx;
		margin-bottom: 20upx;
		border-radius: 40upx;
		box-shadow: 0 0 5upx 1upx var(--gray);

		img {
			object-fit: cover;
			width: 100%;
		}
			.changeAvatar{
				height: 40px;
				width: 100%;
				text-align: center;
				color: var(--borderColor);
				font-weight: bold;
			    button{
					color: var(--borderColor);
				}
			}
			.title {
				color: var(--borderColor);
				font-size: 40upx;
				font-weight: 600;
				padding: 20upx 10px;
			}
			.form-border{
				// border-left: 5upx solid var(--borderColor);
			}
			.form {
				margin: 40upx 20upx;
				height: 110upx;

				.form-title {
					padding-left: 20upx;
					height: 40upx;
					line-height: 40upx;
				}
				

				.form-view {
					padding-left: 20upx;
					height: 60upx;
					line-height: 60upx;
					font-size: 30upx;
				}

				.form-input {
					padding-left: 20upx;
					margin-top: 5upx;
					height: 65upx;
					font-size: 30upx;
				}

				.form-input-line {
					border-radius: 10upx;
					outline: 0;
					border: 1px solid var(--borderColor);
				}
				.button{
					flex: 1;
					height: 70upx;
					line-height: 70upx;
					margin-top: 20upx;
					background-color:  var(--borderColor);
					color: var(--backgroundColor);
				}
				.button:first-child{
					margin-right: 60upx;
				}

		}
	}
</style>