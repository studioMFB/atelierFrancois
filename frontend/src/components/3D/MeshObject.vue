<script setup lang="ts">
import { BufferGeometry, Mesh, MeshBasicMaterial, Vector3 } from 'three';
import { type Ref, computed, ref } from 'vue';


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

const mesh: Ref<Mesh> = ref(new Mesh(geometry.value, material.value));

mesh.value.name = name.value;
mesh.value.receiveShadow = receiveShadow.value;
mesh.value.position.set(position.value.x, position.value.y, position.value.z);
</script>

<template>
    <slot></slot>
</template>