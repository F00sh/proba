<template>
  <header class="relative w-full h-screen overflow-hidden">


    <!-- Overlay (optional, can adjust opacity/color) -->
    <div class="absolute inset-0 z-10"></div>

    <!-- Content slot for your hero text/buttons -->
    <div class="relative z-20 flex flex-col items-center justify-center w-full h-full text-white text-center px-4">
      <slot>
        <h1 class="text-8xl md:text-[18rem] font-bold mb-6">FOOSH</h1>
        <p class="text-[0.92rem] md:text-[2.76rem] mb-8">design | animation | CAD | UX | illustration | love</p>
      </slot>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'

const videoUrls = [
  // You can add as many royalty-free video URLs as you want here
  // Here's an example (Pexels free video, hotlinking works for demo, but you should download and self-host for production)
  'https://www.w3schools.com/howto/rain.mp4',
  'https://www.w3schools.com/howto/mountain.mp4',
  'https://www.w3schools.com/howto/forest.mp4'
]

const randomVideoUrl = computed(() =>
  videoUrls[Math.floor(Math.random() * videoUrls.length)]
)
</script>
