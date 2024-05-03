<script setup lang="ts">
import { computed, inject } from "vue";

import { Scene, WebGLRenderer, PerspectiveCamera, Vector2 } from "three";

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";


const renderer = computed(() => inject("WebGlrenderer") as WebGLRenderer);
const scene = computed(() => inject("MainScene") as Scene);
const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera);

const composer = new EffectComposer(renderer.value);
const renderPass = new RenderPass(scene.value, camera.value);
composer.addPass(renderPass);

const outlinePass = new OutlinePass(new Vector2(window.innerWidth, window.innerHeight), scene.value, camera.value);
composer.addPass(outlinePass);

outlinePass.edgeStrength = 3;
outlinePass.edgeGlow = 0.7;
outlinePass.edgeThickness = 1;
outlinePass.pulsePeriod = 2;
outlinePass.visibleEdgeColor.set('#ff0000'); // red color
outlinePass.hiddenEdgeColor.set('#190a05');
</script>

<template>
    <slot></slot>
</template>