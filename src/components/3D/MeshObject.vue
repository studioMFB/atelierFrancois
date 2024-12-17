<script setup lang="ts">
import { computed } from 'vue';

import { BufferGeometry, Mesh, MeshBasicMaterial, Vector3 } from 'three';


const props = defineProps<{
    name: string,
    position: Vector3,
    geometry: BufferGeometry,
    material: MeshBasicMaterial | MeshBasicMaterial[],
    receiveShadow: boolean
}>();

const name = computed(() => props.name);
const position = computed(() => props.position);
const geometry = computed(() => props.geometry);
const material = computed(() => props.material);
const receiveShadow = computed(() => props.receiveShadow);

const mesh = new Mesh(geometry.value, material.value);
mesh.name = name.value;
mesh.receiveShadow = receiveShadow.value;
mesh.position.set(position.value.x, position.value.y, position.value.z);
</script>

<template>
    <slot></slot>
</template>