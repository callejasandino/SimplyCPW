<template>
  <div class="before-after-container relative rounded-lg overflow-hidden shadow-lg">
    <h3 class="absolute top-0 left-0 z-20 bg-primary text-white px-4 py-2 rounded-br-lg">{{ title }}</h3>
    
    <div class="relative w-full h-72 md:h-96 lg:h-96">
      <!-- After Image (Full) -->
      <img :src="after" :alt="`After ${title}`" class="w-full h-full object-cover" />
      
      <!-- Before Image (Partial) -->
      <div class="absolute top-0 left-0 h-full overflow-hidden" :style="{ width: `${sliderPosition}%` }">
        <img :src="before" :alt="`Before ${title}`" class="w-full h-full object-cover" />
        
        <!-- Divider -->
        <div class="absolute top-0 right-0 h-full w-1 bg-accent"></div>
      </div>
      
      <!-- Slider -->
      <div 
        class="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize z-10 flex items-center justify-center"
        :style="{ left: `${sliderPosition}%` }"
        @mousedown="startDrag"
        @touchstart="startDrag"
      >
        <div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center shadow-md transform -translate-x-1/2">
          <svg class="w-5 h-5 text-neutral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
          </svg>
        </div>
      </div>
      
      <!-- Labels -->
      <div class="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm z-20">Before</div>
      <div class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm z-20">After</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeforeAfterImage',
  props: {
    before: {
      type: String,
      required: true
    },
    after: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sliderPosition: 50,
      isDragging: false
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.dragMove);
    window.addEventListener('mouseup', this.endDrag);
    window.addEventListener('touchmove', this.dragMove);
    window.addEventListener('touchend', this.endDrag);
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.dragMove);
    window.removeEventListener('mouseup', this.endDrag);
    window.removeEventListener('touchmove', this.dragMove);
    window.removeEventListener('touchend', this.endDrag);
  },
  methods: {
    startDrag(e) {
      this.isDragging = true;
      e.preventDefault();
    },
    dragMove(e) {
      if (this.isDragging) {
        const container = this.$el.getBoundingClientRect();
        const containerWidth = container.width;
        
        let clientX;
        if (e.type === 'touchmove') {
          clientX = e.touches[0].clientX;
        } else {
          clientX = e.clientX;
        }
        
        const position = ((clientX - container.left) / containerWidth) * 100;
        this.sliderPosition = Math.min(Math.max(position, 0), 100);
      }
    },
    endDrag() {
      this.isDragging = false;
    }
  }
}
</script>