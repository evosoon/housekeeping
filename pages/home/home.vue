<!-- 

	import { ref, reactive,computed } from 'vue'
	import Getlocation from '@/hooks/GetLocation.ts'
	import baseImg from '@/utils/imgs/baseImg'
	
	const {longitude,latitude} = Getlocation()
	
	let location = computed(()=>{
		return `经纬度 [ ${longitude.value} : ${latitude.value} ]`
	})

 -->
 
 <template>
 	<view class="home">
		<view class="home-picture">
			<image :src="baseImg" mode="widthFix" class="image"></image>
		</view>
		<view class="home-list">
			<template v-for="item in resumeList.items">
				<ResumeList :Info="item"></ResumeList>
			</template>
		</view>
	
 	</view>
 </template>
 
 <script lang="ts" setup>
 	import { ref,reactive} from "vue"
	import ResumeList from "@/components/Home/ResumeList.vue"
	import baseImg from '@/utils/imgs/baseImg'
	import {GetResumeList} from '@/apis/resumeApis'
	import {GetReservation} from '@/apis/reservationApis'
	import { onLoad, onShow } from "@dcloudio/uni-app"
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	const Info = useUserInfoStore()
	
	// user
	let resumeList = reactive({})
	const getResumeList = async()=>{
		const {total,items} = await GetResumeList({pageNum:1,pageSize:10})
		resumeList.total = total
		resumeList.items = items
	}
	
	// worker
	let reservationList = reactive({})
	const getReservationList = async()=>{
		const {total,items} = await GetReservation({state:"已发布",pageNum:1,pageSize:10})
		reservationList.total = total
		reservationList.items = items
	}
	onLoad(async()=>{
		if(Info && Info.roleId===2){
			getReservationList()
		} else {
			await getResumeList()
		}
		
	})
 </script>
 
 <style lang="scss" scoped>
	.home{
		.home-picture{
			position: relative;
			.image{
				 width: 100%;
			}
		}
		.home-list{
			background-color: var(--bace-background-color);
			padding: 10upx 2upx;
		}
	}
 </style>