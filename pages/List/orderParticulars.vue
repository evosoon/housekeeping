<template>
	<view>
		<view class="order">
			<image :src="baseImg" class="order-pic" align="middle" />
			<h4 class="order_name">{{order.request}}</h4>
		</view>

		<view class="labelview">
			<view class="salary">￥{{order.salary}}</view>
			<view class="label">{{order.request}}</view>
		</view>
		<uni-card title="服务详情" :isFull="true" class="card" padding="15px">
			<uni-table>
				<uni-tr>
					<uni-td>工作内容： </uni-td>
					<uni-td>{{order.request}}</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td>工作薪水：</uni-td>
					<uni-td>￥{{order.salary}}</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td>工作时间：</uni-td>
					<uni-td>{{order.workTime}}</uni-td>
				</uni-tr>
				<uni-tr>
					<uni-td>工作地点：</uni-td>
					<uni-td>{{order.address}}</uni-td>
				</uni-tr>
			</uni-table>
		</uni-card>
		<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
			@buttonClick="buttonClick" class="nav" />
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import {
		ReservationDetails
	} from '../../apis/reservationApis'
	import {
		chooseReservation
	} from '../../apis/chooseApis'
	import baseImg from '@/utils/imgs/baseImg'
	const orderId = ref('')
	const order = ref({})

	const options = ref([{
		icon: 'home',
		text: '首页'
	}])
	const buttonGroup = ref([{
		text: '立即购买',
		backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
		color: '#fff'
	}])

	const buttonClick = (e) => {
		chooseReservation(orderId.value).then(res => {
			console.log(res)
		})
	}
	const onClick = (e) => {
		uni.reLaunch({
			url: '/pages/home/home'
		})
	}
	onLoad((option) => {
		orderId.value = option.orderid
		ReservationDetails(orderId.value).then(res => {
			order.value = res.data
		})

	})
</script>

<style scoped>
	.order {
		display: flex;
		padding: 10px 5px;
	}

	.order-pic {
		width: 80px;
		height: 80px;
		border-radius: 40upx;
		display: block;
		margin: 5upx;
	}

	.order_name {
		padding: 50upx 10upx;
	}

	.labelview {
		border-bottom: 1px solid #f0f0f0;
		margin-bottom: 20upx;
	}

	.label {
		margin: 10upx 40upx;
	}

	.salary {
		color: red;
		margin: 10upx 40upx;
		font-size: 20px;
	}
</style>