<script setup lang="ts">
import { computed, inject, onMounted} from 'vue';

import { Color, DoubleSide, ExtrudeGeometry, Group, Mesh, MeshBasicMaterial, MeshStandardMaterial, 
    PlaneGeometry, Scene, ShadowMaterial, Shape, Vector2, Vector3, type Object3DEventMap } from 'three';

import { useModelStore } from '@/stores/modelStore';
const modelStore = useModelStore();


const props = defineProps<{
    dimension: Vector2,
    segment: Vector2,
    position: Vector3,
}>();

const scene = computed(() => inject("MainScene") as Scene);
const dimension = computed(() => props.dimension);
const segment = computed(() => props.segment);
const position = computed(() => props.position);

const modelScene: Group<Object3DEventMap> = new Group<Object3DEventMap>();

function roundEdgedBox() {
    const w = 5.2;
    const d = 5.2;
    const r = 0.2;
    const h = 0.1;

    //Generate the rounded rect shape
    const shape = new Shape();

    shape.moveTo(-w / 2, -d / 2 + r);
    shape.lineTo(-w / 2, d / 2 - r);
    shape.absarc(-w / 2 + r, d / 2 - r, r, 1 * Math.PI, 0.5 * Math.PI, true);
    shape.lineTo(w / 2 - r, d / 2);
    shape.absarc(w / 2 - r, d / 2 - r, r, 0.5 * Math.PI, 0 * Math.PI, true);
    shape.lineTo(w / 2, -d / 2 + r);
    shape.absarc(w / 2 - r, -d / 2 + r, r, 2 * Math.PI, 1.5 * Math.PI, true);
    shape.lineTo(-w / 2 + r, -d / 2);
    shape.absarc(-w / 2 + r, -d / 2 + r, r, 1.5 * Math.PI, 1 * Math.PI, true);

    //This is the material that is used to stop the
    //lines in the back from showing
    const mat = new MeshBasicMaterial({
        color: new Color(0xe5e0d8),
        side: DoubleSide,
        depthTest: true,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1
    });

    const geom = new ExtrudeGeometry(shape, { depth: h, bevelEnabled: false });

    const mesh = new Mesh(geom, mat);
    mesh.rotateX(1.57);
    mesh.position.y = -0.01;

    scene.value.add(mesh);
}

function initMesh(isVisible: boolean, opacity: number, colour?: Color): void {
    // GROUND //
    const geometry: PlaneGeometry = new PlaneGeometry(dimension.value.x, dimension.value.y, segment.value.x, segment.value.y);
    geometry.rotateX(- Math.PI / 2);

    const material = new MeshStandardMaterial({
        color: colour || new Color(0xff0000),
        visible: isVisible,
        opacity: opacity,
    });
    const ground = new Mesh(geometry, material);
    const name = "Main_Plane";
    ground.name = `Main_Plane_child_model`;
    ground.receiveShadow = false;

    ground.position.set(position.value.x, position.value.y, position.value.z);

    // SHADOW GROUND //
    const shadowGround: Mesh = ground.clone();
    shadowGround.material = new ShadowMaterial({
        opacity: .5,
        color: "#888888",
        side: DoubleSide,
        transparent: true
    });

    shadowGround.receiveShadow = true;
    shadowGround.position.set(position.value.x + 0.01, position.value.y + 0.01, position.value.z + 0.01);
    ground.name = `Shadow_Plane_child_model`;

    roundEdgedBox();

    modelScene.add(ground);
    modelScene.add(shadowGround);

    modelScene.name = `Floor_root_model`;
    modelScene.layers.set(1); // Don't highlight objects above layer 0

    scene.value.add(modelScene);

    // Update transforms for modelScene and its children
    modelScene.updateMatrixWorld(true);

    // For Raycasting
    modelStore.addGroupObjects(modelScene);
}

initMesh(false, 1);

onMounted(() => {
})
</script>

<template>
    <slot></slot>
</template>