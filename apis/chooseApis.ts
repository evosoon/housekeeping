import Request from '../utils/http'

let request = new Request().http

interface Res {
	status : string | number
	message : string
	data : any
}
export async function chooseReservation(id : number,) {
	return await request({
		url: "/choose",
		method: "POST",
		headers:{
			'content-type': "application/json"
		},
		data: {
			id: id,
		}
	})
}

export async function candidateList(pageNum : number,pageSize:number,reservationid:number) {
	return await request({
		url: "/choose/candidateList",
		method: "GET",
		data: {
			pageNum: pageNum,
			pageSize:pageSize,
			reservationid:reservationid
		}
	})
}


export async function chooseWorker(chooseid:number) {
	return await request({
		url: "/choose",
		method: "PUT",
		data: {
			chooseid:chooseid
		}
	})
}

export async function dealList(pageNum:number, pageSize:number) {
	return await request({
		url: "/choose/dealList",
		method: "PUT",
		data: {
			pageNum:pageNum,
			pageSize:pageSize
		}
	})
}

export async function dealReservation(operationType:number, reservationid:number) {
	return await request({
		url: "/choose/deal",
		method: "PUT",
		data: {
			operationType:operationType,
			reservationid:reservationid
		}
	})
}