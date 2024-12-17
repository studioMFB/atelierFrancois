<script setup lang="ts">
import { computed, inject } from "vue";

import { PerspectiveCamera, WebGLRenderer } from "three";


const renderer = computed(() => inject("WebGlrenderer") as WebGLRenderer);
const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera);

setSize(camera.value, renderer.value);

window.addEventListener('resize', () => {
    setSize(camera.value, renderer.value);
});

function setSize(camera: PerspectiveCamera, renderer: WebGLRenderer): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // camera.aspect = window.innerWidth / window.innerHeight *.5;
    // camera.aspect = width / height;

    (camera).updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
}
</script>

<template>
    <slot></slot>
</template>