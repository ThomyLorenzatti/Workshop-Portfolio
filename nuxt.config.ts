export default defineNuxtConfig({
    css: [
        '@/assets/styles/reset.css',
    ],
    publicRuntimeConfig: {
        token: process.env.GIT_TOKEN,
    },
})