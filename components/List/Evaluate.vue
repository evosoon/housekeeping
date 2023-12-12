<template>
	<view>
		<uni-card title="评价" :isFull="true">
			<uni-card v-for="(item,index) in rate" :key="index" :isFull="true" style="margin-top: 10upx;">
				<view class="userdetails">
					<image :src="baseImg" class="goods-pic" align="middle" />
					<view class="rate">
						<h4>{{item.name}}</h4>
						<uni-rate :readonly="true" :value="item.rate" />
					</view>

				</view>
				<view class="">
					{{item.content}}
				</view>
			</uni-card>
		</uni-card>

	</view>
</template>
<script setup>
	import {
		ref,
		reactive,
		onMounted,
	} from 'vue'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import baseImg from '@/utils/imgs/baseImg'
	const rate = reactive([{
			id: 1,
			name: "test",
			rate: 3,
			content: "服务良好，值得信赖下次还来"
		},
		{
			id: 2,
			name: "sa",
			rate: 4,
			content: "haohaohao"
		},
		{
			id: 3,
			name: "wd",
			rate: 5,
			content: "haohaohao"
		},
		{
			id: 4,
			name: "sad",
			rate: 1,
			content: "不咋地"
		}
	])
</script>

<style scoped>
	.userdetails {
		display: flex;
		padding: 10px 5px;
	}

	.goods-pic {
		width: 50px;
		height: 50px;
		border-radius: 20upx;
		display: block;
		margin: 5upx;
	}

	.rate {
		padding: 10upx;
	}
</style>