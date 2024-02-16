// stores/counter.js
import { defineStore } from 'pinia';

export const useWorkInfoStore = defineStore('work', {
	state: () => {
		return { 
			workTypeList:[],
		 };
	},
	actions: {
		changeWorkTypeList(list) {
			this.workTypeList = list
		},
		clear() {
	
		},
	},
});