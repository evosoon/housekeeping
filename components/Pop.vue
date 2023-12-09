<template>
	<view>
		<uni-list-item  title="退出账号" clickable  @click="open = true" />
		<!-- 微信小程序又不支持 -->
	<!-- 	<teleport to="body">
			<view v-if="open" class="modal flex">
						<view class="center">
							<view class="title">
								{{props.message}}
							</view>
							<view class="buttons flex">
								<button class="button" @click="submit()">确定</button>
								<button class="button" @click="open = false">取消</button>
							</view>
						</view>
			</view>
		</teleport> -->
		
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	import { onLoad,onShow } from "@dcloudio/uni-app"
	const props = defineProps({
		message:{
			tupe:String,
			default:"是否执行此操作"
		}
	})
	const emits = defineEmits(['popSuccess'])
	let open = ref(false)
	function submit(){
		emits('popSuccess',true)
		open.value = false
	}
</script>

<style lang="scss" scoped>
	.modal{
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
		.center{
			background-color: var(--backgroundColor);
			box-shadow: 0 0 10upx 2upx var(--borderColor);
			padding: 50upx ;
			max-width: 1000upx;
			margin: 40upx;
			border-radius: 40upx;
			.title{
				margin: 0 20upx 40upx 20upx;
				font-size: 30upx
			}
			.buttons{
				button{
					flex: 1;
					border: 2upx solid var(--borderColor);
					margin: 20upx;
					height: 60upx;
					line-height: 60upx;
				}
			}
			
		}
	}
</style>