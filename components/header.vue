<script setup lang="ts">
import { computed } from 'vue'

/* Pick a random W3Schools demo MP4 */
const videoUrls = [
  'https://www.w3schools.com/html/movie.mp4',          // Bear / landscape
  'https://www.w3schools.com/html/mov_bbb.mp4',        // Big Buck Bunny
  'https://www.w3schools.com/howto/ocean.mp4'          // Ocean waves
]

const randomVideoUrl = computed(
  () => videoUrls[Math.floor(Math.random() * videoUrls.length)]
)
</script>

<template>
  <header class="relative w-full h-screen overflow-hidden">
    <!-- FIXED video background -->
    <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <video
        :src="randomVideoUrl"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
      />
      <!-- dark overlay for readability -->
      <div class="absolute inset-0"></div>
    </div>

    <!-- Hero content -->
    <div
      class="relative z-20 flex flex-col items-center justify-center
             w-full h-full text-white text-center px-4"
    >
      <slot>
        <h1 class="text-8xl md:text-[18rem] font-bold mb-6">FOOSH</h1>

        <div class="flex items-center justify-center text-center">
          <p class="text-[0.92rem] md:text-[2.76rem] mb-8">
            design&nbsp;|&nbsp;animation&nbsp;|&nbsp;CAD&nbsp;|&nbsp;UX&nbsp;|&nbsp;illustration&nbsp;|
          </p>
          <p
            class="text-[0.92rem] md:text-[2.76rem] mb-8 pl-2
                   md:hover:pl-80 duration-300 text-purple-600 font-bold"
          >
            love
          </p>
        </div>
      </slot>
    </div>
  </header>
</template>
