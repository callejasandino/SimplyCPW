import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'Home', 
      component: async () => await import('./views/Home.vue') 
    },
    { 
      path: '/services', 
      name: 'Services', 
      component: async () => await import('./views/Services.vue') 
    },
    { 
      path: '/about', 
      name: 'About', 
      component: async () => await import('./views/About.vue') 
    },
    { 
      path: '/gallery', 
      name: 'Gallery', 
      component: async () => await import('./views/Gallery.vue') 
    },
    { 
      path: '/contact', 
      name: 'Contact', 
      component: async () => await import('./views/Contact.vue') 
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')