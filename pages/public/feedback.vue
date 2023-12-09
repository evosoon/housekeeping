<template>
	<view class="feedback">
		<uni-section title="提供宝贵建议,帮助我们改进" padding>
			<uni-easyinput type="textarea" autoHeight v-model="feedback" placeholder="请输入内容"></uni-easyinput>
		</uni-section>
		<button class="button">提交</button>
	</view>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'
	const feedback = ref('')
	
</script>

<style lang="scss" scoped>
	.feedback{
		margin: 100upx 0;
		.button{
			margin: 20upx;
			background-color: var(--borderColor);
			color: var(--backgroundColor);
		}
	}

</style>
