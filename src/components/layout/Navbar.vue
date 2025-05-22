<template>
  <header :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  ]">
    <div class="container mx-auto px-4 md:px-8">
      <nav class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <div class="flex items-center">
            <span class="text-2xl font-display font-bold" :class="scrolled ? 'text-primary' : 'text-white'">
              Simply Clean<span class="text-secondary">Power Washing</span>
            </span>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NavLink v-for="link in navLinks" :key="link.to" 
            :to="link.to" 
            :label="link.label" 
            :scrolled="scrolled" />
          <a href="/contact" class="btn btn-accent">Book Now</a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden focus:outline-none">
          <svg :class="scrolled ? 'text-neutral-dark' : 'text-white'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-col space-y-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to" 
            class="py-2 px-4 text-neutral-dark hover:bg-gray-100 rounded-md"
            @click="mobileMenuOpen = false">
            {{ link.label }}
          </router-link>
          <a href="/contact" class="btn btn-accent mt-4 text-center" @click="mobileMenuOpen = false">Book Now</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 'Navbar',
  components: {
    NavLink
  },
  data() {
    return {
      scrolled: false,
      mobileMenuOpen: false,
      navLinks: [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Services' },
        { to: '/gallery', label: 'Gallery' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  }
}
</script>