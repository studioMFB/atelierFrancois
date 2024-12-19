<script setup lang="ts">
import { computed, provide } from 'vue';
import { Color, Scene, Fog, Group, type Object3DEventMap } from 'three';
import type { Model } from '../modelViewer/resources/model';

const props = defineProps<{ colour: Color }>();

const colour = computed(() => props.colour);
const scene = new Scene();
scene.name = "main_scene";
scene.background = new Color(colour.value);
scene.fog = new Fog(colour.value, 200, 1000);

provide("MainScene", scene);
provide("allModelsArray", [] as Group<Object3DEventMap>[]);
provide("modelsPool", [] as Model[]);
</script>

<template>
    <slot></slot>
</template>