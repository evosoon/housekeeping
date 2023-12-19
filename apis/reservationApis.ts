import Request from '../utils/http'

import { useUserInfoStore } from '../stores/userinfo'

let request = new Request().http

interface Res {
	status:number
	message:string
	data:any
}

// /reservation
export async function NewReservation(data){
	const res:Res = await request({
		url:'/reservation',
		method:'POST',
		data,
		header:{
			'content-type': "application/json",
			"Authorization": `${uni.getStorageSync("access_token")}`
		}
	})
	if(res.status>=200 && res.status<300){
		uni.showToast({
			title: "上传成功",
			duration: 2000
		})
		return {status:1}
	} else {
		uni.showToast({
			title: "上传失败",
			duration: 2000,
			icon:'error'
		})
		return {status:0}
	}
	
	
}