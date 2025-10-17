import { createRouter, createWebHistory } from 'vue-router'

// Optional: UUID v4 pattern (relax to [0-9a-fA-F-]+ if you don't want strict)
const SHOP = ':shop_uuid([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})'

const routes = [
  {
    path: `/${SHOP}`,
    name: 'Home',
    component: async () => await import('@/views/Home.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/services`,
    name: 'Services',
    component: async () => await import('@/views/Services.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/about`,
    name: 'About',
    component: async () => await import('@/views/About.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/gallery`,
    name: 'Gallery',
    component: async () => await import('@/views/Gallery.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/contact`,
    name: 'Contact',
    component: async () => await import('@/views/Contact.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/blog`,
    name: 'Blog',
    component: async () => await import('@/views/Blog.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/blog/:slug`,
    name: 'BlogDetail',
    component: async () => await import('@/views/BlogDetail.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/job/:slug`,
    name: 'JobDetail',
    component: async () => await import('@/views/JobDetail.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/business-events`,
    name: 'BusinessEvents',
    component: async () => await import('@/views/BusinessEvents.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/business-events/:slug`,
    name: 'BusinessEventDetail',
    component: async () => await import('@/views/BusinessEventDetail.vue'),
    props: true,
  },
  {
    path: `/${SHOP}/available-services/:slug`,
    name: 'AvailServices',
    component: async () => await import('@/views/AvailServices.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: async () => await import('@/views/NotFound.vue'),
    meta: { title: 'Page Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
