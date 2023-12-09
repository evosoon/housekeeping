<template>
	<view class="Box">
		<!-- <img class="image" src="https://ts1.cn.mm.bing.net/th/id/R-C.eec02321ea106169d757f427b98b358d?rik=%2bgK43uKTPrZbCw&riu=http%3a%2f%2f00.minipic.eastday.com%2f20170823%2f20170823152907_d41d8cd98f00b204e9800998ecf8427e_4.jpeg&ehk=FsISayQ5Gjp%2boHXA8OW7nhrZdn2JEzUKk3lfW%2br0P70%3d&risl=&pid=ImgRaw&r=0" alt=""> -->
		<view class="location"  @click="Getlocation">
			<uni-icons custom-prefix="custom-icon" type="location" size="16"></uni-icons>
			{{longitude ? location : "点击获取地理信息"}}
		</view>
		<image :src="baseImg" mode="aspectFill" alt="" class="baseImg" />
		<view class="red border" >
			不用管这个首页，首页不是我写
		</view>
		<!-- <scroll-view scroll-x="true" class="scrollView" >
			<view class="view" v-for="item in 10" :key="item.id">
				111
				</view>	
		</scroll-view> -->
		
		<template v-for="(item,index) in 5" :key="index">
			<view class="test1 flex">
				<image :src="baseImg" mode="aspectFill" alt="" class="test1_img" />
				<view class="test1_title flex">
					<text>我是一个标题</text>
					<text> --- </text>
					<text>这里写点扩展内容，不然太空了QaQ</text>
				</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	import { ref, reactive,computed } from 'vue'
	import Getlocation from '@/hooks/GetLocation.ts'
	import baseImg from '@/utils/imgs/baseImg'
	
	const {longitude,latitude} = Getlocation()
	
	let location = computed(()=>{
		return `经纬度 [ ${longitude.value} : ${latitude.value} ]`
	})
		
</script>

<style lang="scss" scoped>
	.Box{
		.location{
			height: 80upx;
			line-height: 80upx;
			padding: 0 10upx;
		}
		.baseImg{
			width: 100%;
		}
	.scrollView{
		height: 160rpx;
		white-space: nowrap;
		.view{
			width: 300upx;
			height: 100%;
			margin: 5upx;
			border: 1px solid var(--gray);
		}
	}
		.test1{
			height: 210upx;
			width: 100%;
			padding: 5upx;
			border-radius: 20upx;
			margin: 10upx 0;
			.test1_img{
				height: 200upx;
				width: 300upx;
				border-radius: 10upx;
			}
			.test1_title{
				padding: 0 10upx;
				flex-direction: column;
				
			}
		}
	}
</style>
