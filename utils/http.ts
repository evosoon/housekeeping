import {
	baseUrl
} from './baseUrl'

export default class Request {
	http(param) {
		let url = param.url;
		let method = param.method;
		let header = param.header || {};
		let data = Object.assign(param.data || {});
		// let hideLoading = param.hideLoading || false;

		let requestUrl = baseUrl + url;

		if (method) {
			method = method.toUpperCase(); //小写改为大写
			if (method == "POST") {
				if (!header["content-type"]) {
					header = {
						'content-type': "application/x-www-form-urlencoded",
						"Authorization": `${uni.getStorageSync("access_token")}`
					};
				} else {
					header = {
						'content-type': "application/json",
						"Authorization": `${uni.getStorageSync("access_token")}`
					};
				}
			} else {
				header = {
					'content-type': "application/json",
					"Authorization": `${uni.getStorageSync("access_token")}`
				};
			}
		}

		// if (!hideLoading) {
		//       uni.showLoading({
		// 	     title: '加载中...'
		//       });
		// }
		return new Promise((resolve, reject) => {
			// console.log(header)
			// 请求
			uni.request({
				url: requestUrl,
				data: data,
				method: method,
				header: header,
				success: (res) => {
					console.log(res)
					// 将结果抛出
					if ((res.data.status == 401 || res.statusCode == 401) && !requestUrl.includes('/user/refresh_token')) {
						uni.request({
							url: baseUrl + '/user/refresh_token',
							method: "POST",
							header: {
								"Authorization": `${uni.getStorageSync("refresh_token")}`
							},
							data: {
								"refresh_token": uni.getStorageSync('refresh_token')
							},
							success: (res) => {
								if (res.data.status >= 400 || res.data.statusCode >=
									400 || res.statusCode >= 400) {
									uni.removeStorageSync('access_token');
									uni.removeStorageSync('refresh_token');
									uni.switchTab({
										url: '/pages/home/home'
									})
									reject({
										status: 401,
										message: '登陆过期'
									})

								} else {
									uni.setStorageSync('access_token', res.data.data
										.accessToken);
									uni.setStorageSync('refresh_token', res.data
										.data.refreshToken);
									uni.request({
										url: requestUrl,
										data: data,
										method: method,
										header: {
											"Authorization": `${uni.getStorageSync("access_token")}`
										},
										success: (res) => {
											resolve(res.data)
										}
									})
								}
							},
							fail: (e) => {
								console.log(e)
								uni.removeStorageSync('access_token');
								uni.removeStorageSync('refresh_token');
							}
						})
					} else {
						resolve(res.data)
					}
				},
				//请求失败
				fail: (e) => {
					console.log(e)
					uni.showToast({
						title: "" + e.data.msg,
						icon: 'none'
					});
					resolve(e.data);
				},
				//请求完成
				complete() {
					//隐藏加载
					// if (!hideLoading) {
					//     uni.hideLoading();
					// }
					// resolve(reject);
					return;
				}
			})

		})
	}
}