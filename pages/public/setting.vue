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
		</view>
		<!-- // 未登录 -->
		<template v-if="!Info.username">
			<view class="title"></view>
			<view class="list">
				<uni-list-item  title="加入我们" rightText="登录 / 注册" clickable @click="jump('/pages/login/login')"  />
			</view>
		</template>
		<!-- // 已登录 -->
		<template v-if="Info.username">
			<view class="title"></view>
			<view class="list">
				<Pop  :message="message='是否退出登录'" @popSuccess="popSuccess"></Pop>
				<button style="	color: var(--red);" >注销账户</button>
			</view>
		</template>
		<!-- <component :is="Pop"></component> -->
	</view>
</template>

<script setup>
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	import Pop from "@/components/Pop.vue"
	// import router from '../../hooks/router';
	const Info = useUserInfoStore()
	
	function out(){
		uni.removeStorageSync('access_token')
		uni.removeStorageSync('refresh_token')
		Info.clear()
		uni.switchTab({
			url:'/pages/home/user'
		})
	}
	function popSuccess(val){
		if(val) out()
	}
	function jump(url){
		uni.redirectTo({
			url
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
				background-color: var(--backgroundColor);
			}
		}
		
	}
</style>