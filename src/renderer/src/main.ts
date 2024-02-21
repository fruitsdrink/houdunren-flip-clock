import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@renderer/route'

import './assets/css/base.scss'
import './assets/css/tailwind.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia)
app.mount('#app')
