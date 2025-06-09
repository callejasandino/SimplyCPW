import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useMembersStore = defineStore('members', () => {
  const members = ref([])    
  const error = ref(null)
  const loading = ref(false)

  async function fetchMembers() {
    loading.value = true
    error.value = null
    
    try {
        const response = await axios.get('client/members')
        members.value = response.data.members || []
        return members.value
    } catch (err) {
        error.value = err.message
        // Fallback data for testing/development
        return members.value
    } finally {
        loading.value = false
    }
  }

  return {
    // State
    members,
    error,
    loading,
    
    // Actions
    fetchMembers,
  }
})
