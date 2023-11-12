import { baseUrl } from './baseUrl'

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
		                  header = {
		                      'content-type': "application/x-www-form-urlencoded",
							  "Authorization" :`Bearer ${uni.getStorageSync("access_token")}`
		                  };
		              } else {
		                  header = {
		                      'content-type': "application/json",
							  "Authorization" :`Bearer ${uni.getStorageSync("access_token")}`
		                };
		            }
		        }
				  
			// if (!hideLoading) {
			//       uni.showLoading({
			// 	     title: '加载中...'
			//       });
			// }
			  return new Promise((resolve, reject) => {
			              // 请求
			        uni.request({
			            url: requestUrl,
			            data: data,
			            method: method,
			            header: header,
			            success: (res) => {
			                // 将结果抛出
			                resolve(res.data)
			            },
			            //请求失败
			            fail: (e) => {
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