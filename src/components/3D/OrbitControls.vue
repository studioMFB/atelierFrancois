<script setup lang="ts">
import { computed, inject, provide } from 'vue';

import { PerspectiveCamera } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { useOrbitControlsStore } from '@/stores/orbitControlsStore';


const props = defineProps<{ canvas?: HTMLElement }>();

const camera = inject("PerspectiveCamera") as PerspectiveCamera;
const canvas = computed(() => props.canvas);

if (!canvas.value) {
    throw new Error("Canvas is undefined");
}

const controls = new OrbitControls(camera, canvas.value);
controls.enabled = true;
controls.autoRotate = false;
controls.autoRotateSpeed = 1;
controls.enableDamping = true;
controls.enableZoom = true;
controls.enablePan = true;
controls.minDistance = 2;
controls.maxDistance = 10;
controls.target.set(0, 0, 0); // Ensure the target is where you want to focus
controls.update();


function setupOrbitControlsEvents(orbitControls: OrbitControls) {
  const orbitControlsStore = useOrbitControlsStore();

  orbitControls.addEventListener('start', () => {
    orbitControlsStore.setOrbiting(true);
    orbitControlsStore.setDragging(true);
  });

  orbitControls.addEventListener('change', () => {
    orbitControlsStore.setOrbiting(true);
  });

  orbitControls.addEventListener('end', () => {
    orbitControlsStore.setOrbiting(false);
    orbitControlsStore.setDragging(false);
  });
}

setupOrbitControlsEvents(controls);

provide("OrbitControls", controls);
</script>

<template>
    <slot></slot>
</template>