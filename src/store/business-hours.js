import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { showToast } from '../utils/toast.js'

export const useBusinessHoursStore = defineStore('business-hours', () => {
  const businessHours = ref([])
  const error = ref(null)

  async function fetchBusinessHours() {
    error.value = null
    
    try {
        const response = await axios.get('client/business-hours')
        
        // Handle the API response structure: {status: "success", data: {...}}
        if (response.data && response.data.status === 'success' && response.data.data) {
          const businessHourData = response.data.data
          
          // Parse the hours JSON string
          if (businessHourData.hours && typeof businessHourData.hours === 'string') {
            businessHourData.hours = JSON.parse(businessHourData.hours)
          }
          
          businessHours.value = [businessHourData]
        } else {
          businessHours.value = response.data.businessHours || []
        }
    } catch (err) {
        error.value = err.message
        showToast('Failed to load business hours', 'error')
    }
  }
  
  return {
    // State
    businessHours,
    error,
    
    // Actions
    fetchBusinessHours,
  }
})
