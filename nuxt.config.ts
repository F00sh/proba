// nuxt.config.ts

export default defineNuxtConfig({
  // Enable auto-import for components in /components folder
  components: true,

  // Tailwind CSS module
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Optional: Specify CSS file if using custom Tailwind config
  css: [
    '~/assets/css/main.css'
  ],

  // Enable devtools
  devtools: { enabled: true },

  // Optional: Vite custom config (not required for most setups)
  // vite: {
  //   plugins: []
  // }
})
