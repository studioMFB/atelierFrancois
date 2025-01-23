<script setup lang="ts">
import { computed, inject, provide, onUnmounted, onMounted } from 'vue';

import { PCFSoftShadowMap, PerspectiveCamera, Scene, Vector2, WebGLRenderer, WebGLRenderTarget } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

import { useComposerStore } from '@/stores/composerStore';


// Props to accept an optional HTML canvas element
const props = defineProps<{
    canvas: HTMLCanvasElement;
}>();

const composerStore = useComposerStore();

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
const renderer = new WebGLRenderer({ 
    canvas: canvas.value,
    antialias: true,
    depth: true,
    logarithmicDepthBuffer: false, // Disable unless absolutely necessary
 });

renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio); // Optimize rendering for the device's pixel ratio
renderer.shadowMap.type = PCFSoftShadowMap; // Enable soft shadows
renderer.shadowMap.enabled = true; // Turn on shadow map support

// Provide the renderer instance for other components to use
provide("WebGlrenderer", renderer);

let animationFrameId: number; // Track the animation frame ID to allow stopping the animation loop

function setupComposer(): EffectComposer {
    // Create buffer with higher sampling
    const size = 1;
    const renderTarget = new WebGLRenderTarget(
        window.innerWidth * size,
        window.innerHeight * size,
        {
            samples: 4, // OR 8 for Higher samples for better anti-aliasing
            colorSpace: 'srgb' // SRGBColorSpace
        }
    );

    const composer = new EffectComposer(renderer, renderTarget);
    const renderPass = new RenderPass(scene.value, camera.value);
    composer.addPass(renderPass);

    const outlinePass = new OutlinePass(
        new Vector2(window.innerWidth * size, window.innerHeight * size),
        scene.value,
        camera.value
    );

    outlinePass.renderScene.layers.set(0); // Only render objects in layer 0
    
    outlinePass.edgeStrength = 5.0;    // Reduce for subtle edges
    outlinePass.edgeGlow = 1;      // Reduce glow effect
    outlinePass.edgeThickness = 2.0; // Adjust edge thickness for visibility
    outlinePass.pulsePeriod = 0;     // Remove pulsing
    outlinePass.visibleEdgeColor.set(0xff0000); // Bright red for visibility
    outlinePass.hiddenEdgeColor.set(0x000000);  // Black for hidden edges

    composer.addPass(outlinePass);

    // Store, so other components can access it.
    useComposerStore().setComposer(composer);
    useComposerStore().setOutlinePass(outlinePass);

    return composer;
}

const composer = setupComposer();
// let composer: EffectComposer | null;

// Animation loop to continuously render the scene
function animate(): void {
    animationFrameId = requestAnimationFrame(animate); // Request the next animation frame

    // composer = setupComposer();
    // composer = composerStore.getComposer() as EffectComposer;
    if (composer) {
        composer.render(); // Uncomment to use the composer for post-processing
        // console.log("composer");
    }
    else {
        renderer.render(scene.value, camera.value); // Render the scene using the camera
    }
}

onMounted(() => {
    //     window.addEventListener('resize', () => {
        //         composer.setSize(window.innerWidth, window.innerHeight);
        //         composer.setPixelRatio(window.devicePixelRatio);
        //     });
        
        // composer = composerStore.getComposer() as EffectComposer;
        animate();
});

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
