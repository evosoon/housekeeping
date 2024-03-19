import Request from '../utils/http'

import { useUserInfoStore } from '../stores/userinfo'

let request = new Request().http

interface Res {
	status:number
	message:string
	data:any
}

export async function GetReservation(data){
	const res:Res = await request({
		url:'/reservation',
		method:'GET',
		data
	})
	console.log(res)
	return {total:res.data.data.total,items:res.data.data.items}
}


// /reservation POST
export async function NewReservation(data){
	console.log(data)
	const res:Res = await request({
		url:'/reservation',
		method:'POST',
		data,
		header:{
			'content-type': "application/json",
			"Authorization": `${uni.getStorageSync("access_token")}`
		}
	})
	console.log(res)
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

export async function AddReservation(data){
	console.log(data)
	const res:Res = await request({
		url:`/reservation?reservationId=${data}`,
		method:'POST',
		header:{
			'content-type': "application/json",
			"Authorization": `${uni.getStorageSync("access_token")}`
		}
	})
	console.log(res)
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

export async function AgreeReservation(data){
	console.log(data)
	const res:Res = await request({
		url:'/reservation',
		method:'get',
		data,
		header:{
			'content-type': "application/json",
			"Authorization": `${uni.getStorageSync("access_token")}`
		}
	})
	console.log(res)
	if(res.status>=200 && res.status<300){
		uni.showToast({
			title: "成功",
			duration: 2000
		})
		return {status:1}
	} else {
		uni.showToast({
			title: "失败",
			duration: 2000,
			icon:'error'
		})
		return {status:0}
	}
}


export async function ChangeReservation(data){
	const res:Res = await request({
		url:`/reservation${data}`,
		method:'PUT',
		header:{
			"Authorization": `${uni.getStorageSync("access_token")}`
		}
	})
	console.log(res)
	if(res.status>=200 && res.status<300){
		uni.showToast({
			title: "成功",
			duration: 2000
		})
		return {status:1}
	} else {
		uni.showToast({
			title: "失败",
			duration: 2000,
			icon:'error'
		})
		return {status:0}
	}
}
export async function PostReservation(data){
	console.log(data)
	const res:Res = await request({
		url:`/reservation${data}`,
		method:'post',
		header:{
			'content-type': "application/json",
			"Authorization": `${uni.getStorageSync("access_token")}`
		}
	})
	console.log(res)
	if(res.status>=200 && res.status<300){
		uni.showToast({
			title: "成功",
			duration: 2000
		})
		return {status:1}
	} else {
		uni.showToast({
			title: "失败",
			duration: 2000,
			icon:'error'
		})
		return {status:0}
	}
}

export async function ReservationRemark(data){
	const res:Res = await request({
		url:'/reservation',
		method:'GET',
		data
	})
	return res
}

export async function SetReservationRemark(data){
	const res:Res = await request({
		url:'/reservation',
		method:'post',
		data
	})
	return {total:res.data.data.total,items:res.data.data.items}
}


export async function GetNearReservation({lng,lat,dist} ){
	const res:Res = await request({
		url:`/reservation/getNearReservation?lng=${lng}&lat=${lat}&dist=${dist}`,
		method:'get',
	})
	return res
}

