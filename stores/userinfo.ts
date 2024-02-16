// stores/counter.js
import { defineStore } from 'pinia';
import {baseUrl} from '../utils/baseUrl' 

export const useUserInfoStore = defineStore('user', {
	state: () => {
		return { 
			id:'',
			username: '',
			nickname: '',
			email: '',
			userPic: '',
			age:'',
			createTime:'',
			gender:'',
			number:'',
			roleId:'',
			updateTime:'',
		 };
	},
	// 开启后对 state 的数据读写都将持久化
	
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		changeInfo(obj) {
			this.id = obj.id
			this.username = obj.username
			this.nickname = obj.nickname
			this.email = obj.email
			if(obj.userPic)this.userPic =`${baseUrl}/static/upload/${obj.userPic}`
			this.age= obj.age
			this.createTime= obj.createTime
			this.gender= obj.gender
			this.number= obj.number
			this.roleId= obj.roleId
			this.updateTime= obj.updateTime
		},
		clear() {
			this.id = ''
			this.username = ''
			this.nickname = ''
			this.email = ''
			this.userPic = ''
			this.age= ''
			this.createTime= ''
			this.gender=  ''
			this.number=  ''
			this.roleId=  ''
			this.updateTime=  ''
		},
	},
});