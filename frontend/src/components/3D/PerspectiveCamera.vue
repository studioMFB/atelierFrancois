<script setup lang="ts">
import { PerspectiveCamera, Vector3 } from 'three';
import { type Ref, computed, ref, provide } from 'vue';


const props = defineProps<{
    position: Vector3,
    zoom?: number
}>();

const position = computed(() => props.position);
const zoom = computed(() => props.zoom);

const camera: Ref<PerspectiveCamera> = ref(new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100));

camera.value.position.set(position.value.x, position.value.y, position.value.z);

if(zoom.value)
    camera.value.zoom = zoom.value;

provide("PerspectiveCamera", camera.value);
</script>

<template>
    <slot :camera="camera"></slot>
</template>