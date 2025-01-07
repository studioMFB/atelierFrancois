<script setup lang="ts">
import { computed, provide } from 'vue';
import { PerspectiveCamera, Vector3 } from 'three';

const props = defineProps<{ position: Vector3; zoom?: number }>();

const position = computed(() => props.position);
const zoom = computed(() => props.zoom);

if (!position.value || isNaN(position.value.x) || isNaN(position.value.y) || isNaN(position.value.z)) {
    throw new Error("Invalid position coordinates");
}

const camera = new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100);
camera.name = "main_perspective_camera";
camera.position.set(position.value.x, position.value.y, position.value.z);
camera.lookAt(0, 0, 0); // Ensure camera is pointing to the scene center

camera.near = 0.1; // Minimum distance from the camera
camera.far = 1000; // Maximum distance to render
camera.updateProjectionMatrix();

if (zoom.value) camera.zoom = zoom.value;

provide("PerspectiveCamera", camera);
</script>

<template>
    <slot name="orbitControl"></slot>
    <slot name="webGlRenderer"></slot>
</template>