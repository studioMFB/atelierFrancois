<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, reactive, ref, type Ref } from 'vue';
import { Color, Group, type Intersection, Mesh, MeshToonMaterial, Object3D, type Object3DEventMap, PerspectiveCamera, Raycaster, Scene, Vector2, Vector3 } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

import { Model } from '@/components/modelViewer/resources/model';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { useModelStore } from '@/store/modelStore';
const modelStore = useModelStore();


// Colour //
const COLOUR_SELECTED = '#f47653';
const COLOUR_UNSELECTED = '#e2eab8';
// GLTF //
const GLTF_TABLE = new URL('./../modelViewer/models/table/1/littlewood_furniture.gltf', import.meta.url).toString();
const GLTF_GARLIC = new URL('./../modelViewer/models/garlic/scene.gltf', import.meta.url).toString();
const GLTF_ROCK = new URL('./../modelViewer/models/rock/scene.gltf', import.meta.url).toString();

const props = defineProps<{
    canvas: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const transformControlsGizmos = ref(inject("TransformGizmos")) as Ref<TransformControls>;
const controls = ref(inject("OrbitControls")) as Ref<OrbitControls>;

const raycaster = new Raycaster();
const pointer = new Vector2();
let intersect: Intersection<Object3D<Object3DEventMap>>;
let intersectedGroupObject: Group<Object3DEventMap>;

let isLeftMouseButtonDown = false;
let isSelected = false;
let rotationDelta = 0;
let cachedIntersects: Intersection<Object3D<Object3DEventMap>>[] = []; // Cache for intersection results

// Defines a reactive grid configuration object to make the function more flexible
const gridLimits = reactive({
    minX: -2.5,  // Minimum X value
    maxX: 2.5,   // Maximum X value
    minY: 0,    // Minimum Y value (assuming Y is up)
    maxY: 0,   // Maximum Y value
    minZ: -2.5,  // Minimum Z value
    maxZ: 2.5    // Maximum Z value
});

// Finds the parent of a model, recursively traversing upward until it matches the root model name
function findModelParent(mesh: any): Group<Object3DEventMap> | null {
    if (!mesh.parent) {
        return null;
    }

    const rootName = 'root_model';
    if (mesh.parent.name.includes(rootName)) {
        return mesh.parent as Group<Object3DEventMap>;
    }

    return findModelParent(mesh.parent);
}

// RAYCASTER //
function intersection(): boolean {
    if (!isRaycasterReady()) {
        console.warn("Raycaster is not ready. Check dependencies and object configurations.");
        return false;
    }

    // If cached intersects exist and are still valid, use them
    if (cachedIntersects.length > 0) {
        intersect = cachedIntersects[0];
        intersectedGroupObject = findModelParent(intersect.object as Mesh)!;
        return true;
    }

    const intersects = raycaster.intersectObjects(modelStore.getGroupsObjects(), true);
    cachedIntersects = intersects; // Cache results for future use

    if (intersects.length > 0) {
        intersect = intersects[0];
        intersectedGroupObject = findModelParent(intersect.object as Mesh)!;
        return true;
    }

    return false;
}

// Checks if the raycaster is ready by validating its dependencies
function isRaycasterReady(): boolean {
    if (!raycaster) return false;
    if (modelStore.getGroupsObjects().length < 1) return false;
    // if (modelStore.getGroupsObjects().every(obj => obj)) return false;

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
    if (intersectedGroupObject) {
        intersectedGroupObject.position.copy(restrictPositionToBoundaries(intersectedGroupObject.position));
    }
}

// Updates the pointer position based on the event and recalculates the raycaster
function updatePointerMode(event: PointerEvent): void {
    event.preventDefault();

    pointer.x = (event.clientX / canvas.value.clientWidth) * 2 - 1;
    pointer.y = -(event.clientY / canvas.value.clientHeight) * 2 + 1;

    try {
        if (raycaster && pointer && camera.value)
            raycaster.setFromCamera(pointer, camera.value);
        cachedIntersects = []; // Reset cache as pointer mode changes
    }
    catch (e: any) {
        console.error("Error setting raycaster:", e);
    }
}

// Defines a reactive object to manage models in the scene
const models = reactive({
    table: setupModel("table", new Vector3(-0.5, 0, -0.5), 1, GLTF_TABLE),
    garlic: setupModel("garlic", new Vector3(-0.5, 0, -0.5), 10, GLTF_GARLIC),
    rock: setupModel("rock", new Vector3(-0.5, 0, -0.5), 0.4, GLTF_ROCK),
});

// Sets up model metadata for initialization
function setupModel(name: string, position: Vector3, scale: number, url: string): { name: string, position: Vector3, scale: number, url: string } {
    return { name, position, scale, url };
}

// Adds a specified model to the scene by key
function addModelToScene(modelKey: keyof typeof models): void {
    const model = models[modelKey];

    const modelInstance = new Model(model.name, model.position, model.scale, model.url);

    modelInstance.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.value.add(modelScene);
        modelStore.addModel(modelInstance);
        modelStore.addGroupObjects(modelScene);
    });
}

// Adds a model to the scene at the current pointer intersection point
function addModelToSceneAtCursor(modelKey: keyof typeof models): void {
    const model = models[modelKey];

    if (!intersection()) return;

    const spawnPosition = restrictPositionToBoundaries(intersect.point);

    const modelInstance = new Model(model.name, spawnPosition, model.scale, model.url);

    modelInstance.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.value.add(modelScene);
        modelStore.addModel(modelInstance);
        modelStore.addGroupObjects(modelScene);
    });
}

// Handles pointer events for interactions
function handlePointerEvent(event: PointerEvent): void {
    updatePointerMode(event);

    if (event.type === 'pointermove') {
        if (intersection()) {
            attachGizmoToObject(intersectedGroupObject);
        }

        restricMoveToBoundaries();
    }
    else if (event.type === 'pointerdown' || event.type === 'click') {
        if (keyState.keyT) addModelToSceneAtCursor("table");
        if (keyState.keyG) addModelToSceneAtCursor("garlic");
        if (keyState.keyR) addModelToSceneAtCursor("rock");
    }
}

// Handles rotation using the scroll wheel when the left mouse button is down
function onWheel(event: WheelEvent): void {
    if (isLeftMouseButtonDown) {
        const delta = Math.sign(event.deltaY);
        const rotationSpeed = Math.PI / 2;
        rotationDelta = delta * rotationSpeed;

        intersectedGroupObject.rotation.y += rotationDelta;
    }
}

// Changes the colour of the currently selected object
function changeColour(colour: string): void {
    if (!intersectedGroupObject)
        return;

    intersectedGroupObject.children.forEach(child => {
        const c = child as Mesh;
        if (!c.name.toLowerCase().includes("outline")) {
            const mat = (c.material as MeshToonMaterial);

            if (mat) {
                (c.material as MeshToonMaterial).color = new Color(colour);
                return;
            }
        }
    });
}

// Tracks the state of keyboard inputs for specific keys
const keyState = reactive({
    keyT: false,
    keyG: false,
    keyR: false
});

// Updates key states when key events are triggered
function handleKeyEvent(event: KeyboardEvent, isDown: boolean): void {
    switch (event.code) {
        case 'KeyT': keyState.keyT = isDown; addModelToSceneAtCursor("table"); break;
        case 'KeyG': keyState.keyG = isDown; addModelToSceneAtCursor("garlic"); break;
        case 'KeyR': keyState.keyR = isDown;  addModelToSceneAtCursor("rock"); break;
    }
}

// Attaches a gizmo to a target object for transformation
function attachGizmoToObject(targetObject: Object3D): void {
    if (!targetObject || targetObject.name.includes("Floor")) {
        transformControlsGizmos.value.detach();
        return;
    }

    transformControlsGizmos.value.attach(targetObject);
    isSelected = true;
    changeColour(COLOUR_SELECTED);
}

// Detaches the gizmo from the current object
function detachGizmo(): void {
    transformControlsGizmos.value.detach();
    isSelected = false;
    changeColour(COLOUR_UNSELECTED);
}

// Sets up all necessary event listeners for interactions
function setupEventListeners(): void {
    const pointerMoveListener = (e: PointerEvent) => handlePointerEvent(e);
    const pointerDownListener = (e: PointerEvent) => handlePointerEvent(e);
    const wheelListener = (e: WheelEvent) => { onWheel(e) };
    const keyDownListener = (e: KeyboardEvent) => handleKeyEvent(e, true);
    const keyUpListener = (e: KeyboardEvent) => handleKeyEvent(e, false);

    document.addEventListener('pointermove', pointerMoveListener);
    document.addEventListener('pointerdown', pointerDownListener);
    // document.addEventListener('click', () => pointerDownListener);
    document.addEventListener('wheel', wheelListener);
    document.addEventListener('keydown', keyDownListener);
    document.addEventListener('keyup', keyUpListener);

    canvas.value.addEventListener("pointerup", detachGizmo);

    transformControlsGizmos.value.addEventListener("mouseDown", () => {
        if (controls.value) controls.value.enabled = false;
        isLeftMouseButtonDown = true;
    });

    transformControlsGizmos.value.addEventListener("mouseUp", () => {
        if (controls.value) controls.value.enabled = true;
        isLeftMouseButtonDown = false;
    });

    onUnmounted(() => {
        document.removeEventListener('pointermove', pointerMoveListener);
        document.removeEventListener('pointerdown', pointerDownListener);
        document.removeEventListener('wheel', wheelListener);
        document.removeEventListener('keydown', keyDownListener);
        document.removeEventListener('keyup', keyUpListener);
    });
}

onMounted(() => {
    setupEventListeners();
});
</script>

<template>
    <slot></slot>
</template>