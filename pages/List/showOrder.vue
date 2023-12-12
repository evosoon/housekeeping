<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar left-icon="left" :right-text="modetext" title="简历" :border="false" @clickLeft="leave()"
				@clickRight="changemode" />
		</view>
		<view v-if="mode">
			<view class="order">
				<image :src="baseImg" class="order-pic" align="middle"/>
				<h4 class="order_name">text</h4>
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
		</view>
		<orderform :formData="order" v-if="!mode"></orderform>
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
	import orderform from '../../components/List/OrderForm.vue'
	import baseImg from '@/utils/imgs/baseImg'
	const mode = ref(true)
	const modetext = ref('修改')
	const userid = ref('')
	const order = ref({
		id: 2,
		createId: 1,
		address: "天津市滨海区",
		request: "帮忙给小孩做午饭，打扫卫生",
		salary: 30,
		state: "草稿",
		workTime: "2023-12-01",
		createTime: "2023-11-16T22:50:26",
		updateTime: "2023-11-16T22:50:26"
	})

	const leave = () => {
		uni.navigateBack();
	}
	const changemode = () => {
		mode.value = !mode.value
		modetext.value = mode.value ? '修改' : "取消"
	}
	onLoad((option) => {
		userid.value = option.userid
		ReservationDetails(userid.value).then(res => {
			console.log(res)
			// order.value = res.data
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