<template>
		<view>
		<template v-for="i in list.items" :key="id">
			<view class="worker">
			<view>昵称:{{i.nickname}}</view>
			<view>年龄:{{i.age}}</view>
			<view>性别:{{i.gender}}</view>
			<view>联系方式:{{i.number || i.email}}</view>
			<text class="button" @click="sub(i.id)">
				雇佣
			</text>
			</view>
		</template>
		</view>
</template>

<script setup>
	import { onShow } from '@dcloudio/uni-app'
	import {reactive} from "vue"
	import { GetReservation,ChangeReservation } from "@/apis/reservationApis"
	
	
	const props = defineProps(["item"])
	
	const list = reactive({total:0,items:[]})
	const getInfo = async()=>{
		const {total,items} = await GetReservation({reservationId:props.item.id,pageNum:1,pageSize:100})
	list.items = items
	list.total = total
	
	}
	onShow(()=>{
		getInfo()
	})
	
	const sub = async(agree)=>{
		 await ChangeReservation(`?workerId=${agree}&reservationId=${props.item.id}`)
	}
</script>

<style scoped>
 .worker{
	 margin: 20rpx 10rpx;
	 padding: 20rpx;
	 border: 1rpx solid var(--color);
	 .button{
		 display: inline-block;
		 border: 1rpx solid var(--red);
		 color: var(--red);
		 padding: 2rpx 30rpx;
		 margin-top: 20rpx;
	 }
 }
 
</style>