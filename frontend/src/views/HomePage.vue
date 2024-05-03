<script setup lang="ts">
import { ref, type Ref } from 'vue';

import ModelViewer from "@/components/3D/ModelViewer.vue";


const canvas: Ref<HTMLCanvasElement | undefined> = ref();
</script>

<template>
    <div>
        <h2 style="position:fixed; z-index:1; margin: 10rem; color: blue;">Home</h2> 
        <!-- <slot></slot>  -->
        <canvas id="scene-viewer" class="scene-viewer" ref="canvas"></canvas>
        <div v-if="canvas">
        <ModelViewer :canvas="canvas"></ModelViewer>
        </div>
        <div v-else style="position:fixed; z-index:1; margin: 5rem; color: red;" >
            Canvas not ready
        </div>
    </div>
</template>