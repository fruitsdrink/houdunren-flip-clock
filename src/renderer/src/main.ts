import './assets/css/base.scss'
import './assets/css/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@renderer/route'

const app = createApp(App)
app.use(router)
app.mount('#app')
