import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useQuoteStore = defineStore('quotes', () => {
  const error = ref(null)
  const loading = ref(false)
  async function addQuote(quote) {
    error.value = null
    loading.value = true
    try {
        const response = await axios.post('client/quotes', quote)
        return response.data
    } catch (err) {
        error.value = err.response.data.message
    } finally {
        loading.value = false
    }
  }

  return {
    // State
    error,
    loading,
    // Actions
    addQuote,
  }
})
