<template>
    <div class="business-events-page">
        <!-- Page Header -->
        <section class="relative py-32 md:py-52 water-gradient">
            <div class="absolute inset-0 bg-primary opacity-20">
                <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
            </div>
            <div class="container mx-auto relative z-10">
                <div class="text-center text-white slide-up">
                    <h1 class="font-bold mb-6">Business Events</h1>
                    <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                        Stay updated with our latest business events, promotions, and exciting announcements
                    </p>
                </div>
            </div>
        </section>
        
        <!-- Events Content -->
        <section class="section bg-neutral-white">
            <div class="container mx-auto max-w-6xl">
                <!-- Loading State -->
                <div v-if="loading" class="flex justify-center items-center py-20">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
                
                <!-- Events Grid -->
                <div v-else-if="businessEvents && businessEvents.length > 0" class="space-y-8">
                    <div class="text-center mb-12">
                        <h2 class="section-title gradient-text">Current Events</h2>
                        <p class="text-lg text-neutral max-w-2xl mx-auto">
                            Discover our ongoing business events and special offers
                        </p>
                    </div>
                    
                    <div class="space-y-6">
                        <BusinessEventCard 
                            v-for="businessEvent in businessEvents" 
                            :key="businessEvent.id"
                            :business-event="businessEvent"
                            class="slide-up"
                        />
                    </div>
                </div>

                <!-- Empty State -->
                <div v-else class="text-center py-20">
                    <div class="max-w-md mx-auto">
                        <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v6m4-6v6M5 10h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-neutral-dark mb-3">No Events Available</h3>
                        <p class="text-neutral">
                            There are currently no business events to display. Check back soon for updates!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { useBusinessEventsStore } from '@/store/business-events'
import BusinessEventCard from '@/components/BusinessEventCard.vue'

export default {
    name: 'BusinessEvents',
    components: {
        BusinessEventCard
    },
    data() {
        return {
            businessEventsStore: useBusinessEventsStore(),
            businessEvents: [],
            loading: false,
        }
    },
    async mounted() {
        await this.fetchEvents()
    },
    methods: {
        async fetchEvents() {
            this.businessEvents = this.businessEventsStore.businessEvents
        }
    }
}
</script>

<style scoped>
.gradient-text {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

@media (prefers-reduced-motion: no-preference) {
    .slide-up {
        animation-delay: 0.2s;
    }
    
    .slide-up:nth-child(2) {
        animation-delay: 0.4s;
    }
    
    .slide-up:nth-child(3) {
        animation-delay: 0.6s;
    }
    
    .slide-up:nth-child(4) {
        animation-delay: 0.8s;
    }
}
</style>