<template>
	<view class="List">
		<view class="title flex" >
			<template v-for="item in title" :key="item.id">
					<text :class="{'title-item-active':nowState==item.state}" class="title-item" v-text="item.title" @click="getReservation(item.state)"></text>
			</template>
		</view>
		<view class="zero flex border" v-if="!list.total">
			暂无内容
		</view>
		<template v-for="item in list.items" :key="item.id">
				<uni-card :title="item.request" :sub-title="item.address" :extra="item.workTime" @click="enter(item)">
					<text class="uni-body" >点击查看详情</text>
				</uni-card>
		</template>
	</view>
</template>

<script lang="ts" setup>
import RouteIntercept from '../../hooks/RouteIntercept';
	import { onShow } from '@dcloudio/uni-app'
	import { GetReservation } from "@/apis/reservationApis"
	import { ref,reactive } from "vue"
	let nowState = ref('已发布')
	
	const title = [ {id:1,title:"已发布",state:"已发布"},
					{id:1,title:"进行中",state:"进行中"},
					{id:1,title:"已完成",state:"已完成"},]
	
	let list = reactive({
		total:0,
		items:[]
	})
	
	const enter = (item)=>{
		uni.navigateTo({
			url:'/pages/reservation/reservationParticulars?item='+JSON.stringify(item),
		})
	}
	
	
	const getReservation = async(state:string)=>{
		nowState.value = state
		const {total,items} = await GetReservation({state,pageNum:1,pageSize:10})
		list.total = total
		list.items = items
	}
	onShow(async()=>{
		RouteIntercept()
		const {total,items} = await GetReservation({state:"已发布",pageNum:1,pageSize:10})
		list.total = total
		list.items = items
	})
</script>

<style lang="scss" scoped>
	.List{
		.title{
			height: 90upx;
			line-height: 90upx;
			width: 100%;
			margin-bottom: 10upx;
			.title-item{
				flex: 1;
				text-align: center;
			}
			.title-item-active{
				background-color: var(--borderColor);
				color:var(--backgroundColor);
				border-radius: 10upx;
			}
		}
		.zero{
			justify-content: center;
			align-items: center;
			font-size: 40upx;
			height: 200upx;
			margin: 100upx;
			border-radius: 30upx;
			color:var(--borderColor);
		}
	}
	
</style>
