import axiosInstance from '../utils/http'

// 注册验证码
export function SignInCode(address){
    return axiosInstance({
        url:`/email/signup_captcha?address=${address}`,
    })
}
// 修改email验证码
export function UpdateInfoCode(address){
    return axiosInstance({
        url:`/email/reset_email_captcha?address=${address}`,
    })
}
// 找回密码
export function UpdatePasswordCode(address){
    return axiosInstance({
        url:`/email/reset_password_captcha?address=${address}`,
    })
}