<script setup lang="ts">
import { Color, type ColorRepresentation, MeshStandardMaterial } from 'three';
import { type Ref, computed, ref } from 'vue';


const props = defineProps<{
    visible: boolean, 
    opacity: number,
    colour?: ColorRepresentation,
}>();

const visible = computed(() => props.visible);
const opacity = computed(() => props.opacity);
const colour = computed(() => props.colour);

const material: Ref<MeshStandardMaterial> = ref(new MeshStandardMaterial({
    color: colour.value || new Color(0xff0000),
    visible: visible.value,
    opacity: opacity.value,
}));
</script>

<template>
    <slot></slot>
</template>