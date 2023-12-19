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
		data
	})
	console.log(res)
}