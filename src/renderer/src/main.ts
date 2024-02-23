import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@renderer/route'
import ElementPlus from 'element-plus'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'element-plus/dist/index.css'
import './assets/css/base.scss'
import './assets/css/tailwind.css'
import '@icon-park/vue-next/styles/index.css'

const app = createApp(App)
const pinia = createPinia().use(piniaPluginPersistedstate)

app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')
