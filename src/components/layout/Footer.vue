<template>
  <footer class="bg-primary text-white">
    <div class="container mx-auto py-12 px-4 md:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-1">
          <h3 class="text-2xl font-display font-bold mb-4">
            {{ companyName }}
          </h3>
          <p class="mb-4 text-gray-300">
            {{ companyDescription }}
          </p>
          <div class="flex space-x-4">
            <a :href="companyFacebook" class="text-white hover:text-secondary" v-if="companyFacebook">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
              </svg>
            </a>
            <a :href="companyInstagram" class="text-white hover:text-secondary" v-if="companyInstagram">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
              </svg>
            </a>
            <a :href="companyTwitter" class="text-white hover:text-secondary" v-if="companyTwitter">
              <span class="sr-only">Twitter</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a :href="companyLinkedin" class="text-white hover:text-secondary" v-if="companyLinkedin">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clip-rule="evenodd" />
              </svg>
            </a>
            <a :href="companyYoutube" class="text-white hover:text-secondary" v-if="companyYoutube">
              <span class="sr-only">Youtube</span>  
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a :href="companyTiktok" class="text-white hover:text-secondary" v-if="companyTiktok">
              <span class="sr-only">Tiktok</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a :href="companyPinterest" class="text-white hover:text-secondary" v-if="companyPinterest">
              <span class="sr-only">Pinterest</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-1">
          <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link @click.prevent="scrollToTop" to="/" class="text-gray-300 hover:text-secondary">Home</router-link></li>
            <li><router-link @click.prevent="scrollToTop" to="/services" class="text-gray-300 hover:text-secondary">Services</router-link></li>
            <li><router-link @click.prevent="scrollToTop" to="/gallery" class="text-gray-300 hover:text-secondary">Gallery</router-link></li>
            <li><router-link @click.prevent="scrollToTop" to="/about" class="text-gray-300 hover:text-secondary">About Us</router-link></li>
            <li><router-link @click.prevent="scrollToTop" to="/contact" class="text-gray-300 hover:text-secondary">Contact</router-link></li>
            <li><router-link @click.prevent="scrollToTop" to="/blog" class="text-gray-300 hover:text-secondary">Blog</router-link></li>
            <li><router-link @click.prevent="scrollToTop" to="/business-events" class="text-gray-300 hover:text-secondary">Business Events</router-link></li>
            <li><button class="text-gray-300 hover:text-secondary" @click="isSubscribeModalOpen = true, scrollToTop()">Subscribe</button></li>
            <li><button class="text-gray-300 hover:text-secondary" @click="isUnsubscribeModalOpen = true, scrollToTop()">Unsubscribe</button></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="md:col-span-1">
          <h3 class="text-xl font-semibold mb-4">Our Services</h3>
          <ul class="space-y-2">
            <template v-for="service in services" :key="service.id">
              <li><a :href="`/services#${convertNameToId(service.name)}`" class="text-gray-300 hover:text-secondary">{{ service.name }}</a></li>
            </template>
          </ul>
        </div>

        <!-- Contact -->
        <div class="md:col-span-1">
          <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-gray-300">{{ companyAddress }}</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span class="text-gray-300">{{ companyPhone }}</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-secondary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-300">{{ companyEmail }}</span>
            </li>
          </ul>
          <a href="/contact" class="btn btn-accent mt-4">Request a Quote</a>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-12 pt-8">
        <p class="text-center text-gray-400">
          &copy; {{ currentYear }} Simply Clean Power Washing. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  <Subscribe :show="isSubscribeModalOpen" @close="isSubscribeModalOpen = false" />
  <Unsubscribe :show="isUnsubscribeModalOpen" @close="isUnsubscribeModalOpen = false" />
</template>

<script>
import { useSettingsStore } from '@/store/settings'
import { useServiceStore } from '@/store/service'
import { convertNameToId } from '@/utils/id-converter'  
import Subscribe from '../modals/Subscribe.vue'
import Unsubscribe from '../modals/Unsubscribe.vue'
export default {
  name: 'Footer',
  components: {
    Subscribe,
    Unsubscribe
  },
  data() {
    return {
      settingsStore: useSettingsStore(),
      serviceStore: useServiceStore(),
      services: null,
      companyName: null,
      companyAddress: null,
      companyPhone: null,
      companyEmail: null,
      companyLogo: null,
      companyDescription: null,
      companyFacebook: null,
      companyInstagram: null,
      companyTwitter: null,
      companyLinkedin: null,
      companyYoutube: null,
      companyTiktok: null,
      companyPinterest: null,
      isSubscribeModalOpen: false,
      isUnsubscribeModalOpen: false,
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    convertNameToId(serviceName) {
      return convertNameToId(serviceName);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  async mounted() {
    this.companyName = this.settingsStore.companyName
    this.companyAddress = this.settingsStore.companyAddress
    this.companyPhone = this.settingsStore.companyPhone
    this.companyEmail = this.settingsStore.companyEmail
    this.companyLogo = this.settingsStore.companyLogo
    this.companyDescription = this.settingsStore.companyDescription
    this.services = this.serviceStore.services
    this.companyFacebook = this.settingsStore.companyFacebook
    this.companyInstagram = this.settingsStore.companyInstagram
    this.companyTwitter = this.settingsStore.companyTwitter
    this.companyLinkedin = this.settingsStore.companyLinkedin
    this.companyYoutube = this.settingsStore.companyYoutube
    this.companyTiktok = this.settingsStore.companyTiktok
    this.companyPinterest = this.settingsStore.companyPinterest
  }
}
</script>