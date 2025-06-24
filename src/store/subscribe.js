import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useSubscribeStore = defineStore('subscribe', () => {
  const error = ref(null)
  const success = ref(null)
  async function subscribe(email, options) {
    error.value = null

    try {
        const response = await axios.post(`client/subscribe`, { email, options })
        success.value = response.data
    } catch (err) {
        error.value = err.message
    }
  }

  async function unsubscribe(email) {
    error.value = null

    try {
        const response = await axios.post(`client/unsubscribe`, { email })
        success.value = response.data
    } catch (err) {
        error.value = err.message
    }
  }
  return {
    error,
    success,
    // Actions
    subscribe,
    unsubscribe
  }
})
