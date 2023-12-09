<script>
	import { GetInfo } from '@/apis/userApis'
	export default {
		onLaunch: async function() {
			
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			if(uni.getStorageSync('access_token')){
				await GetInfo()
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		  --bace-background-color: #f8f8f8;
		  --login_title:#333333;
		  --backgroundColor:#fff;
		  --borderColor:#888888;
		  --color:#3a3a3a;
		  --white:#fff;
		  --gray:#cfcfcf;
		  --shallow:#f3f7ff;
		  --black:#555;
		  --red:#cb4042;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	
	/////////////////
	.test{
		padding: 100upx;
		font-size: 50upx
	}
	/////////////////
	
	view{
		box-sizing: border-box;
		color: var(----color);
		background-color: var(--backgroundColor);
	}
	
	// 微信小程序又不支持 在上面 page 里
	// :root{
	//   --login_title:#333333;
	//   --backgroundColor:#fff;
	//   --borderColor:#888888;
	//   --color:#3a3a3a;
	//   --white:#fff;
	//   --gray:#cfcfcf;
	//   --black:#555;
	//   --red:#cb4042;
	// }
	
	.box{
		background-color: var(--backgroundColor);
		overflow: auto;
		height: 100vh;
	}
	// 背景色
	.backgroundColor{
		background-color: var(--backgroundColor);
	}
	// 文字色
	.color{
		color: #676767;
	}
	.blue{
		color: #5555ff;
	}
	.red{
		color: #ff557f;
	}
	.boxShadow{
		box-shadow: 0 0 10upx 1upx var(--gray);
	}
	.button{
		background-color: var(--backgroundColor);
	}
	.button:hover{
		background-color: #f4f4f4;
	}
	.button:active{
		background-color: var(--gray);
	}
	
	
	.flex{
	  display: flex;
	}
	a,button,.pointer{
	  cursor:pointer; 
	}
	.border{
	  border: 1px solid var(--borderColor);
	}
</style>
