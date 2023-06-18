import { mergeProps, useSSRContext, defineComponent, ref, createElementBlock } from 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/ofetch@1.1.0/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/h3@1.6.6/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/@unhead+ssr@1.1.27/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/unhead@1.1.27/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/@unhead+shared@1.1.27/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/vue-router@4.2.2_vue@3.3.4/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/heade/OneDrive/Desktop/nuxt-three/nuxt-three/node_modules/.pnpm/ufo@1.1.2/node_modules/ufo/dist/index.mjs';
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

const __nuxt_component_0 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-f703d950.mjs.map
