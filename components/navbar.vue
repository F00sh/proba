<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Navbar scroll/hide logic
const isNavVisible = ref(true)
let lastScrollY = 0
function handleScroll() {
  const currentY = window.scrollY
  isNavVisible.value = currentY < 10 || currentY < lastScrollY
  lastScrollY = currentY
}
onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed z-50 bg-black w-full flex items-center justify-between h-16 px-8 transition-transform duration-500',
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <!-- Logo -->
    <div class="text-white font-bold text-2xl tracking-widest">LOGO</div>

    <!-- Navigation Links -->
    <ul class="flex space-x-12">
      <li>
        <a href="#about" class="text-white hover:text-gray-300 transition">ABOUT</a>
      </li>
      <li>
        <a href="#work" class="text-white hover:text-gray-300 transition">WORK</a>
      </li>
      <li>
        <a href="#contact" class="text-white hover:text-gray-300 transition">CONTACT</a>
      </li>
    </ul>
  </nav>
</template>
