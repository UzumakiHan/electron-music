import { createApp } from 'vue'
// import "./style.css"
import App from './App.vue'
import './samples/node-api'
import router from '@/router/index'
import '@/assets/css/global.css'
import '@/assets/less/reset.less'
import '@/assets/fonts/fonts.css'

import 'virtual:uno.css'
import store from '@/store/index'



createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
