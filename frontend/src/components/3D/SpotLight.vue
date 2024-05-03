<script setup lang="ts">
import { computed, inject } from 'vue';

import { type ColorRepresentation, Scene, SpotLight, Vector3 } from 'three';


const props = defineProps<{
    position?: Vector3,
    colour?: ColorRepresentation,
    intensity?: number
}>();

const scene = computed(() => inject("MainScene") as Scene);
const position = computed(() => props.position);
const colour = computed(() => props.colour);
const intensity = computed(() => props.intensity);

const light = new SpotLight(colour.value, intensity.value);
// light.castShadow = true;
// light.shadow.radius = 15;

light.angle = Math.PI / 5;
light.penumbra = 0.3;

if(position.value)
    light.position.set(position.value.x, position.value.y, position.value.z);

light.castShadow = true;

light.shadow.camera.near = 10;
light.shadow.camera.far = 200;
light.shadow.mapSize.width = 200;
light.shadow.mapSize.height = 200;
light.shadow.bias = - 0.005;
light.shadow.radius = 20;

scene.value.add(light);
</script>