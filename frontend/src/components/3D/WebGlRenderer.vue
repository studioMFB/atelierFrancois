<script setup lang="ts">
import { computed, inject, provide } from 'vue';

import { PCFSoftShadowMap, PerspectiveCamera, Scene, WebGLRenderer } from 'three';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas);
const scene = computed(() => inject("MainScene") as Scene);
const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera);

const renderer = new WebGLRenderer({ antialias: true, canvas: canvas.value });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.shadowMap.enabled = true;


function animate() {
    requestAnimationFrame(animate);

    if (renderer)
        renderer.render(scene.value, camera.value);
}

// console.log("renderer ", renderer);
// console.log("scene ", scene.value);
// console.log("camera ", camera.value);
animate();

provide("WebGlrenderer", renderer);
</script>

<template>
    <slot></slot>
</template>