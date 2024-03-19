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
		<view class="Item">	
			 <view class="title">
			 	需求：{{item.request}}
			 </view>
			 <view class="address">
			 	地址：{{item.address}}
			 </view>
			 <view class="other flex">
			 	<view class="">
			 		薪水：{{item.salary}}
			 	</view>
			 	<view class="">
			 		时间：{{item.workTime || item.work_time}}
			 	</view>
			 </view>
			 <ItemList :item="item"></ItemList>
			 <view v-if="nowState == '进行中' ">
				 <view class="choose" @click="finish(item.id)">已完成</view>
			 </view>
			<view v-if="nowState == '已发布' && UserInfoStore.roleId===2">
							 <view class="choose" @click="choose(item.id,1)">接受</view>
							 <view class="choose" @click="choose(item.id,0)">拒绝</view>
			</view>
			 </view>
			 
		</template>
	</view>
</template>

<script lang="ts" setup>
import RouteIntercept from '../../hooks/RouteIntercept';
import ItemList from '../../components/ListItem.vue';

	import { onShow } from '@dcloudio/uni-app'
	import { GetReservation,ReservationRemark,ChangeReservation } from "@/apis/reservationApis"
	import { ref,reactive } from "vue"
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	const UserInfoStore = useUserInfoStore()
	let nowState = ref('已发布')
	
	const title = [ {id:1,title:"已发布",state:"已发布"},
					{id:2,title:"进行中",state:"进行中"},
					{id:3,title:"已完成",state:"已完成"},]
	
	let list = reactive({
		total:0,
		items:[]
	})
	
	const enter = (item)=>{
		uni.navigateTo({
			url:'/pages/reservation/reservationParticulars?item='+JSON.stringify(item),
		})
	}
	
	
	const getReservation = async(state?:string)=>{
		nowState.value = state ||  "已发布"
		if (nowState.value == "已发布" && UserInfoStore.roleId===2){
			const {data:{data}} = await ReservationRemark({pageNum:1,pageSize:100})
			list.total = data.total
			list.items = data.items
		}else{
			const {total,items} = await GetReservation({state:nowState.value,pageNum:1,pageSize:100})
			list.total = total
			list.items = items
		}
		
		
	}
	
	const choose = async(id,agree)=>{
		await ChangeReservation(`?reservationId=${id}&agree=${agree}`)
	}
	const finish = async(id)=>{
		await ChangeReservation(`?reservationId=${id}`)
	}
	
	onShow(async()=>{
		RouteIntercept()
		getReservation()
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
				background-color: #bababa;
				color:var(--backgroundColor);
			}
			.title-item-active{
				background-color: var(--borderColor);
				color:var(--backgroundColor);
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
		.Item{
			padding: 10rpx 20rpx;
			margin: 20rpx;
			border:1rpx solid var(--borderColor);
			border-radius: 10rpx;
			.title{
				
			}
			.other{
				justify-content: space-between;
			}
			.choose{
				display: inline-block;
				padding: 5rpx 20rpx;
				margin: 10rpx;
				color: red;
				border: 1rpx solid var(--color);
			}
			.choose:first-child{
				color: green;
			}
		}
	}
	
</style>
