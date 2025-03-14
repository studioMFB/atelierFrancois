<script setup lang="ts">
import { computed, reactive, ref, type Ref } from "vue";

import { Color, Vector3, Vector2, type Object3DEventMap, Group, Scene, Box3, Mesh } from "three";

import { DEFAULT_POSITIONS, GLTF_URL, GRID, MODEL_NAMES } from "@/constants";

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
import { useRaycasterStore } from '@/stores/raycasterStore';


// Constants
const GRID_SIZE = 5;
const GRID_RATIO = 0.5;
const GRID_CELL_SIZE = GRID_SIZE / GRID_RATIO;

// Props
const props = defineProps<{ canvas?: HTMLCanvasElement }>();
const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;

const gridLimits = reactive({
    minX: GRID.LIMITS.MIN_X,
    maxX: GRID.LIMITS.MAX_X,
    minY: GRID.LIMITS.MIN_Y,
    maxY: GRID.LIMITS.MAX_Y,
    minZ: GRID.LIMITS.MIN_Z,
    maxZ: GRID.LIMITS.MAX_Z
});

const modelStore = useModelStore();
let selectedModel: Ref<Model> = ref(new Model());

const raycasterStore = useRaycasterStore();

export interface IModel {
    name: string;
    position: Vector3;
    scale: number;
    url: string;
}

const t = MODEL_NAMES.TABLE;
export type Models = Record<'table' | 'bench' | 'rock' | 'garlic', IModel>;

// Defines a reactive object to manage models in the scene
const models: Models = {
    table: setupModel(MODEL_NAMES.TABLE, new Vector3(-0.5, 0, -0.5), 1, GLTF_URL.TABLE),
    bench: setupModel(MODEL_NAMES.BENCH, new Vector3(-0.5, 0, -0.5), 1, GLTF_URL.BENCH),
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

// Cache bounding box and size for each object
const boundingBoxCache = new Map<string, { box: Box3, size: Vector3 }>();

function getBoundingBoxData(targetGroupObjects: Group<Object3DEventMap>) {
    if (!boundingBoxCache.has(targetGroupObjects.uuid)) {
        // Get corners of the bounding box in world space
        // const box = new Box3().setFromObject(targetGroupObjects);
        // const corners = [
        //     new Vector3(box.min.x, box.min.y, box.min.z),
        //     new Vector3(box.min.x, box.min.y, box.max.z),
        //     new Vector3(box.min.x, box.max.y, box.min.z),
        //     new Vector3(box.min.x, box.max.y, box.max.z),
        //     new Vector3(box.max.x, box.min.y, box.min.z),
        //     new Vector3(box.max.x, box.min.y, box.max.z),
        //     new Vector3(box.max.x, box.max.y, box.min.z),
        //     new Vector3(box.max.x, box.max.y, box.max.z),
        // ].map(corner => corner.applyMatrix4(targetGroupObjects.matrixWorld));

        // // Find the extremes in world space
        // const worldBox = new Box3();
        // corners.forEach(corner => worldBox.expandByPoint(corner));

        // const size = new Vector3();
        // worldBox.getSize(size);

        const worldBox = new Box3();
        const tempBox = new Box3();

        // Traverse all meshes to get accurate bounds
        targetGroupObjects.traverse((child) => {
            if (child instanceof Mesh) {
                child.geometry.computeBoundingBox();
                tempBox.copy(child.geometry.boundingBox!);
                tempBox.applyMatrix4(child.matrixWorld);
                worldBox.union(tempBox);
            }
        });

        const size = new Vector3();
        worldBox.getSize(size);

        boundingBoxCache.set(targetGroupObjects.uuid, { box: worldBox, size: size });
    }

    return boundingBoxCache.get(targetGroupObjects.uuid)!;
}

// Restricts a position vector to remain within reactive grid boundaries
function restrictPositionToBoundaries(position: Vector3, targetGroupObjects?: Group<Object3DEventMap>): Vector3 {
    if (!targetGroupObjects) {
        return new Vector3(
            Math.max(gridLimits.minX, Math.min(gridLimits.maxX, position.x)),
            gridLimits.minY,
            Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, position.z))
        );
    }

    // Get bounding box dimensions
    // const { size } = getBoundingBoxData(targetGroupObjects);

    const bbox = new Box3().setFromObject(targetGroupObjects);
    const size = new Vector3();
    bbox.getSize(size);

    // Half dimensions for edge calculations
    const halfWidth = size.x / 2;
    const halfDepth = size.z / 2;

    return new Vector3(
        Math.max(gridLimits.minX + halfWidth, Math.min(gridLimits.maxX - halfWidth, position.x)),
        gridLimits.minY,
        Math.max(gridLimits.minZ + halfDepth, Math.min(gridLimits.maxZ - halfDepth, position.z))
    );
}

// Restricts the movement of the intersected object to the grid boundaries
function restricMoveToBoundaries(targetObject: Group<Object3DEventMap>): void {
    targetObject.position.copy(restrictPositionToBoundaries(targetObject.position, targetObject));
}

// Adds a model to the scene at the current pointer intersection point
function addModelAtCursor(scene: Scene, modelKey: keyof Models): void {
    const model = models[modelKey];

    // if (!raycasterStore.handleIntersection()) return;

    // Update preview position using currentIntersect
    const intersect = raycasterStore.getCurrentIntersect();

    if (!intersect) return;

    // Define grid size for snapping
    const gridSize = 0.5;

    // Get the intersection point
    const intersectionPoint = intersect.point.clone();

    // Snap to grid
    const spawnPosition = new Vector3(
        Math.round(intersectionPoint.x / gridSize) * gridSize,
        DEFAULT_POSITIONS.GROUND_Y_POSITION, // Always spawn at ground level
        Math.round(intersectionPoint.z / gridSize) * gridSize
    );

    // Ensure position is within boundaries
    const boundedPosition = restrictPositionToBoundaries(spawnPosition);

    if (!selectedModel.value) {
        selectedModel.value = new Model();
    }

    selectedModel.value.name = model.name;
    selectedModel.value.pos = boundedPosition;
    selectedModel.value.scaleRatio = model.scale;
    selectedModel.value.gltfUrl = model.url;

    selectedModel.value.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.add(modelScene);
        modelStore.addModel(selectedModel.value as Model);
        modelStore.addGroupObjects(modelScene);
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
                        <RaycasterComponent ref="raycaster" :models="models" :selected-model="selectedModel"
                            :canvas="canvas" @on-add-model-at-cursor="addModelAtCursor" @restric-move-to-boundaries="restricMoveToBoundaries" />
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
        <HemisphereLight :sky-colour="new Color(0xffffff)" :ground-colour="new Color(0xffffff)" :intensity="1.35" />
        <SpotLight :colour="new Color(0xffffff)" :position="new Vector3(5, 9, 7)" />
        <PointLight :colour="new Color(0xff0040)" :position="new Vector3(0, 10.5, 2)" />
        <PointLight :colour="new Color(0x0040ff)" :position="new Vector3(0, 4.5, 2)" />
        <PointLight :colour="new Color(0x80ff80)" :position="new Vector3(2, 9.5, -2)" />
        <PointLight :colour="new Color(0xffaa00)" :position="new Vector3(-2, 6.5, 2)" />

        <!-- Helpers -->
        <GridHelper :size="GRID_SIZE" :divisions="GRID_CELL_SIZE" :colour1="new Color(0x888888)"
            :colour2="new Color(0x888888)" />
        <PlaneGeometry :dimension="new Vector2(GRID_SIZE, GRID_SIZE)" :segment="new Vector2(1, 1)"
            :position="new Vector3(0, 0, 0)" />

        <resource-explorer :models="models" @on-add-model="addModelToScene"
            @on-add-model-at-cursor="addModelAtCursor" />
    </MainScene>
</template>
