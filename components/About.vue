<script setup>
import { useI18n } from 'vue-i18n' // or '#imports' in Nuxt 3+
const { t } = useI18n({
  messages: {
    en: {
      about: {
        title: "About Us",
        skills: ["Coding", "Design", "Testing"],
        body: [
          "This is some information about us.",
          "We excel at development."
        ]
      }
    }
  },
  fallbackLocale: 'en'
})
</script>

<template>
  <section class="w-full flex flex-col md:flex-row justify-between items-stretch md:items-center py-12 px-4 md:px-24 gap-6">
    <!-- Left Column -->
    <div class="md:w-1/3 flex flex-col justify-start">
      <h2 class="text-5xl md:text-6xl font-bold tracking-wide mb-6 text-white uppercase">
        {{ t('about.title') }}
      </h2>
      <ul class="space-y-4 text-2xl md:text-3xl tracking-widest text-white/90">
        <li v-for="(skill, i) in t('about.skills', { returnObjects: true })" :key="i">
          {{ skill }}
        </li>
      </ul>
    </div>
    <!-- Right Column -->
    <div class="md:w-2/3 bg-white/10 rounded-xl p-8 text-white text-lg font-light leading-relaxed border border-white/10 shadow-xl">
      <p class="mb-6" v-for="(p, i) in t('about.body', { returnObjects: true })" :key="i">{{ p }}</p>
    </div>
  </section>
</template>
