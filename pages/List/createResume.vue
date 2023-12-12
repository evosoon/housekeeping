<template>
	<view>
		<resumeform :formData="formData"></resumeform>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import resumeform from '../../components/List/ResumeForm.vue'
	const formData = ref({
		age: '', //年龄
		sex: '', //性别
		profession: '', //工种
		address: '', //地址
		salary: '', //期望薪资
		experience: '', //工作经历
		introduction: '' //自我评价
	})
</script>

<style scoped>
	.form {
		margin-top: 30upx;
		padding: 15px;
		background-color: #fff;
	}
</style>