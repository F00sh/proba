<script setup lang="ts">
import { ref, computed } from 'vue'

/* 1)  filter buttons that will be passed to <Navbar /> */
const filters = ['All', '3D', '2D', 'Animation']
const activeFilter = ref('All')
function setFilter(label: string) {
  activeFilter.value = label
}

/* 2)  demo project data  ───────────────────────────────*/
const allProjects = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  type: filters[1 + (i % 3)],         // 3D / 2D / Animation
  title: `Project ${i + 1}`,
  description:
    'This is a description for the project. It showcases techniques and style.',
  thumb: `https://picsum.photos/seed/work${i}/400/400`,
  images: [
    `https://picsum.photos/seed/gallery${i}a/600/400`,
    `https://picsum.photos/seed/gallery${i}b/600/400`,
    `https://picsum.photos/seed/gallery${i}c/600/400`
  ]
}))

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? allProjects
    : allProjects.filter(p => p.type === activeFilter.value)
)

/* 3)  modal logic  ────────────────────────────────────*/
const showModal = ref(false)
const modalProject = ref<typeof allProjects[0] | null>(null)
const modalImg = ref(0)

function openModal(project: typeof allProjects[0]) {
  modalProject.value = project
  modalImg.value = 0
  showModal.value = true
}
function closeModal() {
  showModal.value = false
}
function prevImg() {
  if (modalProject.value)
    modalImg.value =
      (modalImg.value + modalProject.value.images.length - 1) %
      modalProject.value.images.length
}
function nextImg() {
  if (modalProject.value)
    modalImg.value =
      (modalImg.value + 1) % modalProject.value.images.length
}
</script>
<template>
  <div class="min-h-screen bg-neutral-950 text-white">
    <!-- NAVBAR -->
  <Navbar
    :items="filters.map(f => ({ label: f, value: f }))"
    logo-to="/"
    @select="setFilter"
  />

    <!-- GRID -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 py-10">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="relative group aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        @click="openModal(project)"
      >
        <img :src="project.thumb" class="object-cover w-full h-full transition duration-900 group-hover:scale-205" />
        <div class="absolute inset-0 flex flex-col justify-end bg-white/0 group-hover:bg-white/50 transition duration-600">
          <div v-if="!showModal" class="opacity-0 group-hover:opacity-100 px-6 py-5 transition duration-300">
            <div class="font-bold text-lg text-black mb-1">{{ project.title }}</div>
            <div class="text-black text-sm">{{ project.description }}</div>
          </div>
        </div>
      </div>
    </div>

<!-- MODAL -->
<transition name="fade">
  <div
    v-if="showModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative">

      <!-- LEFT: Project info -->
      <div class="md:w-1/2 p-8 flex flex-col justify-between bg-white">
        <div>
          <div class="font-bold text-2xl mb-3 text-black">{{ modalProject?.title }}</div>
          <div class="text-black mb-8">{{ modalProject?.description }}</div>
        </div>
        <button
          @click="closeModal"
          class="mt-6 px-4 py-2 rounded bg-black text-white hover:bg-red-600 transition self-end"
        >
          Close
        </button>
      </div>

      <!-- RIGHT: Carousel -->
      <div class="md:w-1/2 flex flex-col items-center justify-center bg-neutral-900 p-4">
        <div class="relative w-full">
          <img
            :src="modalProject?.images?.[modalImg]"
            class="rounded-xl object-cover w-full max-h-80 shadow mb-3"
          />
          <!-- Carousel Controls -->
          <button
            @click.stop="prevImg"
            class="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            ‹
          </button>
          <button
            @click.stop="nextImg"
            class="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            ›
          </button>
        </div>

        <!-- Dots -->
        <div class="flex space-x-1 mt-2">
          <span
            v-for="(img, i) in modalProject?.images ?? []"
            :key="i"
            :class="[
              'block w-3 h-3 rounded-full',
              i === modalImg ? 'bg-white' : 'bg-gray-400/60'
            ]"
          />
        </div>
      </div>
    </div>
  </div>
</transition>

  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
