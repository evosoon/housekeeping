<template>
	<view class="Reservation">
		<uni-section title="服务内容" subTitle="介绍你的需求,更好找到优质服务"  padding>
			<uni-easyinput class="" trim="all" v-model="reservation.request" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		
			<view class="bmap">
				      <!-- 在这里添加地图上的其他元素，如标记、信息窗口等 -->
					地址
					   <baidu-map  class="bm-view" @ready="handler" :center="{lng: 117.193, lat: 39.159}" :zoom="zoom">
					    <bm-control :offset="{width: '10px', height: '10px'}">
					          <bm-auto-complete  v-model="keyword" :sugStyle="{zIndex: 1}" @confirm="autoConfirm">
					            <input placeholder="请输入地名关键字" style="{width: 100%;background-color: #fff;}" />
					          </bm-auto-complete>
								</bm-control>
					        <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
					   </baidu-map>
			</view>
			
		<uni-section title="薪水" subTitle="写出您提供的报酬 单位:元"  padding>
			<uni-easyinput type="number" class="" trim="all" v-model="reservation.salary" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>		
		<uni-section title="工作时间" ></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="reservation.workTime" />
		</view>
		<uni-section title="工作类型" subTitle=""  padding>
			<picker @change="pick" mode='selector' :value="pickIndex" :range="WorkInfoStore.workTypeList" range-key="workType" class='listPicker'>
				<view>{{WorkInfoStore.workTypeList[pickIndex].workType+' [ 点击更换 ] ' || 'undefined' }}</view>
			</picker>
		</uni-section>	
		 
		<view class="btns flex">
			<button class="button clear" @click="clear">清空</button>
			<button class="button submit" @click="submit">提交</button>
		</view>
	</view>
</template>

<script setup>
	import RouteIntercept from '../../hooks/RouteIntercept';
	import { onShow } from '@dcloudio/uni-app'
	import { NewReservation } from "@/apis/reservationApis"
	import { ref,reactive } from "vue"
	import {useWorkInfoStore} from '@/stores/workinfo.ts'
	const WorkInfoStore = useWorkInfoStore()
	
	import { useGeocoder, usePoint } from 'vue-baidu-map-3x';
	
	const center = ref({lng: 117.193, lat: 39.159});
	const zoom = ref(13);
	const keyword = ref('');
	let lat = ref(0)
	let lng = ref(0)
	
	const autoConfirm = (res)=>{
			 console.log(keyword.value)
			 if(keyword.value){
				 reservation.address = keyword.value
				 useGeocoder().then((geocoder) => {
				   geocoder.getPoint(keyword.value, (res) => {
					   console.log(1)
				     console.log(res.lat);
					 lat.value = res.lat
					 lng.value = res.lng
					 getPlace()
				   });
				
				 });
			 }
	}
	
	const getPlace = ()=>{
			useGeocoder().then((geocoder) => {
			  usePoint( lng.value, lat.value).then(point => {
			    geocoder.getLocation(point, (result) => {
			      console.log(result.address);
			    });
			  });
			});
	
	}
	
	const handler = ({BMap, map}) => {
	  console.log(BMap, map);
	  center.value.lng = 116.404;
	  center.value.lat = 39.915;
	  zoom.value = 13;
	}
	 
// 
	
	
	let pickIndex = ref(0)
	
	const pick = (e)=>{
		pickIndex.value = e.detail.value
	   reservation.workType = WorkInfoStore.workTypeList[e.detail.value].id
		// filterOptions.index = e.detail.value;
		// filterOptions.active = filterOptions.array[e.detail.value].name
	}
	

	const reservation = reactive({
		request:"",
		address:"",
		salary:0,
		workTime:"",
		workType:"",
	})
	const submit = async () => {
		const {status} = await NewReservation({
			request : reservation.request,
			address : reservation.address,
			salary : reservation.salary,
			workTime : reservation.workTime,
			workType:reservation.workType,
			isAsigned:0,
			lng:lng.value,
			lat:lat.value,
		})
		if(status)clear()
	}
	const clear = () => {
		reservation.request="",
		reservation.address="",
		reservation.salary=0,
		reservation.workTime=""
		reservation.workType = ''
	}
	
	
	onShow(()=>{
		RouteIntercept()
	})
</script>

<style lang="scss" scoped>
	.bmap{
		top: 0;
		margin: 100rpx 20rpx;
	}
	.bm-view {
	  width: 100%;
	  height: 300rpx;
	  overflow: hidden;
	}
	.Reservation{
		.btns{
			width: 100%;
			.submit{
				flex: 3;
			}
			.clear{
				flex: 1;
			}
		}
		.button{
			margin: 30upx 10upx;
			color: var(--borderColor);
		}	
	}
	
</style>
