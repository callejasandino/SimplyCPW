import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useGalleryStore = defineStore('gallery', () => {
  const gallery = ref([])
  const galleryResponse = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function fetchGallery() {
    error.value = null
    loading.value = true
    
    try {
      const response = await axios.get('client/gallery')
      galleryResponse.value = response.data
      gallery.value = response.data.data || response.data.gallery || []
    } catch (err) {
      error.value = err.message
      console.error('Error fetching gallery:', err)
    } finally {
      loading.value = false
    }
  }

  function getGalleryItem(id) {
    return gallery.value.find(item => item.id === id || item.id === parseInt(id))
  }

  return {
    // State
    gallery,
    galleryResponse,
    error,
    loading,
    // Actions
    fetchGallery,
    getGalleryItem,
  }
})
