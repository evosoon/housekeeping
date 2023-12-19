import Request from '../utils/http'
import { useUserInfoStore } from '../stores/userinfo'
let request = new Request().http
import {baseUrl} from '../utils/baseUrl'
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
// /user/update
export async function UpdateInfo(data){
	const res:Res = await request({
		url:'/user/update',
		method:'PUT',
		data
	})
	if(res.status>=200 && res.status<300){
		const useUserInfo = useUserInfoStore()
		useUserInfo.changeInfo(data)
		return{
			status:1,
			message:'更新成功'
		}
	}else{
		console.log(res)
		return{
			status:0,
			message:'更新失败'
		}
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
// /user/changeEmail
export async function UpdateEmail(info:Info){
	const _info = {
		captcha:info.captcha,
	}
	const data:Res = await request({
		url:'/user/updatePwd',
		method:"PATCH",
		data:_info
	})
	return data.message
}
// /user/updateAvatar
export async function UpLoad(e){
    console.log('Selected file:', e);
        // 创建一个FormData对象
        const formData = new FormData();
        // 将选中的文件添加到FormData中
        formData.append('file', e);

        // 上传FormData中的数据到服务器
        uni.uploadFile({
          url: baseUrl+'/user/updateAvatar', // 服务器上传接口地址
          filePath:e.path, // 本地文件路径
          name: 'file', // 上传文件对应的 key
          formData: formData, // 添加额外的表单数据
		  header:{
			  "Authorization": `${uni.getStorageSync("refresh_token")}`
		  },
          success: (uploadRes) => {
            console.log('Upload successful:', uploadRes);
            // 文件上传成功，可以在这里进行相关操作
			uni.showToast({
			title: "上传成功",
			duration: 2000
			})
          },
          fail: (err) => {
            console.error('Failed to upload file:', err);
		uni.showToast({
			title: "上传失败",
		    duration: 2000,
			icon:'error'
		})
          }
        });
	
}
