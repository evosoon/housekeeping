
import Request from '../utils/http'

let request = new Request().http

interface Res {
	status?:number
	message?:string
	data?:any
}
// 验证码
// type:1,发送注册验证码
// type:2,发送登录验证码
// type:3,发送找回密码验证码
// type:4,发送更换邮箱验证码
export async function SendCode(email:string,type:number){
	const data:Res = await request({
		url:`/user/sendEmailCode?email=${email}&type=${type}`,
		method:'GET',
	})
	return data.status>=200 && data.status<300 ? '发送成功' :'发送失败'
}
