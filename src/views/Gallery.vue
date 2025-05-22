<template>
  <div class="gallery-page">
    <!-- Page Header -->
    <section class="relative py-20 bg-primary">
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
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-4 py-2 rounded-full transition-all duration-300',
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="item in filteredGalleryItems" 
            :key="item.id"
            class="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            @click="openLightbox(item)"
          >
            <div class="relative">
              <img :src="item.after" :alt="item.title" class="w-full h-64 object-cover" />
              
              <!-- Overlay with info -->
              <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div class="text-white text-center px-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 class="text-xl font-bold">{{ item.title }}</h3>
                  <p>Click to view before & after</p>
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
        <div class="text-center mt-12" v-if="showLoadMore">
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
            <h3 class="text-xl font-bold">{{ lightbox.item?.title }}</h3>
          </div>
          
          <!-- Before/After Comparison -->
          <div class="relative">
            <BeforeAfterImage
              v-if="lightbox.item"
              :before="lightbox.item.before"
              :after="lightbox.item.after"
              :title="lightbox.item.title"
            />
          </div>
          
          <div class="p-4">
            <p class="text-gray-700">{{ lightbox.item?.description }}</p>
          </div>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          @click="prevItem" 
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 text-white hover:text-gray-300"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          @click="nextItem" 
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 text-white hover:text-gray-300"
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
import BeforeAfterImage from '../components/gallery/BeforeAfterImage.vue';

export default {
  name: 'Gallery',
  components: {
    BeforeAfterImage
  },
  data() {
    return {
      activeCategory: 'All',
      visibleItems: 9,
      lightbox: {
        visible: false,
        item: null,
        index: 0
      },
      categories: ['All', 'Residential', 'Commercial', 'Driveways', 'Decks & Patios', 'Roofs'],
      galleryItems: [
        {
          id: 1,
          title: 'House Exterior Cleaning',
          category: 'Residential',
          before: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Complete transformation of this home\'s exterior with our soft washing technique that safely removes years of dirt, mold, and algae buildup.'
        },
        {
          id: 2,
          title: 'Concrete Driveway Restoration',
          category: 'Driveways',
          before: 'https://images.pexels.com/photos/5764077/pexels-photo-5764077.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/3935335/pexels-photo-3935335.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'This driveway was covered in oil stains, dirt, and years of weathering. Our high-pressure cleaning and specialized detergents brought it back to life.'
        },
        {
          id: 3,
          title: 'Storefront Cleaning',
          category: 'Commercial',
          before: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/2079851/pexels-photo-2079851.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Improved curb appeal for this local business with our commercial pressure washing service that removed grime and pollution buildup.'
        },
        {
          id: 4,
          title: 'Wooden Deck Revival',
          category: 'Decks & Patios',
          before: 'https://images.pexels.com/photos/260046/pexels-photo-260046.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'This aging wooden deck was brought back to its original beauty with our gentle pressure washing and wood restoration process.'
        },
        {
          id: 5,
          title: 'Roof Cleaning & Treatment',
          category: 'Roofs',
          before: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/2351719/pexels-photo-2351719.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Black streaks and moss growth were eliminated with our specialized roof cleaning service, extending the life of the roof and improving home value.'
        },
        {
          id: 6,
          title: 'Sidewalk Cleaning',
          category: 'Driveways',
          before: 'https://images.pexels.com/photos/12167758/pexels-photo-12167758.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/5847338/pexels-photo-5847338.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Public walkway transformed with our high-pressure cleaning that removed years of dirt, gum, and stains.'
        },
        {
          id: 7,
          title: 'Patio Stone Restoration',
          category: 'Decks & Patios',
          before: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'These natural stone pavers were revitalized with our specialized cleaning process, removing years of dirt, moss, and weathering.'
        },
        {
          id: 8,
          title: 'Commercial Building Washing',
          category: 'Commercial',
          before: 'https://images.pexels.com/photos/1531676/pexels-photo-1531676.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/2727483/pexels-photo-2727483.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Complete exterior cleaning of this commercial property that removed pollution, grime, and improved the building\'s appearance.'
        },
        {
          id: 9,
          title: 'Vinyl Siding Cleaning',
          category: 'Residential',
          before: 'https://images.pexels.com/photos/2696468/pexels-photo-2696468.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'This home\'s vinyl siding was covered in green algae and dirt. Our soft washing technique safely removed the buildup without damaging the siding.'
        },
        {
          id: 10,
          title: 'Restaurant Patio Cleaning',
          category: 'Commercial',
          before: 'https://images.pexels.com/photos/1267356/pexels-photo-1267356.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'This restaurant\'s outdoor dining area was revitalized with our professional pressure washing service, creating a more inviting space for customers.'
        },
        {
          id: 11,
          title: 'Concrete Pool Deck',
          category: 'Decks & Patios',
          before: 'https://images.pexels.com/photos/261262/pexels-photo-261262.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'This pool deck was restored to its original beauty, removing algae, mildew, and stains that had built up over time.'
        },
        {
          id: 12,
          title: 'Brick Home Washing',
          category: 'Residential',
          before: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
          after: 'https://images.pexels.com/photos/259600/pexels-photo-259600.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Our specialized brick cleaning process removed years of dirt and pollution from this historic home while preserving the integrity of the mortar.'
        }
      ]
    }
  },
  computed: {
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
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';
    },
    closeLightbox() {
      this.lightbox.visible = false;
      document.body.style.overflow = '';
    },
    prevItem() {
      let filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(item => item.category === this.activeCategory);
      
      const newIndex = (this.lightbox.index - 1 + filtered.length) % filtered.length;
      this.lightbox.index = newIndex;
      this.lightbox.item = filtered[newIndex];
    },
    nextItem() {
      let filtered = this.activeCategory === 'All' 
        ? this.galleryItems 
        : this.galleryItems.filter(item => item.category === this.activeCategory);
      
      const newIndex = (this.lightbox.index + 1) % filtered.length;
      this.lightbox.index = newIndex;
      this.lightbox.item = filtered[newIndex];
    }
  },
  beforeUnmount() {
    // Ensure body scrolling is restored if component unmounts while lightbox is open
    document.body.style.overflow = '';
  }
}
</script>

<style scoped>
/* Add custom scoped styles if needed */
</style>