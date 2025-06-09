<template>
  <div :id="id" class="service-detail scroll-mt-32">
    <div :class="['flex flex-col lg:flex-row items-center gap-8', reverse ? 'lg:flex-row-reverse' : '']">
      <div class="lg:w-1/2">
        <img :src="image" :alt="title" class="rounded-lg shadow-md w-full h-auto object-cover lg:h-96" />
      </div>
      
      <div class="lg:w-1/2">
        <h2 class="text-3xl font-bold mb-4 text-primary">{{ title }}</h2>
        <p class="text-gray-700 mb-6">{{ description }}</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div v-for="(feature, index) in features" :key="index" class="flex items-start">
            <svg class="w-5 h-5 text-secondary flex-shrink-0 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{{ feature }}</span>
          </div>
        </div>
        
        <div class="mt-8">
          <router-link to="/contact" class="btn btn-primary">Get a Quote</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceDetail',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    features: {
      type: Array,
      required: false
    },
    image: {
      type: String,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>