<template>
	<view class="Info" v-if="!Info.isAsigned">
		<view class="">
			需求：{{Info.request}}
		</view>
		<view class="">
			地址：{{Info.address}}
		</view>
		<view class="other flex">
			<view class="">
				薪水：{{Info.salary}}
			</view>
			<view class="">
				{{Info.workTime}}
			</view>
		</view>
		<template v-if="!Info.isAsigned">
			<text class="sure" @click="agreeWork(Info.id)">
				接受
			</text>
		</template>
		<!-- Info.isAsigned -->
		<!-- Info.id/createId -->
	</view>
</template>

<script setup>
	import {AgreeReservation,NewReservation,AddReservation} from '@/apis/reservationApis'
	const props = defineProps({
		Info:Object
	})
	const agreeWork = async(id) => {
		await AddReservation(id)
	}
</script>

<style lang='scss' scoped>
	.Info{
		padding: 20rpx;
		margin: 20rpx 0;
		box-shadow: 0 0 10rpx 1rpx var(--gray);
		.other{
			width: 100%;
			margin: 20rpx 0;
			justify-content: space-between;
		}
		.sure{
			border:1rpx solid red;
			padding: 3rpx 20rpx;
			border-radius: 10rpx;
		}
	}
</style>