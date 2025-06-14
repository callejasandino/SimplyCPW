import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useJobStore = defineStore('job', () => {
  const clientJob = ref([])    
  const settings = ref([])
  const error = ref(null)
  const loading = ref(false)

  async function fetchJob(slug) {
    loading.value = true
    error.value = null
    
    try {
        const response = await axios.get(`client/job/${slug}`)
        clientJob.value = response.data.clientJob || []
        settings.value = response.data.settings || []
        
    } catch (err) {
        error.value = err.message
        // Fallback data for testing/development
        return clientJob.value
    } finally {
        loading.value = false
    }
  }

  return {
    // State
    clientJob,
    settings,
    error,
    loading,
    
    // Actions
    fetchJob,
  }
})
