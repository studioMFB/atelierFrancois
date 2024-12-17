<script setup lang="ts">
import { Color, DoubleSide, ExtrudeGeometry, Mesh, MeshBasicMaterial, Scene, Shape } from 'three';
import { computed } from 'vue';


const props = defineProps<{
    scene: Scene,
}>();

const scene = computed(() => props.scene);

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
</script>

<template>
    <slot></slot>
</template>