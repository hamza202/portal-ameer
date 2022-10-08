import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  plugins: [
      vue(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      include: [fileURLToPath(new URL("./locales/**", import.meta.url))],
    })
  ],
})
