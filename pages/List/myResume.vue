<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar left-icon="left" right-icon="plusempty" title="简历" :border="false" @clickLeft="leave()"
				@clickRight="changemode" />
		</view>
		<view>
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text"
				activeColor="#4cd964"></uni-segmented-control>
			<view class="content">
				<view v-show="current === 0">
					<resumes :Resume="Resume"></resumes>
				</view>
				<view v-show="current === 1">
					<resumes :Resume="Resume"></resumes>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	import resumes from '../../components/List/resume.vue'
	import {getResumeList} from '../../apis/resumeApis'
	let items = reactive(['我的简历', '草稿箱', ])
	let current = ref(0)
	const onClickItem = (e) => {
		current.value = e.currentIndex
	}
	const modetext = ref('新建简历')
	const Resume = ref([])

	const leave = () => {
		uni.navigateBack();
	}
	const changemode = () => {
		uni.navigateTo({
			url: "/pages/List/createResume"
		})
	}

	onMounted(()=>{
		getResumeList(1,10).then(res=>{
			console.log(res)
			Resume.value = res.data.items
		})
	})
</script>

<style scoped>
	.box-bg {
		background-color: #F5F5F5;
		padding: 5px 0;
	}

	
</style>