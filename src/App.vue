<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue';
import * as THREE from "three";
import {
  Renderer, Camera, RendererPublicInterface, Scene, PerspectiveCamera,
  GltfModel, Plane, MeshPublicInterface, Raycaster,
  LambertMaterial, ToonMaterial, PhongMaterial, Box,
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
const furnitureRef = ref() as Ref<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>>;
// const furnitureRef = ref() as Ref<THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>[]>;
const furnitureColourRef = ref() as Ref<string>

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
  // scene.children = [];
  // furnitureRef.value = [];

  cameraRef.value = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
  // cameraRef.value = new THREE.OrthographicCamera(-window.innerWidth/2, window.innerWidth/2, window.innerHeight/2, -window.innerHeight, 0.1, 1000);

  // raycaster = new THREE.Raycaster();
  // pointer = new THREE.Vector2();

  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

  const GRID_SIZE = 5;
  const GRID_DIVISION = 10;
  const grid = new THREE.GridHelper(GRID_SIZE, GRID_DIVISION, "#888888", "#888888");

  scene.add(grid);

  // document.addEventListener("pointermove", (e: PointerEvent) => { onPointerMove(e) });
  // document.addEventListener("pointerdown", (e: PointerEvent) => { onPointerDown(e) });

  furnitureColourRef.value = '#ffffff';

  rendererRef.value = renderer;
  sceneRef.value = scene;

  renderer.onBeforeRender(() => {
  });
});

const onReady = (model: any) => {
  const parameters = {
    // color: new Color('#e2eab8')
  }
  const matToon = new THREE.MeshToonMaterial(parameters);
  const matColor = new THREE.MeshBasicMaterial({ color: "#3c3c3c" });

  model.scene.traverse((child: THREE.Mesh) => {
    if (child.isMesh) {
      if (child.name.toLowerCase().includes("outline")) {
        child.material = matColor;
      }
      else {
        child.material = matToon;
        child.castShadow = true;
      }

      furnitureRef.value = child;
    }
  });

  // furnitureRef.value = gltf.scene;
  // sceneRef.value.children.push(gltf.scene);
}

// function intersection() {
//   try {
//     raycaster.setFromCamera(pointer, cameraRef.value);
//   }
//   catch (e: any) {
//     throw new Error(e.toString());
//     return;
//   }

//   const intersects = raycaster.intersectObjects(sceneRef.value.children, true);

//   if (intersects.length > 0) {
//     console.log(intersects);

//     if (intersected != intersects[0].object && intersects[0].object.type === "Mesh") {
//       intersected = intersects[0].object;
//       if (!intersected.name.toLowerCase().includes("outline"))
//         (intersected.material as THREE.MeshToonMaterial).color.set(0xf47653);

//       console.log(intersected.name);
//     }
//   } else {
//     if (intersected && !intersected.name.toLowerCase().includes("outline"))
//       (intersected.material as THREE.MeshToonMaterial).color.set(0xffffff);

//     intersected = null;
//   }
// }

// function onPointerMove(event: PointerEvent) {
//   event.preventDefault();

//   console.log("mouseMove");

//   pointer.x = (event.offsetX / window.innerWidth) * 2 - 1;
//   pointer.y = -(event.offsetY / window.innerHeight) * 2 + 1;

//   intersection();
// }

// async function onPointerDown(event: any) {
// }

// function onPointerOver({over}:any) {
//   console.log("onPointerOver");
//   // furnitureRef.value.material.color.set(0xff0000);
//   furnitureColourRef.value = over ? '#ff0000' : '#ffffff';
// }

function onPointerOver({ over }: any) {
  furnitureColourRef.value = over ? '#ff0000' : '#ffffff';
}

function gltfOnClick(e: Event) {
  alert('Click');
  console.log(e);
}

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//   cameraRef.value.aspect = window.innerWidth / window.innerHeight
//   cameraRef.value.updateProjectionMatrix()
//   rendererRef.value.renderer.setSize(window.innerWidth, window.innerHeight)
// }
</script>

<template>
  <Renderer ref="rendererRef" :pointer="{ intersectMode: 'frame' }" antialias :orbit-ctrl="{ enableDamping: true }"
    resize="window" shadow>

    <PerspectiveCamera ref="cameraRef" :position="{ x: -2, y: 3, z: 2 }" />
    <!-- <OrthographicCamera ref="cameraRef" :position="{ x: -2, y: 3, z: 2 }" /> -->

    <Scene ref="sceneRef" background="#ded6d8">

      <HemisphereLight />

      <SpotLight color="#ffffff" :position="{ x: 5, y: 9, z: 7 }" :intensity="0.01" :angle="Math.PI / 3" :penumbra="0.3"
        cast-shadow :shadow-map-size="{ width: 200, height: 200 }"
        :shadow-camera="{ near: 10, far: 200, bias: 0.005, radius: 20 }" />

      <PointLight color="#ff0040" :position="{ x: 0, y: 5, z: 2 }" :intensity=".08"></PointLight>
      <PointLight color="#0040ff" :position="{ x: 0, y: 4, z: 2 }" :intensity=".08"></PointLight>
      <PointLight color="#80ff80" :position="{ x: 2, y: 9, z: -2 }" :intensity=".08"></PointLight>
      <PointLight color="#ffaa00" :position="{ x: -2, y: 6, z: 2 }" :intensity=".08"></PointLight>

      <Box ref="box" @pointerOver="onPointerOver" @click="gltfOnClick" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial :color="furnitureColourRef" />
      </Box>
      <!-- <Raycaster intersect-mode="frame" intersect-recursive @click="onPointerOver" /> -->
      <GltfModel ref="furnitureRef" src="/assets/models/table/1/littlewood_furniture.gltf" @click="gltfOnClick"
        @load="onReady" />
      <!-- @pointerOver="onPointerOver" @click="gltfOnClick" @load="onReady"> -->
      <!-- <LambertMaterial :color="furnitureColourRef" />   -->
      <!-- </GltfModel> -->
      <!-- <GltfModel ref="furnitureRef" src="/assets/models/van/1/van.glb" @load="onReady" /> -->

      <Plane :width="2000" :height="2000" :rotation="{ x: -Math.PI / 2 }" receive-shadow>
        <ShadowMaterial receive-shadow color="#888888" :transparent=true :opacity=0.005 :side=THREE.DoubleSide>
        </ShadowMaterial>
      </Plane>

      <!-- <ArrowHelper></ArrowHelper> -->

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
