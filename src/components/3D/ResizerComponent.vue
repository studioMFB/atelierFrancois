<script setup lang="ts">
import { computed, inject, ref } from "vue";

import { PerspectiveCamera, WebGLRenderer } from "three";
import type { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import type { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";


// const props = defineProps<{
//     outlinePass: OutlinePass;
//     composer: EffectComposer;
// }>();

const renderer = computed(() => inject("WebGlrenderer") as WebGLRenderer);
const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera);

// const outlinePass = ref(props.outlinePass);
// const composer = ref(props.composer);

setSize();

window.addEventListener('resize', () => {
    setSize();
});

function setSize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    
    camera.value.updateProjectionMatrix();
    
    renderer.value.setSize(width, height);
    renderer.value.setPixelRatio(window.devicePixelRatio);
    
    // camera.value.aspect = window.innerWidth / window.innerHeight *.5;
    camera.value.aspect = width / height;
    camera.value.updateProjectionMatrix();

    renderer.value.setSize(width, height);
//     composer.value.setSize(width, height);
//     outlinePass.value.setSize(width, height);
}
</script>

<template>
    <slot></slot>
</template>