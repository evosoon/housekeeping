<template>
	<view class="card color">
		<view class="title flex">
			<view class="">
				{{message.title}}
			</view>
			<view class="flex">
				{{message.tab}}
				<view v-if="message.status" class="red"></view>
			</view>
		</view>
		<view class="info">
			{{message.data}}
		</view>
	</view>
</template>

<script lang="ts" setup>
	const {message} = defineProps(['message'])
</script>

<style lang="scss" scoped>
	.card{
		margin: 20upx 0;
		border: 1upx solid var(--gray);
		border-radius: 20upx;
		.title{
			justify-content: space-between;
			font-size: 30upx;
			font-weight: 600;
			padding: 20upx;
			border-bottom: 1upx solid var(--gray);
		}
		.info{
			padding: 20upx;
		}
		.red{
			width: 10upx;
			height: 10upx;
			border-radius: 50%;
			background-color: red;
		}
	}
</style>