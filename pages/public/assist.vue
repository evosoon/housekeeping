<template>
	<view class="assist">
		<p>问题1</p>
		<p>问题2</p>
		<p>问题3</p>
		<p>我觉得你没有问题</p>
		<view class="button border" @click="jump('/pages/public/feedback')">
			问题没有解决？点击反馈给我们
		</view>
	</view>
</template>

<script lang="ts" setup>
	function jump(url){
		uni.navigateTo({
			url
		})
	}
	
</script>

<style lang="scss" scoped>
	.assist{
		margin: 50upx 20upx;
		p{
			
		}
		.button{
			margin-top: 40upx;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
		}
	}
</style>
