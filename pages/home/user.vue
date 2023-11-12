<template>
	<view id="Box" >
		<view class="userInfo flex">
			<img :src="Info.user_pic||'../static/baseImage.jpg'" alt="" class="userInfo_img">
			<view class="userInfo_info flex">
				{{Info.nickname?Info.nickname:'未登录'}}
			</view>
			<view class="userInfo_type flex" @click="jump('/pages/user/center')">
				{{Info.username?'个人中心':'去登录'}} 
				<uni-icons type="right" size="16" color='#959595' class="userInfo_type_icon flex"></uni-icons>
			</view>
		</view>
		<view class="list">
			<uni-list-item  title="消息中心" :to="`/pages/message/mesage`" />
			<uni-list-item  title="常见问题" :to="`/pages/message/mesage`" />
			<uni-list-item  title="设置" rightText="进入设置" :to="`/pages/public/setting`"/>
		</view>
	</view>
</template>

<script setup>
	import { reactive } from 'vue'
	import { onLoad,onShow } from "@dcloudio/uni-app"
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	const Info = useUserInfoStore()
	
	function jump(address){
		uni.navigateTo({
			url:address
		})
	}
		
</script>

<style lang="scss" scoped>
	#Box{
		.userInfo{
			height: 200upx;
			margin: 20upx;
			border-radius: 20upx;
			box-shadow: 0 0 10upx 2upx var(--gray);
			background-color:var(--backgroundColor);
			.userInfo_img{
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				width: 140upx;
				height: 140upx;
				margin: 30upx;
				object-fit: cover;
				box-shadow: 0 0 10upx 2upx var(--gray) inset;
			}
			.userInfo_info{
				flex: 1;
				align-items: center;
			}
			.userInfo_type{
				padding: 40upx;
				align-items: center;
			}
			.userInfo_type_icon{
				align-items: center;
				height: 100%;
				
			}
		}
	}
</style>
