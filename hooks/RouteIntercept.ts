
export default function RouteIntercept(url?:string) {
	// 页面栈
	let pages = getCurrentPages()
	let nowUrl = pages[pages.length -1 ].route
	let preUrl = pages[pages.length -2 ]
	
	let LoginPage = nowUrl=='pages/login/login'?true:false
	let Auth:boolean = uni.getStorageSync('access_token')?true:false
	let Preposition = url?true:false
	if(LoginPage){
		if(!Auth){
			uni.navigateBack({
				 delta:1 ,
			})
			if( uni.getSystemInfoSync().platform != 'mp-weixin')return
			// 小程序只能用它
			uni.reLaunch({ 
				url:`/${preUrl.route}`,
			 })
			// 从pub来的向pub跳转
		}
	}
	
	// 前置
	if(Preposition){
		// 签名
		if(Auth){
			uni.navigateTo({  url })
			return
		}else{
			uni.navigateTo({  url:`/pages/login/login?address=${url}` })
			return
		}
	// 后置
	} else {
		// 签名
		if(Auth){
			return
		} else {
			uni.reLaunch({
				url:'/pages/home/home'
			})
		}
	}
	
}
	
	