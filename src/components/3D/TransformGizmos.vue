<script setup lang="ts">
import { computed, inject, onMounted, provide, type Ref } from 'vue';

import { BufferGeometry, Float32BufferAttribute, Line, LineBasicMaterial, Mesh, Object3D, PerspectiveCamera, Scene } from 'three';
import { TransformControls, TransformControlsGizmo } from 'three/examples/jsm/controls/TransformControls.js';

import { COLOURS } from './constants';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const scene = inject("MainScene") as Scene | undefined;
const camera = inject("PerspectiveCamera") as PerspectiveCamera;

if (!scene || !camera) {
    throw new Error("MainScene or PerspectiveCamera is not provided");
}

let transformControls: TransformControls | null = null;

if (!canvas.value) {
    console.error("Canvas is undefined");
}

// Initialise TransformControls
transformControls = new TransformControls(camera, canvas.value);
transformControls.setMode('translate');
scene.add(transformControls);

// Provide TransformControls to the parent context
provide("TransformGizmos", transformControls);

// Customise Gizmo appearance
const gizmo = transformControls.children.find((child) => child.type === 'TransformControlsGizmo');
if (gizmo) {

    const createAxis = (axis: 'x' | 'z') => {
        const lineGeometry = new BufferGeometry();
        const vertices = axis === 'x'
            ? [0, 0, 0, .01, 0, 0] // X-axis: Line from (0, 0, 0) to (.01, 0, 0)
            : [0, 0, 0, 0, 0, .01]; // Z-axis: Line from (0, 0, 0) to (0, 0, .01)
        lineGeometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
        const lineMaterial = new LineBasicMaterial({
            color: COLOURS.GIZMOS,
            linewidth: 5, // Set line width (WebGL2 context needed for this to work on all browsers)
        });
        return new Line(lineGeometry, lineMaterial);
    };

    gizmo.traverse((child) => {
        if ((child as Mesh).isMesh) {
            const mesh = child as Mesh;

            (mesh.material as THREE.MeshBasicMaterial).color.set(COLOURS.GIZMOS); // colour
            (mesh.material as THREE.MeshBasicMaterial).opacity = 0.5; // Transparency

            if (mesh.name === 'XYZ') {
                // Customise the centre of the Gizmos (cube) appearance
                (mesh.material as THREE.MeshBasicMaterial).visible = true;
            }
            else if (mesh.name === 'X') {
                // Remove the existing arrow
                (gizmo as TransformControlsGizmo).gizmo.translate.remove(mesh);
                // Replace with:
                const xAxis = createAxis('x');
                xAxis.name = 'X'; // Preserve the name for identification
                (gizmo as TransformControlsGizmo).gizmo.translate.add(xAxis);
            }
            else if (mesh.name === 'Z') {
                // Remove the existing arrow
                (gizmo as TransformControlsGizmo).gizmo.translate.remove(mesh);
                // Replace with:
                const zAxis = createAxis('z');
                zAxis.name = 'Z'; // Preserve the name for identification
                (gizmo as TransformControlsGizmo).gizmo.translate.add(zAxis);
            }
            else {
                (mesh.material as THREE.MeshBasicMaterial).visible = false;   // Hide other meshes
            }
        }
    });

    // Traverse the "helper" group to find axis lines
    (gizmo as TransformControlsGizmo).helper.translate.traverse((child: Object3D) => {
        child.layers.set(1); // Don't highlight objects above layer 0
    });
}
</script>

<template>
    <slot></slot>
</template>
