<!-- 

	import { ref, reactive,computed } from 'vue'
	import Getlocation from '@/hooks/GetLocation.ts'
	import baseImg from '@/utils/imgs/baseImg'
	
	const {longitude,latitude} = Getlocation()
	
	let location = computed(()=>{
		return `经纬度 [ ${longitude.value} : ${latitude.value} ]`
	})

 -->
 
 <template>
 	<view>
 		
 		<Swiper></Swiper>
 		<!-- 卡片 -->
 		<labelcard></labelcard>
 		<view class="quicksearch">
 			<div class="household">-放心家务-</div>
 			<div>
 				<div v-for="(item, index) in tag" :key="index" class="tag">{{item}}</div>
 			</div>
 		</view>
 		<view class="quicksearch">
 			<div class="household">-家庭救急-</div>
 			<div>
 				<div v-for="(item, index) in tag" :key="index" class="tag">{{item}}</div>
 			</div>
 		</view>
 	</view>
 </template>
 
 <script setup>
 	import {
 		ref,
 		reactive
 	} from "vue"
 	import Swiper from '../../components/Home/Swiper.vue'
 	import labelcard from '../../components/Home/LabelCard.vue'
 	
 	const current = ref(0)
 	const mode = ref('round')
 	const change = (e) => {
 		current.value = e.detail.current;
 	}
 	const tag = ['家庭保洁', '空调清洗', '地毯清洗', '沙发清洗', '开荒保洁', '玻璃清洗', '地板打蜡', '油烟机清洗']
 </script>
 
 <style scoped>
 	page {
 		background-color: #dedede;
 	}
 
 	.seiper {
 
 		background-color: #fff;
 		height: 300upx;
 	}
 
 	.seiper_img {
 		height: 300upx;
 		width: 100%;
 	}
 
 	.quicksearch {
 		background-color: #fff;
 		margin: 25upx 0;
 	}
 
 	.household {
 		height: 100upx;
 		line-height: 100upx;
 		text-align: center;
 	}
 
 	.tag {
 		display: inline-block;
 		height: 80upx;
 		padding: 0 23upx;
 	}
 </style>