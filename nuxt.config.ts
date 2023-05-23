// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: true,
    modules: [
        'nuxt-icon',
        'nuxt-lodash',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/supabase',
        '@element-plus/nuxt'
    ],
    runtimeConfig: {
        public: {
          stripePk: process.env.STRIPE_PK_KEY
        }
    },
    css: ['~/assets/scss/index.scss'],
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
          },
        },
      },
    },
    elementPlus: {
      icon: 'ElIcon',
      importStyle: 'scss',
      themes: ['dark'],
    },
    app: {
        head: {
          script: [
            { src: 'https://js.stripe.com/v3/', defer: true }
          ],
        }
      }
})
