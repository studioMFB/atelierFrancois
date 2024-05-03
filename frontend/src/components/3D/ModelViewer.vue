<script setup lang="ts">
import { Color, Vector2, Vector3 } from 'three';

import { computed } from 'vue';

import MainScene from "@/components/3D/MainScene.vue";
import WebGlRenderer from "@/components/3D/WebGlRenderer.vue";

import PerspectiveCamera from '@/components/3D/PerspectiveCamera.vue';
import OrbitControls from '@/components/3D/OrbitControls.vue';

import HemisphereLight from '@/components/3D/HemisphereLight.vue';
import PointLight from '@/components/3D/PointLight.vue';
import SpotLight from '@/components/3D/SpotLight.vue';

import GridHelper from '@/components/3D/GridHelper.vue';
import PlaneGeometry from './PlaneGeometry.vue';
import { SceneController } from '../modelViewer/settings/SceneController';
import { CameraController } from '../modelViewer/settings/CameraController';
import { ControlsController } from '../modelViewer/settings/ControlsController';
import { LightController } from '../modelViewer/settings/LightController';

import ModelAsset from "@/components/3D/ModelAsset.vue";


// GLTF //
const GLTF_TABLE = new URL('./../modelViewer/models/table/1/littlewood_furniture.gltf', import.meta.url).toString();
const GLTF_GARLIC = new URL('./../modelViewer/models/garlic/scene.gltf', import.meta.url).toString();
const GLTF_STONE = new URL('./../modelViewer/models/piedra/scene.gltf', import.meta.url).toString();

const GRID_SIZE = 5;
const GRID_RATIO = 0.5;
const GRID_CELL_SIZE = GRID_SIZE / GRID_RATIO;

const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas as HTMLCanvasElement);

// const canvas: Ref<HTMLCanvasElement | undefined> = ref();
// let renderer: THREE.WebGLRenderer;
// let scene: THREE.Scene
// let camera: THREE.PerspectiveCamera;

// function init() {

//     if (canvas.value === undefined)
//         return;

//     // const canvas = computed(() => props.canvas as HTMLCanvasElement);
//     // const renderer = computed(() => inject("WebGlRenderer"));
//     // console.log("Model viewer => canvas ", canvas.value);

//     // Scene //
//     const sceneController = new SceneController();
//     scene = sceneController.init(new THREE.Color(0xded6d8));

//     // Renderer //
//     renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas.value });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     renderer.shadowMap.enabled = true;

//     // console.log("renderer.domElement ", renderer.domElement);
//     // console.log("canvas ", canvasRef.value);

//     // Camera //
//     const cameraController = new CameraController(new THREE.Vector3(-3, 4.5, 3));
//     camera = cameraController.init();
//     (camera as THREE.PerspectiveCamera).zoom = 2.2;

//     // Controls //
//     const controlsController = new ControlsController(camera, canvas.value)
//     controlsController.init();

//     // Light //
//     const hLight = new THREE.HemisphereLight(new THREE.Color(0xffffff), undefined, 1.05);
//     scene.add(hLight);
//     const lightController = new LightController();
//     lightController.addSpotLight(scene, 0xffffff, new THREE.Vector3(5, 9, 7));

//     lightController.addPointLight(scene, 0xff0040, new THREE.Vector3(0, 10.5, 2));
//     lightController.addPointLight(scene, 0x0040ff, new THREE.Vector3(0, 4.5, 2));
//     lightController.addPointLight(scene, 0x80ff80, new THREE.Vector3(2, 9.5, -2));
//     lightController.addPointLight(scene, 0xffaa00, new THREE.Vector3(-2, 6.5, 2));
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// onMounted(() => {
//     init();
//     animate();
// })

</script>

<template>
    <MainScene :colour="new Color(0xded6d8)">

        <PerspectiveCamera :position="new Vector3(-3, 4.5, 3)" :zoom="2.2">
            <OrbitControls :canvas="canvas"></OrbitControls>
            <WebGlRenderer :canvas="canvas"></WebGlRenderer>
        </PerspectiveCamera>

        <HemisphereLight :sky-colour="new Color(0xffffff)" :ground-colour="new Color(0xffffff)" :intensity="1.05"></HemisphereLight>
        <SpotLight :colour="new Color(0xffffff)" :position="new Vector3(5, 9, 7)"></SpotLight>

        <PointLight :colour="new Color(0xff0040)" :position="new Vector3(0, 10.5, 2)"></PointLight>
        <PointLight :colour="new Color(0x0040ff)" :position="new Vector3(0, 4.5, 2)"></PointLight>
        <PointLight :colour="new Color(0x80ff80)" :position="new Vector3(2, 9.5, -2)"></PointLight>
        <PointLight :colour="new Color(0xffaa00)" :position="new Vector3(-2, 6.5, 2)"></PointLight>
        
        <GridHelper :size="GRID_SIZE" :divisions="GRID_CELL_SIZE" :colour1="new Color(0x888888)":colour2="new Color(0x888888)"></GridHelper>
        <PlaneGeometry :dimension="new Vector2(GRID_SIZE, GRID_SIZE)" :segment="new Vector2(1, 1)" :position="new Vector3(0,0,0)" ></PlaneGeometry>
    
        <ModelAsset name="table" :position="new Vector3(0, 0, 0)" :scale-ratio="1" :gltf-url="GLTF_TABLE"></ModelAsset>

    </MainScene>
</template>