export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'hr', name: 'Hrvatski', file: 'hr.json' }
    ],
    lazy: true,
    langDir: 'i18n/locales/',   // <-- only one i18n in path!
    defaultLocale: 'en'
  }
})
