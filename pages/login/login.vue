<template>
	<view id="Box" class="box">
			<view class="title flex">
				{{typeTitle}}
			</view>
			<view class="form" v-show="type==0">
				<view class="form-title color">用户名 / 邮箱</view>
				<uni-easyinput class="form-input" trim="all" v-model="userInfo.username" placeholder="请输入用户名/邮箱"></uni-easyinput>
			</view>
			<view class="form" v-show="type==1">
				<view class="form-title color">用户名</view>
				<uni-easyinput class="form-input" trim="all" v-model="userInfo.username" placeholder="请输入用户名/邮箱"></uni-easyinput>
			</view>
			<view class="form" v-show="type==1">	
				<view class="form-title color">昵称</view>
				<uni-easyinput class="form-input" trim="all" v-model="userInfo.nickname" placeholder="请输入用户名/邮箱"></uni-easyinput>
			</view>
			<view class="form" v-show="type!=2">	
				<view class="form-title color" >密码</view>
				<uni-easyinput class="form-input" type="password" v-model="userInfo.password" placeholder="请输入密码"></uni-easyinput>
			</view>
			<view class="form"  v-show="type==2">
				<view class="form-title color">新密码</view>
				<uni-easyinput class="form-input" type="password" v-model="userInfo.password" placeholder="请输入密码"></uni-easyinput>
			</view>
			<view class="form" v-show="type==1">	
				<view class="form-title color">确认密码</view>
				<uni-easyinput class="form-input" v-model="userInfo.rePassword" placeholder="请确认密码"></uni-easyinput>
			</view>
			<view class="form" v-show="type">
				<view class="form-title color">邮箱</view>
				<uni-easyinput class="form-input" v-model="userInfo.email" placeholder="请输入邮箱"></uni-easyinput>
				<button class="form-button color" @click="sendEmail">获取验证码</button>
			</view>
			<view class="form" v-show="type">	
				<view class="form-title color">验证码</view>
				<uni-easyinput class="form-input" v-model="userInfo.captcha" placeholder="验证码"></uni-easyinput>
			</view>
			<view class="form">
				<button @click="submit" class="form-button color">{{loading?'loading...':typeTitle}}</button>
			</view>
			<view class="buttons flex">
				<a @click="router" class="back"> 返回 </a>
				<a @click="clear" class="clear"> 清空 </a> 
			</view>
			<view class="message" :class="{message_active:message}">
				{{message}}
			</view>
			<view class="links flex">
				<a v-show="type!=2" @click="change(2)"> 忘记密码 </a>
				<a v-show="type!=1" @click="change(1)"> 去注册</a>
				<a v-show="type!=0" @click="change(0)"> 去登录 </a>
			</view>
	</view>
</template>

<script setup>
	import {reactive,ref,computed,watch} from 'vue'
	import {Login,Register,FindPassword} from '@/apis/loginApis'
	import {SignInCode,UpdatePasswordCode} from '@/apis/emailApis'
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	import router from '../../hooks/router';
	// 0登录 1注册 2忘记密码
	let type = ref(0)
	
	const typeTitle = computed(()=>{
		return type.value?(type.value==1?'注册' :'找回密码'):'登录'
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
	})
	// clear
	function clear(){
		userInfo.username=''
		userInfo.nickname=''
		userInfo.password=''
		userInfo.rePassword=''
		userInfo.email=''
		userInfo.captcha=''
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
		if(type.value==2) await changePassword()
	}
	// login
	async function login() {
	    loading.value = true;
	    try {
	        const data = await Login({
	            username: userInfo.username,
	            password: userInfo.password,
	        });
			// 失败
	        if (data.status >= 400 || !data.data.access_token ){
				
				 message.value = data.data
				 uni.removeStorageSync("access_token");
				 uni.removeStorageSync("refresh_token");
				 return
			}
			// 成功
	            uni.setStorageSync("access_token", data.data.access_token);
	            uni.setStorageSync("refresh_token", data.data.refresh_token);
				UserInfostore(data.data.userinfo)
				router()
				message.value = "登录成功"
	    } catch (e) {
			console.log(e)
	        message.value = "请求失败，检查网络后重试"
	    } finally {
			loading.value = false;
		}
	}
	// repaire password
	async function changePassword() {
	    loading.value = true;
	    try {
	        const data = await FindPassword(userInfo);
	       if (data.status >= 400){
	       	 message.value = data.data
	       	 return
	       }
			else console.log("修改成功");
	    } catch (e) {
			console.log(e)
	        message.value = "请求失败，检查网络后重试"
	    } finally {
			loading.value = false;
		}
	}
	// 注册
	async function register() {
	    loading.value = true;
	    try {
	        const data = await Sign(userInfo);
			// fail
	        if (data.status >= 400){
	        	 message.value = data.data
				 return
	        }
			// success
			message.value='注册成功'
			type.value = 0
	    } catch (e) {
			console.log(e)
	        message.value = "请求失败，检查网络后重试"
	    } finally {
			loading.value = false;
		}
	}
	// 邮件
	async function sendEmail(){
		try{
			const data = {}
		    if (type.value == 1)  data = await SignInCode(userInfo.email);
			if (type.value == 2)  data = await UpdatePasswordCode(userInfo.email);
		    if (data.status >= 400){
		    	 message.value = data.data.data
		    	 return
		    }
		    else message.value =data.data || "发送成功";
		} catch(e) {
		    console.log(e)
			message.value = '发送失败'
		} finally {
			loading.value = false;
		}
	}
	function UserInfostore (userInfo){
		const useUserInfo = useUserInfoStore()
		useUserInfo.changeInfo(userInfo)
	}

	</script>

<style lang="scss" scoped>
	#Box{
		padding: 50upx 20upx;
		max-width: 1200upx;
		margin: auto;
		.title{
			margin: 0 20upx;
			color: var(--borderColor);
			font-size: 50upx;
			font-weight: 600;
			height: 100upx;
			line-height: 60upx;
			justify-content: space-between;
		}
		.form{
			padding: 0 20upx;
			margin: 20upx 0;
			.form-title{
				font-size: 30upx;
				height: 30upx;
				line-height: 30upx;
				border-left: 6upx solid var(--borderColor);
				padding-left: 10upx;
			}
			.form-input{
				height: 60upx;
				margin: 30upx 0;
			}
			.form-button{
				color: var(--backgroundColor);
				height: 60upx;
				line-height: 60upx;
				background-color: var(--borderColor);
			}
			.form-button:disabled{
				background-color: #b5b5b5;
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
				height: 50upx;
				line-height: 50upx;
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
