<template>
  <div class="app">

    <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="text-center">
        <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
        <h2 class="text-2xl font-semibold text-gray-700">Loading...</h2>
        <p class="text-gray-500 mt-2">Please wait while we prepare everything for you</p>
      </div>
    </div>

    <!-- Loading State -->

    <div v-else>
      <div v-if="isJobDetailRoute">
            <JobDetail />
      </div>

      <div v-else>
      <Navbar />  
        <!-- Main Content -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        
        <Footer v-if="!isLoading" />
      </div>
    </div>
    <Subscribe :show="isSubscribeModalOpen" @close="isSubscribeModalOpen = false" />
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import JobDetail from './views/JobDetail.vue';
import { useSettingsStore } from './store/settings';
import { useBusinessHoursStore } from './store/business-hours';
import { useBlogsStore } from './store/blogs';
import { useGalleryStore } from './store/gallery';
import { useWorkResultStore } from './store/work-result';
import { useMembersStore } from './store/members';
import { useQuoteStore } from './store/quote';
import { useServiceStore } from './store/service';
import { showToast } from './utils/toast';
import { useBusinessEventsStore } from '@/store/business-events'
import Subscribe from './components/modals/Subscribe.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    JobDetail,
    Subscribe
  },
  data() {
    return {
      isLoading: true,
      settingsStore: useSettingsStore(),
      businessHoursStore: useBusinessHoursStore(),
      blogsStore: useBlogsStore(),
      galleryStore: useGalleryStore(),
      workResultStore: useWorkResultStore(),
      membersStore: useMembersStore(),
      quoteStore: useQuoteStore(),
      serviceStore: useServiceStore(),
      businessEventsStore: useBusinessEventsStore(),
      isSubscribeModalOpen: false
    }
  },
  computed: {
    isJobDetailRoute() {
      return this.$route.name === 'JobDetail';
    }
  },
  async mounted() {
    if (this.$route.name !== 'JobDetail') {
       this.isLoading = true;
       try {
        await this.serviceStore.fetchServices();
        await this.settingsStore.fetchSettings();
        await this.businessHoursStore.fetchBusinessHours();
        await this.blogsStore.fetchBlogs();
        await this.galleryStore.fetchGallery();
        await this.workResultStore.fetchWorkResult();
        await this.membersStore.fetchMembers();
        await this.businessEventsStore.fetchBusinessEvents();
      } catch (error) {
        showToast(error.message, 'error');
      } finally {
        this.isLoading = false;
      }
    } else {
      this.isLoading = false;
    }

    setTimeout(() => {
      this.isSubscribeModalOpen = true
    }, 3000)
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>