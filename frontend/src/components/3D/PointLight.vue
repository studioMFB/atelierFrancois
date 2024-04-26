<script setup lang="ts">
import { type ColorRepresentation, PointLight, Scene, Vector3 } from 'three';
import { type Ref, computed, ref, inject } from 'vue';


const props = defineProps<{
    // scene: Scene,
    position?: Vector3,
    colour?: ColorRepresentation,
    intensity?: number
}>();

const scene = computed(() => inject("MainScene") as Scene);
// const scene = computed(() => props.scene);
const position = computed(() => props.position);
const colour = computed(() => props.colour);
const intensity = computed(() => props.intensity);

const light: Ref<PointLight> = ref(new PointLight(colour.value, intensity.value));
const power = 700;
// const distance = 100;

if(position.value)
    light.value.position.set(position.value.x, position.value.y, position.value.z);

light.value.castShadow = false;
light.value.power = power;

scene.value.add(light.value);
</script>

<template>
    <slot></slot>
</template>