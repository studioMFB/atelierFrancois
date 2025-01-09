<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, reactive, ref, type ComponentPublicInstance, type Ref } from 'vue';

import { Box3, Group, type Intersection, Mesh, Object3D, type Object3DEventMap, PerspectiveCamera, Plane, Raycaster, Scene, Vector2, Vector3 } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { RAYCASTER, GRID, DEFAULT_POSITIONS, MODEL_NAMES, MODEL_SUB_NAMES } from "@/constants";

import SpawnPreview from './raycaster/SpawnPreview.vue';
import { Model } from '@/components/modelViewer/resources/model';
import { type Models } from "@/components/3D/ModelViewer.vue";

import { useComposerStore } from '@/stores/composerStore';
import { useModelStore } from '@/stores/modelStore';
import { useOrbitControlsStore } from '@/stores/orbitControlsStore';
import { useRaycasterStore } from '@/stores/raycasterStore';


const props = defineProps<{
    canvas: HTMLCanvasElement
    models: Models;
    selectedModel: Model;
}>();

const emit = defineEmits<{
    (e: 'onAddModelAtCursor', scene: Scene, modelKey: keyof Models): void,
    (e: 'restricMoveToBoundaries', targetObject: Group<Object3DEventMap>): void,
}>();

const modelStore = useModelStore();
const raycasterStore = useRaycasterStore();
const orbitControlsStore = useOrbitControlsStore();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const transformControlsGizmos = ref(inject("TransformGizmos")) as Ref<TransformControls>;

const orbitControls = ref(inject("OrbitControls")) as Ref<OrbitControls>;

let selectedModel = computed(() => props.selectedModel) as Ref<Model>;

let isLeftMouseButtonDown = false;
let intersect: Intersection<Object3D<Object3DEventMap>>;

let outlinePass: OutlinePass | null;

type SpawnPreviewExposed = {
    previewMesh: Ref<Mesh | null>;
};
const spawnPreview = ref<ComponentPublicInstance<{}, SpawnPreviewExposed> | null>(null);

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


// Updates the pointer position based on the event and recalculates the raycaster
function updatePointerMode(event: PointerEvent | DragEvent): void {
    event.preventDefault();

    const rect = canvas.value.getBoundingClientRect();
    const pointer = new Vector2();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    try {
        if (raycaster && pointer && camera.value) {
            raycaster.setFromCamera(pointer, camera.value);

            if (!spawnPreview.value || !spawnPreview.value.previewMesh)
                return;

            // Update preview visibility based on spawn key state
            if (spawnPreview.value.previewMesh) {
                spawnPreview.value.previewMesh.visible = raycasterStore.isSpawn;
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

let isRotatingModel = false;
function handlePointerUp(): void {
    if (isRotatingModel) {
        isRotatingModel = false;
        orbitControls.value.enableZoom = true; // Re-enable zoom after interaction
    }
}

// Handles rotation using the scroll wheel when the left mouse button is down
function onWheel(event: WheelEvent): void {
    if (selectedModel.value?.isSelected && selectedModel.value?.modelScene) {
        // Temporarily disable zoom
        orbitControls.value.enableZoom = false;

        // Rotate the selected model
        const delta = Math.sign(event.deltaY);
        const rotationSpeed = Math.PI / 4;
        const rotationDelta = delta * rotationSpeed;
        selectedModel.value.modelScene.rotation.y += rotationDelta;
    }
    else {
        orbitControls.value.enableZoom = true;
    }
}

function handleIntersection(): boolean {
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
        raycasterStore.setCurrentIntersect(intersect);
    }

    const intersects = raycaster.intersectObjects(modelStore.getGroupsObjects(), true)
        .sort((a, b) => a.distance - b.distance);

    if (intersects.length > 0) {
        intersect = intersects[0];
        raycasterStore.setCurrentIntersect(intersect);
        return true;
    }

    return false;
}

let dragStartTimeout: ReturnType<typeof setTimeout> | null = null;

function handlePointerEvent(event: PointerEvent | DragEvent): void {
    if (event.type === 'pointerdown') {

        if (dragStartTimeout) clearTimeout(dragStartTimeout);

        // Delay action to distinguish between click and drag
        dragStartTimeout = setTimeout(() => {
            if (orbitControlsStore.getDragging()) return;
            
            if (handleIntersection()) {
                const targetObject = selectedModel.value?.findModelParent(intersect.object as Mesh);
                if (targetObject && !targetObject.name.includes(MODEL_NAMES.FLOOR)) {
                    selectModel(targetObject);
                    return;
                }
            }

            resetSelection();

        }, 150);
    }
    else if (event.type === 'pointermove' || event.type === 'dragover') {
        updatePointerMode(event);

        if (handleIntersection()) {
            const targetObject = selectedModel.value?.findModelParent(intersect.object as Mesh);

            if (targetObject && !targetObject.name.includes(MODEL_NAMES.FLOOR)) {
                emit("restricMoveToBoundaries", targetObject);
            }
        }
    }
}

function highlightModel(targetGroupObjects: Group<Object3DEventMap>): void {
    if (outlinePass)
        outlinePass.selectedObjects = [targetGroupObjects];
}

function attachGizmos(targetGroupObjects: Group<Object3DEventMap>): void {
    if (!transformControlsGizmos.value) {
        console.error("TransformControlsGizmos is not available!");
        return;
    }

    transformControlsGizmos.value.attach(targetGroupObjects as Object3D);

    // Add gizmo change listener when selecting
    transformControlsGizmos.value.addEventListener('change', () => {
        emit("restricMoveToBoundaries", targetGroupObjects);
    });
}

function detachGizmos(): void {
    if (transformControlsGizmos.value)
        transformControlsGizmos.value.detach();
}

function selectModel(targetGroupObjects: Group<Object3DEventMap>): void {
    highlightModel(targetGroupObjects);
    attachGizmos(targetGroupObjects);

    if (selectedModel) {
        if (selectedModel.value.modelScene)
            selectedModel.value.modelScene = targetGroupObjects;

        if (!selectedModel.value.isSelected) {
            selectedModel.value.isSelected = true;
        }
    }
}

function resetSelection(): void {
    if (selectedModel) {
        selectedModel.value.isSelected = false;

        // Clear cache when model is modified
        // boundingBoxCache.delete(selectedModel.value.uuid);

        // Remove gizmo change listener when deselecting
        transformControlsGizmos.value.removeEventListener('change', () => {
            if (selectedModel.value?.modelScene)
                emit("restricMoveToBoundaries", selectedModel.value?.modelScene);
        });
    }

    if (outlinePass) {
        outlinePass.selectedObjects = [];
    }

    detachGizmos();
}

// Tracks the state of keyboard inputs for specific keys
const keyState = reactive({
    Delete: false,
});

// Updates key states when key events are triggered
function handleKeyEvent(event: KeyboardEvent, isDown: boolean): void {
    switch (event.code) {
        case 'Delete': {
            keyState.Delete = isDown;

            if (keyState.Delete) {

                if (selectedModel.value?.modelScene) {
                    resetSelection();
                    scene.value.remove(selectedModel.value?.modelScene);
                }
            }
            break;
        }
    }
}

// Sets up all necessary event listeners for interactions
function setupEventListeners(): void {
    const dragUpdate = (e: DragEvent) => handlePointerEvent(e);
    const pointerUpdate = (e: PointerEvent) => handlePointerEvent(e);

    const keyDownListener = (e: KeyboardEvent) => handleKeyEvent(e, true);
    const keyUpListener = (e: KeyboardEvent) => handleKeyEvent(e, false);

    const wheelListener = (e: WheelEvent) => { onWheel(e) };

    const pointerUp = () => handlePointerUp();

    canvas.value.addEventListener('dragover', dragUpdate);
    canvas.value.addEventListener('pointermove', pointerUpdate);
    canvas.value.addEventListener('pointerdown', pointerUpdate);
    canvas.value.addEventListener('pointerup', pointerUp);

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
    transformControlsGizmos.value.addEventListener("wheel", () => {
        if (orbitControls.value) orbitControls.value.enabled = true;
        isLeftMouseButtonDown = false;
    });

    onUnmounted(() => {
        canvas.value.removeEventListener('dragover', dragUpdate);
        canvas.value.removeEventListener('pointermove', pointerUpdate);
        canvas.value.removeEventListener('pointerdown', pointerUpdate);
        canvas.value.removeEventListener('pointerup', pointerUp);

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
    <spawn-preview :visible="raycasterStore.isSpawn" :raycaster="raycaster" :grid-limits="gridLimits"
        ref="spawnPreview" />
    <slot></slot>
</template>