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
		url:'/user/info',
		method:'GET',
	})
	 if(data.status>=200 && data.status<300){
		const useUserInfo = useUserInfoStore()
		useUserInfo.changeInfo(data.data)
	}
}