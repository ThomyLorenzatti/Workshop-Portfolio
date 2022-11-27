export default defineNuxtConfig({
    css: [
        '@/assets/styles/reset.css',
    ],
    publicRuntimeConfig: {
        token: process.env.NUXT_ENV_GIT_TOKEN,
    },
})