<!-- <script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, provide, reactive, ref, type Ref } from 'vue';
import { PerspectiveCamera, Raycaster, Scene } from 'three';
import ModelManager from './ModelManager.vue';
import IntersectionHandler from './IntersectionHandler.vue';
import SpawnPreview from './SpawnPreview.vue';
// import EventHandler from './components/EventHandler.vue';
// import TransformController from './components/TransformController.vue';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

import { RAYCASTER, GRID } from './constants';


const props = defineProps<{
    canvas: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const transformControlsGizmos = ref(inject("TransformGizmos")) as Ref<TransformControls>;
const controls = ref(inject("OrbitControls")) as Ref<OrbitControls>;

const raycaster = new Raycaster();
raycaster.near = RAYCASTER.NEAR;
raycaster.far = RAYCASTER.FAR;

const gridLimits = reactive({
    minX: GRID.LIMITS.MIN_X,
    maxX: GRID.LIMITS.MAX_X,
    minY: GRID.LIMITS.MIN_Y,
    maxY: GRID.LIMITS.MAX_Y,
    minZ: GRID.LIMITS.MIN_Z,
    maxZ: GRID.LIMITS.MAX_Z
});

// Provide shared state and objects to child components
provide('raycaster', raycaster);
provide('gridLimits', gridLimits);
provide('canvas', canvas);

// Event Listeners Setup
function setupEventListeners(): void {
    const handlers = {
        pointermove: (e: PointerEvent) => updatePointerMode(e),
        pointerdown: () => { isLeftMouseButtonDown.value = true; },
        pointerup: () => { 
            isLeftMouseButtonDown.value = false;
            detachGizmo();
        },
        click: handleClick,
        wheel: handleWheel,
        keydown: (e: KeyboardEvent) => handleKeyEvent(e, true),
        keyup: (e: KeyboardEvent) => handleKeyEvent(e, false),
    };

    Object.entries(handlers).forEach(([event, handler]) => {
        const target = ['keydown', 'keyup'].includes(event) ? document : canvas.value;
        target.addEventListener(event, handler);
    });

    transformControlsGizmos.addEventListener("mouseDown", () => {
        controls.enabled = false;
        isLeftMouseButtonDown.value = true;
    });

    transformControlsGizmos.addEventListener("mouseUp", () => {
        controls.enabled = true;
        isLeftMouseButtonDown.value = false;
    });

    onUnmounted(() => {
        Object.entries(handlers).forEach(([event, handler]) => {
            const target = ['keydown', 'keyup'].includes(event) ? document : canvas.value;
            target.removeEventListener(event, handler);
        });
    });
}

onMounted(() => {
    setupEventListeners();
});

</script>

<template>
    <ModelManager />
    <IntersectionHandler />
    <SpawnPreview />
    <!-- <EventHandler /> -->
    <!-- <TransformController /> -->
    <slot></slot>
</template> -->