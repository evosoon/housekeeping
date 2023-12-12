<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar left-icon="left" :right-text="modetext" title="标题" :border="false" @clickLeft="leave()"
				@clickRight="changemode" />
		</view>
		<segmentedcontrol :selected="selected" v-if="mode"></segmentedcontrol>
		<view class="calendar" v-if="!mode">
			<uni-calendar :showMonth="false" :lunar="true" :selected="selected" :start-date="'2019-3-2'"
				:end-date="'2019-5-20'" />
		</view>

	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import ArraySort from '../../hooks/ArraySort.ts'
	// import worklable from '../../components/List/WorkLable.vue'
	import segmentedcontrol from '../../components/List/SegmentedControl.vue'
	import {workingReservation} from '../../apis/myReservationApis'
	onShow(() => {
		selected = ArraySort(selected, "date", true, true)
	})
	const selected = ref([{
			date: "2023-11-15",
			salary: 30,
			info: '王总家打扫卫生',
			address: '天津宁河区翻斗大街翻斗花园二号楼1001室'
		},
		{
			date: "2023-11-18",
			salary: 30,
			info: '锋总家照护锋总',
			address: "天津南开区翻斗大街翻斗花园二号楼1245室"
		},
		{
			date: "2023-11-08",
			salary: 30,
			info: '小杰家喂狗',
			address: "翻斗大街翻斗花园二号楼0564室"
		},
		{
			date: "2023-10-09",
			salary: 30,
			info: '小杰家喂猫',
			address: "翻斗大街翻斗花园二号楼0564室"
		}
	])
	const mode = ref(true)
	const modetext = ref("卡片")
	const leave = () => {
		uni.navigateBack();
	}
	const changemode = () => {
		mode.value = !mode.value
		modetext.value = mode.value ? '卡片' : "日历"
	}
	onMounted(()=>{
		workingReservation(1,10).then(res=>{
			console.log(res)
			// selected.value = res.date.items
		})
	})
</script>

<style scoped>
	.box-bg {
		background-color: #F5F5F5;
		padding: 5px 0;
	}
</style>