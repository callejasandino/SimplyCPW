import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref([])
  const pagination = ref(null)
  const error = ref(null)
  const loading = ref(false)

  async function fetchBlogs(page = 1) {
    error.value = null
    loading.value = true
    
    try {
      const response = await axios.get(`client/blogs?page=${page}`)
      // Handle paginated response
      if (response.data.blogs) {
        blogs.value = response.data.blogs.data || []
        pagination.value = response.data.blogs
        // Return the pagination data for the component
        return response.data.blogs
      } else {
        blogs.value = []
        pagination.value = null
        return null
      }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function getBlogItem(slug) {
    error.value = null
    loading.value = true
    try {

      const response = await axios.get(`client/blogs/${slug}`)
      return response.data.blog
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    blogs,
    pagination,
    error,
    loading,
    // Actions
    fetchBlogs,
    getBlogItem,
  }
})
