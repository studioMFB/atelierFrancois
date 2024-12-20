<!-- <script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, reactive, ref, type Ref } from 'vue';
import { Color, Group, type Intersection, Material, Mesh, MeshBasicMaterial, MeshToonMaterial, Object3D, type Object3DEventMap, PerspectiveCamera, Raycaster, Scene, Vector2, Vector3 } from 'three';
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

let isDragging = false;
let dragStartPosition = new Vector3();

/* Utility functions */
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

// Finds the parent of a model, recursively traversing upward until it matches the root model name
function findModelParent(mesh: any): Group<Object3DEventMap> | null {
    if (!mesh.parent) return null;
    return mesh.parent.name.includes('root_model') ? mesh.parent : findModelParent(mesh.parent);
}

function updatePointer(event: PointerEvent): void {
    pointer.x = (event.clientX / canvas.value.clientWidth) * 2 - 1;
    pointer.y = -(event.clientY / canvas.value.clientHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera.value);
}

// Checks if the raycaster is ready by validating its dependencies
function isRaycasterReady(): boolean {
    if (!raycaster) return false;
    if (modelStore.getGroupsObjects().length < 1) return false;
    // if (modelStore.getGroupsObjects().every(obj => obj)) return false;

    return true;
}

function handleIntersection(): boolean {
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

    if (!handleIntersection()) return;

    const spawnPosition = restrictPositionToBoundaries(intersect.point);

    const modelInstance = new Model(model.name, spawnPosition, model.scale, model.url);

    modelInstance.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.value.add(modelScene);
        modelStore.addModel(modelInstance);
        modelStore.addGroupObjects(modelScene);
    });
}

// Handles pointer events for interactions
let hoveredObject: Object3D | null = null; // Track the currently hovered object
const originalMaterials: Map<Object3D, Material[]> = new Map(); // Store original materials

function handlePointerEvent(event: PointerEvent): void {
    updatePointerMode(event);

    if (event.type === 'pointermove') {
        // Perform raycasting to detect hovered object
        const intersectedObject = handleIntersection(); // Replace with your raycasting logic

        // Highlight the hovered object
        if (intersectedObject && intersectedGroupObject !== hoveredObject) {
            // Restore previous hovered object's original material
            if (hoveredObject) {
                resetObjectMaterial(hoveredObject);
            }

            // Highlight the new object
            hoveredObject = intersectedGroupObject;
            highlightObject(hoveredObject);
        } else if (!intersectedObject && hoveredObject) {
            // Restore material if no object is hovered
            resetObjectMaterial(hoveredObject);
            hoveredObject = null;
        }


        restricMoveToBoundaries();
    }
    else if (event.type === 'pointerdown') {
        if (keyState.keyT) addModelToSceneAtCursor("table");
        if (keyState.keyG) addModelToSceneAtCursor("garlic");
        if (keyState.keyR) addModelToSceneAtCursor("rock");
    }
}

function highlightObject(object: Object3D): void {
    if (!originalMaterials.has(object)) {
        // Store the original material
        originalMaterials.set(
            object,
            (object as Mesh).material as Material[]
        );
    }

    // Apply highlight material (change color or emissive)
    const highlightMaterial = new MeshBasicMaterial({ color: 0xffa500 }); // Orange
    (object as Mesh).material = highlightMaterial;
}

function resetObjectMaterial(object: THREE.Object3D): void {
    if (originalMaterials.has(object)) {
        (object as THREE.Mesh).material = originalMaterials.get(object)!;
        originalMaterials.delete(object); // Remove from the map
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
// function changeColour(colour: string): void {
//     if (!intersectedGroupObject) return;

//     intersectedGroupObject.children.forEach((child) => {
//         const mesh = child as Mesh;
//         // if (material) {
//         //     material.color = new Color(colour);
//         // }
//         if (!mesh.name.toLowerCase().includes("outline")) {
//             const material = mesh.material as MeshBasicMaterial;
//             if (material) {
//                 (mesh.material as MeshToonMaterial).color = new Color(colour);
//                 return;
//             }
//         }
//     });
// }

function changeColour(colour: string): void {
    intersectedGroupObject.children.forEach((child) => {
        const mesh = child as Mesh;
        const material = mesh.material as MeshBasicMaterial;
        if (material) {
            material.color = new Color(colour);
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
        case 'KeyR': keyState.keyR = isDown; addModelToSceneAtCursor("rock"); break;
    }
}

// Attaches a gizmo to a target object for transformation
function attachGizmoToObject(targetObject: Object3D): void {
    if (!targetObject || targetObject.name.includes("Floor")) {
        // transformControlsGizmos.value.detach();
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

// Event handlers
function handlePointerDown(event: PointerEvent): void {
    updatePointer(event);
    if (handleIntersection() && intersectedGroupObject) {
        isDragging = true;
        dragStartPosition.copy(intersectedGroupObject.position);
        changeColour(COLOUR_SELECTED);
    }
}

function handlePointerMove(event: PointerEvent): void {
    if (isDragging && intersectedGroupObject) {
        updatePointer(event);
        const intersects = raycaster.intersectObjects(modelStore.getGroupsObjects(), true);
        if (intersects.length > 0) {
            const intersect = intersects[0];
            const newPosition = restrictPositionToBoundaries(intersect.point);
            intersectedGroupObject.position.copy(newPosition);
        }
    }
}

function handlePointerUp(): void {
    if (isDragging) {
        isDragging = false;
        if (intersectedGroupObject) {
            changeColour(COLOUR_UNSELECTED);
        }
    }
}

// Sets up all necessary event listeners for interactions
function setupEventListeners(): void {
    // const pointerMoveListener = (e: PointerEvent) => handlePointerEvent(e);
    // const pointerDownListener = (e: PointerEvent) => handlePointerEvent(e);
    const wheelListener = (e: WheelEvent) => { onWheel(e) };
    const keyDownListener = (e: KeyboardEvent) => handleKeyEvent(e, true);
    const keyUpListener = (e: KeyboardEvent) => handleKeyEvent(e, false);

    // document.addEventListener('pointermove', pointerMoveListener);
    // document.addEventListener('pointerdown', pointerDownListener);
    // document.addEventListener('click', () => pointerDownListener);

    canvas.value.addEventListener('pointerdown', handlePointerDown);
    canvas.value.addEventListener('pointermove', handlePointerMove);
    canvas.value.addEventListener('pointerup', handlePointerUp);

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
        // document.removeEventListener('pointermove', pointerMoveListener);
        // document.removeEventListener('pointerdown', pointerDownListener);

        canvas.value.addEventListener('pointerdown', handlePointerDown);
        canvas.value.addEventListener('pointermove', handlePointerMove);
        canvas.value.addEventListener('pointerup', handlePointerUp);

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
</template> -->


<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, reactive, ref, type Ref } from 'vue';
import { Color, Group, type Intersection, Mesh, MeshBasicMaterial, MeshToonMaterial, Object3D, type Object3DEventMap, PerspectiveCamera, Plane, PlaneGeometry, Raycaster, Scene, Vector2, Vector3 } from 'three';
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
raycaster.near = 0.1; // Minimum distance for intersection
raycaster.far = 1000; // Maximum distance for intersection

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

// function intersection(): boolean {
//     if (!isRaycasterReady()) {
//         console.warn("Raycaster is not ready. Check dependencies and object configurations.");
//         return false;
//     }

//     // If cached intersects exist and are still valid, use them
//     if (cachedIntersects.length > 0) {
//         intersect = cachedIntersects[0];
//         intersectedGroupObject = findModelParent(intersect.object as Mesh)!;
//         return true;
//     }

//     const intersects = raycaster.intersectObjects(modelStore.getGroupsObjects(), true);
//     cachedIntersects = intersects; // Cache results for future use

//     if (intersects.length > 0) {
//         intersect = intersects[0];
//         intersectedGroupObject = findModelParent(intersect.object as Mesh)!;
//         return true;
//     }

//     return false;
// }

// Add this constant at the top with your other constants
const GROUND_Y_POSITION = 0; // Or whatever your ground plane Y position is

// Modify your intersection function to handle ground plane intersection explicitly
function intersection(): boolean {
    if (!isRaycasterReady()) {
        console.warn("Raycaster is not ready. Check dependencies and object configurations.");
        return false;
    }

    // Create a virtual ground plane for consistent intersection
    const groundNormal = new Vector3(0, 1, 0);
    const groundPlane = new Plane(groundNormal, -GROUND_Y_POSITION);
    
    // Get intersection point with ground plane
    const intersectionPoint = new Vector3();
    raycaster.ray.intersectPlane(groundPlane, intersectionPoint);

    if (intersectionPoint) {
        // Create a synthetic intersection result
        intersect = {
            point: intersectionPoint,
            distance: camera.value.position.distanceTo(intersectionPoint),
            object: scene.value.getObjectByName('ground') || scene.value.children[0],
            face: null,
            faceIndex: 0,
            uv: new Vector2(0,0)
        };

        // Check if point is within grid boundaries
        if (intersectionPoint.x >= gridLimits.minX && 
            intersectionPoint.x <= gridLimits.maxX && 
            intersectionPoint.z >= gridLimits.minZ && 
            intersectionPoint.z <= gridLimits.maxZ) {
            return true;
        }
    }

    // Fallback to original object intersection logic
    const intersects = raycaster.intersectObjects(modelStore.getGroupsObjects(), true)
        .sort((a, b) => a.distance - b.distance);

    if (intersects.length > 0) {
        intersect = intersects[0];
        intersectedGroupObject = findModelParent(intersect.object as Mesh)!;
        cachedIntersects = intersects;
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

    // Get canvas bounds
    const rect = canvas.value.getBoundingClientRect();

    // Calculate pointer position relative to canvas
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    try {
        if (raycaster && pointer && camera.value) {
            raycaster.setFromCamera(pointer, camera.value);
            cachedIntersects = []; // Reset cache as pointer mode changes
        }
    } catch (e: any) {
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

    // Define grid size for snapping
    const gridSize = 0.5;
    
    // Get the intersection point
    const point = intersect.point.clone();
    
    // Snap to grid
    const spawnPosition = new Vector3(
        Math.round(point.x / gridSize) * gridSize,
        GROUND_Y_POSITION, // Always spawn at ground level
        Math.round(point.z / gridSize) * gridSize
    );

    // Ensure position is within boundaries
    const boundedPosition = restrictPositionToBoundaries(spawnPosition);

    // console.log('Spawning at:', boundedPosition); // Debug output

    const modelInstance = new Model(
        model.name, 
        boundedPosition,
        model.scale, 
        model.url
    );

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

// Add this function to visualize the spawn area
function debugSpawnArea(): void {
    const geometry = new PlaneGeometry(
        gridLimits.maxX - gridLimits.minX, 
        gridLimits.maxZ - gridLimits.minZ
    );
    const material = new MeshBasicMaterial({ 
        color: 0x00ff00,
        transparent: true,
        opacity: 0.2,
        side: 2 // DoubleSide 
    });
    const debugPlane = new Mesh(geometry, material);
    debugPlane.rotateX(-Math.PI / 2);
    debugPlane.position.y = GROUND_Y_POSITION + 0.01; // Slightly above ground
    scene.value.add(debugPlane);
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
        case 'KeyR': keyState.keyR = isDown; addModelToSceneAtCursor("rock"); break;
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
    // debugSpawnArea();
});
</script>

<template>
    <slot></slot>
</template>