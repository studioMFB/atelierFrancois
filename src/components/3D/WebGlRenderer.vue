<script setup lang="ts">
import { computed, inject, provide } from 'vue';

import { PCFSoftShadowMap, PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas);
const scene = computed(() => inject("MainScene") as Scene);
const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera);

const renderer = new WebGLRenderer({ antialias: true, canvas: canvas.value });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.shadowMap.enabled = true;

const composer = new EffectComposer(renderer);
const outlinePass = new OutlinePass(new Vector2(window.innerWidth, window.innerHeight), scene.value, camera.value)

provide("WebGlrenderer", renderer);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene.value, camera.value);
    // composer.render(); // Use composer instead of renderer
}

animate();
</script>

<template>
    <!-- <slot :outlinePass="outlinePass" :composer="composer"></slot> -->
    <slot name="GameLoop"></slot>
    <slot name="EffectComposer"></slot>
    <slot name="ResizerComponent"></slot>
</template>