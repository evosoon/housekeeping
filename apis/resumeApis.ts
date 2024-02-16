import Request from '../utils/http'

let request = new Request().http

interface Res {
	status : string | number
	message : string
	data : any
}
export async function NewResume(data) {
	console.log(data)
	const res:Res = await request({
		url: "/resume",
		method: "POST",
		header: {
			'content-type': "application/json"
		},
		data:data
	})
	console.log(res)
	return res
}

export async function GetResumeList(info) {
	let _data = {
			pageNum:info.pageNum |1,
			pageSize:info.pageSize |10,
			label:undefined
	}
	if(info.label!=0){
		_data = {
				pageNum:info.pageNum |1,
				pageSize:info.pageSize |10,
				label:info.label
		}
	}
		const res:Res = await request({
			url: '/resume/getResume',
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
	const res = await request({
		url: '/resume/detail',
		method: "GET",
		data: {
			id
		}
	})
}