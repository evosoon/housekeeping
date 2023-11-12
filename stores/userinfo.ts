// stores/counter.js
import { defineStore } from 'pinia';
import {baseUrl} from '../utils/baseUrl' 

export const useUserInfoStore = defineStore('userinfo', {
	state: () => {
		return { 
			id:'',
			username: '',
			nickname: '',
			email: '',
			user_pic: '',
		 };
	},
	// 开启后对 state 的数据读写都将持久化
	
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		changeInfo(obj) {
			this.username = obj.username
			this.nickname = obj.nickname
			this.email = obj.email
			if(obj.user_pic)this.user_pic = baseUrl+ obj.user_pic
		},
		clear() {
			this.username = ''
			this.nickname = ''
			this.email = ''
			this.user_pic = ''
		},
	},
	
});

