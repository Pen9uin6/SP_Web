// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  generate: {
    routes: [
      '/mem/member',
      '/mem/1',  
      '/mem/2',
      '/mem/3',
      '/mem/4',
      '/mem/5',
      '/mem/6',
      '/mem/7',
      '/mem/8',
      '/mem/9',
      '/mem/10',
      '/mem/11',
      '/mem/12',
      '/mem/13',
      '/mem/14',
      '/mem/15',
      '/mem/16',
      '/mem/17',
      '/mem/18',
    ]
  },
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/SP_Web/" : "/",
    buildAssetsDir: "/static/",
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  supabase: {
    redirect: false,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@nuxt/icon"
  ],
});