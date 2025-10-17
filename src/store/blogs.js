import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref([])
  const blog = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const pagination = ref({})

  async function fetchBlogs(shopUuid, page = 1) {
    error.value = null
    loading.value = true

    try {
      const response = await axios.get(`client/blogs/${shopUuid}?page=${page}`)
      const blogData = response.data.blogs

      blogs.value = blogData.data || []
      pagination.value = {
        current_page: blogData.current_page || 1,
        last_page: blogData.last_page || 1,
        total: blogData.total || 0,
        from: blogData.from || 0,
        to: blogData.to || 0,
        per_page: blogData.per_page || 10,
        next_page_url: blogData.next_page_url || null,
        prev_page_url: blogData.prev_page_url || null,
      }
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function getBlogItem(shopUuid, slug) {
    error.value = null
    loading.value = true
    try {
      const response = await axios.get(`client/blogs/${shopUuid}/${slug}`)
      blog.value = response.data.blog || null
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    blogs,
    blog,
    error,
    loading,
    pagination,
    // Actions
    fetchBlogs,
    getBlogItem,
  }
})
