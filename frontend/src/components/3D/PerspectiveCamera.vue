<script setup lang="ts">
import { PerspectiveCamera, Vector3 } from 'three';
import { type Ref, computed, ref, provide } from 'vue';


const props = defineProps<{
    position: Vector3,
    zoom?: number
}>();

const position = computed(() => props.position);
const zoom = computed(() => props.zoom);

let camera: Ref<PerspectiveCamera | undefined> = ref();

function init() {
    camera = ref(new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 100));

    if(!camera.value)
        return;

    camera.value.position.set(position.value.x, position.value.y, position.value.z);
    if (zoom.value)
        camera.value.zoom = zoom.value;
}

init();
// console.log("camera ", camera.value);
provide("PerspectiveCamera", camera.value);
</script>

<template>
    <slot></slot>
    <slot></slot>
</template>