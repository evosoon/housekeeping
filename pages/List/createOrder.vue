<template>
	<view>
		<orderform :formData="formData"></orderform>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import orderform from '../../components/List/OrderForm.vue'
	const formData = ref({
		work: '', //工作内容
		time: '', //工作时间
		address: '', //地址
		salary: '', //薪资
		request: '', //要求
		remark: '' //备注
	})
	
</script>

<style scoped>
	
</style>