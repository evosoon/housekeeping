<template>
	<view class="Box">
		<view class="title color">
			{{flagTitle}}
		</view>
		
		<view class="form" v-if="flag==1"  >
			<view class="form-title color">邮箱</view>
			<input class="form-input" v-model="userinfo.email"   />
		</view>
		<view class="form" v-if="flag==2" >
			<view class="form-title color">密码</view>
			<input class="form-input" v-model="userinfo.password"  />
		</view>
		<view class="form" v-if="flag==2" >
			<view class="form-title color">新邮箱</view>
			<input class="form-input" v-model="userinfo.email"   />
		</view>
		<view class="form flex" v-if="flag"  >
			<input class="form-input"  placeholder="输入验证码" v-model="userinfo.captcha"   />
			<button class="button" :disabled='!userinfo.email' @click="sendEmail">获取验证码</button>
		</view>
		<view class="form" v-if="!flag"  >
			<view class="form-title color">旧密码</view>
			<input class="form-input" v-model="userinfo.oldPwd"   />
		</view>
		<view class="form" v-if="flag != 2"  >
			<view class="form-title color">新密码</view>
			<input class="form-input" v-model="userinfo.newPwd"     />
		</view>
		<view class="form" v-if="flag != 2"  >
			<view class="form-title color">确认密码</view>
			<input class="form-input"  v-model="userinfo.rePwd"    />
		</view>
		
		<view class="form">
			<button class="button" :disabled='loading' @click="submit">{{loading?'loading...':'提交'}}</button>
		</view>
		<view class="form">
			{{message}}
		</view>
		<view class="form flex">
			<button class="button" v-if="flag==1"  @click="setFlag(0)">修改密码</button>
			<button class="button" v-if="!flag"  @click="setFlag(1)">忘记密码</button>
		</view>
	</view>
</template>

<script lang='ts' setup>
	import {ref,computed,getCurrentInstance,reactive} from "vue"
	import { onLoad, onShow } from "@dcloudio/uni-app"
	import {ForgetPwd,UpdatePwd} from '../../apis/userAPis'
	import {SendCode} from '../../apis/emailApis'
	const curInstance = getCurrentInstance()
	const flag = ref(0)
	const loading = ref(false)
	const message = ref('')
	const userinfo = reactive({
		email:'',
		password:'',
		captcha:'',
		newPwd:'',
		oldPwd:'',
		rePwd:''
	})
	const flagTitle = computed(()=>{
		return flag.value? (flag.value==2 ?  '更换绑定邮箱' :  '修改密码') : '忘记密码'
	})
	const messageClear = computed(()=>{
		if(message.value){
			setTimeout(()=>{
				message.value = ''
			},5000)
		}
	})
	function setFlag(value:number):void{
		flag.value = value
	}
	
	async function sendEmail(){
		message.value = await SendCode(userinfo.email,3)
	}
	
	async function submit(){
		loading.value=true
		if(!flag.value) message.value = await UpdatePwd(userinfo)
		if(flag.value==1) message.value = await ForgetPwd(userinfo)
		// 邮箱
		// if(flag.value==2) message.value = await ForgetPwd(userinfo)
		loading.value=false
	}
	onShow(()=>{
		if(curInstance.attrs.type == 'pwd')flag.value = 0
		if(curInstance.attrs.type == 'email')flag.value = 2
	})
	
</script>

<style lang="scss" scoped>
	.Box{
		.title{
			padding-left: 20upx;
			border-left: 5upx solid var(--borderColor);
			font-size: 40upx;
			font-weight: 600;
			margin: 20upx;
			margin-left: 30upx;
			
		}
		.form {
				margin: 40upx 20upx;
				.form-title {
					padding-left: 20upx;
					height: 40upx;
					font-size: 30upx;
					line-height: 40upx;
					margin: 10upx;
				}
				
				.form-view {
					padding-left: 20upx;
					height: 60upx;
					line-height: 60upx;
					font-size: 30upx;
				}
		
				.form-input {
					padding-left: 20upx;
					margin: 10upx;
					height: 60upx;
					font-size: 30upx;
					border: 1px solid var(--borderColor);
				}
				.button{
					flex: 1;
					margin: 10upx;
					height: 65upx;
					line-height: 65upx;
					background-color:  var(--borderColor);
					color: var(--backgroundColor);
				}
		
		}
	}
</style>
