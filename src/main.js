import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/routes.js'
import axios from 'axios'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

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
  },
)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ToastPlugin)

router.isReady().then(() => {
  app.mount('#app')
})
