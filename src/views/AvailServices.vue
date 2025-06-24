<template>
    <div>
        <!-- Hero Section -->
        <section class="relative py-32 md:py-52 water-gradient">
            <div class="absolute inset-0 bg-primary opacity-20">
                <div class="absolute inset-0 bg-[url('https://images.pexels.com/photos/3651598/pexels-photo-3651598.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
            </div>
            <div class="container mx-auto relative z-10">
                <div class="text-center text-white slide-up">
                    <h1 class="font-bold mb-6">Avail Services</h1>
                    <p class="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                        Book our professional services for your upcoming event
                    </p>
                </div>
            </div>
        </section>

        <!-- Main Content -->
        <div class="section bg-gray-50">
            <div class="container mx-auto max-w-6xl space-y-8" v-if="!isLoading">
                
                <!-- Personal Information Form -->
                <div class="card p-8">
                    <h2 class="section-title text-left mb-6">Personal Information</h2>
                    
                    <div class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <label for="last_name" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input 
                                    type="text" 
                                    id="last_name" 
                                    v-model="formData.last_name"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Enter your last name"
                                />
                            </div>

                            <div>
                                <label for="first_name" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input 
                                    type="text" 
                                    id="first_name" 
                                    v-model="formData.first_name"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Enter your first name"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="formData.email"
                                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input 
                                type="text" 
                                id="phone" 
                                v-model="formData.phone" 
                                @input="formatPhoneNumber(formData.phone)"
                                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="(123) 456-7890"
                            />
                        </div>

                        <div>
                            <label for="address" class="block text-sm font-medium text-gray-700 mb-2">Address</label>
                            <input 
                                type="text" 
                                id="address" 
                                v-model="formData.address"
                                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                placeholder="Enter your address"
                            />
                        </div>
                        
                        <div>
                            <label for="datetime" class="block text-sm font-medium text-gray-700 mb-2">Event Date & Time</label>
                            <input 
                                type="datetime-local" 
                                id="datetime" 
                                v-model="formData.dateTime"
                                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            />
                        </div>
                        
                        <div>
                            <label for="note" class="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                            <textarea 
                                id="note" 
                                v-model="formData.note"
                                rows="4"
                                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-vertical"
                                placeholder="Any special requirements or additional information..."
                            ></textarea>
                        </div>
                    </div>
                </div>

                <!-- Discounted Services -->
                <div class="card p-8" v-if="discountedServices.length > 0">
                    <h3 class="text-2xl font-bold text-primary mb-6 flex items-center">
                        <span class="bg-accent text-dark px-3 py-1 rounded-full text-sm font-semibold mr-3">SPECIAL OFFER</span>
                        Discounted Services
                    </h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <button 
                            v-for="(service, index) in discountedServices" 
                            :key="service.service"
                            class="p-6 border-2 rounded-lg transition-all duration-300 text-left transform hover:scale-[1.02]"
                            :class="service.selected ? 
                                'border-primary bg-primary text-white shadow-lg' : 
                                'border-gray-200 hover:border-primary hover:bg-primary hover:bg-opacity-5 text-gray-800'"
                            @click="toggleServiceSelection('discounted', index)"
                        >
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-lg leading-tight">{{ service.service }}</h4>
                                    <div class="px-2 py-1 rounded-full text-xs font-medium flex-shrink-0"
                                         :class="service.selected ? 'bg-white text-primary' : 'bg-primary text-white'"
                                    >
                                        {{ service.selected ? 'SELECTED' : 'SELECT' }}
                                    </div>
                                </div>
                                
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span :class="service.selected ? 'text-gray-200 line-through' : 'text-gray-500 line-through'" class="text-sm">${{ service.original_price }}</span>
                                    <span class="font-bold text-xl" :class="service.selected ? 'text-white' : 'text-primary'">${{ service.discounted_price }}</span>
                                    <span class="px-2 py-1 rounded text-xs font-medium"
                                          :class="service.selected ? 'bg-white text-primary' : 'bg-primary text-white'"
                                    >
                                        {{ service.discount }}% OFF
                                    </span>
                                </div>
                                
                                <div class="text-sm" :class="service.selected ? 'text-gray-200' : 'text-gray-600'">
                                    Duration of work: {{ service.duration }} hours
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Non-Discounted Services -->
                <div class="card p-8" v-if="nonDiscountedServices.length > 0">
                    <h3 class="text-2xl font-bold text-primary mb-6">Regular Services</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <button 
                            v-for="(service, index) in nonDiscountedServices" 
                            :key="service.service"
                            class="p-6 border-2 rounded-lg transition-all duration-300 text-left transform hover:scale-[1.02]"
                            :class="service.selected ? 
                                'border-primary bg-primary text-white shadow-lg' : 
                                'border-gray-200 hover:border-primary hover:bg-primary hover:bg-opacity-5 text-gray-800'"
                            @click="toggleServiceSelection('regular', index)"
                        >
                            <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-lg leading-tight">{{ service.service }}</h4>
                                    <div class="px-2 py-1 rounded-full text-xs font-medium flex-shrink-0"
                                         :class="service.selected ? 'bg-white text-primary' : 'bg-gray-200 text-gray-700'"
                                    >
                                        {{ service.selected ? 'SELECTED' : 'SELECT' }}
                                    </div>
                                </div>
                                
                                <div class="mt-2">
                                    <span class="font-bold text-xl" :class="service.selected ? 'text-white' : 'text-primary'">${{ service.original_price }}</span>
                                </div>
                                
                                <div class="text-sm" :class="service.selected ? 'text-gray-200' : 'text-gray-600'">
                                    Duration of work: {{ service.duration }} hours
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="card p-8 bg-gray-50 border-2 border-primary">
                    <h3 class="text-xl font-bold text-primary mb-4">Order Summary</h3>
                    
                    <div class="space-y-3 mb-6">
                        <div class="flex justify-between">
                            <span class="text-gray-600">Total Duration of work:</span>
                            <span class="font-semibold">{{ totalDuration }} hours</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600">Subtotal:</span>
                            <span class="font-semibold">${{ totalPrice.toFixed(2) }}</span>
                        </div>
                        <div class="flex justify-between" v-if="totalSavings > 0">
                            <span class="font-medium">Total Savings:</span>
                            <span class="font-bold">-${{ totalSavings.toFixed(2) }}</span>
                        </div>
                        <hr class="border-gray-300">
                        <div class="flex justify-between text-lg">
                            <span class="font-bold text-primary">Total:</span>
                            <span class="font-bold text-primary text-xl">${{ finalTotal.toFixed(2) }}</span>
                        </div>
                    </div>

                     <div class="g-recaptcha mb-5" :data-sitekey="siteKey"></div>
                     <input type="hidden" name="gRecaptchaResponse" v-model="formData.gRecaptchaResponse" required>

                    <div class="text-center">
                        <button 
                            @click="saveFormData"
                            :disabled="!hasSelectedServices"
                            class="btn btn-primary text-lg px-8 py-4 w-full"
                            :class="{ 'opacity-50 cursor-not-allowed': !hasSelectedServices }"
                        >
                            Submit Service Request
                        </button>
                        <p class="text-gray-600 text-sm mt-3">
                            We'll contact you within 24 hours to confirm your booking
                        </p>
                    </div>
                </div>
            </div>

            <div v-else class="min-h-screen flex items-center justify-center bg-gray-100">
                <div class="text-center">
                    <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
                    <h2 class="text-2xl font-semibold text-gray-700">Loading...</h2>
                    <p class="text-gray-500 mt-2">Please wait while we send your request</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { useServiceStore } from '@/store/service'
import { useBusinessEventsStore } from '@/store/business-events'
import { showToast } from '@/utils/toast'
import { formatPhoneNumber } from '@/utils/phoneNumber'
export default {
    name: 'CreateJob',
    data() {
        return {
            services: useServiceStore().services,
            businessEventsStore: useBusinessEventsStore(),
            discountedServices: [],
            nonDiscountedServices: [],
            businessEvent: null,
            isLoading: false,
            formData: {
                last_name: '',
                first_name: '',
                email: '',
                phone: '',
                address: '',
                dateTime: '',
                note: '',
                status: 'Scheduled',
                duration: 0,
                price: 0,
                gRecaptchaResponse: ''
            },
            siteKey: import.meta.env.VITE_CAPTCHA_SITE_KEY
        }
    },
    computed: {
        totalDuration() {
            let duration = 0;
            this.discountedServices.forEach(service => {
                if (service.selected) {
                    duration += parseFloat(service.duration) || 0;
                }
            });
            this.nonDiscountedServices.forEach(service => {
                if (service.selected) {
                    duration += parseFloat(service.duration) || 0;
                }
            });
            return duration;
        },
        totalPrice() {
            let price = 0;
            this.discountedServices.forEach(service => {
                if (service.selected) {
                    price += parseFloat(service.discounted_price) || 0;
                }
            });
            this.nonDiscountedServices.forEach(service => {
                if (service.selected) {
                    price += parseFloat(service.original_price) || 0;
                }
            });
            return price;
        },
        totalSavings() {
            let savings = 0;
            this.discountedServices.forEach(service => {
                if (service.selected) {
                    const original = parseFloat(service.original_price) || 0;
                    const discounted = parseFloat(service.discounted_price) || 0;
                    savings += original - discounted;
                }
            });
            return savings;
        },
        finalTotal() {
            return this.totalPrice;
        },
        hasSelectedServices() {
            return this.discountedServices.some(service => service.selected) || 
                   this.nonDiscountedServices.some(service => service.selected);
        }
    },
    methods: {
        formatPhoneNumber(phoneNumber) {
            this.formData.phone = formatPhoneNumber(phoneNumber)
        },
        
        toggleServiceSelection(type, index) {
            if (type === 'discounted') {
                this.discountedServices[index].selected = !this.discountedServices[index].selected;
            } else {
                this.nonDiscountedServices[index].selected = !this.nonDiscountedServices[index].selected;
            }
            this.calculateTotals();
        },
        
        calculateTotals() {
            // Update form data with calculated totals
            this.formData.duration = this.totalDuration;
            this.formData.price = this.finalTotal;
        },
        
        async saveFormData() {
            this.isLoading = true
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const response = grecaptcha.getResponse()

            if (!response) {
                showToast('Please complete the CAPTCHA', 'error')
                return
            }

            // this.formData.gRecaptchaResponse = response

            if (!this.hasSelectedServices) {
                showToast('Please select at least one service', 'error');
                return;
            }
            
            // Prepare selected services data
            const selectedServices = [];
            
            this.discountedServices.forEach(service => {
                if (service.selected) {
                    selectedServices.push({
                        service_name: service.service,
                    });
                }
            });
            
            this.nonDiscountedServices.forEach(service => {
                if (service.selected) {
                    selectedServices.push({
                        service_name: service.service,
                    });
                }
            });
            
            // Add selected services to form data
            this.formData.selectedServices = selectedServices;
            
            this.formData.gRecaptchaResponse = response
            await this.businessEventsStore.processClientBooking(this.formData)

            if (this.businessEventsStore.error) {
                showToast(this.businessEventsStore.error, 'error');
                this.isLoading = false
            } else {
                showToast('Service request submitted successfully!', 'success');
                this.formData = {
                    last_name: '',
                    first_name: '',
                    email: '',
                    phone: '',
                    address: '',
                    dateTime: '',
                    note: '',
                    status: 'Scheduled',
                    duration: 0,
                    price: 0,
                    gRecaptchaResponse: ''
                }
                this.discountedServices = []
                this.nonDiscountedServices = []
                this.businessEventsStore.clientJob = null
                this.businessEventsStore.error = null
                this.businessEventsStore.discountedServices = []
                this.isLoading = false
                this.$router.push(`/business-events`)
            }
        }
    },

    async mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        await this.businessEventsStore.fetchDiscountedServices(this.$route.params.slug)
        
        // Initialize discounted services with selected property
        this.discountedServices = this.businessEventsStore.discountedServices.discounted_services.map(service => ({
            ...service,
            selected: false
        }));
        
        // Initialize non-discounted services with selected property
        this.nonDiscountedServices = this.businessEventsStore.discountedServices.non_discounted_services.map(service => ({
            ...service,
            selected: false
        }));

        const script = document.createElement('script')
        script.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
        document.head.appendChild(script)
    }
}
</script>

<style scoped>

</style>