<template>
    <div class="business-event-detail">
        <!-- Hero Section -->
        <section class="relative py-20 md:py-32 water-gradient">
            <div class="absolute inset-0 bg-primary opacity-20">
                <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
            </div>
            <div class="container mx-auto relative z-10">
                <div class="text-center text-white slide-up max-w-4xl mx-auto">
                    <div class="mb-4">
                        <span class="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium backdrop-blur-sm">
                            {{ businessEvent?.event_type || 'Business Event' }}
                        </span>
                    </div>
                    <h1 class="font-bold mb-6 leading-tight">
                        {{ businessEvent?.title || 'Loading...' }}
                    </h1>
                    <div class="flex flex-wrap justify-center gap-6 text-white text-opacity-90">
                        <div class="flex items-center gap-2" v-if="businessEvent?.start_date">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                            </svg>
                            <span>{{ formatDate(businessEvent.start_date) }}</span>
                        </div>
                        <div class="flex items-center gap-2" v-if="businessEvent?.status">
                            <span class="w-2 h-2 bg-accent rounded-full"></span>
                            <span class="capitalize">{{ businessEvent.status }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Article Content -->
        <article class="section" v-if="businessEvent">
            <div class="container mx-auto max-w-4xl">
                <!-- Featured Image -->
                <div class="mb-12 slide-up" v-if="businessEvent.image">
                    <div class="card overflow-hidden">
                        <img 
                            :src="businessEvent.image" 
                            :alt="businessEvent.title"
                            class="w-full h-full md:h-3/4 object-cover"
                        >
                    </div>
                </div>

                <!-- Article Meta -->
                <div class="mb-8 pb-8 border-b border-gray-200 slide-up">
                    <div class="flex flex-wrap gap-6 text-sm text-neutral-600">
                        <div class="flex items-center gap-2" v-if="businessEvent.start_date">
                            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                            </svg>
                            <span>
                                <strong>Start:</strong> {{ formatDate(businessEvent.start_date) }}
                            </span>
                        </div>
                        <div class="flex items-center gap-2" v-if="businessEvent.end_date">
                            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                            </svg>
                            <span>
                                <strong>End:</strong> {{ formatDate(businessEvent.end_date) }}
                            </span>
                        </div>
                        <div class="flex items-center gap-2" v-if="businessEvent.event_type">
                            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path>
                            </svg>
                            <span>
                                <strong>Type:</strong> <span class="capitalize">{{ businessEvent.event_type }}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="prose prose-lg max-w-none slide-up">
                    <div class="mb-8">
                        <p class="text-xl text-neutral-700 leading-relaxed text-justify">
                            {{ businessEvent.description }}
                        </p>
                    </div>
                </div>


                <div class="mb-8" v-if="businessEvent.event_type === 'promotional' && businessEvent.discounted_services.length > 0">
                    <p class="text-xl text-neutral-700 leading-relaxed text-justify font-bold mb-4">
                        Discounted Services
                    </p>
                
                    <div v-for="discountedService in businessEvent.discounted_services" :key="discountedService.service_id">
                        
                        <div class="card mb-4">
                            <div class="flex justify-between items-center">
                                <h3 class="card-title">{{ discountedService.service }}</h3>
                                <h3 class="card-text text-primary font-bold">{{ discountedService.discount }}%</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Back to Events -->

                <div :class="businessEvent.event_type === 'promotional' ? 'flex justify-between' : 'flex justify-center'">
                    <div class="mt-12 text-center slide-up">
                        <router-link 
                            to="/business-events" 
                            class="btn btn-outline items-center gap-2"
                        >
                            Back to All Events
                        </router-link>
                    </div>
                    <div class="mt-12 text-center slide-up" v-if="businessEvent.event_type === 'promotional'">
                        <router-link 
                            :to="`/avail-services/${businessEvent.slug}`" 
                            class="btn btn-outline items-center gap-2"
                        >
                            Avail Services
                        </router-link>
                    </div>
                </div>
            </div>
        </article>

        <!-- Loading State -->
        <div v-else class="section">
            <div class="container mx-auto max-w-4xl text-center">
                <div class="animate-pulse">
                    <div class="h-8 bg-gray-300 rounded-md w-3/4 mx-auto mb-4"></div>
                    <div class="h-4 bg-gray-300 rounded-md w-1/2 mx-auto mb-8"></div>
                    <div class="h-64 bg-gray-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useBusinessEventsStore } from '@/store/business-events'

export default {
    name: 'BusinessEventDetail',
    data() {
        return {
            businessEvent: null,
            businessEventsStore: useBusinessEventsStore(),
        }
    },
    async mounted() { 
        await this.businessEventsStore.fetchBusinessEvent(this.$route.params.slug)
        this.businessEvent = this.businessEventsStore.businessEvent
    },
    methods: {
        formatDate(dateString) {
            if (!dateString) return ''
            const date = new Date(dateString)
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
    }
}
</script>

<style scoped>
.prose {
    @apply text-neutral-800;
}

.prose p {
    @apply mb-6;
}

.prose h1, .prose h2, .prose h3 {
    @apply text-neutral-900 font-display;
}
</style>