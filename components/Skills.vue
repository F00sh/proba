<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const skills = [
  "Adobe Package",
  "Blender",
  "Rhinoceros",
  "Solidworks",
  "Cinema4D",
  "Unity",
  "Unreal",
  "Nuxt"
]

// Use random unsplash images (replace with any URLs you like)
const images = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
]

const current = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.length
  }, 2500)
})
onUnmounted(() => {
  clearInterval(interval)
})

// Route to Work.vue
const router = useRouter()
function goToWork() {
  router.push('/work')
}
</script>

<template>
  <section class="relative w-full h-screen flex flex-col md:flex-row justify-between md:justify-center items-stretch md:items-center py-12 pb-28 px-4 md:px-24 gap-6">
    <!-- Left Column -->
    <div class="md:w-1/3 flex flex-col justify-start">
      <h2 class="text-5xl md:text-6xl font-bold tracking-wide mb-6 text-white uppercase hover:text-purple-500 transition-colors">
        Skills
      </h2>
      <ul class="space-y-2 md:space-y-4 text-2xl md:text-3xl tracking-widest text-white/90">
        <li v-for="(skill, i) in skills" :key="i" class="hover:pl-5 duration-300  hover:text-purple-500">
          {{ skill }}
        </li>
      </ul>
    </div>
    <!-- Right Column -->
      <transition name="fade" mode="out-in">
        <img
          :key="images[current]"
          :src="images[current]"
          alt="Skill showcase"
          class="object-cover rounded-lg w-full h-full mx-auto shadow items-center justify-center"
        />
      </transition>
          <button
        @click="goToWork"
        class="md:absolute bottom-30 md:left-20 mt-2 px-8 py-3 rounded-2xl bg-black/80 text-white text-lg font-semibold tracking-wide uppercase hover:text-teal-300 transition"
      >
        See Work
      </button>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
