<script setup lang="ts">
import { computed, reactive, ref, watch, type Ref } from 'vue';

import { Color, Vector2, Vector3 } from 'three';

import MainScene from "@/components/3D/MainScene.vue";
import WebGlRenderer from "@/components/3D/WebGlRenderer.vue";
import GameLoop from '@/components/3D/GameLoop.vue';
import ResizerComponent from '@/components/3D/ResizerComponent.vue';

import EffectComposer from '@/components/3D/EffectComposer.vue';

import RaycasterComponent from './RaycasterComponent.vue';

import PerspectiveCamera from '@/components/3D/PerspectiveCamera.vue';
import OrbitControls from '@/components/3D/OrbitControls.vue';
import TransformGizmos from '@/components/3D/TransformGizmos.vue';

import HemisphereLight from '@/components/3D/HemisphereLight.vue';
import PointLight from '@/components/3D/PointLight.vue';
import SpotLight from '@/components/3D/SpotLight.vue';

import GridHelper from '@/components/3D/GridHelper.vue';
import PlaneGeometry from '@/components/3D/PlaneGeometry.vue';

import { Model } from '../modelViewer/resources/model';


// GLTF //
const GLTF_TABLE = new URL('./../modelViewer/models/table/1/littlewood_furniture.gltf', import.meta.url).toString();
const GLTF_GARLIC = new URL('./../modelViewer/models/garlic/scene.gltf', import.meta.url).toString();
const GLTF_STONE = new URL('./../modelViewer/models/piedra/scene.gltf', import.meta.url).toString();

const GRID_SIZE = 5;
const GRID_RATIO = 0.5;
const GRID_CELL_SIZE = GRID_SIZE / GRID_RATIO;

const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const raycaster = ref<InstanceType<typeof RaycasterComponent>>();
const modelsPool = reactive([]) as Model[];

watch(() => raycaster.value?.modelsPool, (_modelsPool?: Model[]) => {
    if (_modelsPool)
        modelsPool.splice(0, modelsPool.length, ..._modelsPool); // to keep reactivity
},
{ immediate: true, deep: true }
);
</script>

<template>
    <MainScene :colour="new Color(0xded6d8)">
        <!-- <PerspectiveCamera :position="new Vector3(2.0, 2.7, 0.19)" :zoom="1.5"> -->
            <PerspectiveCamera :position="new Vector3(4.4, 2.7, 2.0)" :zoom="1.5">
            <template v-slot:orbitControl>
                <OrbitControls :canvas="canvas">
                    <TransformGizmos :canvas="canvas">
                        <RaycasterComponent ref="raycaster" :canvas="canvas"></RaycasterComponent>
                    </TransformGizmos>
                </OrbitControls>
            </template>
            <template v-slot:webGlRenderer>
                <WebGlRenderer :canvas="canvas">
                    <template v-slot:GameLoop>
                        <GameLoop :modelsPool="modelsPool"></GameLoop>
                    </template>
                    <template v-slot:EffectComposer>
                        <EffectComposer></EffectComposer>
                    </template>
                    <template v-slot:ResizerComponent>
                        <ResizerComponent></ResizerComponent>
                    </template>
                </WebGlRenderer>
            </template>
        </PerspectiveCamera>

        <HemisphereLight :sky-colour="new Color(0xffffff)" :ground-colour="new Color(0xffffff)" :intensity="1.05">
        </HemisphereLight>
        <SpotLight :colour="new Color(0xffffff)" :position="new Vector3(5, 9, 7)"></SpotLight>

        <PointLight :colour="new Color(0xff0040)" :position="new Vector3(0, 10.5, 2)"></PointLight>
        <PointLight :colour="new Color(0x0040ff)" :position="new Vector3(0, 4.5, 2)"></PointLight>
        <PointLight :colour="new Color(0x80ff80)" :position="new Vector3(2, 9.5, -2)"></PointLight>
        <PointLight :colour="new Color(0xffaa00)" :position="new Vector3(-2, 6.5, 2)"></PointLight>

        <GridHelper :size="GRID_SIZE" :divisions="GRID_CELL_SIZE" :colour1="new Color(0x888888)"
            :colour2="new Color(0x888888)">
        </GridHelper>
        <PlaneGeometry :dimension="new Vector2(GRID_SIZE, GRID_SIZE)" :segment="new Vector2(1, 1)"
            :position="new Vector3(0, 0, 0)"></PlaneGeometry>

        <!-- <ModelAsset name="table" :position="new Vector3(0, 0, -1)" :scale-ratio="1" :gltf-url="GLTF_TABLE"></ModelAsset> -->
        <!-- <ModelAsset name="garlic" :position="new Vector3(0, 0, 0)" :scale-ratio="10" :gltf-url="GLTF_GARLIC"></ModelAsset> -->
        <!-- <ModelAsset name="stone" :position="new Vector3(1, 0, 1)" :scale-ratio="1" :gltf-url="GLTF_STONE"></ModelAsset> -->
    </MainScene>
</template>