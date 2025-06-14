import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useGalleryStore = defineStore('gallery', () => {
  const gallery = ref([])
  const galleryResponse = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function fetchGallery(page = 1, append = false) {
    error.value = null
    loading.value = true
    
    try {
      const response = await axios.get(`client/gallery?page=${page}`)
      galleryResponse.value = response.data
      
      if (append && response.data.data) {
        // Append new items to existing gallery for load more functionality
        gallery.value = [...gallery.value, ...response.data.data]
      } else {
        // Replace gallery data for initial load or refresh
        gallery.value = response.data.data || response.data.gallery || []
      }
    } catch (err) {
      error.value = err.message
      console.error('Error fetching gallery:', err)
    } finally {
      loading.value = false
    }
  }

  async function loadMoreGallery() {
    if (!galleryResponse.value || !galleryResponse.value.next_page_url) {
      return false // No more pages available
    }
    
    const nextPage = galleryResponse.value.current_page + 1
    await fetchGallery(nextPage, true)
    return true
  }

  function getGalleryItem(id) {
    return gallery.value.find(item => item.id === id || item.id === parseInt(id))
  }

  function hasMorePages() {
    return galleryResponse.value && 
           galleryResponse.value.current_page < galleryResponse.value.last_page
  }

  function resetGallery() {
    gallery.value = []
    galleryResponse.value = null
    error.value = null
  }

  return {
    // State
    gallery,
    galleryResponse,
    error,
    loading,
    // Actions
    fetchGallery,
    loadMoreGallery,
    getGalleryItem,
    hasMorePages,
    resetGallery,
  }
})
