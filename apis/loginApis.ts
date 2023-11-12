import Request from '../utils/http'

import { useUserInfoStore } from '../stores/userinfo'
import router from '../hooks/router';

let request = new Request().http

interface Data {
	status?:number
	message?:string
	data?:any
}
interface Login {
	username:string
	password:string
}

function UserInfostore (userInfo){
	const useUserInfo = useUserInfoStore()
	useUserInfo.changeInfo(userInfo)
}

export async function Login(form:Login){
	try{
		const data:Data = await request({
			url:'/user/login',
			method:'POST',
			data:form
		})
		// 失败
		if(data.status>=400){
			if(data.status==401)uni.navigateTo({ url:"/pages/login/login" })
			uni.removeStorageSync("access_token");
			uni.removeStorageSync("refresh_token");
			return data.data
		
		// 成功
		}else{
			uni.setStorageSync("access_token", data.data.access_token);
			uni.setStorageSync("refresh_token", data.data.refresh_token);
			UserInfostore(data.data.userinfo)
			router()
			return  "登录成功"
			
		}
	}catch(e){
		console.log(e)
		return '请求失败，检查网络后重试'
	}
}


//用户登录
export function Login1(data){
	return request({
		
	})
}
//注册
export function Register(data){
    return request({
        url:'/user/register',
        method:'POST',
        data
    })
}
// 找回密码
export function FindPassword(data){
    return request({
        url:'/user/updatePassword',
        method:'POST',
        data
    })
}

// 刷新token
