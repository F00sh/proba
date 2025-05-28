<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const skills = [
  "Adobe Package",
  "Blender",
  "Rhinoceros",
  "Solidworks",
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
  <section class="w-full flex flex-col md:flex-row justify-between items-stretch md:items-center py-12 pb-28 px-4 md:px-24 gap-6">
    <!-- Left Column -->
    <div class="md:w-1/3 flex flex-col justify-start">
      <h2 class="text-5xl md:text-6xl font-bold tracking-wide mb-6 text-white uppercase">
        Skills
      </h2>
      <ul class="space-y-4 text-2xl md:text-3xl tracking-widest text-white/90">
        <li v-for="(skill, i) in skills" :key="i">
          {{ skill }}
        </li>
      </ul>
    </div>
    <!-- Right Column -->
    <div class="md:w-2/3 flex flex-col items-center bg-white/10 rounded-xl p-8 border border-white/10 shadow-xl min-h-[340px]">
      <transition name="fade" mode="out-in">
        <img
          :key="images[current]"
          :src="images[current]"
          alt="Skill showcase"
          class="object-cover rounded-lg w-full max-w-lg h-64 mx-auto mb-8 shadow"
        />
      </transition>
      <button
        @click="goToWork"
        class="mt-2 px-8 py-3 rounded bg-black/80 text-white text-lg font-semibold tracking-wide uppercase hover:bg-white hover:text-black border border-white transition"
      >
        See Work
      </button>
    </div>
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
