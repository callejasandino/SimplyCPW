import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
      path: '/', 
      name: 'Home', 
      component: async () => await import('../views/Home.vue')
    },
    { 
      path: '/services', 
      name: 'Services', 
      component: async () => await import('../views/Services.vue')
    },
    { 
      path: '/about', 
      name: 'About', 
      component: async () => await import('../views/About.vue')
    },
    { 
      path: '/gallery', 
      name: 'Gallery', 
      component: async () => await import('../views/Gallery.vue')
    },
    { 
      path: '/contact', 
      name: 'Contact', 
      component: async () => await import('../views/Contact.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: async () => await import('../views/Blog.vue')
    },
    {
      path: '/blog/:slug',
      name: 'BlogDetail',
      component: async () => await import('../views/BlogDetail.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: async () => await import('../views/NotFound.vue'),
      meta: { title: 'Page Not Found'}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router