<template>
	<view>
		<view v-for="(item,index) in selected" :key="index">
			<view class="card" @click="toparticulars(item)">
				<view class="work">
					<view class="workinfo">
						{{item.info}}
					</view>
					<view class="workdate">
						{{item.date}}
					</view>
				</view>
				<view class="workdetails">
					地址：{{item.address}}
				</view>
				<view class="workdetails">
					薪资：{{item.salary}}
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
	const props = defineProps({
		//子组件接收父组件传递过来的值
		selected: Array,
	})
	//使用父组件传递过来的值
	const {
		selected
	} = toRefs(props)
	
	const toparticulars = (item)=>{
		console.log(item)
		uni.navigateTo({
			url:'/pages/List/orderDetails'
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
		padding: 10upx;
	}
</style>