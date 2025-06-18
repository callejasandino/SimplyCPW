<template>
  <div class="services-page">
    <!-- Page Header -->
     <section class="relative py-32 md:py-52 water-gradient">
        <div class="absolute inset-0 bg-primary opacity-20">
            <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div class="container mx-auto relative z-10">
            <div class="text-center text-white slide-up">
                <h1 class="font-bold mb-6">Gallery</h1>
                <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                    Discover our amazing pressure washing transformations
                </p>
            </div>
        </div>
    </section>

    <!-- Service Navigation -->
    <section class="py-8 bg-gray-100 sticky top-16 z-30" v-if="services">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            v-for="service in services" 
            :key="service.id"
            :href="`#${convertNameToId(service.name)}`"
            class="px-4 py-2 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition duration-300"
          >
            {{ service.name }}
          </a>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 bg-white" v-if="services">
      <div class="container mx-auto px-4">
        <div class="space-y-24">
          <ServiceDetail 
            v-for="(service, index) in services" 
            :key="service.id"
            :id="convertNameToId(service.name)"
            :title="service.name"
            :description="service.description"
            :image="service.image"
            :reverse="index % 2 === 0"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            Have questions about our pressure washing services? Find answers to common questions below.
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
            <div 
              @click="toggleFaq(index)"
              class="flex justify-between items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            >
              <h3 class="font-semibold text-lg text-primary">{{ faq.question }}</h3>
              <svg 
                :class="faq.open ? 'transform rotate-180' : ''"
                class="w-5 h-5 text-gray-600 transition-transform duration-300"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
            <div 
              v-show="faq.open"
              class="p-4 bg-white border border-gray-200 rounded-b-lg mt-1 text-gray-700"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary water-gradient text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today for a free, no-obligation quote on our pressure washing services.
        </p>
        <router-link to="/contact" class="btn btn-accent text-lg px-8 py-4">
          Request a Free Quote
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceDetail from '@/components/services/ServiceDetail.vue';
import { useServiceStore } from '@/store/service';
import { useSettingsStore } from '@/store/settings';
import { convertNameToId } from '@/utils/id-converter';
export default {
  name: 'Services',
  components: {
    ServiceDetail
  },
  data() {
    return {
      settingsStore: useSettingsStore(),
      serviceStore: useServiceStore(),

      settings: null,
      faqs: null,
      services: null,
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
    convertNameToId(serviceName) {
      return convertNameToId(serviceName);
    }
  },
  async mounted() {
    this.faqs = JSON.parse(this.settingsStore.faqs);

    this.services = this.serviceStore.services;
  }
}
</script>