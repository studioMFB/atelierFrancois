<script setup lang="ts">
import { PlaneGeometry, Vector2 } from 'three';
import { type Ref, computed, ref } from 'vue';


const props = defineProps<{
    dimension: Vector2,
    segment: Vector2, 
}>();

const dimension = computed(() => props.dimension);
const segment = computed(() => props.segment);

const plane: Ref<PlaneGeometry> = ref(new PlaneGeometry(dimension.value.x, dimension.value.y, segment.value.x, segment.value.y));
plane.value.rotateX(- Math.PI / 2);
</script>

<template>
    <slot></slot>
</template>