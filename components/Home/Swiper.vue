<template>
	<swiper class="swiper" circular indicator-dots="true" autoplay="true">
		<swiper-item v-for="(item ,index) in info" :key="index">
			<view class="swiper-item">
				<image :src="item.url" mode="aspectFill" class="seiper_img" />
			</view>
		</swiper-item>
	</swiper>

</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import baseImg from '@/utils/imgs/baseImg'
	const info = reactive([{
			colorClass: 'uni-bg-red',
			url: 'baseImg',
			content: '内容 A'
		},
		{
			colorClass: 'uni-bg-green',
			url: 'baseImg',
			content: '内容 B'
		},
		{
			colorClass: 'uni-bg-blue',
			url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
			content: '内容 C'
		}
	])
</script>

<style scoped>
	.seiper_img {
		height: 300upx;
		width: 100%;
	}

	.swiper {
		height: 300upx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
</style>