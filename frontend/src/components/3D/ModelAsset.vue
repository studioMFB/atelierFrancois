<script setup lang="ts">
import { computed, inject } from 'vue';

import { Box3, BoxHelper, Color, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, MeshToonMaterial,
    type Object3DEventMap, PlaneGeometry, Scene, Vector3 } from 'three';
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const props = defineProps<{
    name: string,
    position: Vector3,
    scaleRatio: number,
    gltfUrl: string,
}>();

const scene = computed(() => inject("MainScene") as Scene);
const name = computed(() => props.name);
const position = computed(() => props.position);
const scaleRatio = computed(() => props.scaleRatio);
const gltfUrl = computed(() => props.gltfUrl);

// Colour //
const COLOUR_SELECTED = '#f47653';
const COLOUR_UNSELECTED = '#e2eab8';

let allModelsArray: THREE.Group<THREE.Object3DEventMap>[] = [];
let boundingBox: Box3;
let boxHelper: BoxHelper;
let modelScene: Group<Object3DEventMap>;


function changeColour(colour: string) {
    if (!modelScene)
        return;

        modelScene.traverse((child: any) => {
        if (child.isMesh) {
            if (!child.name.toLowerCase().includes("outline")) {
                (child.material as MeshToonMaterial).color = new Color(colour);
            }
        }
    });
}

async function initMesh(scene: Scene, modelsArray: Group<Object3DEventMap>[]): Promise<void> {
    const loader = new GLTFLoader();

    const parameters = {
        color: new Color(0xe2eab8)
    }

    const matToon = new MeshToonMaterial(parameters);
    matToon.opacity = .005;
    const matColor = new MeshBasicMaterial({ color: 0x3c3c3c });

    loader.load(gltfUrl.value, (gltf: GLTF) => {

        modelScene = gltf.scene;

        gltf.scene.traverse((child: any) => {
            if (child.isMesh) {
                child.geometry.computeBoundingBox();
            }

            if (child.name.toLowerCase().includes("outline")) {
                child.material = matColor;
            }
            else {
                child.material = matToon;
                child.castShadow = true;
            }

            child.name += "-model";
        });

        modelScene.name = 'root_model_scene';
        modelScene.scale.multiplyScalar(scaleRatio.value);
        modelScene.position.set(position.value.x, position.value.y, position.value.z);

        boxHelper = new BoxHelper(modelScene, 0xff0000);
        boxHelper.name = 'boxHelper_model';
        boundingBox = new Box3().setFromObject(boxHelper);
        boxHelper.update();

        // If you want a visible bounding box
        scene.add(modelScene);
        // scene.add(this.scene, this.boxHelper);
        modelsArray.push(modelScene);
    });
}

function updateMatrix() {
    if (!scene.value)
        return;

    if (boxHelper) {
        boxHelper.position.set(scene.value.position.x, scene.value.position.y, scene.value.position.z);
        boxHelper.update();
    }

    if (boundingBox)
        boundingBox.setFromObject(scene.value);
}

// DEVELOPMENT ONLY
initMesh(scene.value, allModelsArray).then(() => {

    // adjustGizmoPosition(table.scene, transformControls);

    // loopController.addToUpdate(table);
    // furnitureArray.push(table);

    // GHOST //        
    // // const bbox = new THREE.Box3().setFromObject(table.scene); 
    // const bboxSize = new THREE.Vector3();
    const bboxSize = new Vector3(1.5, 0, 0.55);
    // bbox.getSize(bboxSize);

    const geometry = new PlaneGeometry(bboxSize.x, bboxSize.z, 1, 1);
    geometry.rotateX(- Math.PI / 2);
    geometry.rotateY(- Math.PI / 2);

    const material = new MeshStandardMaterial({
        color: new Color(COLOUR_SELECTED),
        visible: true,
        opacity: 0.4,
    });

    const ghost = new Mesh(geometry, material);
    ghost.name = "ghost";
    ghost.receiveShadow = true;
    ghost.position.set(-0.1, 0, 0);
    scene.value.add(ghost);

    // transformControls.addEventListener('change', () => {
    //     if (transformControls.mode === 'translate') {
    //         // Snap position to grid
    //         // position.x = Math.round(position.x / 0.5) * 0.5; // Assuming 50 cm grid
    //         // position.z = Math.round(position.z / 0.5) * 0.5;
    //         // Update the position of the plane
    //         if (ghost && intersected)
    //             ghost.position.set(intersected.position.x, 0, intersected.position.z);
    //     }
    // });
});
</script>

<template>
    <slot></slot>
</template>