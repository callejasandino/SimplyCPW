<template>
    <Modal
        :show="show"
        title="Subscribe to Our Newsletter"
        @close="closeModal"
        maxWidth="max-w-2xl"
        maxHeight="h-auto"
    >
    <div class="p-6">
      <div class="text-center mb-6">
        <div class="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <p class="text-gray-600 mb-6">
          Stay updated with the latest news, exclusive offers, and insider tips from SimplyCPW!
        </p>
      </div>
      
      <!-- Benefits Section -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">What you'll get:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-900">Exclusive Discounts</h4>
              <p class="text-sm text-gray-600">Up to 20% off on selected services</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-900">Early Access</h4>
              <p class="text-sm text-gray-600">Be first to know about new services</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-900">Expert Tips</h4>
              <p class="text-sm text-gray-600">Professional maintenance advice</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-900">Seasonal Promotions</h4>
              <p class="text-sm text-gray-600">Special offers throughout the year</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-900">Priority Support</h4>
              <p class="text-sm text-gray-600">Faster response times</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-3">
            <div class="flex-shrink-0">
              <svg class="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-900">Industry Updates</h4>
              <p class="text-sm text-gray-600">Latest trends and technologies</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Subscription Form -->
      <div class="border-t pt-6">
        <form @submit.prevent="subscribe" class="space-y-4">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div class="relative">
              <input 
                type="email" 
                id="email" 
                v-model="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email address"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label for="options" class="block text-sm font-medium text-gray-700 mb-2">
              Select the topics you want to receive updates on
            </label>
            <div class="space-y-2">
              <div v-for="option in options" :key="option" class="flex items-center">
                <input type="checkbox" :id="option" v-model="selectedOptions" :value="option" class="form-checkbox h-5 w-5 text-blue-600">
                <label :for="option" class="ml-2 text-sm text-gray-700">{{ capitalize(option) }}</label>
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            :disabled="!email || subscribeStore.loading"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <template v-if="subscribeStore.loading">
              <svg class="animate-spin w-5 h-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Subscribing...</span>
            </template>
            <template v-else>
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              <span>Subscribe Now</span>
            </template>
          </button>
        </form>
        
        <p class="text-xs text-gray-500 mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '../ui/Modal.vue'
import { useSubscribeStore } from '@/store/subscribe'
import { showToast } from '@/utils/toast'

export default {
    components: {
        Modal,
    },
    data() {
        return {
            email: '',
            subscribeStore: useSubscribeStore(),
            options: [
              'promotional',
              'launching',
              'announcement',
            ],
            selectedOptions: [],
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
            this.email = '' // Clear email on close
        },
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        async subscribe() {
            if (!this.email) return
            
            await this.subscribeStore.subscribe(this.email, this.selectedOptions)

            if (this.subscribeStore.success) {
                this.selectedOptions = []
                this.$emit('close')
                this.email = '' // Clear email on success
                showToast('🎉 Welcome! You\'ve successfully subscribed to our newsletter', 'success')
            } else {
                showToast('You are already subscribed to our newsletter', 'error')
                this.selectedOptions = []
                this.email = ''
            }
        }
    }
}
</script>

<style scoped>

input:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-content {
  animation: fadeInUp 0.3s ease-out;
}
</style>