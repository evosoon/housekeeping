import { ref } from 'vue'


const Getlocation = ()=>{
	let longitude=ref(1)// 当前位置的经度
	let	latitude=ref(1)// 当前位置的纬度
		uni.getLocation({
			type: 'wgs84',
			success: function (res) {
				// console.log('当前位置的纬度：' + res.latitude);
				latitude.value = res.latitude
				longitude.value = res.longitude
				},
				fail: function () {
					uni.showToast({
					    title: '获取地址失败，将导致部分功能不可用',
						icon:'none'
					});
				}
			});
		
		return {
			longitude,
			latitude,
		}
	}
	
export default Getlocation