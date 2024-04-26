<script setup lang="ts">
import { PCFSoftShadowMap, WebGLRenderer } from 'three';
import { type Ref, computed, ref, provide, onMounted } from 'vue';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas);

const renderer: Ref<WebGLRenderer> = ref(new WebGLRenderer({ antialias: true, canvas: canvas.value }));
renderer.value.setPixelRatio(window.devicePixelRatio);
renderer.value.setSize(window.innerWidth, window.innerHeight);
renderer.value.shadowMap.type = PCFSoftShadowMap;
renderer.value.shadowMap.enabled = true;

onMounted(()=>{
    console.log("WebGLRenderer => renderer ", renderer.value);
    provide("WebGlRenderer", renderer.value);
})
</script>

<template>
    <slot></slot>
</template>