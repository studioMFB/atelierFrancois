<script setup lang="ts">
import { computed, inject, onMounted } from 'vue';
import { Color, Group, type Object3DEventMap, PerspectiveCamera, Raycaster, Scene, Vector2, Vector3 } from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

import { Model } from '@/components/modelViewer/resources/model';


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

const canvas = computed(() => props.canvas);
const scene = computed(() => inject("MainScene") as Scene);
const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera);
const gizmos = computed(() => inject("TransformGizmos") as TransformControls);
// const updatables = computed(() => inject("GameLoopUpdatables") as any[]);

console.log("MainScene ", scene.value);
console.log("PerspectiveCamera ", camera.value);
console.log("TransformGizmos ", gizmos.value);

const raycaster = new Raycaster();
const pointer = new Vector2();
let intersect: THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>;
let intersected: THREE.Group<THREE.Object3DEventMap>;
const allModelsArray: THREE.Group<THREE.Object3DEventMap>[] = [];
const furnitureArray: any[] = [];

let isLeftMouseButtonDown = false;
let isSelected = false;
let isShiftDown = false;
let isKeyGDown = false;
let isKeyRDown = false;

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

onMounted(() => {
    // Pointer
    document.addEventListener("pointermove", (e: PointerEvent) => { onPointerMove(e) });
    document.addEventListener("pointerdown", (e: PointerEvent) => { onPointerDown(e) });

    document.addEventListener('wheel', (e: WheelEvent) => { onWheel(e) });

    // Keys
    document.addEventListener('keydown', (e: KeyboardEvent) => { onDocumentKeyDown(e) });
    document.addEventListener('keyup', (e: KeyboardEvent) => { onDocumentKeyUp(e) })

    canvas.value.addEventListener("pointerup", () => {
        gizmos.value.detach();
        changeColour(COLOUR_UNSELECTED);
    });
})

// function addToUpdate(object: any) {
//   updatables.value.push(object);
// }

function findModelParent(mesh: any): Group<Object3DEventMap> | null {
    // If the mesh has no parent, return null
    if (!mesh.parent) {
        return null;
    }

    const rootName = 'root_model_scene';
    // If the parent is an instance of GameObject, return it
    if (mesh.parent.name === rootName) {
        return mesh.parent as Group<Object3DEventMap>;
    }

    // Otherwise, recursively call the function with the parent as the argument
    return findModelParent(mesh.parent);
}

// RAYCASTER //
function intersection(): boolean {
    try {
        raycaster.setFromCamera(pointer, camera.value);
    }
    catch (e: any) {
        throw new Error(e.toString());
    }

    const intersects = raycaster.intersectObjects(allModelsArray, true);

    if (intersects.length > 0) {
        intersect = intersects[0];
        intersected = findModelParent(intersect.object as THREE.Mesh)!;

        // this.adjustGizmoPosition(this.intersected);

        // const selectedObject = intersects[0].object;

        // Move to function
        // Render a red square to show where the model would land.
        // if (this.terrainGhost && this.terrainGhost.mesh && this.intersect && this.intersect.face) {
        //     this.terrainGhost.mesh.position.copy(this.intersect.point).add(this.intersect.face.normal);
        //     this.terrainGhost.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
        //     this.terrainGhost.mesh.position.y = GHOST_OFFSET;
        // }
        return true;
    }
    else {
        return false;
    }
}

// RAYCASTER //

function onPointerMove(event: PointerEvent) {
    updatePointerMode(event);

    if (!isSelected)
        changeColour(COLOUR_UNSELECTED);

    if (intersection()) {
        changeColour(COLOUR_SELECTED);
        // this.adjustGizmoPosition(this.intersected, this.transformControls);
        gizmos.value.attach(intersected);
    }

    restricMoveToBoundaries()
}

function restricMoveToBoundaries() {
    // This is currently missing the min and max of the boundary box.
    // This is needed to stop the model accuratly.

    if (intersected) {
        // Constrain X position
        intersected.position.x = Math.max(gridLimits.minX, Math.min(gridLimits.maxX, intersected.position.x));

        // Stop the lifting the model up.
        intersected.position.y = 0;

        // Constrain Z position
        intersected.position.z = Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, intersected.position.z));
    }
}

function updatePointerMode(event: PointerEvent) {
    event.preventDefault();
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onPointerDown(event: PointerEvent) {
    // console.log("onPointerDown");
    // console.log("isShiftDown ", isShiftDown);
    // console.log("this.isKeyGDown ", isKeyGDown);
    // console.log("this.isKeyRDown ", isKeyRDown);

    // Add Table
    if (isShiftDown) {
        //     this.scene.remove(this.intersected);
        //     this.modelsArray.splice(this.modelsArray.indexOf(this.intersected), 1);
        // } else {

        const table = new Model("table", new Vector3(-0.5, 0, -0.5), 1, GLTF_TABLE);

        console.log("onPointerDown => isShiftDown => table ", table);

        table.initMesh(scene.value, allModelsArray).then(() => {
            // this.adjustGizmoPosition(table.scene, this.transformControls);
            // addToUpdate(table);
            furnitureArray.push(table);
        });

        // Move to function
        // Render a red square to show where the model would land.
        // if (table && table.mesh && this.intersect && this.intersect.face) {
        //     table.mesh.position.copy(this.intersect.point).add(this.intersect.face.normal);
        //     table.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
        //     table.mesh.position.y = TERRAIN_OFFSET;
        // }
    }
    if (isKeyGDown) {
        console.log("G");
        const garlic = new Model("garlic", new Vector3(0, 0, 0), 10, GLTF_GARLIC);
        garlic.initMesh(scene.value, allModelsArray).then(() => {
            // this.adjustGizmoPosition(garlic.scene, this.transformControls);
            // addToUpdate(garlic);
            furnitureArray.push(garlic);
            // this.ornamentArray.push(garlic);
        });
    }
    if (isKeyRDown) {
        console.log("R");
        const stone = new Model("stone", new Vector3(0, 0, 0), 0.5, GLTF_STONE);
        stone.initMesh(scene.value, allModelsArray).then(() => {
            // this.adjustGizmoPosition(stone.scene, this.transformControls);
            // addToUpdate(stone);
            furnitureArray.push(stone);
            // this.ornamentArray.push(stone);
        });
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

        intersected.rotation.y += rotationDelta;
    }
}

function onDocumentKeyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
        case 16: isShiftDown = true;
            // console.log("SHIFT down"); 
            break;
        case 71: isKeyGDown = true;
            // console.log("G down"); 
            break;
        case 82: isKeyRDown = true;
            // console.log("R down"); 
            break;
    }
}

function onDocumentKeyUp(event: KeyboardEvent) {
    switch (event.keyCode) {
        case 16: isShiftDown = false;
            // console.log("SHIFT up"); 
            break;
        case 71: isKeyGDown = false;
            //  console.log("G up"); 
            break;
        case 82: isKeyRDown = false;
            //  console.log("R up"); 
            break;
    }
}

function changeColour(colour: string) {
    if (!intersected)
        return;

    intersected.children.forEach(child => {
        const c = child as THREE.Mesh;
        if (!c.name.toLowerCase().includes("outline")) {
            const mat = (c.material as THREE.MeshToonMaterial);

            if (mat) {
                (c.material as THREE.MeshToonMaterial).color = new Color(colour);
                return;
            }
        }
    });
}
</script>

<template>
    <slot></slot>
</template>