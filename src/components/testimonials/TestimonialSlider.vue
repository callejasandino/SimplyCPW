<template>
  <div class="testimonial-slider relative">
    <div class="swiper-container" ref="swiperContainer">
      <div class="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 snap-center"
        >
          <div class="bg-white p-6 rounded-lg shadow-md h-full">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  :src="testimonial.image" 
                  :alt="testimonial.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-bold text-lg">{{ testimonial.name }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.location }}</p>
              </div>
            </div>
            
            <div class="mb-4 flex">
              <svg 
                v-for="i in 5" 
                :key="i"
                :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
                class="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            
            <blockquote class="italic text-gray-700 mb-4">
              "{{ testimonial.quote }}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Navigation Buttons -->
    <button 
      class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 focus:outline-none hidden md:block"
      @click="prevSlide"
    >
      <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>
    
    <button 
      class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100 focus:outline-none hidden md:block"
      @click="nextSlide"
    >
      <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
    
    <!-- Indicators -->
    <div class="flex justify-center mt-6">
      <button 
        v-for="(testimonial, index) in testimonials" 
        :key="`indicator-${testimonial.id}`"
        :class="[
          'w-3 h-3 rounded-full mx-1 focus:outline-none',
          activeIndex === index ? 'bg-primary' : 'bg-gray-300'
        ]"
        @click="goToSlide(index)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialSlider',
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0,
      slidesPerView: 1,
      intervalId: null
    }
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
    
    // Auto-rotate testimonials
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSlidesPerView);
    clearInterval(this.intervalId);
  },
  methods: {
    updateSlidesPerView() {
      if (window.innerWidth >= 1024) {
        this.slidesPerView = 3;
      } else if (window.innerWidth >= 768) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 1;
      }
    },
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
      this.scrollToActiveSlide();
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
      this.scrollToActiveSlide();
    },
    goToSlide(index) {
      this.activeIndex = index;
      this.scrollToActiveSlide();
    },
    scrollToActiveSlide() {
      const container = this.$refs.swiperContainer.querySelector('.flex');
      const slides = container.querySelectorAll('.flex-shrink-0');
      const slideWidth = slides[0].offsetWidth;
      
      container.scrollTo({
        left: this.activeIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>