<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/* ── props ───────────────────────────────────────────── */
const props = defineProps<{
  /** Array of menu items.  
      Each item can have  
      •  label  – text shown in the nav  
      •  href   – normal link (optional)  
      •  value  – payload emitted on click (optional) */
  items?: { label: string; href?: string; value?: unknown }[]
  /** Where the logo should send the user (hash or full path) */
  logoTo?: string
}>()

/* fallback for “home” page */
const menu = props.items?.length
  ? props.items
  : [
      { label: 'ABOUT', href: '#about' },
      { label: 'WORK',  href: '#work'  },
      { label: 'CONTACT', href: '#contact' }
    ]

/* ── emit  ------------------------------------------------*/
const emit = defineEmits<{
  /** Fired for items that have NO href (e.g. filter buttons) */
  (e: 'select', payload: unknown): void
}>()

function handleItem (item: typeof menu[number]) {
  if (item.href) {
    /* normal navigation (hash-link or page path) */
    window.location.assign(item.href)
  } else {
    /* tell the parent we clicked a “special” item */
    emit('select', item.value ?? item.label)
  }
}

/* ── hide / show on scroll --------------------------------*/
const isNavVisible = ref(true)
let lastScrollY = 0
function handleScroll () {
  const y = window.scrollY
  isNavVisible.value = y < 10 || y < lastScrollY
  lastScrollY = y
}
onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 z-50 w-full h-16 px-8 flex items-center justify-between bg-black',
      'transition-transform duration-500',
      isNavVisible ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <!-- Logo -->
    <a :href="logoTo ?? '#'" class="text-white font-bold text-2xl tracking-widest">LOGO</a>

    <!-- Menu -->
    <ul class="flex space-x-12">
      <li v-for="item in menu" :key="item.label">
        <a
          class="text-white hover:text-purple-500 transition cursor-pointer"
          @click.prevent="handleItem(item)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
