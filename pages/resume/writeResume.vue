<template>
	<view class="Reservation">
		<uni-section title="简介" subTitle="介绍一下自己,找到心仪的工作"  padding>
			<uni-easyinput class="" trim="all" v-model="resume.introduction" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<uni-section title="工作经验" subTitle="写出你异于常人的经验"  padding>
			<uni-easyinput class="" trim="all" v-model="resume.exprience" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<uni-section title="详细介绍" subTitle="写出你异于常人的经验"  padding>
			<uni-easyinput class="" trim="all" v-model="resume.detail" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>
		<uni-section title="薪水" subTitle="写出您提供的报酬 单位:元"  padding>
			<uni-easyinput type="number" class="" trim="all" v-model="resume.salary" placeholder="请输入内容" ></uni-easyinput>
		</uni-section>	
		<uni-section title="工作类型" subTitle=""  padding>
			<picker @change="pick" mode='selector' :value="pickIndex" :range="WorkInfoStore.workTypeList" range-key="workType" class='listPicker'>
				<view>{{WorkInfoStore.workTypeList[pickIndex].workType+' [ 点击更换 ] ' || 'undefined' }}</view>
			</picker>
		</uni-section>	
		 
		<view class="btns flex">
			<button class="button clear" @click="clear">清空</button>
			<button class="button submit" @click="submit">发布</button>
		</view>
	</view>
</template>

<script setup>
import RouteIntercept from '../../hooks/RouteIntercept';
	import { onShow } from '@dcloudio/uni-app'
	import { NewResume } from "@/apis/resumeApis"
	import { ref, reactive ,computed} from "vue"
	import {useWorkInfoStore} from '@/stores/workinfo.ts'
	const WorkInfoStore = useWorkInfoStore()
	
	const resume = reactive({
		exprience:"",
		introduction:"",
		detail:"",
		salary:0,
		workType:0
	})
	const submit = async () => {
		if(resume.workType === 0) resume.workType = WorkInfoStore.workTypeList[pickIndex.value].id
		const {status} = await NewResume({
			exprience:resume.exprience,
			introduction:resume.introduction,
			detail:resume.detail,
			salary:resume.salary-0,
			workType:`${resume.workType}`
		})
		if(status)clear()
	}
	const clear = () => {
		resume.exprience="",
		resume.introduction="",
		resume.salary= 0,
		resume.workType = 0,
		resume.detail = ""
		
	}
	
	let pickIndex = ref(0)

	const pick = (e)=>{
		pickIndex.value = e.detail.value
	   resume.workType = WorkInfoStore.workTypeList[e.detail.value].id
		// filterOptions.index = e.detail.value;
		// filterOptions.active = filterOptions.array[e.detail.value].name
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
