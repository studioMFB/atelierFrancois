<script setup lang="ts">
import { computed } from 'vue';

import { type ColorRepresentation, DirectionalLight, Scene, Vector3 } from 'three';


const props = defineProps<{
    scene: Scene,
    position?: Vector3,
    colour?: ColorRepresentation,
    intensity?: number
}>();

const scene = computed(() => props.scene);
const position = computed(() => props.position);
const colour = computed(() => props.colour);
const intensity = computed(() => props.intensity);

const light = new DirectionalLight(colour.value, intensity.value);

if(position.value)
    light.position.set(position.value.x, position.value.y, position.value.z); //default; light shining from top

// light.castShadow = true;

// // Set up shadow properties for the light
// light.value.shadow.mapSize.width = 100; // default
// light.value.shadow.mapSize.height = 212; // default
// light.value.shadow.camera.near = 0.5; // default
// light.value.shadow.camera.far = 500; // default

scene.value.add(light);
</script>

<template>
    <slot></slot>
</template>