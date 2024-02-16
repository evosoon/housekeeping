// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import BaiduMap from 'vue-baidu-map-3x'


import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  

	  app.use(Pinia.createPinia())
	  app.use(BaiduMap, {
	    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
	    ak: 'VbEo2E2ExIls06G4fpbE67Emu3y5VNH2'
	  })
	  return { app, Pinia } 
}
// #endif