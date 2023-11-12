import {nextTick} from 'vue'

export default function router() {
	
	let Auth:boolean = uni.getStorageSync('access_token')?true:false
	let pages = getCurrentPages()
	let currentPages = pages[pages.length -1 ]
	let url = currentPages.route
	// console.log( '1+',pages[pages.length -1 ])
	// console.log('当前'+url)
	//登录界面跳转
	if(url=='pages/login/login'){
		
		// 防止锁死
		if( pages[pages.length-2]==undefined || pages[pages.length -2].route==url){
			nextTick(()=>{
				Auth?uni.reLaunch({  url: '/pages/home/user' }):uni.reLaunch({  url: '/pages/home/home' })
			})
			return 
		}
		// 身份认证成功
		if(Auth){
			uni.navigateBack({  delta:1  })
		// 身份认证失败
		}else{
		// console.log( '1+',pages[pages.length -1 ])
			// uni.reLaunch({  url: '/pages/home/user' })
			// ios 会出现bug  --- 修复在42行
			// alert("1"+pages[pages.length -2 ].route)
			// alert("2"+pages[pages.length -3 ].route)
			nextTick(()=>{
				uni.navigateBack({
					delta:2,
					fail(){
						nextTick(()=>{
							uni.reLaunch({
								url:'/pages/home/home'
							})
						})
					},
					success(){
						// 修复 bug
						// 如果设备是 ios 
						if(uni.getSystemInfoSync().platform == 'ios'){
							nextTick(()=>{
								uni.reLaunch({
									url:'/pages/home/user'
								})
							})
						}
					},
				})
			})
		}
	}
	// 非登陆页面跳转
	// 无身份认证
	if(!Auth){
		jump('/pages/login/login')
	}
}
//
const jump = function(url:string){
		uni.navigateTo({
			url:url
		});
	}