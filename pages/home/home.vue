<template>
	<view id="Box" class="box">
		<uni-section title="我是主页捏" >
					<uni-card :cover="cover" @click="onClick">
						<image slot='cover' style="width: 100%;" src="@/static/baseImage.jpg"></image>
						<text class="uni-body">这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
						<view slot="actions" class="card-actions">
							<view class="card-actions-item">
								<uni-icons type="pengyouquan" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">分享</text>
							</view>
							<view class="card-actions-item">
								<uni-icons type="heart" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">点赞</text>
							</view>
							<view class="card-actions-item">
								<uni-icons type="chatbubble" size="18" color="#999"></uni-icons>
								<text class="card-actions-item-text">评论</text>
							</view>
						</view>
					</uni-card>
				</uni-section>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	#Box{
		text-align: center;
	
	}
</style>
