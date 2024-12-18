<script setup lang="ts">
import { computed, inject, onMounted, reactive, ref, type Ref } from 'vue';
import { Color, Group, type Intersection, Mesh, MeshToonMaterial, Object3D, type Object3DEventMap, PerspectiveCamera, Raycaster, Scene, Vector2, Vector3 } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

import { Model } from '@/components/modelViewer/resources/model';
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// Colour //
const COLOUR_SELECTED = '#f47653';
const COLOUR_UNSELECTED = '#e2eab8';
// GLTF //
const GLTF_TABLE = new URL('./../modelViewer/models/table/1/littlewood_furniture.gltf', import.meta.url).toString();
const GLTF_GARLIC = new URL('./../modelViewer/models/garlic/scene.gltf', import.meta.url).toString();
const GLTF_STONE = new URL('./../modelViewer/models/piedra/scene.gltf', import.meta.url).toString();

const props = defineProps<{
    canvas: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas) as Ref<HTMLCanvasElement>;;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const transformControlsGizmos = ref(inject("TransformGizmos")) as Ref<TransformControls>;
const controls = ref(inject("OrbitControls")) as Ref<OrbitControls>;

const allModelsArray = inject("allModelsArray", [] as Group<Object3DEventMap>[]);

const raycaster = new Raycaster();
const pointer = new Vector2();
let intersect: Intersection<Object3D<Object3DEventMap>>;
let intersectedGroupObject: Group<Object3DEventMap>;

// const modelsPool = reactive([]) as Model[];
const modelsPool = inject("modelsPool", [] as Model[]);

// defineExpose({
//     modelsPool
// });

let isLeftMouseButtonDown = false;
let isSelected = false;
let rotationDelta = 0;

// GRID in meters
const GRID_SIZE = 5;
const gridLimits = {
    minX: -GRID_SIZE / 2,  // Minimum X value
    maxX: GRID_SIZE / 2,   // Maximum X value
    minY: 0,    // Minimum Y value (assuming Y is up)
    maxY: 0,   // Maximum Y value
    minZ: -GRID_SIZE / 2,  // Minimum Z value
    maxZ: GRID_SIZE / 2    // Maximum Z value
};

function findModelParent(mesh: any): Group<Object3DEventMap> | null {
    // If the mesh has no parent, return null
    if (!mesh.parent) {
        return null;
    }

    const rootName = 'root_model';
    // If the parent is an instance of GameObject, return it
    if (mesh.parent.name === rootName) {
        return mesh.parent as Group<Object3DEventMap>;
    }

    // Otherwise, recursively call the function with the parent as the argument
    return findModelParent(mesh.parent);
}

// RAYCASTER //
function intersection(): boolean {
    if (!raycaster || allModelsArray.length < 1 || !allModelsArray.every(obj => obj))
        return false;

    const intersects = raycaster.intersectObjects(allModelsArray, true); // true for recursive checks

    if (intersects.length > 0) {
        intersect = intersects[0];
        intersectedGroupObject = findModelParent(intersect.object as Mesh)!;
        return true;
    }
    else {
        return false;
    }
}

function restrictPositionToBoundaries(position: Vector3) {
    return new Vector3(
        Math.max(gridLimits.minX, Math.min(gridLimits.maxX, position.x)),
        gridLimits.minY, // Fixed to ground level
        Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, position.z))
    );
}

function restricMoveToBoundaries() {
    if (intersectedGroupObject) {
        intersectedGroupObject.position.copy(restrictPositionToBoundaries(intersectedGroupObject.position));
    }
}

function updatePointerMode(event: PointerEvent) {
    event.preventDefault();

    pointer.x = (event.clientX / canvas.value.clientWidth) * 2 - 1;
    pointer.y = -(event.clientY / canvas.value.clientHeight) * 2 + 1;

    try {
        if (raycaster && pointer && camera.value)
            raycaster.setFromCamera(pointer, camera.value);
    }
    catch (e: any) {
        console.error("Error setting raycaster:", e);
    }
}

const models = reactive({
    table: setupModel("table", new Vector3(-0.5, 0, -0.5), 1, GLTF_TABLE),
    garlic: setupModel("garlic", new Vector3(-0.5, 0, -0.5), 10, GLTF_GARLIC),
    stone: setupModel("stone", new Vector3(-0.5, 0, -0.5), 0.4, GLTF_STONE),
});

function setupModel(name: string, position: Vector3, scale: number, url: string) {
    return { name, position, scale, url };
}

function addModelToScene(modelKey: keyof typeof models) {
    const model = models[modelKey];

    const modelInstance = new Model(model.name, model.position, model.scale, model.url);

    modelInstance.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.value.add(modelScene); // to be view in the scene
        modelsPool.push(modelInstance); // For Animation update
        allModelsArray.push(modelScene); // For Raycasting
    });
}

function addModelToSceneAtCursor(modelKey: keyof typeof models) {
    const model = models[modelKey];

    if (!intersection()) return; // Ensure there is a valid intersection point.

    // Restrict the intersection point to grid boundaries.
    const spawnPosition = restrictPositionToBoundaries(intersect.point);

    // Create a new model instance with the intersection point as the position.
    const modelInstance = new Model(model.name, spawnPosition, model.scale, model.url);

    modelInstance.initMesh().then((modelScene: Group<Object3DEventMap>) => {
        scene.value.add(modelScene); // to be view in the scene
        modelsPool.push(modelInstance); // For Animation update
        allModelsArray.push(modelScene); // For Raycasting
    });
}


function handlePointerEvent(event: PointerEvent) {
    updatePointerMode(event);

    if (event.type === 'pointermove') {
        if (intersection()) {
            // console.log("Object intersected:", intersectedGroupObject);
            attachGizmoToObject(intersectedGroupObject);
        }

        restricMoveToBoundaries();
    }
    else if (event.type === 'pointerdown') {
        if (keyState.keyT) addModelToScene("table");
        if (keyState.keyG) addModelToScene("garlic");
        if (keyState.keyR) addModelToScene("stone");
    }
}

function onWheel(event: WheelEvent) {
    // Rotate the model by increment of 90'.
    if (isLeftMouseButtonDown) {
        // Determine the scroll direction and amount
        const delta = Math.sign(event.deltaY);
        // Define the rotation speed
        const rotationSpeed = Math.PI / 2;
        // Update the rotation delta
        rotationDelta = delta * rotationSpeed;

        intersectedGroupObject.rotation.y += rotationDelta;
    }
}

function changeColour(colour: string) {
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

const keyState = reactive({
    keyT: false,
    keyG: false,
    keyR: false
});

function handleKeyEvent(event: KeyboardEvent, isDown: boolean) {
    switch (event.code) {
        case 'KeyT': keyState.keyT = isDown; break;
        case 'KeyG': keyState.keyG = isDown; break;
        case 'KeyR': keyState.keyR = isDown; break;
    }
}

function attachGizmoToObject(targetObject: Object3D) {
    if (!targetObject || targetObject.name === "Main_Plane") {
        transformControlsGizmos.value.detach();
        return;
    }

    transformControlsGizmos.value.attach(targetObject);
    isSelected = true;
    changeColour(COLOUR_SELECTED);
}

function detachGizmo() {
    transformControlsGizmos.value.detach();
    isSelected = false;
    changeColour(COLOUR_UNSELECTED);
}

function setupEventListeners(): void {
    // Pointer
    document.addEventListener('pointermove', (e: PointerEvent) => handlePointerEvent(e));
    document.addEventListener('pointerdown', (e: PointerEvent) => handlePointerEvent(e));

    document.addEventListener('wheel', (e: WheelEvent) => { onWheel(e) });

    // Keys
    document.addEventListener('keydown', (e) => handleKeyEvent(e, true));
    document.addEventListener('keyup', (e) => handleKeyEvent(e, false));

    canvas.value.addEventListener("pointerup", detachGizmo);

    transformControlsGizmos.value.addEventListener("mouseDown", () => {
        if (controls.value) controls.value.enabled = false;
        isLeftMouseButtonDown = true;
    });

    transformControlsGizmos.value.addEventListener("mouseUp", () => {
        if (controls.value) controls.value.enabled = true;
        isLeftMouseButtonDown = false;
    });
}

onMounted(() => {
    setupEventListeners();

    // To populate the scene initially
})
</script>

<template>
    <slot></slot>
</template>