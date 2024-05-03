<script setup lang="ts">
import { computed } from 'vue';

import { Color, type ColorRepresentation, MeshStandardMaterial } from 'three';


const props = defineProps<{
    visible: boolean, 
    opacity: number,
    colour?: ColorRepresentation,
}>();

const visible = computed(() => props.visible);
const opacity = computed(() => props.opacity);
const colour = computed(() => props.colour);

const material = new MeshStandardMaterial({
    color: colour.value || new Color(0xff0000),
    visible: visible.value,
    opacity: opacity.value,
});
</script>

<template>
    <slot></slot>
</template>