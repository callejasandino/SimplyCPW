<template>
  <router-link :to="to" :class="[
    'font-medium hover:text-secondary transition duration-300',
    scrolled ? 'text-neutral-dark' : 'text-white',
    $route.path === to ? 'border-b-2 border-secondary pb-1' : ''
  ]">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    scrolled: {
      type: Boolean,
      default: false
    }
  }
}
</script>