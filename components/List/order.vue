<template>
	<view>
		<view v-for="(item,index) in Order" :key="index">
			<view class="card">
				<view class="work">
					<view class="workinfo">
						{{item.request}}
					</view>
					<view>
						<button type="primary" size="mini" @click="toOrder(item)">详情</button>
					</view>
				</view>
				<view class="workdetails">
					<uni-table>
						<uni-tr>
							<uni-td>工作内容:</uni-td>
							<uni-td>{{item.request}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>时间:</uni-td>
							<uni-td>{{item.workTime}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>地址:</uni-td>
							<uni-td>{{item.address}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>薪资:</uni-td>
							<uni-td>{{item.salary}}</uni-td>
						</uni-tr>
					</uni-table>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		toRefs,
		defineProps
	} from 'vue'

	import {
		AddReservation
	} from '../../apis/reservationApis'
	const props = defineProps({
		//子组件接收父组件传递过来的值
		Order: Array,
	})
	//使用父组件传递过来的值
	const {
		Order
	} = toRefs(props)
	
	const toOrder = (item) => {
		uni.navigateTo({
			url: '/pages/List/showOrder?userid' + item.createId
		})
	}
</script>

<style scoped>
.card {
		width: 90%;
		margin-left: 4%;
		margin-top: 40upx;
		padding: 10upx;
		box-shadow: -3upx 3upx 5upx 5upx #e7e7e7;
	}

	.work {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20upx;
		border-bottom: 3upx solid #b9b9b9;
	}

	.workdetails {
		padding: 20upx;
	}

	.text {
		display: flex;
		flex-direction: column;
		word-break: break-all
	}
</style>