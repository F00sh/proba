<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '#imports'
const { t, locale, setLocale } = useI18n()

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
        <a href="#about">{{ t('navbar.about') }}</a>
      </li>
      <li>
        <a href="#work">{{ t('navbar.work') }}</a>
      </li>
      <li>
        <a href="#contact">{{ t('navbar.contact') }}</a>
      </li>
    </ul>
    <!-- Language Switcher -->
    <div>
      <button
        @click="setLocale(locale.value === 'en' ? 'hr' : 'en')"
        class="ml-4 px-3 py-1 rounded bg-white text-black font-bold uppercase"
      >
        {{ locale.value === 'en' ? 'HR' : 'EN' }}
      </button>
    </div>
  </nav>
</template>
