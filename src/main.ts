import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import App from '@/App.vue'
import { aboutRoute, contactRoute, homeRoute } from '@/home/router'
import { primeVueConfig } from '@/core/constants/prime-vue-config'
import './index.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoute,
    aboutRoute,
    contactRoute,
  ],
})
app.use(router)

app
  .use(PrimeVue, primeVueConfig)
  .use(ToastService)

app.mount('#app')
