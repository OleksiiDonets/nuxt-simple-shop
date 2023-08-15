// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  },
  modules: [
    '@nuxthq/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwindcss.css',
  },
  colorMode: {
    preference: 'light'
  }
})
