import Request from '../utils/http'
import { useUserInfoStore } from '../stores/userinfo'

let request = new Request().http

interface Data {
	status?:number
	message?:string
	data?:any
}

//get userInfo
export async function GetInfo(){
	const data:Data = await request({
		url:'/user/info',
		method:'GET',
	})
	if(data.status==401){
		uni.removeStorageSync("access_token");
		uni.removeStorageSync("refresh_token");
	}
	else if(data.status>=200 && data.status<300){
		const useUserInfo = useUserInfoStore()
		useUserInfo.changeInfo(data.data)
	}
}