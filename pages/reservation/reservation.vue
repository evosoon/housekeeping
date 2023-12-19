<template>
	<view class="Reservation">
		<uni-section title="服务内容" subTitle="介绍你的需求,更好找到优质服务"  padding>
			<uni-easyinput class="" trim="all" v-model="reservation.request" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<uni-section title="地址" subTitle="填写您的地址"  padding>
			<uni-easyinput class="" trim="all" v-model="reservation.address" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<uni-section title="薪水" subTitle="写出您提供的报酬 单位:元"  padding>
			<uni-easyinput type="number" class="" trim="all" v-model="reservation.salary" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>		
		<uni-section title="工作时间" ></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="reservation.workTime" />
		</view>
		 
	</view>
	<button class="button" @click="submit">提交</button>
</template>

<script lang="ts" setup>
import RouteIntercept from '../../hooks/RouteIntercept';
	import { onShow } from '@dcloudio/uni-app'
	import { NewReservation } from "@/apis/reservationApis"
	import { reactive } from "vue"
	interface Reservation{
		request:string
		address:string
		salary:number
		workTime:string
	}
	const reservation:Reservation = reactive({
		request:"",
		address:"",
		salary:0,
		workTime:""
	})
	const submit = async () => {
		await NewReservation(reservation)
	}
	
	onShow(()=>{
		RouteIntercept()
	})
</script>

<style lang="scss" scoped>
	.Reservation{
		
		.button{
			margin: 20upx 10upx;
			color: var(--borderColor);
		}	
	}
	
</style>
