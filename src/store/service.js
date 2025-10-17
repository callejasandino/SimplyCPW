import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useServiceStore = defineStore('services', () => {
  const services = ref([])
  const error = ref(null)

  async function fetchServices(shopUuid) {
    error.value = null

    try {
      const response = await axios.get(`client/services/${shopUuid}`)
      services.value = response.data.data.services
    } catch (err) {
      error.value = err.message
    }
  }

  return {
    // State
    services,
    error,

    // Actions
    fetchServices,
  }
})
