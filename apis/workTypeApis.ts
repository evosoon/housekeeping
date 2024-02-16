import Request from '../utils/http'


let request = new Request().http

interface Res {
	status?:number
	message?:string
	data?:any
}

//注册
export async function GetWorkType(id?:number|string){
	const data = {
		workTypeId:id
	}
    try {
		const res:Res = await request({
		    url:'/resume/workType',
		    method:'GET',
		    data
		})
		return res.data
	} catch(e){
		console.log(e)
		return '请求失败，检查网络后重试'
	}
}
