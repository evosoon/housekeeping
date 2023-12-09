<template>
	<view class="message">
		<view class="form">
			<input type="text" placeholder="搜素">
		</view>
		<view class="buttons  flex">
			<view class="button" @click="jump('/pages/user/messageList')"><uni-icons type="chat-filled" color="gray" size="40"></uni-icons><view>评论</view></view>
			<view class="button" @click="jump('/pages/user/messageList')"><uni-icons type="hand-up-filled" color="gray" size="40"></uni-icons><view>点赞</view></view>
			<view class="button" @click="jump('/pages/user/messageList')"><uni-icons type="notification-filled" color="gray" size="40"></uni-icons><view>系统消息</view></view>
			<view class="button" @click="jump('/pages/user/messageList')"><uni-icons type="person-filled" color="gray" size="40"></uni-icons><view>联系人</view></view>
		</view>
		
		<view class="UserCardList">
			<template v-for="item in 5">
				<UserCard ></UserCard>
			</template>
		</view>
					
	</view>
</template>

<script setup>
	import { ref, reactive,computed } from 'vue'
	import UserCard from '../../components/UserCard.vue'
	import { onLoad, onShow } from "@dcloudio/uni-app"
	import RouteIntercept from '../../hooks/RouteIntercept';
	function jump(url){
		uni.navigateTo({
			url
		})
	}
	onShow(()=>{
		RouteIntercept()
	})
	
</script>

<style lang="scss" scoped>
	.message{
		padding: 20upx;
		.form{
			height: 100upx;
			input{
				border: 1upx solid var(--gray);
				border-radius: 20upx;
				height: 50upx;
				padding: 10upx 20upx;
			}
		}
		.buttons{
			margin-bottom: 50upx;
			padding: 20upx 0;
			border-radius: 20upx;
			border: 5upx solid var(--bace-background-color);
			.button{
				flex: 1;
				text-align: center;
				margin: 10upx;
				padding: 5upx;
			}
		}
		.UserCardList{
			border-top: 10upx solid var(--bace-background-color);
		}
	}
</style>
