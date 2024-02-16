<template>
	<view class="Box box">
			<view class="title flex">
				{{typeTitle}}
			</view>
			<view class="form" v-show="type!==2">
				<view class="form-title color">用户名</view>
				<input class="form-input"  v-model.trim="userInfo.username" placeholder="用户名" />
			</view>
			<view class="form" v-show="type==1">	
				<view class="form-title color">昵称</view>
				<input class="form-input" v-model.trim="userInfo.nickname" placeholder="昵称" />
			</view>
			<view class="form" v-show="type==1">
				<view class="form-title color">身份</view>
				<view class="auth-list flex">
					<view class="auth-item" :class="{activeroleId:userInfo.roleId==1}" @click="changeRole(1)">用户</view>
					<view class="auth-item" :class="{activeroleId:userInfo.roleId==2}" @click="changeRole(2)">工作者</view>
				</view>
			</view>
			<view class="form" v-show="type!=2">	
				<view class="form-title color" >密码</view>
				<input class="form-input" type="password" v-model.trim="userInfo.password" placeholder="请输入密码" />
			</view>
		<!-- 	<view class="form"  v-show="type==2">
				<view class="form-title color">新密码</view>
				<input class="form-input" type="password" v-model.trim="userInfo.password" placeholder="请输入密码" />
			</view> -->
			<view class="form" v-show="type==1">	
				<view class="form-title color">确认密码</view>
				<input class="form-input" type="password" v-model.trim="userInfo.rePassword" placeholder="请确认密码" />
			</view>
			<view class="form" v-show="type">
				<view class="form-title color">邮箱</view>
				<input class="form-input" v-model.trim="userInfo.email" placeholder="请输入邮箱" />
				<button class="form-button color" @click="sendEmail">获取验证码</button>
			</view>
			<view class="form" v-show="type">	
				<view class="form-title color">验证码</view>
				<input class="form-input" v-model.trim="userInfo.captcha" placeholder="验证码" />
			</view>
			<view class="message" :class="{message_active:message}">
				{{message}}
			</view>
			<view class="form">
				<button @click="submit" class="form-button color">{{loading?'loading...':typeTitle}}</button>
			</view>
			<view class="buttons flex">
				<a @click="RouteIntercept" class="back"> 返回 </a>
				<a @click="clear" class="clear"> 清空 </a> 
			</view>
			
			<view class="links flex">
				<a v-show="type!=2" @click="change(2)"> 验证码登录 </a>
				<a v-show="type!=1" @click="change(1)"> 去注册</a>
				<a v-show="type!=0" @click="change(0)"> 用户名登录 </a>
			</view>
	</view>
</template>

<script setup>
	import {reactive,ref,computed,watch,nextTick} from 'vue'
	import {Login,Register} from '@/apis/loginApis'
	import {SendCode} from '@/apis/emailApis'
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	import RouteIntercept from '../../hooks/RouteIntercept';
	import { onLoad,onShow } from "@dcloudio/uni-app"
	
	let jumpAddress = ''
	
	// 0登录 1注册 2忘记密码
	let type = ref(0)
	
	const typeTitle = computed(()=>{
		return type.value?(type.value==1?'注册' :'验证码登录'):'用户名登录'
	})
	// 加载
	let loading = ref(false)
	// 信息
	let message = ref('')
	 watch(message,(newValue,oldValue) => {
	       if(newValue!='')setTimeout(()=>{message.value=''},5000)
	 },{immediate:true})
	// userInfo
	const userInfo = reactive({
		username:'',
		nickname:'',
		password:'',
		email:'',
		captcha:'',
		roleId:0
	})
	// clear
	function clear(){
		userInfo.username=''
		userInfo.nickname=''
		userInfo.password=''
		userInfo.rePassword=''
		userInfo.email=''
		userInfo.captcha=''
		userInfo.roleId=''
		
	}
	// changeType
	function change(val){
		type.value = val
		clear();
	}
	// submit form
	async function submit(){
		if(type.value==0) await login()
		if(type.value==1) await register()
		if(type.value==2) await login()
	}
	// login
	async function login() {
	    loading.value = true;
	    message.value = await Login(userInfo,jumpAddress)
		loading.value = false;
	}
	// repaire password
	// async function changePassword() {
	//     loading.value = true;
	//         // const data = await FindPassword(userInfo);
	// 		loading.value = false;
	// }
	
	//
	const changeRole = (val)=>{
		userInfo.roleId = val
	}
	// 注册
	async function register() {
	    loading.value = true;
	    message.value = await Register(userInfo);
		loading.value = false;
	}
	// 邮件
	async function sendEmail(){
		    if (type.value == 1)  message.value  = await SendCode(userInfo.email,1);
			if (type.value == 2)  message.value  = await SendCode(userInfo.email,3);
	}
	function UserInfostore (userInfo){
		const useUserInfo = useUserInfoStore()
		useUserInfo.changeInfo(userInfo)
	}
	onLoad( option=>{
		jumpAddress = option.address
	})

	</script>

<style lang="scss" scoped>
	.activeroleId{
		background-color: var(--borderColor);
	}
	.Box{
		// padding: 200upx 20upx 50upx 20upx;
		padding:  50upx 20upx;
		max-width: 1200upx;
		margin: auto;
		.title{
			margin: 0 20upx;
			color: var(--borderColor);
			font-size: 50upx;
			font-weight: 600;
			height: 100upx;
			line-height: 100upx;
			justify-content: space-between;
		}
		.form{
			padding: 0 20upx;
			margin: 20upx 0;
			.form-title{
				font-size: 40upx;
				height: 40upx;
				line-height: 40upx;
				border-left: 6upx solid var(--borderColor);
				padding-left: 10upx;
				margin: 20upx 0;
			}
			.form-input{
				height: 80upx;
				padding-left: 20upx;
				margin: 30upx 0;
				border: 1px solid var(--borderColor);
				border-radius: 10upx;
				
			}
			.form-button{
				color: var(--backgroundColor);
				height: 100upx;
				line-height: 100upx;
				background-color: var(--borderColor);
			}
			.form-button:disabled{
				background-color: #b5b5b5;
			}
			.auth-list{
				.auth-item{
					flex: 1;
					text-align: center;
					height: 60rpx;
					line-height: 60rpx;
					margin: 0 20rpx;
					border:1rpx solid var(--borderColor);
				}
			}
		}
		.message{
			margin: 20upx;
			padding: 0 20upx;
			height: 60upx;
			line-height: 60upx;
			overflow: hidden;
			color: #bd3228;
			border: 1upx solid #bd3228;
			border-radius: 12upx;
			opacity:0;
			transition: opacity 1s ease;
		}
		.message_active{
			opacity:1;
		}
		.buttons{
			justify-content: space-between;
			.back,.clear{
				text-align: center;
				border: 2upx solid var(--borderColor);
				border-radius: 10upx;
				height: 80upx;
				line-height: 80upx;
				margin: 0 20upx;
			}
			.back{
				flex: 3;
			}
			.clear{
				flex: 1;
			}
		}
		.links{
			justify-content: space-between;
			margin: 20upx;
			padding: 5upx 10upx;
			font-size: 35upx
		}
	}
	
</style>
