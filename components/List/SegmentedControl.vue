<template>
	<view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
			activeColor="#4cd964"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<Worklable :selected="selected"></Worklable>
			</view>
			<view v-show="current === 1">
				<Worklable :selected="selected"></Worklable>
			</view>
			<view v-show="current === 2">
				<Worklable :selected="selected"></Worklable>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		toRefs,
		defineProps
	} from 'vue'
	import Worklable from '../List/WorkLable.vue'
	const props = defineProps({
		//子组件接收父组件传递过来的值
		selected: Array,
	})
	//使用父组件传递过来的值
	const {
		selected
	} = toRefs(props)
	let items = reactive(['请求订单','进行中', '已完成'])
	let current = ref(0)
	const onClickItem= (e)=>{
		current.value = e.currentIndex
	}
</script>

<style scoped>

</style>