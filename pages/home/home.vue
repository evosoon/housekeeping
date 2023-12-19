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
		<template v-for="item in ResumeList.items">
			<view>{{item.createId}}</view>
			<view>{{item.introduction}}</view>
			<view>{{item.salary}}</view>
			<view>{{item.createTime}}</view>
		</template>
 	</view>
 </template>
 
 <script lang="ts" setup>
 	import { ref,reactive} from "vue"
	import baseImg from '@/utils/imgs/baseImg'
	import {GetResumeList} from '@/apis/resumeApis'
	import { onLoad, onShow } from "@dcloudio/uni-app"
	let ResumeList = reactive({})
	const getResumeList = async()=>{
		const {total,items} = await GetResumeList({pageNum:1,pageSize:10})
		ResumeList.total = total
		ResumeList.items = items
	}
	onLoad(async()=>{
		await getResumeList()
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
	}
 </style>