<template>
	<view class="setting">
		<view class="title"></view>
		<template v-if="Info.username">
			<view class="list ">
				<uni-list-item class="item" title="资料编辑" :to="`/pages/user/center`"  />
				<uni-list-item class="item" title="绑定邮箱" :to="`/pages/user/changeInfo?type=email`"  />
				<uni-list-item class="item" title="密码修改" :to="`/pages/user/changeInfo?type=pwd`"  />
				<uni-list-item class="item" title="意见反馈" :to="`/pages/public/feedback`"  />
			</view>
		</template>
		<view class="title"></view>
		<view class="list ">
			<uni-list-item class="item" title="隐私政策" :to="`/pages/public/about`"  />
			<uni-list-item class="item" title="关于我们" :to="`/pages/public/about`"  />
			<uni-list-item class="item" title="服务条款" :to="`/pages/public/protocol`"  />
		</view>
		<!-- // 未登录 -->
		<template v-if="!Info.username">
			<view class="title"></view>
			<view class="list ">
				<uni-list-item class="item" title="加入我们" rightText="登录 / 注册" clickable @click="jump('/pages/login/login')"  />
			</view>
		</template>
		<!-- // 已登录 -->
		<template v-if="Info.username">
			<view class="title"></view>
			<view class="list ">
				<uni-list-item class="item" title="退出登录" clickable @click="leave"  />
				<!-- <Pop  :message="message='是否退出登录'" @popSuccess="popSuccess"></Pop> -->
				<button style="	color: var(--red);" >注销账户</button>
			</view>
		</template>
		<!-- <component :is="Pop"></component> -->
	</view>
</template>

<script setup>
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	// import Pop from "@/components/Pop.vue"
	// import router from '../../hooks/router';
	const Info = useUserInfoStore()
	
	function leave(){
		uni.showModal({
			title:'提示',
			content:'确认退出登录',
			success:(res)=>{
				if(res.confirm){
					out()
				} else {
					// 取消
				}
			}
		})
	}
	
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
	.setting{
		background-color: var(--bace-background-color);
		height: 100vh;
		.title{
			background-color: var(--bace-background-color);
			height: 10upx;
		}
		.list{
			border-radius: 20upx;
			overflow: hidden;
			.item{
				height: 100upx;
			}
			margin: 10upx;
			button{
				background-color: var(--backgroundColor);
			}
		}
		
	}
</style>