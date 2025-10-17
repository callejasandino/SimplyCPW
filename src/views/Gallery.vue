<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="relative py-32 md:py-52 water-gradient">
      <div class="absolute inset-0 bg-primary opacity-20">
        <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto relative z-10">
        <div class="text-center text-white slide-up">
          <h1 class="font-bold mb-6">Gallery</h1>
          <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">Discover our amazing services through stunning visuals.</p>
        </div>
      </div>
    </section>

    <!-- Gallery Masonry Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Loading State -->
        <div v-if="galleryStore.loading && !galleryItems.length" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p class="mt-4 text-gray-600">Loading gallery...</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="!groupedItemsByDate.length && !galleryStore.loading" class="text-center py-12">
          <p class="text-gray-600">No gallery items found.</p>
        </div>

        <!-- Gallery by Date Groups -->
        <div v-else class="space-y-12">
          <div v-for="(dateGroup, groupIndex) in groupedItemsByDate" :key="dateGroup.date" class="date-group">
            <!-- Date Header -->
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-neutral-dark border-b-2 border-primary pb-2 inline-block">
                {{ dateGroup.date }}
              </h2>
              <p class="text-sm text-neutral mt-1">{{ dateGroup.items.length }} image{{ dateGroup.items.length !== 1 ? 's' : '' }}</p>
            </div>

            <!-- Masonry Grid for this date -->
            <div class="masonry-grid">
              <div v-for="(item, index) in dateGroup.items" :key="`${item.id}-${dateGroup.date}`" :class="['masonry-item', 'slide-up']" :style="{ 'animation-delay': `${(groupIndex * 10 + (index % 10)) * 100}ms` }" @click="openLightbox(item, getGlobalIndex(dateGroup, index))" class="cursor-pointer">
                <div class="gallery-card card group overflow-hidden">
                  <!-- Image Container -->
                  <div class="relative overflow-hidden">
                    <img :src="item.image" :alt="`Gallery item ${item.id}`" class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" @load="onImageLoad" />

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-white font-semibold text-lg mb-1">Gallery Image</h3>
                        <p class="text-white/90 text-sm">{{ item.description || 'Click to view details' }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Infinite Scroll Loading -->
        <div v-if="galleryStore.loading && galleryItems.length" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p class="mt-2 text-gray-600 text-sm">Loading more images...</p>
        </div>

        <!-- End of Results -->
        <div v-if="!galleryStore.hasMorePages && galleryItems.length && !galleryStore.loading" class="text-center py-8">
          <p class="text-gray-500 text-sm">You've reached the end of our gallery!</p>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <vue-easy-lightbox :visible="visibleLightbox" :imgs="lightboxImages" :index="currentImageIndex" @hide="closeLightbox" />

    <!-- CTA Section -->
    <section class="section water-gradient text-white">
      <div class="container mx-auto text-center">
        <h2 class="section-title text-white mb-6">Ready for Your Transformation?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto opacity-90">Contact us today to schedule your pressure washing service and see the difference for yourself.</p>
        <router-link to="/contact" class="btn btn-accent text-lg px-8 py-4"> Get a Free Quote </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useGalleryStore } from '@/store/gallery'
import VueEasyLightbox from 'vue-easy-lightbox'
import { useShop } from '@/composables/useShop'

// Store and composables
const galleryStore = useGalleryStore()
const { shopUuid } = useShop()

// Reactive state
const visibleLightbox = ref(false)
const currentImageIndex = ref(0)
const loadedImages = ref(0)

// Computed properties
const galleryItems = computed(() => {
  return [...galleryStore.gallery].sort((a, b) => {
    return new Date(a.created_at) - new Date(b.created_at)
  })
})

const groupedItemsByDate = computed(() => {
  const groups = {}

  galleryItems.value.forEach((item) => {
    const date = new Date(item.created_at)
    const dateKey = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    if (!groups[dateKey]) {
      groups[dateKey] = []
    }
    groups[dateKey].push(item)
  })

  // Convert to array and sort by date (oldest first)
  return Object.entries(groups)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, items]) => ({
      date,
      items: items.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)),
    }))
})

const lightboxImages = computed(() => {
  return galleryItems.value.map((item) => ({
    src: item.image,
    title: `Gallery Image - ${item.description || 'Professional pressure washing service'}`,
  }))
})

// Methods
const loadMoreIfNeeded = async () => {
  if (galleryStore.loading) return

  const scrollPosition = window.innerHeight + window.scrollY
  const threshold = document.documentElement.offsetHeight - 1000

  if (scrollPosition >= threshold && galleryStore.hasMorePages) {
    try {
      await galleryStore.loadMoreGallery(shopUuid.value)
    } catch (error) {
      console.error('Error loading more gallery items:', error)
    }
  }
}

const openLightbox = (item, index) => {
  currentImageIndex.value = index
  visibleLightbox.value = true
}

const closeLightbox = () => {
  visibleLightbox.value = false
}

const onImageLoad = () => {
  loadedImages.value++
  nextTick(() => {
    recalculateMasonry()
  })
}

const recalculateMasonry = () => {
  const items = document.querySelectorAll('.masonry-item')
  if (!items.length) return

  items.forEach((item, index) => {
    item.style.animationDelay = `${(index % 10) * 100}ms`
  })
}

const getGlobalIndex = (dateGroup, localIndex) => {
  let globalIndex = 0

  for (const group of groupedItemsByDate.value) {
    if (group.date === dateGroup.date) {
      return globalIndex + localIndex
    }
    globalIndex += group.items.length
  }

  return localIndex
}

// Lifecycle hooks
onMounted(async () => {
  window.addEventListener('scroll', loadMoreIfNeeded)
  window.addEventListener('resize', recalculateMasonry)

  if (shopUuid.value) {
    await galleryStore.fetchGallery(shopUuid.value, 1, false)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', loadMoreIfNeeded)
  window.removeEventListener('resize', recalculateMasonry)
})
</script>

<style scoped>
/* Masonry Grid Layout */
.masonry-grid {
  columns: 1;
  column-gap: 1.5rem;
}

@media (min-width: 640px) {
  .masonry-grid {
    columns: 2;
  }
}

@media (min-width: 768px) {
  .masonry-grid {
    columns: 3;
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    columns: 4;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  display: inline-block;
  width: 100%;
}

/* Gallery Card Styles */
.gallery-card {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.gallery-card img {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animations */
@keyframes slideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

/* Mobile Responsive */
@media (max-width: 640px) {
  .masonry-grid {
    columns: 1;
    column-gap: 1rem;
  }

  .masonry-item {
    margin-bottom: 1rem;
  }
}
</style>
