import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
      path: '/', 
      name: 'Home', 
      component: async () => await import('@/views/Home.vue')
    },
    { 
      path: '/services', 
      name: 'Services', 
      component: async () => await import('@/views/Services.vue')
    },
    { 
      path: '/about', 
      name: 'About', 
      component: async () => await import('@/views/About.vue')
    },
    { 
      path: '/gallery', 
      name: 'Gallery', 
      component: async () => await import('@/views/Gallery.vue')
    },
    { 
      path: '/contact', 
      name: 'Contact', 
      component: async () => await import('@/views/Contact.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: async () => await import('@/views/Blog.vue')
    },
    {
      path: '/blog/:slug',
      name: 'BlogDetail',
      component: async () => await import('@/views/BlogDetail.vue')
    },
    {
      path: '/job/:slug',
      name: 'JobDetail',
      component: async () => await import('@/views/JobDetail.vue')
    },
    {
      path: '/business-events',
      name: 'BusinessEvents',
      component: async () => await import('@/views/BusinessEvents.vue')
    },
    {
      path: '/business-events/:slug',
      name: 'BusinessEventDetail',
      component: async () => await import('@/views/BusinessEventDetail.vue')
    },
    {
      path: '/avail-services/:slug',
      name: 'AvailServices',
      component: async () => await import('@/views/AvailServices.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: async () => await import('@/views/NotFound.vue'),
      meta: { title: 'Page Not Found'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router