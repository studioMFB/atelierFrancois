<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, reactive, ref, type Ref } from 'vue';
import { BufferGeometry, CircleGeometry, Color, Group, type Intersection, LineBasicMaterial, LineLoop, Mesh, MeshBasicMaterial, MeshToonMaterial, Object3D, type Object3DEventMap, PerspectiveCamera, Plane, PlaneGeometry, Raycaster, Scene, Vector2, Vector3 } from 'three';
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

// Add this constant at the top with your other constants
const GROUND_Y_POSITION = 0; // Or whatever your ground plane Y position is

// Modify your intersection function to handle ground plane intersection explicitly
function handleIntersection(): boolean {
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
            uv: new Vector2(0, 0)
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

const spawnPreviewMesh = ref<Mesh | null>(null);
// const spawnPreviewMesh = ref<LineLoop | null>(null);
const PREVIEW_SIZE = 0.3; // Adjust size as needed
const PREVIEW_COLOR = 0xf47653; // Using your selected color theme

// Add this function to create the preview mesh
function createSpawnPreview(): void {
    const geometry = new CircleGeometry(PREVIEW_SIZE, 32);
    
    // hollow
     // Extract the vertices from the circle geometry to create an outline
    //  const points = geometry.getAttribute('position');
    
    // Create a new buffer geometry for the line
    // const lineGeometry = new BufferGeometry();
    // lineGeometry.setAttribute('position', points);
    
    // Create line material
    // const material = new LineBasicMaterial({ 
    //     color: PREVIEW_COLOR,
    //     transparent: true,
    //     opacity: 0.8,
    //     linewidth: 1 // Note: due to WebGL limitations, line width is usually limited to 1
    // });

    // plain
    const material = new MeshBasicMaterial({
        color: PREVIEW_COLOR,
        side: 2, // DoubleSide
        transparent: true,
        opacity: 0.5,
    });

    // hollow
    // spawnPreviewMesh.value = new LineLoop(lineGeometry, material);
    // plain
    spawnPreviewMesh.value = new Mesh(geometry, material);
    spawnPreviewMesh.value.rotateX(-Math.PI / 2); // Lay flat on the ground
    spawnPreviewMesh.value.position.y = 0.5; // Slightly above ground to prevent z-fighting

    scene.value.add(spawnPreviewMesh.value);
}

let pulseAnimation: number;
const PULSE_SPEED = .7;

// Add this function to animate the preview
function animatePreview(): void {
    if (spawnPreviewMesh.value) {
        const material = spawnPreviewMesh.value.material as MeshBasicMaterial;
        material.opacity = 0.3 + Math.sin(Date.now() * 0.003 * PULSE_SPEED) * 0.2;
    }
    pulseAnimation = requestAnimationFrame(animatePreview);
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

            // Update preview visibility based on spawn key state
            if (spawnPreviewMesh.value) {
                spawnPreviewMesh.value.visible = isSpawnKeyPressed();
            }

            // Only update position if preview is visible
            if (spawnPreviewMesh.value?.visible) {
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
                    if (spawnPreviewMesh.value &&
                        snappedPosition.x >= gridLimits.minX &&
                        snappedPosition.x <= gridLimits.maxX &&
                        snappedPosition.z >= gridLimits.minZ &&
                        snappedPosition.z <= gridLimits.maxZ) {
                        spawnPreviewMesh.value.position.copy(snappedPosition);
                        spawnPreviewMesh.value.visible = true;
                    } else if (spawnPreviewMesh.value) {
                        spawnPreviewMesh.value.visible = false;
                    }
                }
            }

            cachedIntersects = [];
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

    if (!handleIntersection()) return;

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

    const modelInstance = new Model(model.name, boundedPosition, model.scale, model.url);

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
        if (handleIntersection()) {
            attachGizmoToObject(intersectedGroupObject);
        }

        restricMoveToBoundaries();
    }
    else if (event.type === 'pointerdown') {
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
    keyR: false,
});

function isSpawnKeyPressed(): boolean {
    return keyState.keyT || keyState.keyG || keyState.keyR;
}

// Updates key states when key events are triggered
function handleKeyEvent(event: KeyboardEvent, isDown: boolean): void {
    switch (event.code) {
        case 'KeyT': keyState.keyT = isDown; addModelToSceneAtCursor("table"); break;
        case 'KeyG': keyState.keyG = isDown; addModelToSceneAtCursor("garlic"); break;
        case 'KeyR': keyState.keyR = isDown; addModelToSceneAtCursor("rock"); break;
    }
}
// function handleKeyEvent(event: KeyboardEvent, isDown: boolean): void {
//     switch (event.code) {
//         case 'KeyT': keyState.keyT = isDown; break;
//         case 'KeyG': keyState.keyG = isDown; break;
//         case 'KeyR': keyState.keyR = isDown; break;
//     }
// }

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
    createSpawnPreview();
    animatePreview();
});

onUnmounted(() => {
    if (spawnPreviewMesh.value) {
        scene.value.remove(spawnPreviewMesh.value);
        spawnPreviewMesh.value.geometry.dispose();
        (spawnPreviewMesh.value.material as MeshBasicMaterial).dispose();
    }

    cancelAnimationFrame(pulseAnimation);
});
</script>

<template>
    <slot></slot>
</template>