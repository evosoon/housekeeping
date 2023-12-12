import Request from '../utils/http'

let request = new Request().http

interface Res {
	status : string | number
	message : string
	data : any
}
export async function workingReservation(pageNum : number, pageSize : number) {
	return await request({
		url: "/reservation/workingReservation",
		method: "GET",
		data: {
			pageNum: pageNum,
			pageSize: pageSize,
		}
	})
}


export async function reservationInProgress(pageNum : number, pageSize : number) {
	return await request({
		url: "/reservation/reservationInProgress",
		method: "GET",
		data: {
			pageNum: pageNum,
			pageSize: pageSize
		}
	})
}

export async function finishReservation(reservationid : number) {
	return await request({
		url: "/reservation/finish",
		method: "PUT",
		data: {
			reservationid: reservationid
		}
	})
}

export async function historyEmployerReservation(pageNum : number, pageSize : number) {
	return await request({
		url: "/reservation/historyEmployerReservation",
		method: "GET",
		data: {
			pageNum: pageNum,
			pageSize: pageSize
		}
	})
}

export async function historyWorkerReservation(pageNum : number, pageSize : number) {
	return await request({
		url: "/reservation/historyWorkerReservation",
		method: "GET",
		data: {
			pageNum: pageNum,
			pageSize: pageSize
		}
	})
}