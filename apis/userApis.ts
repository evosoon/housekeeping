import Request from '../utils/http'
import { useUserInfoStore } from '../stores/userinfo'

let request = new Request().http

interface Res {
	status?:number
	message?:string
	data?:any
}

//get userInfo
export async function GetInfo(){
	const data:Res = await request({
		url:'/user/detail',
		method:'GET',
	})
	 if(data.status>=200 && data.status<300){
		const useUserInfo = useUserInfoStore()
		useUserInfo.changeInfo(data.data)
	}
}
interface Info {
	newPwd?:string
	oldPwd?:string
	rePwd?:string
	email?:string
	captcha?:string
	
}
// /user/forgetPwd 邮箱找回密码
export async function ForgetPwd(info:Info){
	const data:Res = await request({
		url:'/user/forgetPwd',
		method:'GET',
		data:info
	})
	return data.message
}
// /user/updatePwd
export async function UpdatePwd(info:Info){
	const _info = {
		old_pwd:info.oldPwd,
		new_pwd:info.newPwd,
		re_pwd:info.rePwd,
	}
	const data:Res = await request({
		url:'/user/updatePwd',
		method:"PATCH",
		data:_info
	})
	return data.message
}
// /user/updateAvatar
export async function UpLoad(e,username){
	  let formdata = new FormData();
	    formdata.append("file", e);
	uni.uploadFile({
	url:'/user/updateAvatar',
		name: username,  //后台接收字段名
		formData:this.formdata,
		header:{
			"Content-Type": "multipart/form-data",
			"Authorization": `${uni.getStorageSync("access_token")}`
		},
		success: (res) => {
			console.log(res)
		},
		fail:(err)=>{
			console.log('请求失败_______________',err)
		}
	})
	
}
