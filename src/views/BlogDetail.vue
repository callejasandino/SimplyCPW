<template>
  <div>
    <section class="relative py-52 bg-primary">
      <div class="absolute inset-0 bg-primary opacity-90">
        <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <!-- Blog Header -->
        <div v-if="blog" class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ blog.title }}</h1>

          <!-- Blog Meta -->
          <div class="flex flex-wrap items-center justify-center gap-6 text-white opacity-90 mb-6">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="font-medium">{{ blog.author }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{{ formatDate(blog.created_at) }}</span>
            </div>
          </div>
        </div>

        <!-- Loading State for Header -->
        <div v-else class="text-center text-white">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
          <p class="text-xl">Loading article...</p>
        </div>
      </div>
    </section>

    <div class="section">
      <div class="container max-w-4xl">
        <!-- Blog Content -->
        <div v-if="blog" class="slide-up">
          <!-- Blog Image -->
          <div v-if="blog.image" class="mb-8">
            <div class="card overflow-hidden">
              <img :src="blog.image" :alt="blog.title" class="w-full h-64 md:h-96 object-cover" />
            </div>
          </div>

          <!-- Blog Content -->
          <div class="card">
            <div class="p-8 md:p-12">
              <div class="prose prose-lg max-w-none">
                <div class="whitespace-pre-line text-gray-800 leading-relaxed">
                  {{ blog.content }}
                </div>
              </div>
            </div>
          </div>

          <!-- Blog Footer -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {{ getAuthorInitials(blog.author) }}
                </div>
                <div>
                  <p class="font-semibold text-gray-900">{{ blog.author }}</p>
                  <p class="text-gray-600 text-sm">Published {{ formatDate(blog.created_at) }}</p>
                </div>
              </div>

              <button @click="goToBlogList" class="btn btn-primary">Read More Articles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBlogsStore } from '@/store/blogs'
import { useShop } from '@/composables/useShop'
const route = useRoute()
const router = useRouter()
const blogStore = useBlogsStore()
const { shopUuid } = useShop()

const blog = computed(() => blogStore.blog)

onMounted(async () => {
  console.log(route.params.slug)

  await blogStore.getBlogItem(shopUuid.value, route.params.slug)
})

const goBack = () => {
  // Check if there's a previous page in history
  if (window.history.length > 1) {
    router.back()
  } else {
    // If no history, go to blog list
    router.push({ name: 'Blog' })
  }
}

const goToBlogList = () => {
  router.push({ name: 'Blog', params: { shop_uuid: shopUuid.value } })
}

const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const getAuthorInitials = (author) => {
  return author
    .split(' ')
    .map((name) => name.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}
</script>

<style scoped>
.prose {
  @apply text-gray-800;
}

.prose p {
  @apply mb-6;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  @apply font-display font-semibold text-gray-900 mt-8 mb-4;
}

.prose h1 {
  @apply text-3xl;
}

.prose h2 {
  @apply text-2xl;
}

.prose h3 {
  @apply text-xl;
}

.prose ul,
.prose ol {
  @apply ml-6 mb-6;
}

.prose li {
  @apply mb-2;
}

.prose blockquote {
  @apply border-l-4 border-primary pl-6 italic text-gray-700 bg-gray-50 py-4 my-6;
}

.prose a {
  @apply text-primary hover:text-secondary transition-colors duration-200;
}

.prose strong {
  @apply font-semibold text-gray-900;
}

.prose em {
  @apply italic;
}
</style>
