<template>
	<view>
		<view class="head">
			<h3>{{formData.work}}</h3>
		</view>
		<view class="work">
			<uni-table>
				<uni-tr>
					<uni-td>工作内容:</uni-td>
					<uni-td>{{formData.work}}</uni-td>
				</uni-tr><uni-tr>
					<uni-td>时间:</uni-td>
					<uni-td>{{formData.time}}</uni-td>
				</uni-tr><uni-tr>
					<uni-td>地址:</uni-td>
					<uni-td>{{formData.address}}</uni-td>
				</uni-tr><uni-tr>
					<uni-td>薪资:</uni-td>
					<uni-td>{{formData.salary}}</uni-td>
				</uni-tr><uni-tr v-if="formData.request">
					<uni-td>要求:</uni-td>
					<uni-td>{{formData.request}}</uni-td>
				</uni-tr><uni-tr>
					<uni-td>备注:</uni-td>
					<uni-td>{{formData.remark}}</uni-td>
				</uni-tr>
			</uni-table>
		 </view>
		<view class="btnview">
			<button type="primary" v-if="show">完成订单</button>
			<button type="warn" v-if="show">取消订单</button>
			<button type="primary" v-if="!show">添加订单</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	const formData = reactive({
		work: '小杰家喂猫', //工作内容
		time: '2023-05-13 14：00：00', //工作时间
		address: '天津宁河区翻斗大街翻斗花园二号楼1001室', //地址
		salary: 30, //薪资
		request: '仅限性别女 工作两年以上', //要求
		remark: '好好干，干好了有奖励' //备注
	})
	const show = ref(1)
</script>

<style scoped>
	.head {
		text-align: center;
		margin: 20upx;
	}

	.work {}

	.lable {
		margin: 20upx 40upx;
	}

	.btnview {
		display: flex;
		flex-direction: row;
		margin-top: 60upx;
	}
</style>