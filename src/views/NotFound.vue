<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <section class="relative py-32 md:py-52 water-gradient">
      <div class="absolute inset-0 bg-primary opacity-20">
          <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto relative z-10">
          <div class="text-center text-white slide-up">
              <h1 class="font-bold mb-6">Blog</h1>
              <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                  Stay updated with our latest blog posts and articles
              </p>
          </div>
      </div>
  </section>
  <div class="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
    <h1 class="text-6xl font-bold text-primary mb-4">404</h1>
    <h2 class="text-2xl font-semibold text-neutral-dark mb-2">Page Not Found</h2>
    <p class="text-neutral mb-8 max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <button
      @click="goHome"
      class="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
    >
      Go to Dashboard
    </button>
  </div>
</template>