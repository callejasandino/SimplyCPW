<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="relative py-52 bg-primary">
      <div class="absolute inset-0 bg-primary opacity-90">
        <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/19931558/pexels-photo-19931558.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Before and after transformations of our pressure washing services
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
            @click="activeCategory = category"
            :class="[
              'category-btn px-4 py-2 rounded-full transition-all duration-300',
              activeCategory === category ? 'bg-primary text-white' : 'bg-white hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <!-- Loading State -->
        <div v-if="loading || galleryStore.loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p class="mt-4 text-gray-600">Loading gallery...</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="!galleryItems.length" class="text-center py-12">
          <p class="text-gray-600">No gallery items found.</p>
        </div>

        <!-- Gallery Items -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="item in filteredGalleryItems" 
            :key="item.id"
            class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1 group"
            @click="openLightbox(item)"
          >
            <div class="relative">
              <img :src="item.image" :alt="`Gallery item ${item.id}`" class="w-full h-64 object-cover" />
              
              <!-- Overlay with info -->
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 class="text-xl font-bold">{{ item.category }}</h3>
                  <p>Click to view details</p>
                </div>
              </div>
              
              <!-- Category Badge -->
              <div class="absolute top-0 right-0 bg-primary text-white text-sm px-3 py-1 m-2 rounded-full">
                {{ item.category }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Show More Button -->
        <div v-if="!loading && !galleryStore.loading && galleryItems.length && showLoadMore" class="text-center mt-12">
          <button @click="loadMore" class="btn btn-outline">
            Load More
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="lightbox.visible" class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div class="relative max-w-4xl w-full">
        <!-- Close Button -->
        <button @click="closeLightbox" class="absolute -top-10 right-0 text-white hover:text-gray-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Lightbox Content -->
        <div class="bg-white rounded-lg overflow-hidden">
          <div class="p-4 bg-primary text-white">
            <h3 class="text-xl font-bold">{{ lightbox.item?.category }}</h3>
          </div>
          
          <!-- Gallery Image -->
          <div class="relative overflow-hidden">
            <transition 
              name="slide" 
              mode="out-in"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <img 
                v-if="lightbox.item"
                :key="lightbox.item.id"
                :src="lightbox.item.image" 
                :alt="`Gallery item ${lightbox.item.id}`"
                class="w-full h-auto max-h-96 object-contain transition-transform duration-300 ease-in-out"
              />
            </transition>
          </div>
          
          <div class="p-4">
            <p class="text-gray-700">{{ lightbox.item?.description }}</p>
          </div>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          @click="prevItem" 
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          @click="nextItem" 
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 text-white hover:text-gray-300 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="py-16 bg-primary water-gradient text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready for Your Transformation?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
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
export default {
  name: 'Gallery',
  data() {
    return {
      galleryStore: useGalleryStore(),
      galleryItems: [],
      activeCategory: 'All',
      visibleItems: 9,
      lightbox: {
        visible: false,
        item: null,
        index: 0,
        direction: 'next'
      },
      categories: ['All'],
      loading: false,
      currentPage: 1,
      totalPages: 1
    }
  },
  computed: {
    dynamicCategories() {
      if (!this.galleryItems.length) return ['All'];
      
      const uniqueCategories = [...new Set(this.galleryItems.map(item => item.category))];
      return ['All', ...uniqueCategories.sort()];
    },
    filteredGalleryItems() {
      let filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(item => item.category === this.activeCategory);
      
      return filtered.slice(0, this.visibleItems);
    },
    showLoadMore() {
      let filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(item => item.category === this.activeCategory);
      
      return this.visibleItems < filtered.length;
    }
  },
  methods: {
    async loadGalleryData() {
      try {
        this.loading = true;
        await this.galleryStore.fetchGallery();
        this.galleryItems = this.galleryStore.gallery;
        
        if (this.galleryStore.galleryResponse) {
          this.currentPage = this.galleryStore.galleryResponse.current_page;
          this.totalPages = this.galleryStore.galleryResponse.last_page;
        }
      } catch (error) {
        console.error('Error loading gallery data:', error);
      } finally {
        this.loading = false;
      }
    },
    loadMore() {
      this.visibleItems += 6;
    },
    openLightbox(item) {
      let filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(i => i.category === this.activeCategory);
      
      const index = filtered.findIndex(i => i.id === item.id);
      
      this.lightbox.item = item;
      this.lightbox.index = index;
      this.lightbox.visible = true;
      this.lightbox.direction = 'next';
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
      
      // Add keyboard navigation
      document.addEventListener('keydown', this.handleKeydown);
    },
    closeLightbox() {
      this.lightbox.visible = false;
      document.body.style.overflow = '';
      
      // Remove keyboard navigation
      document.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown(e) {
      if (!this.lightbox.visible) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          this.prevItem();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.nextItem();
          break;
        case 'Escape':
          e.preventDefault();
          this.closeLightbox();
          break;
      }
    },
    prevItem() {
      let filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(item => item.category === this.activeCategory);
      
      this.lightbox.direction = 'prev';
      const newIndex = (this.lightbox.index - 1 + filtered.length) % filtered.length;
      this.lightbox.index = newIndex;
      this.lightbox.item = filtered[newIndex];
    },
    nextItem() {
      let filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(item => item.category === this.activeCategory);
      
      this.lightbox.direction = 'next';
      const newIndex = (this.lightbox.index + 1) % filtered.length;
      this.lightbox.index = newIndex;
      this.lightbox.item = filtered[newIndex];
    },
    // Animation methods
    beforeEnter(el) {
      if (this.lightbox.direction === 'next') {
        el.style.transform = 'translateX(100%)';
      } else {
        el.style.transform = 'translateX(-100%)';
      }
      el.style.opacity = '0';
    },
    enter(el, done) {
      el.offsetHeight; // Force reflow
      el.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
      el.style.transform = 'translateX(0)';
      el.style.opacity = '1';
      setTimeout(done, 300);
    },
    leave(el, done) {
      el.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
      if (this.lightbox.direction === 'next') {
        el.style.transform = 'translateX(-100%)';
      } else {
        el.style.transform = 'translateX(100%)';
      }
      el.style.opacity = '0';
      setTimeout(done, 300);
    }
  },
  beforeUnmount() {
    // Ensure body scrolling is restored if component unmounts while lightbox is open
    document.body.style.overflow = '';
    // Remove keyboard event listener
    document.removeEventListener('keydown', this.handleKeydown);
  },

  async mounted() {
    await this.loadGalleryData();
  }
}
</script>

<style scoped>
/* Lightbox slide transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Category button animations */
.category-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.category-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style>