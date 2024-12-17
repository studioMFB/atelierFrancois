<script setup lang="ts">
import { computed, inject, provide, ref, type Ref } from 'vue';

import { PerspectiveCamera, Scene } from 'three';
import { TransformControls, TransformControlsGizmo } from 'three/examples/jsm/controls/TransformControls.js';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;

let isLeftMouseButtonDown = false;
let isSelected = false;

const transformControls = new TransformControls(camera.value, canvas.value);
transformControls.setMode('translate');
// this.transformControls.translationSnap = 0.5; // Snaps to 500mm increments.
provide("TransformGizmos", transformControls);

scene.value.add(transformControls);

// FIND A FIX TO ADJUST GIZMO POSITION FOR ALL MODELS
// Adjust gizmo pos to be in centre of Table model.
transformControls.position.x -= .1;
transformControls.position.y += .6;

// Main gizmo, arrows and squares
(transformControls.children[0] as TransformControlsGizmo).gizmo.translate.traverse((child: any) => {
    if (child.isMesh) {
        // The square in the centre of the gizmos,
        // with which you can move the model in any direction.
        if (child.name === 'XYZ') {
            (child.material as THREE.MeshBasicMaterial).color.set(0x0e73e6);
            (child.material as THREE.MeshBasicMaterial).opacity = 0.5;
        }
        else {
            (child.material as THREE.MeshBasicMaterial).visible = false;
        }
    }
});

// Pickers
// Not sure it does much.
(transformControls.children[0] as TransformControlsGizmo).picker.translate.traverse((child: any) => {
    if (child.isMesh) {
        (child.material as THREE.MeshBasicMaterial).visible = false;
    }
});

// Helper transform lines axis
(transformControls.children[0] as TransformControlsGizmo).helper.translate.traverse((child: any) => {
    if (child.isLine) {
        (child.material as THREE.MeshBasicMaterial).visible = false;
    }
});
</script>

<template>
    <slot></slot>
</template>