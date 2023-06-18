import { defineComponent, createVNode } from 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { c as createError } from '../server.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/ofetch@1.1.0/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/h3@1.6.6/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/@unhead+ssr@1.1.27/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/unhead@1.1.27/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/@unhead+shared@1.1.27/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/vue-router@4.2.2_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/node-fetch-native@1.2.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/unenv@1.5.1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/ohash@1.1.2/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/unstorage@1.6.1/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/unstorage@1.6.1/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/radix3@1.0.1/node_modules/radix3/dist/index.mjs';

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    return () => createVNode(component || "span", { ...props.context.props, "nuxt-ssr-component-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-be0ec920.mjs.map
