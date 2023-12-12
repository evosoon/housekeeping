<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar left-icon="left" right-icon="plusempty" title="订单" :border="false" @clickLeft="leave()"
				@clickRight="changemode" />
		</view>
		<view>
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
				activeColor="#4cd964"></uni-segmented-control>
			<view class="content">
				<view v-show="current === 0">
					<orders :Order="Order"></orders>
				</view>
				<view v-show="current === 1">
					<orders :Order="Order"></orders>
				</view>
				<view v-show="current === 2">
					<orders :Order="Order"></orders>
				</view>
				<view v-show="current ===3">
					<orders :Order="Order"></orders>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'

	import orders from '../../components/List/order.vue'
	import {
		getReservationList
	} from '../../apis/reservationApis'
	import {
		reservationInProgress,
		historyEmployerReservation
	} from "../../apis/myReservationApis"
	let items = reactive(['已发布', '进行中', '已完成', '已取消'])
	let current = ref(0)

	const modetext = ref('新建简历')
	const Order = ref([])
	const onClickItem = (e) => {
		current.value = e.currentIndex
		if (current.value === 0) {
			getReservationList(1, 10, 1).then(res => {
				Order.value = res.data.items
			})
		} else if (current.value === 1) {
			reservationInProgress(1, 10).then(res => {
				console.log("ss")
				console.log(res)
				// Order.value = res.data.items
			})
		} else if (current.value === 2) {
			historyEmployerReservation(1, 10).then(res=>{
				console.log("11")
				console.log(res)
			})
		} 
		// else if(current.value === 3) {
			
		// }
	}
	const leave = () => {
		uni.navigateBack();
	}
	const changemode = () => {
		uni.navigateTo({
			url: "/pages/List/createOrder"
		})
	}

	onMounted(() => {
		getReservationList(1, 10, 1).then(res => {
			Order.value = res.data.items
		})
	})
</script>

<style scoped>
	.box-bg {
		background-color: #F5F5F5;
		padding: 5px 0;
	}
</style>