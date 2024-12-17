<script setup lang="ts">
import { computed, provide, watch } from 'vue';

import { PerspectiveCamera, Vector3 } from 'three';


const props = defineProps<{
    position: Vector3,
    zoom?: number
}>();

const position = computed(() => props.position);
const zoom = computed(() => props.zoom);

const camera = new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.set(position.value.x, position.value.y, position.value.z);
if (zoom.value)
    camera.zoom = zoom.value;

// Adjust the camera tilt
// camera.rotation.x = -Math.PI / 4; // Tilt the camera down by 30 degrees (π/6 radians)

// console.log("camera ", camera);
provide("PerspectiveCamera", camera);

// watch(() => camera.position, (newPosition: Vector3) => {
//     console.log("camera.position ", camera.position);
// })
</script>

<template>
    <slot name="orbitControl"></slot>
    <slot name="webGlRenderer"></slot>
</template>