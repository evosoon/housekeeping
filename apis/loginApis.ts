import Request from '../utils/http'

import { useUserInfoStore } from '../stores/userinfo'

let request = new Request().http

interface Res {
	status?:number
	message?:string
	data?:any
}

interface Login {
	username?:string
	password?:string
	email?:string
	captcha?:string | number
}

interface Register {
	username:string
	password:string
}

function UserInfostore (userInfo){
	const useUserInfo = useUserInfoStore()
	useUserInfo.changeInfo(userInfo)
}

export async function Login(form:Login,val:string){
	let jumpAddress = val
	let url = '/user/usernameLogin'
	if(form.email) url = '/user/emailLogin'
	try{
		const res:Res = await request({
			url,
			method:'POST',
			data:form
		})
		// 失败
		if(res.status>=400){
			if(res.status==401)uni.navigateTo({ url:"/pages/login/login" })
			uni.removeStorageSync("access_token");
			uni.removeStorageSync("refresh_token");
			return res.message
		
		// 成功
		}else{
			console.log(res)
			uni.setStorageSync("access_token", res.data.access_token);
			uni.setStorageSync("refresh_token", res.data.refresh_token);
			UserInfostore(res.data.userinfo)
			if(jumpAddress){
				uni.reLaunch({
					url:jumpAddress
				})
			}else{
				uni.switchTab({
					url:'/pages/home/user'
				})
			}
			return  "登录成功"
		}
	}catch(e){
		console.log(e)
		return '请求失败，检查网络后重试'
	}
}


//注册
export async function Register(data){
    try {
		const res:Res = await request({
		    url:'/user/register',
		    method:'POST',
		    data
		})
		return res.message
		
	} catch(e){
		console.log(e)
		return '请求失败，检查网络后重试'
	}
}
// 找回密码
