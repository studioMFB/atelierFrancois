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
// const rendererRef = ref() as Ref<THREE.WebGLRenderer>;
const sceneRef = ref() as Ref<THREE.Scene>;
const cameraRef = ref() as Ref<THREE.PerspectiveCamera>;
const furnitureRef = ref() as Ref<THREE.PerspectiveCamera>;

let localCamera: THREE.PerspectiveCamera;
let raycaster: THREE.Raycaster;
let pointer: THREE.Vector2;
// let canvas: HTMLCanvasElement;

let intersected: any;
let INTERSECTED: any;
const selectedObjects: any[] = [];

// let composer: EffectComposer;
// let renderPass: RenderPass;
// let outline: OutlinePass;
// let fxaaShader: ShaderPass;

onMounted(() => {
  const renderer = rendererRef.value;
  renderer.renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.renderer.setPixelRatio(window.devicePixelRatio);
  renderer.renderer.setClearColor(0x000000);
  renderer.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = sceneRef.value;
  scene.children = [];

  // canvas = document.getElementsByTagName("canvas")[0] as HTMLCanvasElement;
  // console.log("CANVAS ", canvas);

  localCamera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
  localCamera.position.set(-2, 3, 2);
  cameraRef.value = localCamera;

  raycaster = new THREE.Raycaster();
  pointer = new THREE.Vector2();

  // composer = new EffectComposer(renderer.renderer);
  // renderPass = new RenderPass(scene, localCamera);
  // composer.addPass(renderPass);
  // outline = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, localCamera);
  // outline.edgeThickness = 2.0;
  // outline.edgeStrength = 3.0;
  // outline.visibleEdgeColor.set(0xffffff);
  // composer.addPass(outline);

  // fxaaShader = new ShaderPass(FXAAShader);
  // fxaaShader.uniforms["resolution"].value.set(1 / window.innerWidth, 1 / window.innerHeight);
  // composer.addPass(fxaaShader);

  scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

  const GRID_SIZE = 5;
  const GRID_DIVISION = 10;
  const grid = new THREE.GridHelper(GRID_SIZE, GRID_DIVISION, "#888888", "#888888");
  scene.add(grid);

  // canvas.addEventListener('click', onPointerDown, false);
  // window.addEventListener("resize", windowResize);
  // renderer.renderer.domElement.style.touchAction = "none";
  // renderer.renderer.domElement.addEventListener("mousemove", mouseMove);
  document.addEventListener("pointermove", mouseMove);

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
      if ( child.material ) child.material = (child.material as THREE.MeshStandardMaterial).clone();

      if (child.name.toLowerCase().includes("outline")) {
        child.material = matColor;
        // sceneRef.value.children.push(child);
      }
      else {
        child.material = matToon;
        child.castShadow = true;
        // sceneRef.value.children.push(child);
      }
    }
    // sceneRef.value.children.push(child);
  });

  sceneRef.value.children.push(gltf.scene);
}

function addSelectedObjects(object: any) {
  if (selectedObjects.length > 0) {
    selectedObjects.pop();
  }
  selectedObjects.push(object);
}

function intersection() {
  try {
    raycaster.setFromCamera(pointer, cameraRef.value);
  }
  catch (e: any) {
    throw new Error(e.toString());
  }

  // const vector = new THREE.Vector3(pointer.x, pointer.y, 1);
  // const newVec = vector.unproject(cameraRef.value);
  // raycaster = new THREE.Raycaster(cameraRef.value.position, newVec.sub(cameraRef.value.position).normalize());
  const intersects = raycaster.intersectObjects(sceneRef.value.children, true);

  if (intersects.length > 0) {
    console.log(intersects);

    if (intersected != intersects[0].object && intersects[0].object.type === "Mesh") {
      intersected = intersects[0].object;
      if (!intersected.name.toLowerCase().includes("outline")) {
        (intersected.material as THREE.MeshToonMaterial).color.set(0xf47653);
      }
      // addSelectedObjects(intersected);
      // outline.selectedObjects = selectedObjects;
      console.log(intersected.name);
    }
  } else {
    if (intersected && !intersected.name.toLowerCase().includes("outline"))
      (intersected.material as THREE.MeshToonMaterial).color.set(0xffffff);

    intersected = null;
  }
}

function mouseMove(event: PointerEvent) {
  console.log("mouseMove");

  // event.preventDefault();
  pointer.x = (event.offsetX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.offsetY / window.innerHeight) * 2 + 1;

  intersection();
  // composer.render();
}

// function windowResize() {
//   cameraRef.value.aspect = window.innerWidth / window.innerHeight;
//   cameraRef.value.updateProjectionMatrix();

//   rendererRef.value.renderer.setSize(window.innerWidth, window.innerHeight);

//   // composer.setSize(window.innerWidth, window.innerHeight);
//   // fxaaShader.uniforms["resolution"].value.set(1 / window.innerWidth, 1 / window.innerHeight);
// }


// function onPointerMove(event: any) {
//   event.preventDefault();
//   // pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//   // pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
//   // pointer.x = ( (event.clientX + canvas.offsetLeft) / canvas.width ) * 2 - 1;
//   // pointer.y = - ( (event.clientY - canvas.offsetTop) / canvas.height ) * 2 + 1;
// }

// async function onPointerDown(event: any) {
//   // pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
//   // pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
//   pointer.x = ((event.clientX + canvas.offsetLeft) / canvas.width) * 2 - 1;
//   pointer.y = - ((event.clientY - canvas.offsetTop) / canvas.height) * 2 + 1;

//   try {
//     raycaster.setFromCamera(pointer, cameraRef.value);
//   }
//   catch (e: any) {
//     throw new Error(e.toString());
//   }

//   const intersects = raycaster.intersectObjects(sceneRef.value.children, true);

//   if (intersects.length > 0) {
//     console.log("intersects ", intersects);

//     if (!intersects[0].object)
//       return;

//     intersected = intersects[0].object as THREE.Mesh;
//     if (!intersected.name.toLowerCase().includes("outline")) {
//       (intersected.material as THREE.MeshToonMaterial).color.set(0xf47653);
//     }
//   }
//   else {
//     if (intersected && !intersected.name.toLowerCase().includes("outline"))
//       (intersected.material as THREE.MeshToonMaterial).color.set(0xffffff);
//   }

// }

// document.addEventListener("pointermove", (e: PointerEvent) => { onPointerMove(e) });
// document.addEventListener("pointerdown", (e: PointerEvent) => { onPointerDown(e) });
// canvas.addEventListener('click', onPointerDown, false);
</script>

<template>
  <Renderer ref="rendererRef" antialias :orbit-ctrl="{ enableDamping: true }" resize="window" shadow>
    <Camera ref="cameraRef" :position="{ x: -2, y: 3, z: 2 }" />
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
