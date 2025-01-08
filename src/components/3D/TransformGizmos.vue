<!-- <script setup lang="ts">
import { computed, inject, provide, type Ref } from 'vue';

import { Box3, Line, Mesh, Object3D, PerspectiveCamera, Scene, Vector3 } from 'three';
import { TransformControls, TransformControlsGizmo } from 'three/examples/jsm/controls/TransformControls.js';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const scene = inject("MainScene") as Scene | undefined;
const camera = inject("PerspectiveCamera") as PerspectiveCamera;

if (!canvas.value) {
    throw new Error("Canvas is undefined");
}
if (!scene) {
    throw new Error("MainScene is not provided");
}
if (!camera) {
    throw new Error("PerspectiveCamera is not provided");
}

const transformControls = new TransformControls(camera, canvas.value);
transformControls.setMode('translate');

scene.add(transformControls);

transformControls.position.set(0,0,0); // Set the position of TransformControls to the center

// Ensure TransformControls has children before calculating its bounding box
if (transformControls.children.length > 0) {
    const modelBoundingBox = new Box3().setFromObject(transformControls); // Calculate the bounding box
    const center = modelBoundingBox.getCenter(new Vector3()); // Get the center of the bounding box
    transformControls.position.set(center.x, center.y, center.z); // Set the position of TransformControls to the center
}

// Main gizmo, arrows and squares
(transformControls.children[0] as TransformControlsGizmo).gizmo.translate.traverse((child: Object3D) => {
    const _child = child as Mesh;

    if (_child.isMesh) {
        if (child.name === 'XYZ') {
            (_child.material as THREE.MeshBasicMaterial).color.set(0x0e73e6); // Set color for XYZ axis
            (_child.material as THREE.MeshBasicMaterial).opacity = 0.5; // Set opacity
        } else {
            (_child.material as THREE.MeshBasicMaterial).visible = false; // Hide other meshes
        }
    }
});

// Pickers
// Not sure it does much.
(transformControls.children[0] as TransformControlsGizmo).picker.translate.traverse((child: Object3D) => {
    const _child = child as Mesh;

    if (_child.isMesh) {
        (_child.material as THREE.MeshBasicMaterial).visible = false; // Hide picker meshes
    }
});

// Helper transform lines axis
(transformControls.children[0] as TransformControlsGizmo).helper.translate.traverse((child: Object3D) => {
    if ((child as Line).isLine) {
        ((child as Mesh).material as THREE.MeshBasicMaterial).visible = false; // Hide helper lines
    }
});

// Provide the TransformControls instance to the parent context
if (transformControls) {
    provide("TransformGizmos", transformControls);
} else {
    console.warn("Transform controls are not initialized correctly.");
}
</script>

<template>
    <slot></slot>
</template> -->

<script setup lang="ts">
import { computed, inject, onMounted, provide, type Ref } from 'vue';
import { Box3, BufferGeometry, Float32BufferAttribute, Line, LineBasicMaterial, Mesh, Object3D, PerspectiveCamera, Scene, Vector3 } from 'three';
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

// onMounted(() => {
if (!canvas.value) {
    console.error("Canvas is undefined");
    // return;
}

// Initialize TransformControls
transformControls = new TransformControls(camera, canvas.value);
transformControls.setMode('translate');
scene.add(transformControls);

// Provide TransformControls to the parent context
provide("TransformGizmos", transformControls);

// Customize Gizmo appearance
const gizmo = transformControls.children.find((child) => child.type === 'TransformControlsGizmo');
if (gizmo) {

    const createLine = (axis: 'x' | 'z') => {
        const lineGeometry = new BufferGeometry();
        const vertices = axis === 'x'
            ? [0, 0, 0, .01, 0, 0] // X-axis: Line from (0, 0, 0) to (1, 0, 0)
            : [0, 0, 0, 0, 0, .01]; // Z-axis: Line from (0, 0, 0) to (0, 0, 1)
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

            (mesh.material as THREE.MeshBasicMaterial).color.set(COLOURS.GIZMOS); // XYZ axis color
            (mesh.material as THREE.MeshBasicMaterial).opacity = 0.5;      // Transparency

            if (mesh.name === 'XYZ') {
                // Customise the centre of the Gizmos (cube) appearance
                (mesh.material as THREE.MeshBasicMaterial).visible = true;
                // mesh.position.addVectors(mesh.position, new Vector3(0,1,0));
            }
            else if (mesh.name === 'X') {
                // Remove the existing arrow
                (gizmo as TransformControlsGizmo).gizmo.translate.remove(mesh);
                // Replace with:
                const xLine = createLine('x');
                xLine.name = 'X'; // Preserve the name for identification
                (gizmo as TransformControlsGizmo).gizmo.translate.add(xLine);
            }
            else if (mesh.name === 'Z') {
                // Remove the existing arrow
                (gizmo as TransformControlsGizmo).gizmo.translate.remove(mesh);
                // Replace with:
                const zLine = createLine('z');
                zLine.name = 'Z'; // Preserve the name for identification
                (gizmo as TransformControlsGizmo).gizmo.translate.add(zLine);
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

    // (gizmo as TransformControlsGizmo).picker.translate.traverse((child: Object3D) => {
    //     if ((child as Mesh).isMesh) {
    //         const mesh = child as Mesh;
    //         (mesh.material as THREE.MeshBasicMaterial).color.set(COLOURS.PREVIEW);
    //         // (mesh.material as THREE.MeshBasicMaterial).visible = false;   // Hide other meshes
    //     }

    //     child.visible = false;
    // });

}
// });
</script>

<template>
    <slot></slot>
</template>
