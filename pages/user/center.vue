<template>
	<view class="Box flex">
		<view class="background" >
			<image :src="getPic" mode="widthFix" alt="" />
		</view>
		<view class="info backgroundColor">
			<text class="info_username color">{{Info.nickname}}</text>
			<button class="info_button color" @click="setIsEdit">{{isEdit?"取消编辑":"编辑信息"}}</button>
			<text v-if="Info.username" class="color">用户名： {{Info.username}}\n</text>
			<text v-if="Info.email" class="color">邮箱号： {{Info.email}}\n</text>
			<view v-if="Info.username" class="info_label color">标 签 <uni-icons type="paperplane" size="16"></uni-icons></view>
			<view class="info_label flex">
				<text class="info_label_item"># 学习</text>
				<text class="info_label_item"># 呱呱呱</text>
				<text class="info_label_item"># 睡觉</text>
				<text class="info_label_item"># A6 Avant</text>
				<text class="info_label_item"># 棒棒</text>
			</view>
		</view>

		<view class="cards flex backgroundColor">
			<view class="button flex color">
				<view><uni-icons type="heart" color="gray" size="16"></uni-icons> 0</view>
				<text>喜欢</text>
			</view>

			<view class="button flex color">
				<view><uni-icons type="star" color="gray" size="16"></uni-icons> 0</view>
				<text>收藏</text>
			</view>
			<view class="button flex color">
				<text><uni-icons type="notification" color="gray" size="16"></uni-icons></text>
				<text>通知</text>
			</view>
		</view>
		<view class="list changeInfo backgroundColor JumpView">
			<view v-if="!changeAvatar" class="changeAvatar" @click="changeAvatar=!changeAvatar">
				点击更新头像
			</view>
			<view v-if="changeAvatar" class="changeAvatar">
			  <button @click="chooseFile">选择文件</button>
			</view>
			
			<view class="title">
				{{isEdit?"编辑资料":"基本信息"}}
			</view>
			<view class="form form-border" >
				<view class="form-title color">用户名</view>
				<view class="form-view" v-text="Info.username" />
			</view>
			<view class="form"  :class="{'form-border':!isEdit}">
				<view class="form-title color">昵称</view>
				<input class="form-input" v-model="update.nickname" :disabled='!isEdit' :class="{'form-input-line':isEdit}" :placeholder="Info.nickname" />
			</view>
			<view class="form"  :class="{'form-border':!isEdit}">
				<view class="form-title color" >年龄</view>
				<input class="form-input" v-model="update.age" :disabled='!isEdit' :class="{'form-input-line':isEdit}" :placeholder="Info.age?Info.age:'男/女'" />
			</view>
			<view class="form"  :class="{'form-border':!isEdit}">
				<view class="form-title color">性别</view>
				<input class="form-input" v-model="update.gender" :disabled='!isEdit' :class="{'form-input-line':isEdit}" :placeholder="Info.gender?Info.gender:'暂无内容'" />
			</view>
			<view class="form"  :class="{'form-border':!isEdit}">
				<view class="form-title color">手机号码</view>
				<input class="form-input" v-model="update.number" :disabled='!isEdit' :class="{'form-input-line':isEdit}" :placeholder="Info.number?Info.number:'暂无内容'" />
			</view>
			<view class="form form-border">
				<view class="form-title color">身份</view>
				<view class="form-view" v-text="roleName" />
			</view>
			<view class="form form-border">
				<view class="form-title color">邮箱</view>
				<view class="form-view" v-text="Info.email" />
			</view>
			<view class="form form-border">
				<view class="form-title color">注册时间</view>
				<view class="form-view" v-text="Info.createTime" />
			</view>
			<view class="form flex" v-if="isEdit">
				<button @click="setIsEdit" class="button">撤销</button>
				<button class="button" @click="updateInfo">提交</button>
			</view>
			<view class="form flex color" v-if="isEdit">
				邮箱及密码需要到设置中修改
				<text @click="jump('/pages/public/setting')" class="blue">点击前往</text>
			</view>
		</view>
	<!-- 	<view class="list backgroundColor">
			这里是占位置用的
		</view> -->
		<view style="height:500upx"></view>
	</view>
</template>

<script setup>
	import { ref,reactive,computed } from 'vue'
	import { onLoad, onShow } from "@dcloudio/uni-app"
	import RouteIntercept from '../../hooks/RouteIntercept';
	import { useUserInfoStore } from '@/stores/userinfo.ts'
	import { UpLoad,UpdateInfo } from '../../apis/userApis.ts'
	import {baseUrl} from '../../utils/baseUrl'
	import baseImg from '../../utils/imgs/baseImg'
	const changeAvatar = ref(false)
	
	const update = reactive({
		id : '',
		username : '',
		nickname : '',
		email : '',
		userPic  : '',
		age : '',
		createTime : '',
		gender : '',
		number : '',
		roleId : '',
		updateTime : '',
	})
	
	const updateInfo = async () => {
		const _update = {
			username:Info.username,
			roleId:Info.roleId,
			email:Info.email,
			createTime:Info.createTime,
		}
	 
		_update.id=update.id? update.id:Info.id
		_update.nickname=update.nickname? update.nickname:Info.nickname
		_update.age=update.age? update.age:Info.age
		_update.gender=update.gender? update.gender:Info.gender
		_update.number=update.number? update.number:Info.number
		const {status,message} = await UpdateInfo(_update)
		if(status)setIsEdit()
		uni.showToast({
		title: message,
		duration: 2000
		})
		
	}
	const roleName = computed(()=>{
		if(Info.roleId==1)return '用户'
		if(Info.roleId==2)return '工作者'
	})
	const chooseFile = async () => {
		try {
		const res = await uni.chooseFile({
		count: 1, // 可以选择的文件数量
			success: (res) => {
			UpLoad(res.tempFiles[0],Info.username)
		},
		fail: (err) => {
			console.error('Failed to choose file:', err);
			}
		});
	} catch (err) {
		console.error('Error choosing file:', err);
		}
	};
	
	const getPic = computed(()=>{
			let path = baseImg
			if(Info.userPic) path = Info.userPic
			return path
	})
	
	const Info = useUserInfoStore()
	// 调用 actions
	// function change() {
	// 	Info.changeInfo({
	// 		username: '测试123'
	// 	})
	// }
	function jump(url){
		uni.redirectTo({
			url
		})
	}
	
	const isEdit = ref(false)
	const setIsEdit = () => {
		if(!isEdit.value)getElementScoollTop()
		isEdit.value = !isEdit.value
	}
	function getElementScoollTop(){
		uni.createSelectorQuery().select(".Box").boundingClientRect(data=>{
		　　uni.createSelectorQuery().select(".JumpView").boundingClientRect((res)=>{
		　　　　uni.pageScrollTo({
		　　　　　　duration:0,//过渡时间必须为0，uniapp bug，否则运行到手机会报错
		　　　　　　scrollTop:res.top - data.top - 50,
		　　　　})
		　　}).exec()
		}).exec();
	}
	onShow(()=>{
		RouteIntercept()
	})
</script>

<style lang="scss" scoped>
	
	.Box {
		flex-direction: column;
		.background {
			image {
				width: 100%;
			}
		}

		.info {
			position: relative;
			border-radius: 0 0 40upx 40upx;
			padding: 40upx;
			box-shadow: 0 0 10upx 1upx var(--gray);

			.info_username {
				position: absolute;
				height: 100upx;
				line-height: 120upx;
				font-size: 50upx;
				font-weight: 600;
				padding-top: 10upx;
				top: -100upx;
			}

			.info_button {
				position: absolute;
				top: -60upx;
				right: 40upx;
				color: var(--backgroundColor);
				background-color: var(--borderColor);
				border-radius: 30upx;
			}
			.info_label{
				margin-top: 40upx;
				flex-wrap: wrap;
				.info_label_item{
					height: 50upx;
					line-height: 50upx;
					border-radius: 30upx;
					padding: 0 30upx;
					margin: 10upx;
					background-color: var(--borderColor);
					color:var(--backgroundColor);
				}
			}
		}

		.info::before {
			content: "";
			position: absolute;
			height: 100upx;
			border-radius: 40upx 40upx 0 0;
			background-color: var(--backgroundColor);
			left: 0;
			right: 0;
			top: -100upx;
			bottom: 0;
		}

		.cards {
			margin: 20upx;

			.button {
				flex: 1;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				height: 160upx;
				margin: 20upx;
				border: 1upx solid var(--gray);
				border-radius: 20upx;
				color: var(--borderColor);
				background-color: var(--backgroundColor);
			}
		}
	}

	.list {
		padding: 40upx;
		margin-bottom: 20upx;
		border-radius: 40upx;
		box-shadow: 0 0 5upx 1upx var(--gray);

		img {
			object-fit: cover;
			width: 100%;
		}
			.changeAvatar{
				height: 40px;
				width: 100%;
				text-align: center;
				color: var(--borderColor);
				font-weight: bold;
			    button{
					color: var(--borderColor);
				}
			}
			.title {
				color: var(--borderColor);
				font-size: 40upx;
				font-weight: 600;
				padding: 20upx 10px;
			}
			.form-border{
				// border-left: 5upx solid var(--borderColor);
			}
			.form {
				margin: 40upx 20upx;
				height: 110upx;

				.form-title {
					padding-left: 20upx;
					height: 40upx;
					line-height: 40upx;
				}
				

				.form-view {
					padding-left: 20upx;
					height: 60upx;
					line-height: 60upx;
					font-size: 30upx;
				}

				.form-input {
					padding-left: 20upx;
					margin-top: 5upx;
					height: 65upx;
					font-size: 30upx;
				}

				.form-input-line {
					border-radius: 10upx;
					outline: 0;
					border: 1px solid var(--borderColor);
				}
				.button{
					flex: 1;
					height: 70upx;
					line-height: 70upx;
					margin-top: 20upx;
					background-color:  var(--borderColor);
					color: var(--backgroundColor);
				}
				.button:first-child{
					margin-right: 60upx;
				}

		}
	}
</style>