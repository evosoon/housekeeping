<template>
	<view id="Box">
		<view class="title"></view>
		<view class="list">
			<uni-list-item  title="资料编辑" :to="`/pages/public/about`"  />
			<uni-list-item  title="绑定邮箱" :to="`/pages/public/about`"  />
			<uni-list-item  title="密码修改" :to="`/pages/public/about`"  />
			<uni-list-item  title="意见反馈" :to="`/pages/public/about`"  />
		</view>
		<view class="title"></view>
		<view class="list">
			<uni-list-item  title="隐私政策" :to="`/pages/public/about`"  />
			<uni-list-item  title="关于我们" :to="`/pages/public/about`"  />
			<uni-list-item  title="服务条款" :to="`/pages/public/protocol`"  />
			<uni-list-item  title="退出账号" clickable  @click="out" class="out" />	
		</view>
		<view class="title"></view>
		<view class="list">
			<button class="button" >注销账户</button>
		</view>
	</view>
</template>

<script setup>
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	const Info = useUserInfoStore()
	
	function out(){
		uni.removeStorageSync('access_token')
		uni.removeStorageSync('refresh_token')
		Info.clear()
		uni.switchTab({
			url:'/pages/home/user'
		})
	}
</script>

<style lang="scss" scoped>
	#Box{
		.title{
			height: 10upx;
		}
		.list{
			margin: 10upx;
			button{
				color: var(--red);
			}
		}
		
	}
</style>