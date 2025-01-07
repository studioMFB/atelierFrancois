<script setup lang="ts">
import { computed, inject, ref, type Ref, onMounted} from "vue";

import { Scene, WebGLRenderer, PerspectiveCamera, Vector2 } from "three";

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

import { useComposerStore } from '@/stores/composerStore';

// const props = defineProps<{
//     outlinePass: OutlinePass;
//     composer: EffectComposer;
// }>();

// const outlinePass = ref(props.outlinePass);
// const composer = ref(props.composer);

const renderer = ref(inject("WebGlrenderer")) as Ref<WebGLRenderer>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;

onMounted(() => {
    const composer = new EffectComposer(renderer.value);
    const renderPass = new RenderPass(scene.value, camera.value);
    composer.addPass(renderPass);

    const outlinePass = new OutlinePass(new Vector2(window.innerWidth, window.innerHeight), scene.value, camera.value);

    outlinePass.edgeStrength = 3.0;
    outlinePass.edgeGlow = 0.7;
    outlinePass.edgeThickness = 1.5;
    outlinePass.pulsePeriod = 0;
    outlinePass.visibleEdgeColor.set('#e87305'); // orange
    outlinePass.hiddenEdgeColor.set('#190a05'); // black / orange

    composer.addPass(outlinePass);

    const composerStore = useComposerStore();
    composerStore.setComposer(composer);
    composerStore.setOutlinePass(outlinePass);
});
</script>

<template>
    <!-- <slot :outlinePass="outlinePass" :composer="composer"></slot> -->
    <slot></slot>
</template>