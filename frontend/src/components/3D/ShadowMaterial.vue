<script setup lang="ts">
import { computed } from 'vue';

import { Color, type ColorRepresentation, ShadowMaterial, type Side } from 'three';


const props = defineProps<{
    opacity: number,
    colour?: ColorRepresentation,
    doubleSide?: Side,
    transparent?: boolean
}>();

const opacity = computed(() => props.opacity);
const colour = computed(() => props.colour);
const doubleSide = computed(() => props.doubleSide);
const transparent = computed(() => props.transparent);

const material = new ShadowMaterial({
    color: colour.value || new Color(0xff0000),
    side: doubleSide.value,
    opacity: opacity.value,
    transparent: transparent.value
});
</script>

<template>
    <slot></slot>
</template>