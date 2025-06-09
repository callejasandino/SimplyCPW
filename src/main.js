import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const pinia = createPinia()

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
const api = import.meta.env.VITE_API_URL

axios.interceptors.request.use(
    async (config) => {
        config.url = `${api}${config.url}`
        return await config
    },
    (error) => {
        return Promise.reject(error)
    }
)


createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')