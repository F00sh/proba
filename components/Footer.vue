<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showFooter = ref(false)

function onScroll() {
  const scrollBottom = window.innerHeight + window.scrollY
  const docHeight = document.body.offsetHeight
  showFooter.value = scrollBottom >= docHeight - 10 // appears when at bottom
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <transition name="slideup">
    <footer
      v-if="showFooter"
      class="fixed w-full left-0 bottom-0 z-50 bg-black text-white py-3 px-6 flex items-center justify-between shadow-xl"
    >
      <!-- Social Icons Left -->
      <div class="flex items-center space-x-5">
        <a href="#" target="_blank" aria-label="Instagram">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" class="w-7 h-7" />
        </a>
        <a href="#" target="_blank" aria-label="Vimeo">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111771.png" alt="Vimeo" class="w-7 h-7" />
        </a>
        <a href="#" target="_blank" aria-label="LinkedIn">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" class="w-7 h-7" />
        </a>
        <span class="text-xs text-gray-400 ml-3">&copy; {{ new Date().getFullYear() }} Your Company Name</span>
      </div>
      <!-- Back to Top Right -->
      <button @click="backToTop" aria-label="Back to Top" class="flex flex-col items-center group ml-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892692.png"
          alt="Arrow Up"
          class="w-6 h-6 group-hover:scale-125 transition"
        />
        <span class="text-xs text-gray-300 mt-1 group-hover:text-white">Back to top</span>
      </button>
    </footer>
  </transition>
</template>

<style scoped>
.slideup-enter-active, .slideup-leave-active {
  transition: opacity 0.4s, transform 0.4s;
}
.slideup-enter-from, .slideup-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.slideup-enter-to, .slideup-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
