import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useWorkResultStore = defineStore('work-result', () => {
  const workResult = ref([])
  const error = ref(null)
  const loading = ref(false)

  async function fetchWorkResult() {
    error.value = null
    loading.value = true
    
    try {
      const response = await axios.get('client/work-results')
      workResult.value = Array.isArray(response.data) ? response.data : (response.data.data || response.data.workResult || [])
    } catch (err) {
      error.value = err.message
      console.error('Error fetching work result:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    workResult,
    error,
    loading,
    // Actions
    fetchWorkResult,
  }
})
