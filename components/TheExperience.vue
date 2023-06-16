<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Scene,
  PerspectiveCamera,
  Fog,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  Color,
  WebGLRenderer,
  AmbientLight,
} from "three";
import {useWindowSize} from '@vueuse/core'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader} from 'three/addons/Loaders/GLTFLoader.js'
let renderer: WebGLRenderer | undefined;
let controls: OrbitControls | undefined;

const {width,height}=useWindowSize()
const aspectRatio=computed(()=> width.value/height.value)
const experience = ref<HTMLCanvasElement | null>(null);
const scene = new Scene();
const bgColor=new Color('#E1F0C2')
scene.background=bgColor
scene.fog=new Fog(bgColor,0.1,75)


const camera = new PerspectiveCamera(75,aspectRatio.value, 0.1, 1000);
camera.position.set(0, 2, 4);
scene.add(camera);

const ambientLight = new AmbientLight(0xffffff, 1)
scene.add(ambientLight)

const gLfLoader= new GLTFLoader()
gLfLoader.load('/nuxty/nuxty.gltf',(gltf)=>{
  scene.add(gltf.scene)
})
// const sphere = new Mesh(
//   new SphereGeometry(1, 32, 32),
//   new MeshBasicMaterial({ color: 0x008080 })
// );
// scene.add(sphere);
function updateCamera() {
  camera.aspect=aspectRatio.value
  camera.updateProjectionMatrix()

}
function updateRenderer() {
  
    renderer?.setSize(width.value, height.value);
    renderer?.render(scene, camera);
  
}
const loop=()=>{
  controls?.update()
  // sphere.position.x +=0.01
  renderer?.render(scene, camera);
  requestAnimationFrame(loop)
}
function setRenderer() {
  if (experience.value ) {
    renderer = new WebGLRenderer({
      canvas: experience.value,
      alpha:true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    updateRenderer()
  }
}
watch(aspectRatio,()=>{
  updateCamera()
  updateRenderer()
})

onMounted(() => {
  setRenderer();
  loop()
});


</script>
