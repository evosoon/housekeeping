<template>
	<view class="navigation">
		<view class="navigation_content" :style="{fontWeight:navigationStrong?'bold':'normal'}" @click="Strong(0)">综合
		</view>
		<view class="navigation_content price_view" :style="{fontWeight:navigationStrong?'normal':'bold'}"
			@click="Strong(1)">
			<text>价格</text>
			<view class=" sortprice">
				<uni-icons type="top" size="15" class="price"
					:color="(!navigationStrong&&arrangeStrong)?'black':'#d1d1d1'"></uni-icons>
				<uni-icons type="bottom" size="15" class="price"
					:color="(!navigationStrong&&!arrangeStrong)?'black':'#d1d1d1'"></uni-icons>
			</view>
		</view>
	</view>
	<Goodslist :introduction="introduction"></Goodslist>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from "vue"
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import {getResumeList} from "../../apis/resumeApis"
	import Goodslist from '../../components/List/GoodsList.vue'
	import ArraySort from '../../hooks/ArraySort.ts'
	const tag = ref('')
	const introduction = ref([])
	const navigationStrong = ref(true)
	const arrangeStrong = ref(true)
	const showintroduction = introduction.value
	const Strong = (number) => {
		if (!number) {
			navigationStrong.value = true
			arrangeStrong.value = false
			getResumeList(1,10,"已发布").then(res=>{
				introduction.value = res.data.items
			})
		} else {
			if (navigationStrong.value) {
				navigationStrong.value = false
				arrangeStrong.value = true
				introduction.value = ArraySort(introduction.value, "salary", arrangeStrong.value)
			} else {
				arrangeStrong.value = !arrangeStrong.value
				introduction.value = ArraySort(introduction.value, "salary", arrangeStrong.value)
			}
		}

	}
	onMounted(()=>{
		getResumeList(1,10,"已发布").then(res=>{
			introduction.value = res.data.items
		})
	})
</script>

<style scoped>
	.navigation {
		display: flex;
	}

	.navigation_content {
		width: 50%;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
	}

	.price_view {
		display: flex;
		justify-content: center;
	}

	.sortprice {
		display: flex;
		flex-direction: column;
		margin-top: 33upx;
	}

	.price {
		height: 18upx;
		line-height: 18upx;
	}
</style>