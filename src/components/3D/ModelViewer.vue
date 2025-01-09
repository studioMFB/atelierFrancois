<script setup lang="ts">
import { computed, reactive, ref, type Ref } from "vue";

import { Color, Vector3, Vector2, type Object3DEventMap, Group, Scene } from "three";

import { GLTF_URL, MODEL_NAMES } from "@/constants";

import MainScene from "@/components/3D/MainScene.vue";
import WebGlRenderer from "@/components/3D/WebGlRenderer.vue";
import GameLoop from "@/components/3D/GameLoop.vue";
import ResizerComponent from "@/components/3D/ResizerComponent.vue";
import RaycasterComponent from "./RaycasterComponent.vue";
import PerspectiveCamera from "@/components/3D/PerspectiveCamera.vue";
import OrbitControls from "@/components/3D/OrbitControls.vue";
import TransformGizmos from "@/components/3D/TransformGizmos.vue";
import HemisphereLight from "@/components/3D/HemisphereLight.vue";
import PointLight from "@/components/3D/PointLight.vue";
import SpotLight from "@/components/3D/SpotLight.vue";
import GridHelper from "@/components/3D/GridHelper.vue";
import PlaneGeometry from "@/components/3D/PlaneGeometry.vue";

import ResourceExplorer from "../menus/ResourceExplorer.vue";

import { Model } from "../modelViewer/resources/model";
import { useModelStore } from '@/stores/modelStore';


// Constants
const GRID_SIZE = 5;
const GRID_RATIO = 0.5;
const GRID_CELL_SIZE = GRID_SIZE / GRID_RATIO;

// Props
const props = defineProps<{ canvas?: HTMLCanvasElement }>();
const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;

const modelStore = useModelStore();
let selectedModel: Ref<Model> = ref(new Model());

export interface IModel {
    name: string;
    position: Vector3;
    scale: number;
    url: string;
}
const t = MODEL_NAMES.TABLE
export type Models = Record<'table' | 'rock' | 'garlic', IModel>;

// Defines a reactive object to manage models in the scene
const models: Models = {
    table: setupModel(MODEL_NAMES.TABLE, new Vector3(-0.5, 0, -0.5), 1, GLTF_URL.TABLE),
    rock: setupModel(MODEL_NAMES.ROCK, new Vector3(-0.5, 0, -0.5), 0.4, GLTF_URL.ROCK),
    garlic: setupModel(MODEL_NAMES.GARLIC, new Vector3(-0.5, 0, -0.5), 10, GLTF_URL.GARLIC),
};

// Sets up model metadata for initialization
function setupModel(name: string, position: Vector3, scale: number, url: string): { name: string, position: Vector3, scale: number, url: string } {
    return { name, position, scale, url };
}

function addModelToScene(scene: Scene, modelKey: keyof Models): void {
    const _model = models[modelKey];
    selectedModel.value = new Model(_model.name, _model.position, _model.scale, _model.url);

    selectedModel.value.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.add(modelScene);
        modelStore.addModel(selectedModel.value as Model);
        modelStore.addGroupObjects(modelScene);

        // selectModel(modelScene);
    });
}
</script>

<template>
    <MainScene :colour="new Color(0xded6d8)">

        <PerspectiveCamera :position="new Vector3(4.4, 2.7, 2.0)" :zoom="1.5">
            <!-- OrbitControls with TransformGizmos and Raycaster -->
            <template v-slot:orbitControl>
                <OrbitControls :canvas="canvas">
                    <TransformGizmos :canvas="canvas">
                        <RaycasterComponent :models="models" :selected-model="selectedModel" ref="raycaster" :canvas="canvas" />
                    </TransformGizmos>
                </OrbitControls>
            </template>

            <!-- WebGL Renderer with nested components -->
            <template v-slot:webGlRenderer>
                <WebGlRenderer :canvas="canvas">
                    <template v-slot:GameLoop>
                        <GameLoop />
                    </template>
                    <!-- <template v-slot:EffectComposer>
                        <EffectComposer/>
                    </template> -->
                    <template v-slot:ResizerComponent>
                        <ResizerComponent />
                    </template>
                </WebGlRenderer>
            </template>
        </PerspectiveCamera>

        <!-- Lights -->
        <HemisphereLight
            :sky-colour="new Color(0xffffff)"
            :ground-colour="new Color(0xffffff)"
            :intensity="1.35"
        />
        <SpotLight :colour="new Color(0xffffff)" :position="new Vector3(5, 9, 7)" />
        <PointLight :colour="new Color(0xff0040)" :position="new Vector3(0, 10.5, 2)" />
        <PointLight :colour="new Color(0x0040ff)" :position="new Vector3(0, 4.5, 2)" />
        <PointLight :colour="new Color(0x80ff80)" :position="new Vector3(2, 9.5, -2)" />
        <PointLight :colour="new Color(0xffaa00)" :position="new Vector3(-2, 6.5, 2)" />

        <!-- Helpers -->
        <GridHelper
            :size="GRID_SIZE"
            :divisions="GRID_CELL_SIZE"
            :colour1="new Color(0x888888)"
            :colour2="new Color(0x888888)"
        />
        <PlaneGeometry
            :dimension="new Vector2(GRID_SIZE, GRID_SIZE)"
            :segment="new Vector2(1, 1)"
            :position="new Vector3(0, 0, 0)"
        />

        <!-- Models (if needed in the future) -->
        <!-- <ModelAsset name="table" :position="new Vector3(0, 0, -1)" :scale-ratio="1" :gltf-url="GLTF_TABLE" /> -->
        <!-- <ModelAsset name="garlic" :position="new Vector3(0, 0, 0)" :scale-ratio="10" :gltf-url="GLTF_GARLIC" /> -->
        <!-- <ModelAsset name="stone" :position="new Vector3(1, 0, 1)" :scale-ratio="1" :gltf-url="GLTF_STONE" /> -->
        
        <resource-explorer :models="models" @on-add-model="addModelToScene"></resource-explorer>
    </MainScene>
</template>
