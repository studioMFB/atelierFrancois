<script setup lang="ts">
import { computed, inject } from 'vue';

import { type ColorRepresentation, PointLight, Scene, Vector3 } from 'three';


const props = defineProps<{
    position?: Vector3,
    colour?: ColorRepresentation,
    intensity?: number
}>();

const scene = computed(() => inject("MainScene") as Scene);
const position = computed(() => props.position);
const colour = computed(() => props.colour);
const intensity = computed(() => props.intensity);

const light = new PointLight(colour.value, intensity.value);
const power = 700;
// const distance = 100;

if(position.value)
    light.position.set(position.value.x, position.value.y, position.value.z);

light.castShadow = false;
light.power = power;

scene.value.add(light);
</script>

<template>
    <slot></slot>
</template>