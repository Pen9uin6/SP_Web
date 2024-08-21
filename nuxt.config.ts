// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  generate: {
    routes: [
      '/member/index',
      '/member/1',  
      '/member/2',
      '/member/3',
      '/member/4',
      '/member/5',
      '/member/6',
      '/member/7',
      '/member/8',
      '/member/9',
      '/member/10',
      '/member/11',
      '/member/12',
      '/member/13',
      '/member/14',
      '/member/15',
      '/member/16',
      '/member/17',
      '/member/18',
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