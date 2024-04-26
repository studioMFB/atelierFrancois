<script setup lang="ts">
import THREE, { Vector3 } from 'three';
import { type Ref, computed, ref, inject } from 'vue';

import { Color } from 'three';

import MainScene from "@/components/3D/MainScene.vue";
import WebGlRenderer from "@/components/3D/WebGlRenderer.vue";

import PerspectiveCamera from '@/components/3D/PerspectiveCamera.vue';
import OrbitControls from '@/components/3D/OrbitControls.vue';

import HemisphereLight from '@/components/3D/HemisphereLight.vue';
import PointLight from '@/components/3D/PointLight.vue';
import SpotLight from '@/components/3D/SpotLight.vue';

import GridHelper from '@/components/3D/GridHelper.vue';
import { SceneController } from '../modelViewer/settings/SceneController';
import { CameraController } from '../modelViewer/settings/CameraController';
import { ControlsController } from '../modelViewer/settings/ControlsController';
import { LightController } from '../modelViewer/settings/LightController';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas as HTMLCanvasElement);
// const renderer = computed(() => inject("WebGlRenderer"));
console.log("Model viewer => canvas ", canvas.value);

 // Scene //
 const sceneController = new SceneController();
        const scene = sceneController.init(new THREE.Color(0xded6d8));

        // Renderer //
        const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas.value });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.shadowMap.enabled = true;

        // console.log("renderer.domElement ", renderer.domElement);
        // console.log("canvas ", canvasRef.value);

        // Camera //
        const cameraController = new CameraController(new THREE.Vector3(-3, 4.5, 3));
        const camera = cameraController.init();
        (camera as THREE.PerspectiveCamera).zoom = 2.2;

        // Controls //
        const controlsController = new ControlsController(camera, canvas.value)
        controlsController.init();


        // Light //
        const hLight = new THREE.HemisphereLight(new THREE.Color(0xffffff), undefined, 1.05);
        scene.add(hLight);
        const lightController = new LightController();
        lightController.addSpotLight(scene, 0xffffff, new THREE.Vector3(5, 9, 7));

        lightController.addPointLight(scene, 0xff0040, new THREE.Vector3(0, 10.5, 2));
        lightController.addPointLight(scene, 0x0040ff, new THREE.Vector3(0, 4.5, 2));
        lightController.addPointLight(scene, 0x80ff80, new THREE.Vector3(2, 9.5, -2));
        lightController.addPointLight(scene, 0xffaa00, new THREE.Vector3(-2, 6.5, 2));
</script>

<template>
    <!-- <div v-if="renderer"> -->
        <!-- <WebGlRenderer :canvas="canvas"></WebGlRenderer> -->
        <!-- <MainScene :colour="new Color(0xded6d8)"> -->
            <!-- <template> -->
                <!-- <HemisphereLight :sky-colour="new Color(0xffffff)" :ground-colour="new Color(0xffffff)" :intensity="1.05"></HemisphereLight> -->
                <!-- <SpotLight :colour="new Color(0xffffff)" :position="new Vector3(5, 9, 7)"></SpotLight>
                
                <PointLight :colour="new Color(0xff0040)" :position="new Vector3(0, 10.5, 2)"></PointLight>
                <PointLight :colour="new Color(0x0040ff)" :position="new Vector3(0, 4.5, 2)"></PointLight>
                <PointLight :colour="new Color(0x80ff80)" :position="new Vector3(2, 9.5, -2)"></PointLight>
                <PointLight :colour="new Color(0xffaa00)" :position="new Vector3(-2, 6.5, 2)"></PointLight>
                
                <GridHelper :size="5" :divisions="5 / 0.5" :colour1="new Color(0x888888)" :colour2="new Color(0x888888)">
                </GridHelper>
                
                <PerspectiveCamera :position="new Vector3(-3, 4.5, 3)" :zoom="2.2">
                    <OrbitControls :canvas="canvas"></OrbitControls>
                </PerspectiveCamera> -->
            <!-- </template> -->
        <!-- </MainScene> -->
    <!-- </div>
    <div v-else style="position:fixed; z-index:1; margin: 5rem; color: red;" >
        Renderer not ready
    </div> -->
</template>