<script setup lang="ts">
import { ref, type Ref } from 'vue';

import WebGlRenderer from "@/components/3D/WebGlRenderer.vue";
import ModelViewer from "@/components/3D/ModelViewer.vue";


const canvasElement: Ref<HTMLCanvasElement | undefined> = ref(document.getElementById("scene-viewer") as HTMLCanvasElement);
</script>

<template>
    <h2 style="position:fixed; z-index:1; margin: 10rem; color: blue;">Home</h2>

    <slot></slot>
    
    <div v-if="canvasElement">
        <!-- <suspense> -->
            <ModelViewer :canvas="canvasElement"></ModelViewer>
        <!-- </suspense> -->
    </div>
    <div v-else style="position:fixed; z-index:1; margin: 5rem; color: red;" >
        Canvas not ready
    </div>
</template>