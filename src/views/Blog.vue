<template>
  <div>
    <section class="relative py-32 md:py-52 water-gradient">
      <div class="absolute inset-0 bg-primary opacity-20">
        <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto relative z-10">
        <div class="text-center text-white slide-up">
          <h1 class="font-bold mb-6">Blog</h1>
          <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">Stay updated with our latest blog posts and articles</p>
        </div>
      </div>
    </section>

    <div class="section">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-16">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p class="text-gray-600 mt-4">Loading articles...</p>
        </div>

        <!-- Blog Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(blog, index) in blogs" :key="blog.slug || index" class="card hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] fade-in" :style="{ animationDelay: `${index * 0.1}s` }">
            <!-- Blog Image -->
            <div class="relative overflow-hidden">
              <img :src="blog.image" :alt="blog.title" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Blog Content -->
            <div class="p-6">
              <!-- Blog Meta -->
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{{ blog.author }}</span>
                </div>
                <div class="flex items-center gap-1 text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{{ formatDate(blog.created_at) }}</span>
                </div>
              </div>

              <!-- Blog Title -->
              <h3 class="font-display font-semibold text-xl mb-3 text-gray-900 leading-tight hover:text-primary transition-colors duration-200">
                {{ blog.title }}
              </h3>

              <!-- Blog Excerpt -->
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ ellipsis(blog.content, 120) }}
              </p>

              <!-- Read More Button -->
              <button @click="readMore(blog.slug)" class="btn btn-primary w-full group">
                <span>Read More</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="!loading && blogs.length === 0" class="text-center py-16">
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No Articles Yet</h3>
          <p class="text-gray-600">Check back soon for new content!</p>
        </div>

        <!-- Pagination -->
        <div v-if="!loading && pagination.total > 0" class="mt-12">
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>Showing {{ pagination.from || 0 }} to {{ pagination.to || 0 }} of {{ pagination.total }} articles</div>

            <div class="flex items-center gap-2">
              <button @click="goToPage(pagination.current_page - 1)" :disabled="pagination.current_page <= 1" class="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">Previous</button>

              <span class="px-3 py-1"> Page {{ pagination.current_page }} of {{ pagination.last_page }} </span>

              <button @click="goToPage(pagination.current_page + 1)" :disabled="pagination.current_page >= pagination.last_page" class="px-3 py-1 rounded border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBlogsStore } from '@/store/blogs'
import { useShop } from '@/composables/useShop'
import { showToast } from '@/utils/toast'

const router = useRouter()
const blogStore = useBlogsStore()
const { shopUuid } = useShop()

// Use computed properties to reactively access store state
const blogs = computed(() => blogStore.blogs)
const loading = computed(() => blogStore.loading)
const pagination = computed(() => blogStore.pagination)

const fetchBlogs = async (page = 1) => {
  try {
    await blogStore.fetchBlogs(shopUuid.value, page)
  } catch (error) {
    showToast('Error fetching blogs: ' + error.message)
  }
}

const goToPage = async (page) => {
  if (page >= 1 && page <= pagination.value.last_page && page !== pagination.value.current_page) {
    await fetchBlogs(page)
    document.querySelector('.section')?.scrollIntoView({ behavior: 'smooth' })
  }
}

const ellipsis = (text, maxLength) => {
  if (text && text.length > maxLength) return text.substring(0, maxLength) + '...'
  return text || ''
}

const readMore = (slug) => {
  router.push(`/${shopUuid.value}/blog/${slug}`)
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

onMounted(async () => {
  await fetchBlogs()
})
</script>
