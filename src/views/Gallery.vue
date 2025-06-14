<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="relative py-52 bg-primary">
      <div class="absolute inset-0 bg-primary opacity-90">
        <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/19931558/pexels-photo-19931558.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white fade-in">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Discover our amazing pressure washing transformations
          </p>
        </div>
      </div>
    </section>

    <!-- Gallery Filter -->
    <section class="py-8 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in dynamicCategories" 
            :key="category"
            @click="filterByCategory(category)"
            :class="[
              'btn px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeCategory === category 
                ? 'btn-primary' 
                : 'bg-white text-neutral-dark hover:bg-gray-50 border border-gray-300'
            ]"
          >
            {{ category }}
          </button>
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
          <p class="text-gray-600">No gallery items found for this category.</p>
        </div>

        <!-- Gallery by Date Groups -->
        <div v-else class="space-y-12">
          <div 
            v-for="(dateGroup, groupIndex) in groupedItemsByDate" 
            :key="dateGroup.date"
            class="date-group"
          >
            <!-- Date Header -->
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-neutral-dark border-b-2 border-primary pb-2 inline-block">
                {{ dateGroup.date }}
              </h2>
              <p class="text-sm text-neutral mt-1">{{ dateGroup.items.length }} image{{ dateGroup.items.length !== 1 ? 's' : '' }}</p>
            </div>
            
            <!-- Masonry Grid for this date -->
            <div class="masonry-grid">
              <div 
                v-for="(item, index) in dateGroup.items" 
                :key="`${item.id}-${activeCategory}-${dateGroup.date}`"
                :class="[
                  'masonry-item',
                  'slide-up'
                ]"
                :style="{ 'animation-delay': `${((groupIndex * 10) + (index % 10)) * 100}ms` }"
                @click="openLightbox(item, getGlobalIndex(dateGroup, index))"
              >
                <div class="gallery-card card cursor-pointer group overflow-hidden">
                  <!-- Image Container -->
                  <div class="relative overflow-hidden">
                    <img 
                      :src="item.image" 
                      :alt="`${item.category} - Gallery item ${item.id}`"
                      class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      @load="onImageLoad"
                    />
                    
                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div class="absolute bottom-0 left-0 right-0 p-4">
                        <h3 class="text-white font-semibold text-lg mb-1">{{ item.category }}</h3>
                        <p class="text-white/90 text-sm">{{ item.description || 'Click to view details' }}</p>
                      </div>
                    </div>

                    <!-- Category Badge -->
                    <div class="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                      {{ item.category }}
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
        <div v-if="!galleryStore.hasMorePages() && galleryItems.length && !galleryStore.loading" class="text-center py-8">
          <p class="text-gray-500 text-sm">You've reached the end of our gallery!</p>
        </div>
      </div>
    </section>

    <!-- Vue Easy Lightbox -->
    <vue-easy-lightbox
      :visible="visibleLightbox"
      :imgs="lightboxImages"
      :index="currentImageIndex"
      @hide="closeLightbox"
    ></vue-easy-lightbox>

    <!-- CTA Section -->
    <section class="section water-gradient text-white">
      <div class="container mx-auto text-center">
        <h2 class="section-title text-white mb-6">Ready for Your Transformation?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Contact us today to schedule your pressure washing service and see the difference for yourself.
        </p>
        <router-link to="/contact" class="btn btn-accent text-lg px-8 py-4">
          Get a Free Quote
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { useGalleryStore } from '../store/gallery';
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  name: 'Gallery',
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      galleryStore: useGalleryStore(),
      activeCategory: 'All',
      isInfiniteScrollEnabled: true,
      loadedImages: 0,
      // Lightbox
      visibleLightbox: false,
      currentImageIndex: 0
    }
  },
  computed: {
    galleryItems() {
      // Sort by created_at date in ascending order (oldest first)
      return [...this.galleryStore.gallery].sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    },
    dynamicCategories() {
      if (!this.galleryItems.length) return ['All'];
      
      const uniqueCategories = [...new Set(this.galleryItems.map(item => item.category))];
      return ['All', ...uniqueCategories.sort()];
    },
    filteredItems() {
      const filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(item => item.category === this.activeCategory);
      
      // Ensure filtered items are also sorted by created_at (oldest first)
      return filtered.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    },
    groupedItemsByDate() {
      const groups = {};
      
      this.filteredItems.forEach(item => {
        const date = new Date(item.created_at);
        const dateKey = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        
        if (!groups[dateKey]) {
          groups[dateKey] = [];
        }
        groups[dateKey].push(item);
      });
      
      // Convert to array and sort by date (oldest first)
      return Object.entries(groups)
        .sort(([dateA], [dateB]) => {
          return new Date(dateA) - new Date(dateB);
        })
        .map(([date, items]) => ({
          date,
          items: items.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
        }));
    },
    lightboxImages() {
      return this.filteredItems.map(item => ({
        src: item.image,
        title: `${item.category} - ${item.description || 'Professional pressure washing service'}`
      }));
    }
  },
  methods: {
    async filterByCategory(category) {
      this.activeCategory = category;
      
      // Reset gallery if switching categories and reload from first page
      if (category !== 'All') {
        this.galleryStore.resetGallery();
        await this.galleryStore.fetchGallery(1);
      }
    },
    
    async loadMoreIfNeeded() {
      if (!this.isInfiniteScrollEnabled || this.galleryStore.loading) return;
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.offsetHeight - 1000; // Load when 1000px from bottom
      
      if (scrollPosition >= threshold && this.galleryStore.hasMorePages()) {
        try {
          await this.galleryStore.loadMoreGallery();
        } catch (error) {
          console.error('Error loading more gallery items:', error);
        }
      }
    },
    
    openLightbox(item, index) {
      this.currentImageIndex = index;
      this.visibleLightbox = true;
    },
    
    closeLightbox() {
      this.visibleLightbox = false;
    },
    
    onImageLoad() {
      this.loadedImages++;
      // Trigger masonry layout recalculation if needed
      this.$nextTick(() => {
        this.recalculateMasonry();
      });
    },
    
    recalculateMasonry() {
      // Simple masonry recalculation - now works with date groups
      const items = document.querySelectorAll('.masonry-item');
      if (!items) return;
      
      items.forEach((item, index) => {
        item.style.animationDelay = `${(index % 10) * 100}ms`;
      });
    },
    
    getGlobalIndex(dateGroup, localIndex) {
      // Calculate the global index for lightbox navigation
      let globalIndex = 0;
      
      for (const group of this.groupedItemsByDate) {
        if (group.date === dateGroup.date) {
          return globalIndex + localIndex;
        }
        globalIndex += group.items.length;
      }
      
      return localIndex;
    }
  },
  
  mounted() {
    // Setup infinite scroll
    window.addEventListener('scroll', this.loadMoreIfNeeded);
    window.addEventListener('resize', this.recalculateMasonry);
  },
  
  beforeUnmount() {
    // Cleanup
    window.removeEventListener('scroll', this.loadMoreIfNeeded);
    window.removeEventListener('resize', this.recalculateMasonry);
  }
}
</script>

<style scoped>
/* Masonry Grid Layout */
.masonry-grid {
  columns: 1;
  column-gap: 1.5rem;
  
  @media (min-width: 640px) {
    columns: 2;
  }
  
  @media (min-width: 768px) {
    columns: 3;
  }
  
  @media (min-width: 1024px) {
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
  @apply transition-all duration-300 hover:shadow-xl;
  transform: translateY(0);
}

.gallery-card:hover {
  transform: translateY(-4px);
}

/* Enhanced Image Hover Effects */
.gallery-card img {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsive adjustments for mobile */
@media (max-width: 640px) {
  .masonry-grid {
    columns: 1;
    column-gap: 1rem;
  }
  
  .masonry-item {
    margin-bottom: 1rem;
  }
}

/* Loading animation improvements */
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

/* Lightbox enhancements */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>