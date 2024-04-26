<script setup lang="ts">
import { type ColorRepresentation, Scene, SpotLight, Vector3 } from 'three';
import { type Ref, computed, ref, inject } from 'vue';


const props = defineProps<{
    // scene: Scene,
    position?: Vector3,
    colour?: ColorRepresentation,
    intensity?: number
}>();

const scene = computed(() => inject("MainScene") as Scene);
// const scene = computed(() => props.scene);
const position = computed(() => props.position);
const colour = computed(() => props.colour);
const intensity = computed(() => props.intensity);

const light: Ref<SpotLight> = ref(new SpotLight(colour.value, intensity.value));
// light.castShadow = true;
// light.shadow.radius = 15;

light.value.angle = Math.PI / 5;
light.value.penumbra = 0.3;

if(position.value)
    light.value.position.set(position.value.x, position.value.y, position.value.z);

light.value.castShadow = true;

light.value.shadow.camera.near = 10;
light.value.shadow.camera.far = 200;
light.value.shadow.mapSize.width = 200;
light.value.shadow.mapSize.height = 200;
light.value.shadow.bias = - 0.005;
light.value.shadow.radius = 20;

scene.value.add(light.value);
</script>

<template>
    <slot></slot>
</template>