<template>
	<view>
		<view class="goods-list">
			<block v-for="(goods, i) in introduction" :key="i">
				<view class="goods-item">
					<!-- 商品左侧图片区域 -->
					<view class="goods-item-left">
						<image :src="baseImg" class="goods-pic"></image>
					</view>
					<!-- 商品右侧信息区域 -->
					<view class="goods-item-right">
						<!-- 商品标题 -->
						<view class="goods-name">{{goods.introduction}}</view>
						<view class="goods-info-box">
							<view class="goods-price">￥{{goods.salary}}</view>
							<button class="btn" @click="particulars(goods)" size="mini">详情</button>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script setup>
	
	import {
		ref,
		reactive,
		toRefs,
		defineProps
	} from "vue"
	import baseImg from '@/utils/imgs/baseImg'
	const props = defineProps({
		//子组件接收父组件传递过来的值
		introduction: Array,
	})
	//使用父组件传递过来的值
	const {
		introduction
	} = toRefs(props)
	const particulars = (good)=>{
		// console.log(good.createId)
		uni.navigateTo({
			url:'/pages/List/userDetails?userid=' + good.createId
		})
	}
</script>

<style scoped>
	.goods-item {
		display: flex;
		padding: 10px 5px;
		border-bottom: 1px solid #f0f0f0;
	}

	.goods-item-left {
		margin-right: 5px;
	}

	.goods-pic {
		width: 100px;
		height: 100px;
		display: block;
	}

	.goods-item-right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 50%;
	}

	.goods-name {
		font-size: 13px;
	}

	.goods-price {
		font-size: 16px;
		color: #c00000;
		display: inline-block;
	}

	.btn {
		padding: 0 20upx;
		margin: 0 10upx;
		height: 60upx;
		line-height: 60upx;
		background-color: #25379d;
		color: #f0f0f0;
		float: right;
	}
</style>