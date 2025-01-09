<script setup lang="ts">
import { computed, provide } from 'vue';
import { Color, Scene, Fog } from 'three';


const props = defineProps<{ 
    colour: Color 
}>();

const colour = computed(() => props.colour);
const scene = new Scene();
scene.name = "main_scene";
scene.background = new Color(colour.value);
scene.fog = new Fog(colour.value, 200, 1000);

provide("MainScene", scene);
</script>

<template>
    <slot></slot>
</template>