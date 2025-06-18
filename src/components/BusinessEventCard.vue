<template>
    <div class="card fade-in hover:scale-[1.02] transition-transform duration-300">
        <div class="flex flex-col md:flex-row">
            <!-- Event Image -->
            <div class="md:w-1/3">
                <img 
                    :src="businessEvent.image" 
                    :alt="businessEvent.title" 
                    class="w-full h-64 md:h-full object-cover"
                >
            </div>
            
            <!-- Event Content -->
            <div class="flex-1 p-6 space-y-4">
                <!-- Title and Status Badges -->
                <div class="flex justify-between items-start gap-4">
                    <h3 class="text-2xl font-bold text-neutral-dark">{{ businessEvent.title }}</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 rounded-full text-sm font-medium" 
                            :class="getStatusClass(businessEvent.status)">
                            {{ getStatusLabel(businessEvent.status) }}
                        </span>
                        <span class="px-3 py-1 rounded-full text-sm font-medium"
                            :class="getEventTypeClass(businessEvent.event_type)">
                            {{ getEventTypeLabel(businessEvent.event_type) }}
                        </span>
                    </div>
                </div>
                
                <!-- Description -->
                <p class="text-neutral leading-relaxed">{{ ellipsis(businessEvent.description, 400) }}</p>
                
                <!-- Event Details -->
                <div class="space-y-3">
                    <div class="flex flex-wrap gap-6 text-sm text-neutral">
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                            </svg>
                            <span><strong>Start:</strong> {{ formatDate(businessEvent.start_date) }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                            </svg>
                            <span><strong>End:</strong> {{ formatDate(businessEvent.end_date) }}</span>
                        </div>
                    </div>
                    
                    <!-- Discount for announcements -->
                    <div v-if="businessEvent.event_type === 'announcement' && businessEvent.discount" 
                         class="flex items-center gap-2 text-sm">
                        <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.856.048L9.5 13.9l-4.61.817a1 1 0 01-1.177-1.177L4.53 9.9 1.126 8.29a1 1 0 010-1.832L4.53 4.9l.817-4.61a1 1 0 011.177-1.177L11.134 0.366A1 1 0 0112 2z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="font-semibold text-accent"><strong>Special Offer:</strong> {{ businessEvent.discount }}</span>
                    </div>
                </div>
                
                <!-- CTA Button -->
                <div class="pt-4">
                    <button 
                        @click="openCtaLink"
                        class="btn btn-primary inline-flex items-center gap-2"
                    >   
                        <div class=" flex justify-between items-center">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                            <span class="ml-3">{{ businessEvent.cta_label }}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BusinessEventCard',
    props: {
        businessEvent: {
            type: Object,
            required: true
        }
    },
    methods: {
        getStatusClass(status) {
            const classes = {
                'published': 'bg-green-100 text-green-800',
                'draft': 'bg-yellow-100 text-yellow-800',
                'archived': 'bg-gray-100 text-gray-800',
                'scheduled': 'bg-purple-100 text-purple-800'
            }
            return classes[status] || 'bg-gray-100 text-gray-800'
        },
        
        getStatusLabel(status) {
            const labels = {
                'published': 'Published',
                'draft': 'Draft',
                'archived': 'Archived',
                'scheduled': 'Scheduled'
            }
            return labels[status] || 'Unknown'
        },
        
        getEventTypeClass(eventType) {
            const classes = {
                'promotional': 'bg-blue-100 text-blue-800',
                'launching': 'bg-green-100 text-green-800',
                'announcement': 'bg-purple-100 text-purple-800'
            }
            return classes[eventType] || 'bg-gray-100 text-gray-800'
        },
        
        getEventTypeLabel(eventType) {
            const labels = {
                'promotional': 'Promotional',
                'launching': 'Launching',
                'announcement': 'Announcement'
            }
            return labels[eventType] || 'Unknown'
        },
        
        formatDate(dateString) {
            if (!dateString) return 'TBD'
            const date = new Date(dateString)
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        },

        ellipsis(text, maxLength) {
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + '...'
            }
            return text
        },

        openCtaLink() {
            this.$router.push('/business-events/' + this.businessEvent.slug)
        }
    }
}
</script> 