<script setup lang="ts">
import { computed, inject } from 'vue';

import { type ColorRepresentation, GridHelper, Scene } from 'three';


const props = defineProps<{
    size?: number,
    divisions?: number,
    colour1?: ColorRepresentation,
    colour2?: ColorRepresentation,
}>();

const scene = computed(() => inject("MainScene") as Scene);
const size = computed(() => props.size);
const divisions = computed(() => props.divisions);
const colour1 = computed(() => props.colour1);
const colour2 = computed(() => props.colour2);

const grid = new GridHelper(size.value, divisions.value, colour1.value, colour2.value);

scene.value.add(grid);
</script>