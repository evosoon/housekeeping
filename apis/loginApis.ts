import Request from '../utils/http'

let request = new Request().http
//用户登录
export function Login(data){
	return request({
		url:'/user/login',
		method:'POST',
		data
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
