<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.pexels.com/photos/3750893/pexels-photo-3750893.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Pressure Washing" class="object-cover w-full h-full" />
        <div class="absolute inset-0 bg-primary bg-opacity-60"></div>
      </div>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 z-10 text-white text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Professional Pressure Washing Services</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">Transform your property with our high-quality, affordable pressure washing solutions</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
          <router-link to="/contact" class="btn btn-accent text-center"> Get a Free Quote </router-link>
          <router-link to="/services" class="btn btn-outline border-white text-white hover:bg-white hover:text-primary"> Our Services </router-link>
        </div>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-neutral-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Simply Clean Power Washing?</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="feature-card p-6 bg-white rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">Experienced Professionals</h3>
            <p class="text-gray-600">Our team brings years of expertise in pressure washing for both residential and commercial properties.</p>
          </div>

          <div class="feature-card p-6 bg-white rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
            <div class="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">Prompt & Reliable</h3>
            <p class="text-gray-600">We arrive on time and complete projects efficiently without compromising on quality.</p>
          </div>

          <div class="feature-card p-6 bg-white rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-primary">Eco-Friendly Solutions</h3>
            <p class="text-gray-600">We use environmentally safe cleaning agents that effectively clean without harming your property or surroundings.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">We offer comprehensive pressure washing solutions for all your needs</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id">
            <ServiceCard :title="service.name" :description="service.description" :image="service.path" :link="`/services/#${convertNameToId(service.name)}`" />
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link :to="{ name: 'Services', params: { shop_uuid: shopUuid } }" class="btn btn-primary"> View All Services </router-link>
        </div>
      </div>
    </section>

    <!-- Testimonials
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">Customer Reviews</h2>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Don't just take our word for it - hear what our satisfied customers have to say
        </p>
        
        <TestimonialSlider :testimonials="testimonials" />
      </div>
    </section> -->

    <!-- CTA Section -->
    <section class="py-20 bg-primary water-gradient text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">Contact us today for a free, no-obligation quote and see the Simply Clean Power Washing difference!</p>
        <router-link to="/contact" class="btn btn-accent text-lg px-8 py-4"> Get a Free Quote </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import ServiceCard from '@/components/services/ServiceCard.vue'
import { useServiceStore } from '@/store/service'
// import { useWorkResultStore } from '@/store/work-result' // Added missing import
import { useShop } from '@/composables/useShop'
const { shopUuid } = useShop()
// Store instances
// const workResultStore = useWorkResultStore()
const serviceStore = useServiceStore()
const services = computed(() => serviceStore.services)
// Methods
const convertNameToId = (name) => {
  return name.toLowerCase().replace(/ /g, '-')
}

const goToServices = () => {
  return
}

onMounted(async () => {
  await serviceStore.fetchServices(shopUuid.value)
})
</script>
