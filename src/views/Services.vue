<template>
  <div class="services-page">
    <!-- Page Header -->
    <section class="relative py-20 bg-primary">
      <div class="absolute inset-0 bg-primary opacity-90">
        <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3833643/pexels-photo-3833643.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p class="text-xl max-w-3xl mx-auto">
            Professional pressure washing solutions for residential and commercial properties
          </p>
        </div>
      </div>
    </section>

    <!-- Service Navigation -->
    <section class="py-8 bg-gray-100 sticky top-16 z-30">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <a 
            v-for="service in services" 
            :key="service.id"
            :href="`#${service.id}`"
            class="px-4 py-2 rounded-full bg-white shadow-sm hover:bg-primary hover:text-white transition duration-300"
          >
            {{ service.title }}
          </a>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="space-y-24">
          <ServiceDetail 
            v-for="service in services" 
            :key="service.id"
            :id="service.id"
            :title="service.title"
            :description="service.description"
            :features="service.features"
            :image="service.image"
            :reverse="service.reverse"
          />
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Pricing</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">
            We offer competitive and transparent pricing for all our services
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="pricing-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-primary text-white p-6 text-center">
              <h3 class="text-2xl font-bold">Basic Cleaning</h3>
              <div class="text-4xl font-bold mt-2">$149</div>
              <p class="text-sm opacity-80 mt-1">Starting Price</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Driveway pressure washing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Sidewalk cleaning</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Front porch or entry area</span>
                </li>
                <li class="flex items-start opacity-50">
                  <svg class="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>House siding washing</span>
                </li>
                <li class="flex items-start opacity-50">
                  <svg class="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Deck or patio cleaning</span>
                </li>
              </ul>
              <div class="mt-6">
                <router-link to="/contact" class="block text-center btn btn-outline">
                  Request Quote
                </router-link>
              </div>
            </div>
          </div>

          <div class="pricing-card bg-white rounded-lg shadow-xl overflow-hidden transform scale-105 border-2 border-accent">
            <div class="bg-primary text-white p-6 text-center relative">
              <div class="absolute top-0 right-0 bg-accent text-neutral-dark px-4 py-1 font-bold text-sm transform translate-y-full -translate-x-1">
                Most Popular
              </div>
              <h3 class="text-2xl font-bold">Complete Home</h3>
              <div class="text-4xl font-bold mt-2">$299</div>
              <p class="text-sm opacity-80 mt-1">Starting Price</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Driveway pressure washing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Sidewalk cleaning</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>House siding washing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Deck or patio cleaning</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Fence cleaning</span>
                </li>
              </ul>
              <div class="mt-6">
                <router-link to="/contact" class="block text-center btn btn-accent">
                  Request Quote
                </router-link>
              </div>
            </div>
          </div>

          <div class="pricing-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="bg-primary text-white p-6 text-center">
              <h3 class="text-2xl font-bold">Commercial</h3>
              <div class="text-4xl font-bold mt-2">Custom</div>
              <p class="text-sm opacity-80 mt-1">Based on Property Size</p>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Storefront cleaning</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Parking lot cleaning</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Building exterior washing</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Graffiti removal</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Maintenance contracts available</span>
                </li>
              </ul>
              <div class="mt-6">
                <router-link to="/contact" class="block text-center btn btn-outline">
                  Request Quote
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12 text-gray-600">
          <p>* Prices may vary based on property size, condition, and specific requirements. Contact us for a customized quote.</p>
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
import ServiceDetail from '../components/services/ServiceDetail.vue';

export default {
  name: 'Services',
  components: {
    ServiceDetail
  },
  data() {
    return {
      services: [
        {
          id: 'residential',
          title: 'Residential Pressure Washing',
          description: 'Keep your home looking its best with our comprehensive residential pressure washing services. Our professional team uses state-of-the-art equipment and eco-friendly cleaning solutions to remove dirt, grime, mold, mildew, and algae from your home\'s exterior surfaces.',
          features: [
            'House siding (vinyl, brick, stucco, etc.)',
            'Roof cleaning and treatment',
            'Gutter exterior cleaning',
            'Window cleaning',
            'Eco-friendly cleaning solutions',
            'Experienced technicians'
          ],
          image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1000',
          reverse: false
        },
        {
          id: 'commercial',
          title: 'Commercial Pressure Washing',
          description: 'Maintain a professional appearance for your business with our commercial pressure washing services. We help businesses of all sizes keep their properties clean, safe, and inviting for customers and employees alike.',
          features: [
            'Building exteriors and storefronts',
            'Parking lots and garages',
            'Sidewalks and entryways',
            'Drive-thrus and loading docks',
            'Dumpster areas and grease removal',
            'Regular maintenance programs available'
          ],
          image: 'https://images.pexels.com/photos/6195124/pexels-photo-6195124.jpeg?auto=compress&cs=tinysrgb&w=1000',
          reverse: true
        },
        {
          id: 'driveways',
          title: 'Driveway & Sidewalk Cleaning',
          description: 'Remove years of built-up dirt, oil stains, and grime from your concrete surfaces. Our powerful equipment can restore your driveway, sidewalks, and pathways to like-new condition.',
          features: [
            'Concrete driveway cleaning',
            'Oil and grease stain removal',
            'Sidewalk and walkway restoration',
            'Paver and brick cleaning',
            'Sealing services available',
            'Weed and moss removal'
          ],
          image: 'https://images.pexels.com/photos/6195011/pexels-photo-6195011.jpeg?auto=compress&cs=tinysrgb&w=1000',
          reverse: false
        },
        {
          id: 'decks',
          title: 'Deck & Patio Cleaning',
          description: 'Revitalize your outdoor living spaces with our specialized deck and patio cleaning services. We carefully clean wooden, composite, and concrete surfaces to remove dirt, mold, and weather damage.',
          features: [
            'Wood deck restoration',
            'Composite deck cleaning',
            'Patio surface cleaning',
            'Mold and mildew removal',
            'Staining and sealing services',
            'Furniture area cleaning'
          ],
          image: 'https://images.pexels.com/photos/5725531/pexels-photo-5725531.jpeg?auto=compress&cs=tinysrgb&w=1000',
          reverse: true
        },
        {
          id: 'roofs',
          title: 'Roof Cleaning',
          description: 'Extend the life of your roof and improve your home\'s curb appeal with our gentle roof cleaning service. We remove black streaks, moss, and algae that can damage your roofing materials over time.',
          features: [
            'Soft wash roof cleaning',
            'Algae and black streak removal',
            'Moss treatment',
            'Preventative treatments',
            'Gutter cleaning',
            'Extends roof lifespan'
          ],
          image: 'https://images.pexels.com/photos/7005449/pexels-photo-7005449.jpeg?auto=compress&cs=tinysrgb&w=1000',
          reverse: false
        },
        {
          id: 'fences',
          title: 'Fence Cleaning & Restoration',
          description: 'Bring new life to your fencing with our specialized cleaning services. We clean all types of fencing materials to remove dirt, green algae, and weathering.',
          features: [
            'Wood fence cleaning',
            'Vinyl fence restoration',
            'Chain link fence cleaning',
            'Staining and sealing available',
            'Mold and mildew removal',
            'Extends fence lifespan'
          ],
          image: 'https://images.pexels.com/photos/13277632/pexels-photo-13277632.jpeg?auto=compress&cs=tinysrgb&w=1000',
          reverse: true
        }
      ],
      faqs: [
        {
          question: 'How often should I have my property pressure washed?',
          answer: 'Most residential properties benefit from annual pressure washing, though the frequency can vary based on your local climate, surrounding vegetation, and property conditions. Commercial properties in high-traffic areas may require more frequent cleaning, potentially quarterly or bi-annually.',
          open: true
        },
        {
          question: 'Is pressure washing safe for all surfaces?',
          answer: 'No, not all surfaces should be pressure washed with high pressure. We use different techniques and pressure levels based on the surface. For delicate surfaces like roof shingles, stucco, or soft woods, we use soft washing techniques with appropriate cleaning solutions rather than high pressure.',
          open: false
        },
        {
          question: 'How long does pressure washing take?',
          answer: 'The time required depends on the size of the area and the level of cleaning needed. A typical house exterior might take 2-4 hours, while a driveway might take 1-2 hours. Commercial properties vary widely based on size and complexity.',
          open: false
        },
        {
          question: 'Do I need to be home during the service?',
          answer: 'Not necessarily. As long as we have access to the areas that need cleaning and water sources, we can complete the work while you\'re away. We\'ll coordinate with you beforehand to ensure we have everything needed.',
          open: false
        },
        {
          question: 'Are your cleaning solutions safe for plants and pets?',
          answer: 'Yes, we use environmentally friendly cleaning solutions that are safe for plants, animals, and children when used as directed. We take precautions to minimize any potential impact, including pre-rinsing vegetation and using targeted application methods.',
          open: false
        },
        {
          question: 'Do you offer any guarantees on your work?',
          answer: 'Yes, we stand behind our work with a satisfaction guarantee. If you\'re not satisfied with any aspect of our service, contact us within 7 days and we\'ll return to address your concerns at no additional cost.',
          open: false
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
}
</script>