<script setup lang="ts">
import { computed, provide } from 'vue';

import { Color, Scene, Fog, type Object3DEventMap, Group } from 'three';


// GLTF //
const GLTF_TABLE = new URL('./../modelViewer/models/table/1/littlewood_furniture.gltf', import.meta.url).toString();
const GLTF_GARLIC = new URL('./../modelViewer/models/garlic/scene.gltf', import.meta.url).toString();
const GLTF_STONE = new URL('./../modelViewer/models/piedra/scene.gltf', import.meta.url).toString();


const props = defineProps<{
    colour: Color,
}>();

provide("allModelsArray", [] as Group<Object3DEventMap>[]);

const colour = computed(() => props.colour);

const scene = new Scene();
scene.background = new Color(colour.value);
scene.fog = new Fog(colour.value, 200, 1000);
provide("MainScene", scene);
</script>

<template>
    <slot></slot>
</template>