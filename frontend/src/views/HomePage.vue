<script setup lang="ts">
import { ref, type Ref } from 'vue';

import ModelViewer from "@/components/3D/ModelViewer.vue";


const canvasElement: Ref<HTMLCanvasElement | undefined> = ref(document.getElementById("scene-viewer") as HTMLCanvasElement);
</script>

<template>
    <div>
        <h2 style="position:fixed; z-index:1; margin: 10rem; color: blue;">Home</h2> 
        <slot></slot> 
        <canvas id="scene-viewer" class="scene-viewer" ref="canvasElement" ></canvas>
        <div v-if="canvasElement">
            <ModelViewer :canvas="canvasElement"></ModelViewer>
        </div>
        <div v-else style="position:fixed; z-index:1; margin: 5rem; color: red;" >
            Canvas not ready
        </div>
    </div>
</template>