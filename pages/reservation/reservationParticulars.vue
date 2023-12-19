<template>
	<view v-for="item in reservation">
		{{item}}
	</view>
</template>

<script lang="ts" setup>
	import { onShow,onLoad } from '@dcloudio/uni-app'
	import {reactive,ref} from 'vue'
	
	const reservation = ref({})
	onLoad((option)=>{
		reservation.value = JSON.parse(option.item)
	})
</script>

<style>

</style>
