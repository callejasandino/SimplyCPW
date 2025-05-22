<template>
  <div class="card transform transition duration-300 hover:-translate-y-2">
    <div class="relative h-48 overflow-hidden rounded-t-lg">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
      />
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 text-primary">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <a :href="link" class="text-secondary font-medium hover:text-primary flex items-center">
        Learn More
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>