<template>
	<view class="box">
		<view class="navbarbox">
			<view class="navbar">
				<ul v-for="(item, index) in serve" :key="index" class="navbar_ul">
					<li :class="select===index?'select_navbar_li':'navbar_li'" @click="changestyle(index)">{{item}}</li>
				</ul>
			</view>
		</view>
		<!-- <Goodslist :introduction="introduction"></Goodslist> -->
		<Orderlist :introduction="introduction"></Orderlist>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted
	} from 'vue'
	import Goodslist from '../../components/List/GoodsList.vue'
	import Orderlist from '../../components/List/OrderList.vue'
	import {getReservationList} from '../../apis/reservationApis'
	import {getResumeList} from '../../apis/resumeApis'
	const serve = reactive(['家庭保洁', '管道疏通', '数码维修', '房屋维修', '上门安装', '便民服务'])
	const introduction = ref([])
	const select = ref(0)
	const changestyle = (index)=>{
		select.value = index
	}
	onMounted(()=>{
		getReservationList(1,10).then(res=>{
			introduction.value=res.data.items
		})
	})
</script>

<style scoped>
	.box {
		display: flex;
		flex-direction: row;
	}

	.navbarbox {
		width: 220upx;
	}

	.navbar {
		position: fixed;
		left: 0;
		width: 200upx;
		height: 100%;
		background-color: #f3f2f2;
		color: black;
	}

	.navbar_ul {
		list-style-type: none;
		padding: 0;
		text-align: center;
	}

	.navbar_li {
		height: 100upx;
		line-height: 100upx;
	}
	.select_navbar_li{
		height: 100upx;
		line-height: 100upx;
		background-color: #fff;
		color: #d2be56;
		border-left: 10upx solid #d2c463;
	}
</style>