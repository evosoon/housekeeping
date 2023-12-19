import Request from '../utils/http'

let request = new Request().http

interface Res {
	status : string | number
	message : string
	data : any
}
export async function AddResume(introduction : string, exprience : string, salary : number, state : string) {
	return request({
		url: "/resume",
		method: "POST",
		header: {
			'content-type': "application/json"
		},
		data: {
			introduction: introduction,
			exprience: exprience,
			salary: salary,
			state: state
		}
	})
}

export async function GetResumeList(pageNum:number, pageSize:number, state ?: string) {
	const _data = {
			pageNum:pageNum |1,
			pageSize:pageSize |10,
			state
	}
		const res:Res = await request({
			url: '/resume',
			method: "GET",
			data:_data
		})
		if(res.status>=400){
			uni.showToast({
				title: "网络出错",
				duration: 2000,
				icon:'error'
			})
		} else{
			return{
				total:res?.data?.total,
				items:res?.data?.items
			}
		}
		
}


export async function updateResume(id : number, introduction : string, exprience : string, salary : number) {
	return await request({
		url: '/resume',
		method: "PUT",
		data: {
			id: id,
			introduction: introduction,
			exprience: exprience,
			salary:salary
		}
	})
}


export async function DeleteResume(id : number) {
	return await request({
		url: '/resume',
		method: "DELETE",
		data: {
			id: id,
		}
	})
}


export async function ResumeDetails(id : number) {
	return await request({
		url: '/resume/detail',
		method: "GET",
		data: {
			id: id,
		}
	})
}