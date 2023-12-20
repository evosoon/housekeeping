<template>
	<view class="Reservation">
		<uni-section title="简介" subTitle="介绍一下自己,找到心仪的工作"  padding>
			<uni-easyinput class="" trim="all" v-model="resume.introduction" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<uni-section title="工作经验" subTitle="写出你异于常人的经验"  padding>
			<uni-easyinput class="" trim="all" v-model="resume.exprience" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<uni-section title="薪水" subTitle="写出您提供的报酬 单位:元"  padding>
			<uni-easyinput type="number" class="" trim="all" v-model="resume.salary" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>		
		 
		<view class="btns flex">
			<button class="button clear" @click="clear">清空</button>
			<button class="button submit" @click="submit">发布</button>
		</view>
	</view>
</template>

<script lang="ts" setup>
import RouteIntercept from '../../hooks/RouteIntercept';
	import { onShow } from '@dcloudio/uni-app'
	import { NewResume } from "@/apis/resumeApis"
	import { reactive } from "vue"
	interface Resume{
		introduction:string
	    exprience:string
	    salary:number | string
	    state:string
	}
	const resume:Resume = reactive({
		exprience:"",
		introduction:"",
		salary:0,
		state:""
	})
	const submit = async () => {
		const {status} = await NewResume(resume)
		if(status)clear()
	}
	const clear = () => {
		resume.exprience="",
		resume.introduction="",
		resume.salary=0,
		resume.state=""
	}
	
	onShow(()=>{
		RouteIntercept()
	})
</script>

<style lang="scss" scoped>
	.Reservation{
		.btns{
			width: 100%;
			.submit{
				flex: 3;
			}
			.clear{
				flex: 1;
			}
		}
		.button{
			margin: 30upx 10upx;
			color: var(--borderColor);
		}	
	}
	
</style>
