<template>
	<view class="box" >
		<view class="userInfo flex">
			<image :src="getPic" mode="aspectFill" alt="" class="userInfo_img" />
			<view class="userInfo_info flex">
				{{Info.nickname?Info.nickname:'未登录'}}
			</view>
			<view class="userInfo_type flex" @click="jump('/pages/user/center')">
				{{Info.username?'个人中心':'去登录'}} 
				<uni-icons type="right" size="16" color='#959595' class="userInfo_type_icon flex"></uni-icons>
			</view>
		</view>
		
		<view class="work flex color">
			<view v-for="item in works" :key="item.id" class="work-item">
				{{item.title}}
			</view>
		</view>
		<view class="list">
			<uni-list-item class="item" title="消息中心" clickable  @click="jump('/pages/user/message')" />
			<uni-list-item class="item" title="常见问题" :to="`/pages/public/assist`" />
			<uni-list-item class="item" title="设置" rightText="进入设置" :to="`/pages/public/setting`"/>
		</view>
	</view>
</template>

<script setup>
	import { ref,reactive, computed } from 'vue'
	import { onLoad,onShow } from "@dcloudio/uni-app"
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	import RouteIntercept from '../../hooks/RouteIntercept';
	import baseImg from '@/utils/imgs/baseImg'
	const Info = useUserInfoStore()
	const getPic = computed(()=>{
			let path = baseImg
			if(Info.userPic) path = Info.userPic
			return path
	})
	
	const works = ref([{id:1,title:'我的订单',url:''},{id:2,title:'发布预约',url:''},{id:3,title:'科目3',url:''}])
	
	
	function jump(address){
		RouteIntercept(address)
	}
		
</script>

<style lang="scss" scoped>
	.box{
		background-color: var(--bace-background-color);
		.userInfo{
			padding: 20upx 20upx 50upx 20upx;
			border-bottom: 5upx solid var(--bace-background-color);
			.userInfo_img{
				width: 200upx;
				height: 200upx;
				margin-right: 20upx;
				border-radius: 30upx;
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
		.work{
			height: 150upx;
			align-items: center;
			margin-bottom: 40upx;
			.work-item{
				flex: 1;
				text-align: center;
			}
		}
		.list{
			border-radius: 45upx;
			overflow: hidden;
			.item{
				height: 120upx;
			}
		}
	}
</style>
