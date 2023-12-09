<template>
	<view class="UserCard">
		<uni-list-chat title="uni-app" :avatar="BaseImg" note="您收到一条新的消息" time="2020-02-02 20:20" badge-positon="left" badge-text="dot"></uni-list-chat>
	</view>
</template>

<script lang="ts" setup>
	import BaseImg from "../utils/imgs/baseImg.ts"
</script>

<style lang="scss" scoped>
	.UserCard{
		border-bottom: 10upx solid var(--bace-background-color);
	}
</style>