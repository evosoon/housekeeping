import Request from '../utils/http'

let request = new Request().http

interface Res {
	status : string | number
	message : string
	data : any
}
export async function AddReservation(requests : string, address : string, salary : number, workTime : string) {
	return await request({
		url: "/reservation",
		method: "POST",
		header: {
			'content-type': "application/json"
		},
		data: {
			request: requests,
			address: address,
			salary: salary,
			workTime: workTime
		}
	})
}

export async function getReservationList(pageNum : number, pageSize : number, operationType ?: number) {
	
		return request({
			url: '/reservation',
			method: "GET",
			data: {
				pageNum: pageNum,
				pageSize: pageSize,
				operationType: operationType
			}
		})
	
}


export async function updateReservation(id : number, requests : string, address : string, salary : number, workTime : string) {
	return await request({
		url: '/reservation',
		method: "PUT",
		data: {
			id: id,
			request: requests,
			address: address,
			salary: salary,
			workTime: workTime
		}
	})
}


export async function DeleteReservation(id : number, operationType : number) {
	return await request({
		url: '/reservation',
		method: "DELETE",
		data: {
			id: id,
			operationType:operationType
		}
	}).then(res => {
		console.log(res)
	}, err => {
		console.log(err)
	})
}


export async function ReservationDetails(id : number) {
	return await request({
		url: '/reservation/detail',
		method: "GET",
		data: {
			id: id,
		}
	})
}