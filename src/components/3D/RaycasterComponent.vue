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
    (e: 'onAddModelAtCursor', scene: Scene, modelKey: keyof Models): void
}>();

const modelStore = useModelStore();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const transformControlsGizmos = ref(inject("TransformGizmos")) as Ref<TransformControls>;

const orbitControlsStore = useOrbitControlsStore();
const orbitControls = ref(inject("OrbitControls")) as Ref<OrbitControls>;

const raycasterStore = useRaycasterStore();
raycasterStore.setCamera(camera.value);
raycasterStore.setScene(scene.value);

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

// Checks if the raycaster is ready by validating its dependencies
function isRaycasterReady(): boolean {
    if (!raycaster) return false;
    if (modelStore.getGroupsObjects().length < 1) return false;

    return true;
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

// Updates the pointer position based on the event and recalculates the raycaster
function updatePointerMode(event: PointerEvent | DragEvent): void {
    event.preventDefault();

    const rect = canvas.value.getBoundingClientRect();
    const pointer = new Vector2();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterStore.updateMousePosition(pointer.x, pointer.y);

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

function addModelonAtCursor(modelKey: keyof Models): void {
    emit("onAddModelAtCursor", scene.value, modelKey);
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
    // Prevent default scroll behavior (important to stop page scrolling)
    // BUT ERROR...
    // event.preventDefault();
    // event.stopPropagation();

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

// Tracks the state of keyboard inputs for specific keys
const keyState = reactive({
    keyT: false,
    keyG: false,
    keyR: false,
});

function isSpawnKeyPressed(): void {
    if(keyState.keyT || keyState.keyG || keyState.keyR)
        raycasterStore.isSpawn = true;
    else 
        raycasterStore.isSpawn = false;
}

// Updates key states when key events are triggered
function handleKeyEvent(event: KeyboardEvent, isDown: boolean): void {
    switch (event.code) {
        case 'KeyT': keyState.keyT = isDown; break;
        case 'KeyG': keyState.keyG = isDown; break;
        case 'KeyR': keyState.keyR = isDown; break;
    }

    isSpawnKeyPressed();
}

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

function handlePointerEvent(event: PointerEvent | DragEvent): void {
    if (event.type === 'pointerdown') {
        
        if (dragStartTimeout) clearTimeout(dragStartTimeout);
        
        // Delay action to distinguish between click and drag
        dragStartTimeout = setTimeout(() => {
            
            if (orbitControlsStore.getDragging()) {
                return;
            }
            
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
                restricMoveToBoundaries(targetObject);
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

    const targetObject = targetGroupObjects as Object3D;
    transformControlsGizmos.value.attach(targetObject);

    // Add gizmo change listener when selecting
    transformControlsGizmos.value.addEventListener('change', () => {
        restricMoveToBoundaries(targetGroupObjects);
    });

    // offsetGizmos(targetObject);
}

function offsetGizmos(targetObject: Object3D): void {
    const offset = 0.05;

    // Offset the gizmo above the object
    const boundingBox = new Box3().setFromObject(targetObject);
    const objectWidth = boundingBox.max.x - boundingBox.min.x;
    const objectHeight = boundingBox.max.y - boundingBox.min.y;
    const objectDepth = boundingBox.max.z - boundingBox.min.z;

    // Position the gizmo in a corner above the object's bounding box
    transformControlsGizmos.value.position.set(
        objectWidth * .5,
        targetObject.position.y + objectHeight + offset,
        objectDepth * .5
    );
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
        boundingBoxCache.delete(selectedModel.value.uuid);

        // Remove gizmo change listener when deselecting
        transformControlsGizmos.value.removeEventListener('change', () => {
            if (selectedModel.value?.modelScene)
                restricMoveToBoundaries(selectedModel.value?.modelScene);
        });
    }

    if (outlinePass) {
        outlinePass.selectedObjects = [];
    }

    detachGizmos();
}

function handleClick(): void {
    if (keyState.keyT || keyState.keyG || keyState.keyR) {
        if (keyState.keyT) addModelonAtCursor(MODEL_NAMES.TABLE);
        if (keyState.keyR) addModelonAtCursor(MODEL_NAMES.ROCK);
        if (keyState.keyG) addModelonAtCursor(MODEL_NAMES.GARLIC);
    }
}

// Sets up all necessary event listeners for interactions
function setupEventListeners(): void {
    const dragUpdate = (e: DragEvent) => handlePointerEvent(e);
    const pointerUpdate = (e: PointerEvent) => handlePointerEvent(e);
    // Add both pointerdown and click handlers for better compatibility
    const clickListener = () => handleClick();

    const wheelListener = (e: WheelEvent) => { onWheel(e) };
    const keyDownListener = (e: KeyboardEvent) => handleKeyEvent(e, true);
    const keyUpListener = (e: KeyboardEvent) => handleKeyEvent(e, false);

    const pointerUp = () => handlePointerUp();

    canvas.value.addEventListener('dragover', dragUpdate);
    canvas.value.addEventListener('pointermove', pointerUpdate);
    canvas.value.addEventListener('pointerdown', pointerUpdate);
    canvas.value.addEventListener('pointerup', pointerUp);

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
    transformControlsGizmos.value.addEventListener("wheel", () => {
        if (orbitControls.value) orbitControls.value.enabled = true;
        isLeftMouseButtonDown = false;
    });

    onUnmounted(() => {
        canvas.value.removeEventListener('dragover', dragUpdate);
        canvas.value.removeEventListener('pointermove', pointerUpdate);
        canvas.value.removeEventListener('pointerdown', pointerUpdate);
        canvas.value.removeEventListener('pointerup', pointerUp);

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
    <spawn-preview :visible="raycasterStore.isSpawn" :raycaster="raycaster" :grid-limits="gridLimits" ref="spawnPreview" />
    <slot></slot>
</template>