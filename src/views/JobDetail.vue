<template>
    <div class="container mx-auto py-8">
        <div class="max-w-4xl mx-auto">
            <!-- Receipt Header -->
            <div class="card mb-6">
                <div class="gradient-bg text-white text-center py-8 px-6">
                    <img :src="settings.company_logo" alt="Company Logo" class="w-20 h-20 mx-auto mb-4">
                    <h1 class="text-3xl font-bold mb-2">{{ settings.company_name }}</h1>
                    <p class="text-lg opacity-90">Service Receipt</p>
                </div>
                
                <div class="p-6 bg-white">
                    <div class="text-center mb-4">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ job.title }}</h2>
                        <div class="inline-block px-4 py-2 rounded-full text-sm font-medium"
                             :class="{
                                'bg-green-100 text-green-800': job.status === 'Completed',
                                'bg-yellow-100 text-yellow-800': job.status === 'In Progress',
                                'bg-blue-100 text-blue-800': job.status === 'Scheduled',
                                'bg-gray-100 text-gray-800': job.status === 'Pending'
                             }">
                            {{ job.status }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Client Information -->
            <div class="card mb-6">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Client Information</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p class="text-sm text-gray-600 uppercase tracking-wide">Client Name</p>
                            <p class="font-medium text-gray-900">{{ job.client?.firstName }} {{ job.client?.lastName }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-600 uppercase tracking-wide">Email</p>
                            <p class="font-medium text-gray-900">{{ job.client?.email }}</p>
                        </div>
                        <div class="md:col-span-2">
                            <p class="text-sm text-gray-600 uppercase tracking-wide">Service Address</p>
                            <p class="font-medium text-gray-900">{{ job.client?.address }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service Details -->
            <div class="card mb-6">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Service Details</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <p class="text-sm text-gray-600 uppercase tracking-wide">Service Date</p>
                            <p class="font-medium text-gray-900">{{ job.date }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-600 uppercase tracking-wide">Duration</p>
                            <p class="font-medium text-gray-900">{{ job.duration }}</p>
                        </div>
                    </div>

                    <!-- Services Provided -->
                    <div class="mb-6">
                        <p class="text-sm text-gray-600 uppercase tracking-wide mb-3">Services Provided</p>
                        <div class="space-y-2">
                            <div v-for="service in job.services" :key="service" 
                                 class="flex items-center p-3 bg-gray-50 rounded-lg">
                                <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                <span class="font-medium text-gray-900">{{ service }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Equipment Used -->
                    <div v-if="job.equipment && job.equipment.length > 0">
                        <p class="text-sm text-gray-600 uppercase tracking-wide mb-3">Equipment Used</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div v-for="equipment in job.equipment" :key="equipment" 
                                 class="flex items-center p-2 bg-gray-50 rounded">
                                <span class="text-sm text-gray-700">{{ equipment }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Team Members -->
            <div class="card mb-6" v-if="job.team && job.team.length > 0">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Service Team</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div v-for="team in job.team" :key="team.name" class="text-center">
                            <img class="w-20 h-20 object-cover rounded-full mx-auto mb-3 border-4 border-gray-200" 
                                 :src="team.image" :alt="team.name">
                            <h4 class="font-medium text-gray-900">{{ team.name }}</h4>
                            <p class="text-sm text-gray-600">{{ team.contact_number }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Notes -->
            <div class="card mb-6" v-if="job.notes">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Additional Notes</h3>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <p class="text-gray-700 leading-relaxed">{{ job.notes }}</p>
                    </div>
                </div>
            </div>

            <!-- Price Summary -->
            <div class="card">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Payment Summary</h3>
                    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                        <div class="flex justify-between items-center">
                            <span class="text-lg font-medium text-gray-700">Total Amount</span>
                            <span class="text-3xl font-bold text-gray-900">${{ job.price }}</span>
                        </div>
                        <div class="mt-4 pt-4 border-t border-gray-200">
                            <div class="flex items-center text-sm text-gray-600">
                                <svg class="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                Professional pressure washing service completed
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="text-center mt-8 text-gray-500">
                <p class="text-sm">Thank you for choosing {{ settings.company_name }}</p>
                <p class="text-xs mt-2">Questions? Contact us for support <a :href="`mailto:${settings.company_email}`" class="text-blue-500">{{ settings.company_email }}</a></p>
                <p class="text-xs mt-2">{{ settings.company_address }}</p>
                <p class="text-xs mt-2">Contact Us: {{ settings.company_phone }}</p>
            </div>
        </div>
        <div class="mt-8">
          <h3 class="font-semibold text-lg mb-4 text-center">Connect With Us</h3>
          <div class="flex justify-center max-sm:flex-wrap">
            <a :href="settings.company_facebook" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 m-3">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a :href="settings.company_instagram" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 m-3">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
              </svg>
            </a>
            <a :href="settings.company_twitter" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 m-3">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a :href="settings.company_linkedin" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 m-3"> 
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a :href="settings.company_youtube" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 m-3">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>  
            </a>
            <a :href="settings.company_tiktok" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 m-3">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a :href="settings.company_pinterest" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-300 m-3">  
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.744-1.378l-.628 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
              </svg>
            </a>
          </div>
        </div>
    </div>

    
</template>

<script>
import { useJobStore } from '../store/job'

export default {
    data() {
        return {
            jobStore: useJobStore(),
            settings: [],
            job: {
                client: {},
                team: [],
                services: [],
                equipment: []
            }
        }
    },
    async mounted() {
        await this.jobStore.fetchJob(this.$route.params.slug)
        this.job = this.jobStore.clientJob
        this.settings = this.jobStore.settings
    }
}
</script>

<style scoped>
/* Additional receipt-specific styles */
.receipt-line {
    border-bottom: 1px dashed #e5e7eb;
}

.receipt-total {
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
}
</style>