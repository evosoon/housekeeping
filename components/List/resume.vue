<template>
	<view>
		<view v-for="(item,index) in Resume" :key="index">
			<view class="card">
				<view class="work">
					<view class="workinfo">
						{{item.profession}}
					</view>
					<view>
						<button type="primary" size="mini" @click="toResume(item)">详情</button>
					</view>
				</view>
				<view class="workdetails">
					<uni-table stripe emptyText="暂无更多数据">
						<uni-tr>
							<uni-td>年龄:</uni-td>
							<uni-td>{{item.age}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>性别:</uni-td>
							<uni-td>{{item.sex}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>地址:</uni-td>
							<uni-td>{{item.address}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>薪资:</uni-td>
							<uni-td>{{item.salary}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>工作经历:</uni-td>
							<uni-td class="text">{{item.exprience}}</uni-td>
						</uni-tr><uni-tr>
							<uni-td>自我评价:</uni-td>
							<uni-td class="text">{{item.introduction}}</uni-td>
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
	}
	from 'vue'

	import {
		AddReservation
	} from '../../apis/reservationApis'
	const props = defineProps({
		//子组件接收父组件传递过来的值
		Resume: Array,
	})
	//使用父组件传递过来的值
	const {
		Resume
	} = toRefs(props)

	const toResume = (item) => {
		// console.log(item.createId)
		uni.navigateTo({
			url: '/pages/List/showResume?id=' + item.createId
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
		width: 70%;
		word-break: break-all
	}
</style>