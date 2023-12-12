<template>
	<view class="card_view">
		<template v-for="(item,index) in serve" :key="item.id">
			<view class="card" :style="cardColor[index]" @click="particulars(item.content)">
				<p class="p">{{item.content}}</p>
				<p class="p">{{item.synopsis}}</p>
			</view>
		</template>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from "vue"

	const cardColor = [{
		backgroundColor: "#d7d5ff"
	}, {
		backgroundColor: "#ffffdd"
	}, {
		backgroundColor: "#c2ffe1"
	}, {
		backgroundColor: "#f1c7ff"
	}, {
		backgroundColor: "#ffe1c2"
	}, {
		backgroundColor: "#ffc5c6"
	}]
	const serve = reactive([{
			id: 0,
			content: "日常保洁",
			synopsis: '洁净 舒适 爱家'
		},
		{
			id: 1,
			content: "管道疏通",
			synopsis: '便捷 实时 响应'
		},
		{
			id: 2,
			content: "数码维修",
			synopsis: '专业 方便 快捷'
		},
		{
			id: 3,
			content: "房屋维修",
			synopsis: '快速 贴心 保障'
		},
		{
			id: 4,
			content: "上门安装",
			synopsis: '服务 迅速 放心'
		},
		{
			id: 5,
			content: "便民服务",
			synopsis: '跑腿 搬重 回收'
		}
	])
	const particulars = (content) => {
		uni.navigateTo({
			url: "/pages/List/particulars"
		})
	}
</script>

<style scoped>
	.card_view {
		background-color: #fff;
		margin: 30upx 0;
		padding: 10upx;
	}

	.card {
		background-color: #fff;
		width: 48%;
		margin: 1%;
		height: 200upx;
		border-radius: 5%;
		display: inline-block;
	}

	.p {
		margin: 25upx;
	}
</style>