import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useGalleryStore = defineStore('gallery', () => {
  // State
  const gallery = ref([])
  const error = ref(null)
  const loading = ref(false)

  // Pagination state
  const currentPage = ref(1)
  const lastPage = ref(1)
  const total = ref(0)
  const hasMorePages = ref(false)

  // Helper function to update pagination state
  const setPagination = (paginationData) => {
    currentPage.value = paginationData.current_page || 1
    lastPage.value = paginationData.last_page || 1
    total.value = paginationData.total || 0
    hasMorePages.value = currentPage.value < lastPage.value
  }

  // Fetch gallery data with pagination support
  async function fetchGallery(shopUuid, page = 1, append = false) {
    error.value = null
    loading.value = true

    try {
      const response = await axios.get(`client/gallery/${shopUuid}`, {
        params: { page },
      })

      const galleriesData = response.data.data.galleries

      if (append) {
        gallery.value.push(...galleriesData.data)
      } else {
        gallery.value = galleriesData.data
      }

      setPagination(galleriesData)
    } catch (err) {
      error.value = err?.response?.data?.message || err.message
    } finally {
      loading.value = false
    }
  }

  // Load next page and append to existing gallery
  async function loadMoreGallery(shopUuid) {
    if (!hasMorePages.value || loading.value) return

    const nextPage = currentPage.value + 1
    await fetchGallery(shopUuid, nextPage, true)
  }

  // Reset gallery state
  function resetGallery() {
    gallery.value = []
    currentPage.value = 1
    lastPage.value = 1
    total.value = 0
    hasMorePages.value = false
    error.value = null
  }

  return {
    // State
    gallery,
    error,
    loading,

    // Pagination
    currentPage,
    lastPage,
    total,
    hasMorePages,

    // Actions
    fetchGallery,
    loadMoreGallery,
    resetGallery,
  }
})
