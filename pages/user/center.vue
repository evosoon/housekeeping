<template>
	<view id="Box" class="flex">
		<view class="background">
			<img :src="Info.user_pic||'../static/baseImage.jpg'" class="backgrpund_img" alt="">
		</view>
		<view class="info backgroundColor">
			<text class="info_username color">{{Info.nickname}}</text>
			<button class="info_button color">+ &nbsp;&nbsp;私信</button>
			<text v-if="Info.username">用户名： {{Info.username}}\n</text>
			<text v-if="Info.email">邮箱号： {{Info.email}}\n</text>
		</view>
		<view class="list backgroundColor">
			<text>其他信息\n............</text>
			
			<img src="@/static/baseImage.jpg" >
			
		</view>
		<view class="list backgroundColor">
			<text>2</text>
		</view>
	</view>
</template>

<script setup>
	import { onLoad,onShow } from "@dcloudio/uni-app"
	import router from "../../hooks/router";
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	const Info = useUserInfoStore()
	// 调用 actions
	function change (){
		Info.changeInfo({
			username:'测试123'
		})
	}
	
	onShow(()=>{
		router()
	})
</script>

<style lang="scss" scoped>
	#Box{
		flex-direction: column;
		.background{
			.backgrpund_img{
				width: 100%;
				min-height: 200upx;
				max-height: 50vh;
			    object-fit: cover;
			}
		}
		.info{
			height: 200upx;
			position: relative;
			border-radius: 0 0 40upx 40upx;
			padding: 40upx;
			margin-bottom: 20upx;
			box-shadow: 0 0 10upx 1upx var(--gray);
			.info_username{
				position: absolute;
				height: 100upx;
				line-height: 120upx;
				font-size: 50upx;
				font-weight: 600;
				padding-top: 10upx;
				top: -100upx;
			}
			.info_button{
				position: absolute;
				top: -60upx;
				right: 40upx;
				color: var(--backgroundColor);
				background-color: var(--borderColor);
			}
		}
		.info::before{
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
		.list{
			padding: 40upx;
			margin-bottom: 20upx;
			border-radius: 40upx;
			box-shadow: 0 0 5upx 1upx var(--gray);
			img{
				object-fit: cover;
				width: 100%;
			}
		}
	}

</style>
