<template>
	<view class="ResumeList color" @click="jump('/pages/resume/resume?item='+JSON.stringify(Info))">
		<view class="work">
			<template class="flex">
				<view class="work-introduction" v-text="Info.introduction"></view>
				<view class="work-salary" v-text="Info.salary+' / 次 '"></view>
			</template>
			<view class="work-exprience" v-text="Info.exprience"></view>
		</view>
		<view class="user flex">
			<image :src="getPic" mode="aspectFill" alt="" class="user-img" @click.stop="jump('/pages/user/showUser?item='+JSON.stringify(Info))" />
			<view class="user-info" @click.stop="jump('/pages/user/showUser?item='+JSON.stringify(Info))">
				<view class="user-name">{{Info.nickname}}</view>
				<view class="user-eval">{{Info.score| 5}} 分</view>
			</view>
			<view class="user-zero"></view>
			<view class="user-gis flex">
			</view>
		</view>
	</view>
	
</template>

<script lang="ts" setup>
	
	import {computed,toRefs,defineProps} from "vue"
	import baseImg from '@/utils/imgs/baseImg'
	import {baseUrl} from '@/utils/baseUrl.ts'
	const props = defineProps({
		Info:Object
	})
	const {Info} = toRefs(props)
	const getPic = computed(()=>{
			let path = baseImg
			if(Info.user_pic) path = baseUrl+'/static/uploads'+Info.user_pic
			return path
	})
	interface ResumeInfo{
		createId:number
		introduction:string
		exprience:string
		salary:number
	}
	const jump = (url) => {
		uni.navigateTo({
			url
		})
	}

</script>

<style lang="scss" scoped>
	.ResumeList{
		margin: 10upx 10upx;
		padding: 20upx 10upx;
		border-radius: 10upx;
		.work{
			margin-bottom: 10upx;
			.work-introduction{
				font-size: 1.1em;
				flex: 1;
				word-break: break-all;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
			.work-salary{
				font-size: 0.9em;
				font-weight: bold;
				margin-left: 10upx;
			}
			.work-exprience{
				font-size: 0.9em;
				word-break: break-all;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp:1;
				-webkit-box-orient: vertical;
				padding: 10upx 5upx;
			}
		}
		.user{
			.user-img{
				height: 60upx;
				width: 60upx;
				border-radius: 50%;
				margin: 10upx 15upx 10upx 0;
			}
			.user-info{
				height: 80upx;
			}
			.user-name,.user-eval{
				height: 40upx;
				line-height: 40upx;
			}
			.user-eval{
				font-size: 0.8em
			}
			.user-zero{
				flex: 1;
			}
			.user-gis{
				align-items: end;
			}
		}
	}
</style>