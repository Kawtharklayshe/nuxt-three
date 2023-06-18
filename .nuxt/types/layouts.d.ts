import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/nuxt@3.5.3_@types+node@18.0.0/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}