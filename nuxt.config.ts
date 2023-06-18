export default {
  // ...
  build: {
    rollupOptions: {
      external: ['three/addons/Loaders/GLTFLoader.js'],
    },
  },
};
