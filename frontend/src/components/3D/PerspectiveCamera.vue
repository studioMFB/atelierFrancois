<script setup lang="ts">
import { computed, provide } from 'vue';

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

// console.log("camera ", camera);
provide("PerspectiveCamera", camera);
</script>

<template>
    <slot name="orbitControl"></slot>
    <slot name="webGlRenderer"></slot>
</template>