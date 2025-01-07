<!-- <script setup lang="ts">
import { computed, inject, provide, ref, type Ref } from 'vue';
import { PerspectiveCamera, Scene, Box3, Vector3, Object3D, Mesh, Line } from 'three';
import { TransformControls, TransformControlsGizmo } from 'three/examples/jsm/controls/TransformControls.js';

// Define props for the component, including an optional canvas and mode
const props = defineProps<{ canvas?: HTMLCanvasElement; mode?: 'translate' | 'rotate' | 'scale' }>();

// Compute the canvas reference from the provided props
const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;

// Inject the main scene and camera from the parent context
const scene = inject("MainScene") as Scene | undefined;
const camera = inject("PerspectiveCamera") as PerspectiveCamera;

// Throw errors if required resources are not provided
if (!canvas.value) {
    throw new Error("Canvas is undefined");
}
if (!scene) {
    throw new Error("MainScene is not provided");
}

// Initialize TransformControls with the provided camera and canvas
const transformControls = new TransformControls(camera, canvas.value);
transformControls.name = "transform_controls_gizmos";

// Validate and set the mode for TransformControls
const validModes = ['translate', 'rotate', 'scale'];
const mode: 'translate' | 'rotate' | 'scale' = validModes.includes(props.mode || '') ? (props.mode as 'translate' | 'rotate' | 'scale') : 'translate';
transformControls.setMode(mode);

// Add the transform controls to the scene
scene.add(transformControls);

// Ensure TransformControls has children before calculating its bounding box
if (transformControls.children.length > 0) {
    const modelBoundingBox = new Box3().setFromObject(transformControls); // Calculate the bounding box
    const center = modelBoundingBox.getCenter(new Vector3()); // Get the center of the bounding box
    transformControls.position.set(center.x, center.y, center.z); // Set the position of TransformControls to the center
}

// Reusable function for processing gizmo children
function processGizmoChildren(
    gizmo: TransformControlsGizmo,
    type: keyof TransformControlsGizmo,
    callback: (child: Object3D) => void
) {
    const target = gizmo[type];
    if (target && target instanceof Object3D) {
        target.traverse((child: Object3D) => {
            callback(child);
        });
    } else {
        console.warn(`Type '${type}' does not exist or is not traversable on gizmo.`);
    }
}

// Customize the appearance and behavior of gizmo children
processGizmoChildren(transformControls.children[0] as TransformControlsGizmo, 'gizmo', (child: Object3D) => {
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

processGizmoChildren(transformControls.children[0] as TransformControlsGizmo, 'picker', (child) => {
    const _child = child as Mesh;

    if (_child.isMesh) {
        (_child.material as THREE.MeshBasicMaterial).visible = false; // Hide picker meshes
    }
});

processGizmoChildren(transformControls.children[0] as TransformControlsGizmo, 'helper', (child: Object3D) => {
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
import { computed, inject, provide, ref, type Ref } from 'vue';

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
</template>