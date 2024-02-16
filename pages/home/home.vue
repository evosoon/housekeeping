 <template>
 	<view class="home">
		<view class="home-picture">
			<!-- <image :src="baseImg" mode="widthFix" class="image"></image> -->
		</view>
		<view class="work-type-list flex" >
			<view class="work-type-item" :class="{'work-type-item-active':chooseLabel==0 | !chooseLabel}" @click="getResumeList(0)">全部</view>
		<template v-for="item in WorkInfoStore.workTypeList" :key="item.id">
			<view class="work-type-item" :class="{'work-type-item-active':chooseLabel==item.id}" @click="getResumeList(item.id)" >{{item.workType}}</view>
		</template>
		</view>
		<view class="home-list">
			<template v-for="item in resumeList.items">
				<ResumeList :Info="item"></ResumeList>
			</template>
			<template v-for="item in reservationList.items">
				<ReservationList :Info="item"></ReservationList>
			</template>
		</view>
		<!-- {{lng +'++'+lat}}
		<view class="bmap"> -->
			      <!-- 在这里添加地图上的其他元素，如标记、信息窗口等 -->
				
			<!-- 	   <baidu-map  class="bm-view" @ready="handler" :center="{lng: 117.193, lat: 39.159}" :zoom="zoom">
				    <bm-control :offset="{width: '10px', height: '10px'}">
				          <bm-auto-complete  v-model="keyword" :sugStyle="{zIndex: 1}" @confirm="autoConfirm">
				            <input placeholder="请输入地名关键字"  />
				          </bm-auto-complete>
							</bm-control>
				        <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
				   </baidu-map>
				   
		</view> -->
 	</view>
 </template>
 
 <script  setup>
	 
	 // import { useGeocoder, usePoint } from 'vue-baidu-map-3x';
	 
	 // const center = ref({lng: 117.193, lat: 39.159});
	 // const zoom = ref(13);
	 // const keyword = ref('');
	 // let lat = ref(0)
	 // let lng = ref(0)
	 
	 // const autoConfirm = (res)=>{
		//  console.log(keyword.value)
		//  if(keyword.value){
		// 	 useGeocoder().then((geocoder) => {
		// 	   geocoder.getPoint(keyword.value, (res) => {
		// 		   console.log(1)
		// 	     console.log(res.lat);
		// 		 lat.value = res.lat
		// 		 lng.value = res.lng
		// 		 getPlace()
		// 	   });
			
		// 	 });
		//  }
	 // }
	 
	 // const getPlace = ()=>{
		// useGeocoder().then((geocoder) => {
		//   usePoint( lng.value, lat.value).then(point => {
		//     geocoder.getLocation(point, (result) => {
		//       console.log(result.address);
		//     });
		//   });
		// });

	 // }
	 
	 // const handler = ({BMap, map}) => {
	 //   console.log(BMap, map);
	 //   center.value.lng = 116.404;
	 //   center.value.lat = 39.915;
	 //   zoom.value = 13;
	 // }
	   
 	import { ref,reactive} from "vue"
	import ResumeList from "@/components/Home/ResumeList.vue"
	import ReservationList from "@/components/Home/ReservationList.vue"
	import baseImg from '@/utils/imgs/baseImg'
	import {GetResumeList} from '@/apis/resumeApis'
	import { GetWorkType } from '@/apis/workTypeApis'
	import {GetReservation} from '@/apis/reservationApis'
	import { onLoad, onShow } from "@dcloudio/uni-app"
	
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	const UserInfoStore = useUserInfoStore()
	import {useWorkInfoStore} from '@/stores/workinfo.ts'
	const WorkInfoStore = useWorkInfoStore()
	let chooseLabel = ref(0)
	
	// user
	let resumeList = reactive({})
	const getResumeList = async(label)=>{
		chooseLabel.value = label
			const {total,items} = await GetResumeList({pageNum:1,pageSize:100,label:chooseLabel.value})
		resumeList.total = total
		resumeList.items = items
		
	}
	
	// worker
	let reservationList = reactive({})
	const getReservationList = async()=>{
		const {total,items} = await GetReservation({pageNum:1,pageSize:100,state:"已发布"})
		reservationList.total = total
		reservationList.items = items
		console.log(reservationList)
	}
	const getWorkType = async()=>{
		const list = await GetWorkType()
			WorkInfoStore.changeWorkTypeList(list)
	}
	onLoad(async()=>{
		getWorkType()
		if(UserInfoStore && UserInfoStore.roleId===2){
			getReservationList()
		} else {
			 getResumeList()
		}
		
	})
 </script>
 
 <style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
.work-type-item-active{
				background-color: #ebebeb;
			}
	.home{
		
		.work-type-list{
			.work-type-item{
				
				padding: 10rpx;
				
			}
			
			
		}
		
		.home-picture{
			position: relative;
			.image{
				 width: 100%;
				 height: 400rpx;
			}
		}
		.home-list{
			background-color: var(--bace-background-color);
			padding: 10rpx 2rpx;
		}
	}
 </style>