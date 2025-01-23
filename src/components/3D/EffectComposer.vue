<script setup lang="ts">
import { inject, ref, type Ref, onMounted } from "vue";

import { Scene, WebGLRenderer, PerspectiveCamera, Vector2, WebGLRenderTarget } from "three";

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

import { useComposerStore } from '@/stores/composerStore';


const renderer = ref(inject("WebGlrenderer")) as Ref<WebGLRenderer>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;

function setupComposer(): EffectComposer {
    // Create buffer with higher sampling
    const size = 2;
    const renderTarget = new WebGLRenderTarget(
        window.innerWidth * size,
        window.innerHeight * size,
        {
            samples: 4, // OR 8 for Higher samples for better anti-aliasing
            colorSpace: 'srgb' // SRGBColorSpace
        }
    );

    const composer = new EffectComposer(renderer.value, renderTarget);
    const renderPass = new RenderPass(scene.value, camera.value);
    composer.addPass(renderPass);

    const outlinePass = new OutlinePass(
        new Vector2(window.innerWidth * size, window.innerHeight * size),
        scene.value,
        camera.value
    );

    // Stronger outline settings
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

onMounted(() => {
    window.addEventListener('resize', () => {
        composer.setSize(window.innerWidth, window.innerHeight);
        composer.setPixelRatio(window.devicePixelRatio);
    });
});
</script>

<template>
    <!-- <slot :outlinePass="outlinePass" :composer="composer"></slot> -->
    <slot></slot>
</template>