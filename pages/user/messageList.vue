<template>
	<view class="messageList">
		<template v-for="item in message" :key="item.id">
			<MessageCard :message='item'></MessageCard>
		</template>
	</view>
</template>

<script lang="ts" setup>
	import {reactive} from 'vue'
	import MessageCard from '../../components/MessageCard.vue'
	 const message = reactive([
	 	{
	 		id:1,
	 		title:'预约成功',
	 		tab:'系统消息',
	 		data:'您的身份信息更新成功',
	 		status:0,
	 	},{
	 		id:2,
	 		title:'预约成功',
	 		tab:'个人消息',
	 		data:'您预约的 2023年12月1日的服务已签约，服务人员 @李大婶',
	 		status:0,
	 	},{
	 		id:3,
	 		title:'预约成功',
	 		tab:'个人消息',
	 		data:'您预约的 2023年12月1日的服务已签约，服务人员 @李大婶',
	 		status:0,
	 	},{
	 		id:4,
	 		title:'预约成功',
	 		tab:'订单消息',
	 		data:'您预约的 2023年12月1日的服务已签约，服务人员 @李大婶',
	 		status:1,
	 	},{
	 		id:5,
	 		title:'预约成功',
	 		tab:'系统消息',
	 		data:'您预约的 2023年12月1日的服务已签约，服务人员 @李大婶',
	 		status:1,
	 	},
	 ])
	 
</script>

<style lang="scss" scoped>
	.messageList{
		margin: 20upx;
	}
</style>
