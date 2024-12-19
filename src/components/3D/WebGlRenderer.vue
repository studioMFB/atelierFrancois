<script setup lang="ts">
import { computed, inject, provide, onUnmounted } from 'vue';

import { BoxGeometry, Mesh, MeshBasicMaterial, PCFSoftShadowMap, PerspectiveCamera, Scene, Vector2, WebGLRenderer } from 'three';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';

// Props to accept an optional HTML canvas element
const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

// Compute the canvas from the provided props
const canvas = computed(() => props.canvas);

// Inject the main scene object and ensure it is provided
const scene = computed(() => {
    const injectedScene = inject("MainScene");
    if (!injectedScene) {
        throw new Error("'MainScene' not provided. Ensure it is correctly injected.");
    }
    return injectedScene as Scene;
});

// Inject the perspective camera and ensure it is provided
const camera = computed(() => {
    const injectedCamera = inject("PerspectiveCamera");
    if (!injectedCamera) {
        throw new Error("'PerspectiveCamera' not provided. Ensure it is correctly injected.");
    }
    return injectedCamera as PerspectiveCamera;
});

// Ensure the canvas is defined before creating the WebGL renderer
if (!canvas.value) {
    throw new Error("'canvas' is not provided or undefined. Ensure it is passed correctly.");
}

// Initialize the WebGL renderer with anti-aliasing and attach it to the canvas
const renderer = new WebGLRenderer({ antialias: true, canvas: canvas.value });
renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Optimize rendering for the device's pixel ratio
renderer.shadowMap.type = PCFSoftShadowMap; // Enable soft shadows
renderer.shadowMap.enabled = true; // Turn on shadow map support

// DEBUG
// const geometry = new BoxGeometry(1, 1, 1);
// const material = new MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new Mesh(geometry, material);
// scene.value.add(cube);

// Initialize the EffectComposer for post-processing effects
// const composer = new EffectComposer(renderer);
// Add an OutlinePass for rendering outlines around selected objects
// const outlinePass = new OutlinePass(new Vector2(window.innerWidth, window.innerHeight), scene.value, camera.value);

// Provide the renderer instance for other components to use
provide("WebGlrenderer", renderer);

let animationFrameId: number; // Track the animation frame ID to allow stopping the animation loop

// Animation loop to continuously render the scene
function animate(): void {
    animationFrameId = requestAnimationFrame(animate); // Request the next animation frame
    renderer.render(scene.value, camera.value); // Render the scene using the camera
    // composer.render(); // Uncomment to use the composer for post-processing
}

animate();

// Handle window resizing to update renderer and post-processing settings
// function handleResize(): void {
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // composer.setSize(window.innerWidth, window.innerHeight);
    // outlinePass.resolution.set(window.innerWidth, window.innerHeight);
// }

// Add a listener for window resize events
// window.addEventListener("resize", handleResize);

// Clean up resources and event listeners when the component is unmounted
onUnmounted(() => {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Stop the animation loop
    }
    // window.removeEventListener("resize", handleResize); // Remove the resize event listener
});
</script>

<template>
    <div>
        <!-- Slots for child components or additional functionality -->
        <slot name="GameLoop"></slot>
        <slot name="EffectComposer"></slot>
        <slot name="ResizerComponent"></slot>
    </div>
</template>
