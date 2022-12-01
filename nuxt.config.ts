export default defineNuxtConfig({
    css: [
        '@/assets/styles/reset.css',
    ],
    runtimeConfig: {
        token: '',
        supabase_key: '',
        public: {
        }
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
})