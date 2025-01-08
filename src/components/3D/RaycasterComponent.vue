<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, reactive, ref, type ComponentPublicInstance, type Ref } from 'vue';

import { Group, type Intersection, Mesh, Object3D, type Object3DEventMap, PerspectiveCamera, Plane, Raycaster, Scene, Vector2, Vector3 } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { RAYCASTER, GRID, DEFAULT_POSITIONS, MODEL_NAMES, MODEL_SUB_NAMES } from "@/components/3D/constants";

import SpawnPreview from './raycaster/SpawnPreview.vue';
import { Model } from '@/components/modelViewer/resources/model';
import { type Models } from "@/components/3D/ModelViewer.vue";

import { useComposerStore } from '@/stores/composerStore';
import { useModelStore } from '@/stores/modelStore';
import { useOrbitControlsStore } from '@/stores/orbitControlsStore';


const props = defineProps<{
    canvas: HTMLCanvasElement
    models: Models;
}>();

const modelStore = useModelStore();
const models = computed(() => props.models) as Ref<Models>;

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const transformControlsGizmos = ref(inject("TransformGizmos")) as Ref<TransformControls>;

const orbitControlsStore = useOrbitControlsStore();
const orbitControls = ref(inject("OrbitControls")) as Ref<OrbitControls>;
const isDragging = computed(() => orbitControlsStore.isDragging);

let selectedModel: Model | null = reactive(new Model());
const pointer = new Vector2();
let intersect: Intersection<Object3D<Object3DEventMap>>;

let outlinePass: OutlinePass | null;

type SpawnPreviewExposed = {
    previewMesh: Ref<Mesh | null>;
};
const spawnPreview = ref<ComponentPublicInstance<{}, SpawnPreviewExposed> | null>(null);

let isLeftMouseButtonDown = false;
let rotationDelta = 0;

const raycaster = new Raycaster();
raycaster.near = RAYCASTER.NEAR;// Minimum distance for intersection
raycaster.far = RAYCASTER.FAR;// Maximum distance for intersection

const gridLimits = reactive({
    minX: GRID.LIMITS.MIN_X,
    maxX: GRID.LIMITS.MAX_X,
    minY: GRID.LIMITS.MIN_Y,
    maxY: GRID.LIMITS.MAX_Y,
    minZ: GRID.LIMITS.MIN_Z,
    maxZ: GRID.LIMITS.MAX_Z
});

// Checks if the raycaster is ready by validating its dependencies
function isRaycasterReady(): boolean {
    if (!raycaster) return false;
    if (modelStore.getGroupsObjects().length < 1) return false;

    return true;
}

// Restricts a position vector to remain within reactive grid boundaries
function restrictPositionToBoundaries(position: Vector3): Vector3 {
    return new Vector3(
        Math.max(gridLimits.minX, Math.min(gridLimits.maxX, position.x)),
        gridLimits.minY,
        Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, position.z))
    );
}

// Restricts the movement of the intersected object to the grid boundaries
function restricMoveToBoundaries(): void {
    if (selectedModel?.modelScene) {
        selectedModel.modelScene.position.copy(restrictPositionToBoundaries(selectedModel.modelScene.position));
    }
}

// Updates the pointer position based on the event and recalculates the raycaster
function updatePointerMode(event: PointerEvent): void {
    event.preventDefault();

    const rect = canvas.value.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    try {
        if (raycaster && pointer && camera.value) {
            raycaster.setFromCamera(pointer, camera.value);

            if (!spawnPreview.value || !spawnPreview.value.previewMesh)
                return;

            // Update preview visibility based on spawn key state
            if (spawnPreview.value.previewMesh) {
                spawnPreview.value.previewMesh.visible = isSpawnKeyPressed();
            }

            // Only update position if preview is visible
            if (spawnPreview.value.previewMesh.visible) {
                // Create a virtual ground plane for consistent intersection
                const groundNormal = new Vector3(0, 1, 0);
                const groundPlane = new Plane(groundNormal, 0);

                // Get intersection point with ground plane
                const intersectionPoint = new Vector3();
                if (raycaster.ray.intersectPlane(groundPlane, intersectionPoint)) {
                    // Snap to grid
                    const gridSize = 0.5;
                    const snappedPosition = new Vector3(
                        Math.round(intersectionPoint.x / gridSize) * gridSize,
                        0.1, // Slightly above ground
                        Math.round(intersectionPoint.z / gridSize) * gridSize
                    );

                    // Update preview position if within boundaries
                    if (spawnPreview.value.previewMesh &&
                        snappedPosition.x >= gridLimits.minX &&
                        snappedPosition.x <= gridLimits.maxX &&
                        snappedPosition.z >= gridLimits.minZ &&
                        snappedPosition.z <= gridLimits.maxZ) {
                        spawnPreview.value.previewMesh.position.copy(snappedPosition);
                        spawnPreview.value.previewMesh.visible = true;
                    } else if (spawnPreview.value.previewMesh) {
                        spawnPreview.value.previewMesh.visible = false;
                    }
                }
            }
        }
    } catch (e: any) {
        console.error("Error setting raycaster:", e);
    }
}

// Adds a model to the scene at the current pointer intersection point
function addModelToSceneAtCursor(modelKey: keyof Models): void {
    const model = models.value[modelKey];

    if (!handleIntersection()) return;

    // Define grid size for snapping
    const gridSize = 0.5;

    // Get the intersection point
    const point = intersect.point.clone();

    // Snap to grid
    const spawnPosition = new Vector3(
        Math.round(point.x / gridSize) * gridSize,
        DEFAULT_POSITIONS.GROUND_Y_POSITION, // Always spawn at ground level
        Math.round(point.z / gridSize) * gridSize
    );

    // Ensure position is within boundaries
    const boundedPosition = restrictPositionToBoundaries(spawnPosition);

    if (!selectedModel) {
        selectedModel = reactive(new Model())
    }

    selectedModel.name = model.name, boundedPosition, model.scale, model.url;
    selectedModel.pos = boundedPosition;
    selectedModel.scaleRatio = model.scale;
    selectedModel.gltfUrl = model.url;

    selectedModel.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.value.add(modelScene);
        modelStore.addModel(selectedModel as Model);
        modelStore.addGroupObjects(modelScene);

        const composerStore = useComposerStore();
        outlinePass = composerStore.getOutlinePass() as OutlinePass;
        if (outlinePass)
            outlinePass.selectedObjects = [modelScene];
    });
}

// Handles rotation using the scroll wheel when the left mouse button is down
function onWheel(event: WheelEvent): void {
    if (isLeftMouseButtonDown) {
        const delta = Math.sign(event.deltaY);
        const rotationSpeed = Math.PI / 2;
        rotationDelta = delta * rotationSpeed;

        if (selectedModel?.modelScene)
            selectedModel.modelScene.rotation.y += rotationDelta;
    }
}

// Tracks the state of keyboard inputs for specific keys
const keyState = reactive({
    keyT: false,
    keyG: false,
    keyR: false,
});

function isSpawnKeyPressed(): boolean {
    return keyState.keyT || keyState.keyG || keyState.keyR;
}

// Updates key states when key events are triggered
function handleKeyEvent(event: KeyboardEvent, isDown: boolean): void {
    switch (event.code) {
        case 'KeyT': keyState.keyT = isDown; break;
        case 'KeyG': keyState.keyG = isDown; break;
        case 'KeyR': keyState.keyR = isDown; break;
    }
}

// Modify your intersection function to handle ground plane intersection explicitly
function handleIntersection(): boolean {
    if (!isRaycasterReady()) {
        console.warn("Raycaster is not ready. Check dependencies and object configurations!");
        return false;
    }

    // Create a virtual ground plane for consistent intersection
    const groundNormal = new Vector3(0, 1, 0);
    const groundPlane = new Plane(groundNormal, -DEFAULT_POSITIONS.GROUND_Y_POSITION);

    // Get intersection point with ground plane
    const intersectionPoint = new Vector3();
    raycaster.ray.intersectPlane(groundPlane, intersectionPoint);

    if (intersectionPoint) {
        // Check if point is within grid boundaries
        if (intersectionPoint.x < gridLimits.minX &&
            intersectionPoint.x > gridLimits.maxX &&
            intersectionPoint.z < gridLimits.minZ &&
            intersectionPoint.z > gridLimits.maxZ) {
            console.warn("Outside the grid limits!");
            return false;
        }

        // Create a synthetic intersection result
        intersect = {
            point: intersectionPoint,
            distance: camera.value.position.distanceTo(intersectionPoint),
            object: scene.value.getObjectByName(MODEL_SUB_NAMES.GROUND) || scene.value.children[0],
            face: null,
            faceIndex: 0,
            uv: new Vector2(0, 0)
        };
    }

    const intersects = raycaster.intersectObjects(modelStore.getGroupsObjects(), true)
        .sort((a, b) => a.distance - b.distance);

    if (intersects.length > 0) {
        intersect = intersects[0];
        return true;
    }

    return false;
}
let dragStartTimeout: ReturnType<typeof setTimeout> | null = null;

function handlePointerEvent(event: PointerEvent): void {
    updatePointerMode(event);

    if (event.type === 'pointerdown') {

        if (dragStartTimeout) clearTimeout(dragStartTimeout);

        // Delay action to distinguish between click and drag
        dragStartTimeout = setTimeout(() => {

            if (orbitControlsStore.getDragging()) {
                return;
            }

            if (handleIntersection()) {
                const targetObject = selectedModel?.findModelParent(intersect.object as Mesh);

                if (targetObject && !targetObject.name.includes(MODEL_NAMES.FLOOR)) {
                    selectModel(targetObject);
                    return;
                }
            }

            resetSelection();

        }, 150); // Adjust the delay as needed (150ms is a good start)
    }
}

function highlightModel(targetGroupObjects: Group<Object3DEventMap>): void {
    if (outlinePass)
        outlinePass.selectedObjects = [targetGroupObjects];
}

function attachGizmos(targetGroupObjects: Group<Object3DEventMap>): void {
    if (transformControlsGizmos.value)
        transformControlsGizmos.value.attach(targetGroupObjects);
}
function detachGizmos(): void {
    if (transformControlsGizmos.value)
        transformControlsGizmos.value.detach();
}

function selectModel(targetGroupObjects: Group<Object3DEventMap>): void {
    highlightModel(targetGroupObjects);
    attachGizmos(targetGroupObjects);

    if (selectedModel) {
        if (selectedModel.modelScene)
            selectedModel.modelScene = targetGroupObjects;

        if (!selectedModel.isSelected) {
            selectedModel.isSelected = true;
        }
    }
}

function resetSelection(): void {
    if (selectedModel) {
        selectedModel.isSelected = false;
    }

    if (outlinePass) {
        outlinePass.selectedObjects = [];
    }

    detachGizmos();
}

function handleClick(event: MouseEvent): void {
    if (keyState.keyT || keyState.keyG || keyState.keyR) {
        if (keyState.keyT) addModelToSceneAtCursor(MODEL_NAMES.TABLE);
        if (keyState.keyR) addModelToSceneAtCursor(MODEL_NAMES.ROCK);
        if (keyState.keyG) addModelToSceneAtCursor(MODEL_NAMES.GARLIC);
    }
}

// Sets up all necessary event listeners for interactions
function setupEventListeners(): void {
    const pointerUpdate = (e: PointerEvent) => handlePointerEvent(e);
    // Add both pointerdown and click handlers for better compatibility
    const clickListener = (e: MouseEvent) => handleClick(e);

    const wheelListener = (e: WheelEvent) => { onWheel(e) };
    const keyDownListener = (e: KeyboardEvent) => handleKeyEvent(e, true);
    const keyUpListener = (e: KeyboardEvent) => handleKeyEvent(e, false);

    document.addEventListener('pointermove', pointerUpdate);
    document.addEventListener('pointerdown', pointerUpdate);
    canvas.value.addEventListener('click', clickListener);  // Add click event listener

    document.addEventListener('wheel', wheelListener);
    document.addEventListener('keydown', keyDownListener);
    document.addEventListener('keyup', keyUpListener);

    transformControlsGizmos.value.addEventListener("mouseDown", () => {
        if (orbitControls.value) orbitControls.value.enabled = false;
        isLeftMouseButtonDown = true;
    });

    transformControlsGizmos.value.addEventListener("mouseUp", () => {
        if (orbitControls.value) orbitControls.value.enabled = true;
        isLeftMouseButtonDown = false;
    });

    onUnmounted(() => {
        document.removeEventListener('pointermove', pointerUpdate);
        document.removeEventListener('pointerdown', pointerUpdate);
        document.removeEventListener('click', clickListener);  // Remove click event listener
        document.removeEventListener('wheel', wheelListener);
        document.removeEventListener('keydown', keyDownListener);
        document.removeEventListener('keyup', keyUpListener);
    });
}

onMounted(() => {
    setupEventListeners();

    const composerStore = useComposerStore();
    outlinePass = composerStore.getOutlinePass() as OutlinePass;

});
</script>

<template>
    <spawn-preview :visible="isSpawnKeyPressed()" :raycaster="raycaster" :grid-limits="gridLimits" ref="spawnPreview" />
    <slot></slot>
</template>