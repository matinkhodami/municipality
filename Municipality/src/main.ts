import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/assets/costum.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css' 
import '@/assets/css/all.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
