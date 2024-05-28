<script setup lang="ts">
import { computed, inject } from 'vue';

import { type ColorRepresentation, HemisphereLight, Scene, Vector3 } from 'three';


const props = defineProps<{
    position?: Vector3,
    skyColour?: ColorRepresentation,
    groundColour?: ColorRepresentation,
    intensity?: number
}>();

const scene = computed(() => inject("MainScene") as Scene);
const position = computed(() => props.position);
const skyColour = computed(() => props.skyColour);
const groundColour = computed(() => props.groundColour);
const intensity = computed(() => props.intensity);

const light = new HemisphereLight(skyColour.value, groundColour.value, intensity.value);

// console.log("HemisphereLight => light ", light.value);
scene.value.add(light);
</script>

<template>
    <slot></slot>
</template>