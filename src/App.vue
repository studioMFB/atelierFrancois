<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue';
import * as THREE from "three";
import {
  Renderer, Camera, RendererPublicInterface, Scene, PerspectiveCamera,
  GltfModel, Plane, MeshPublicInterface,
  LambertMaterial, ToonMaterial, PhongMaterial,
  DirectionalLight, HemisphereLight, AmbientLight, PointLight, SpotLight, StandardMaterial, ShadowMaterial, OrthographicCamera
} from 'troisjs';
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";


const rendererRef = ref() as Ref<RendererPublicInterface>;
const sceneRef = ref() as Ref<THREE.Scene>;
const cameraRef = ref() as Ref<THREE.PerspectiveCamera>;
const furnitureRef = ref() as Ref<any>;

let raycaster: THREE.Raycaster;
let pointer: THREE.Vector2;

let intersected: any;
let INTERSECTED: any;
const selectedObjects: any[] = [];

onMounted(() => {
  const renderer = rendererRef.value;
  renderer.renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.renderer.setPixelRatio(window.devicePixelRatio);
  renderer.renderer.setClearColor(0x000000);
  renderer.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = sceneRef.value;
  scene.children = [];

  cameraRef.value = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
  // cameraRef.value = new THREE.OrthographicCamera(-window.innerWidth/2, window.innerWidth/2, window.innerHeight/2, -window.innerHeight, 0.1, 1000);

  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();

  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

  const GRID_SIZE = 5;
  const GRID_DIVISION = 10;
  const grid = new THREE.GridHelper(GRID_SIZE, GRID_DIVISION, "#888888", "#888888");

  scene.add(grid);

  document.addEventListener("pointermove", (e: PointerEvent) => { onPointerMove(e) });
// document.addEventListener("pointerdown", (e: PointerEvent) => { onPointerDown(e) });

  rendererRef.value = renderer;
  sceneRef.value = scene;

  renderer.onBeforeRender(() => {
  });
});

const onReady = (gltf: any) => {
  const parameters = {
    // color: new Color('#e2eab8')
  }
  const matToon = new THREE.MeshToonMaterial(parameters);
  const matColor = new THREE.MeshBasicMaterial({ color: "#3c3c3c" });

  gltf.scene.traverse((child: THREE.Mesh) => {
    if (child.isMesh) {
      if (child.name.toLowerCase().includes("outline")) {
        child.material = matColor;
      }
      else {
        child.material = matToon;
        child.castShadow = true;
      }
    }
  });

  sceneRef.value.children.push(gltf.scene);
}

function intersection() {
  try {
    raycaster.setFromCamera(pointer, cameraRef.value);
  }
  catch (e: any) {
    throw new Error(e.toString());
  }

  const intersects = raycaster.intersectObjects(sceneRef.value.children, true);

  if (intersects.length > 0) {
    console.log(intersects);

    if (intersected != intersects[0].object && intersects[0].object.type === "Mesh") {
      intersected = intersects[0].object;
      if (!intersected.name.toLowerCase().includes("outline"))
        (intersected.material as THREE.MeshToonMaterial).color.set(0xf47653);

      console.log(intersected.name);
    }
  } else {
    if (intersected && !intersected.name.toLowerCase().includes("outline"))
      (intersected.material as THREE.MeshToonMaterial).color.set(0xffffff);

    intersected = null;
  }
}

function onPointerMove(event: PointerEvent) {
  event.preventDefault();

  console.log("mouseMove");

  pointer.x = (event.offsetX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.offsetY / window.innerHeight) * 2 + 1;

  intersection();
}

// async function onPointerDown(event: any) {
// }
</script>

<template>
  <Renderer ref="rendererRef" antialias :orbit-ctrl="{ enableDamping: true }" resize="window" shadow>
    <PerspectiveCamera ref="cameraRef" :position="{ x: -2, y: 3, z: 2 }" />
    <!-- <OrthographicCamera ref="cameraRef" :position="{ x: -2, y: 3, z: 2 }" /> -->
    <Scene ref="sceneRef" background="#ded6d8">

      <HemisphereLight />
      <!-- <DirectionalLight :position="{ x: 55, y: 300, z: 70 }" :intensity=".07"
      cast-shadow :shadow-camera="{ bias:0.005, radius:200 }"
      :shadow-map-size="{ width: 6000, height: 6000 }" :angle="Math.PI/3" :penumbra="0.3"/> -->

      <SpotLight color="#ffffff" :position="{ x: 5, y: 9, z: 7 }" :intensity="0.01" :angle="Math.PI / 3" :penumbra="0.3"
        cast-shadow :shadow-map-size="{ width: 200, height: 200 }"
        :shadow-camera="{ near: 10, far: 200, bias: 0.005, radius: 20 }" />


      <PointLight color="#ff0040" :position="{ x: 0, y: 5, z: 2 }" :intensity=".08"></PointLight>
      <PointLight color="#0040ff" :position="{ x: 0, y: 4, z: 2 }" :intensity=".08"></PointLight>
      <PointLight color="#80ff80" :position="{ x: 2, y: 9, z: -2 }" :intensity=".08"></PointLight>
      <PointLight color="#ffaa00" :position="{ x: -2, y: 6, z: 2 }" :intensity=".08"></PointLight>

      <GltfModel ref="furnitureRef" src="/assets/models/table/1/littlewood_furniture.gltf" @load="onReady" />
      <!-- <GltfModel ref="furnitureRef" src="/assets/models/van/1/van.glb" @load="onReady" /> -->

      <Plane :width="2000" :height="2000" :rotation="{ x: -Math.PI / 2 }" receive-shadow>
        <ShadowMaterial receive-shadow color="#888888" :transparent=true :opacity=0.005 :side=THREE.DoubleSide>
        </ShadowMaterial>
      </Plane>

    </Scene>
  </Renderer>
</template>

<style>
body,
html {
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
