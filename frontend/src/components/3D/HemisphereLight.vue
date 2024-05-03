<script setup lang="ts">
import { type ColorRepresentation, HemisphereLight, Scene, Vector3 } from 'three';
import { type Ref, computed, ref, inject } from 'vue';


const props = defineProps<{
    position?: Vector3,
    skyColour?: ColorRepresentation,
    groundColour?: ColorRepresentation,
    intensity?: number
}>();

const scene = computed(() => inject("MainScene") as Scene);
const position = computed(() => props.position);
const skyColour = computed(() => props.skyColour);
const groundColour = computed(() => props.groundColour);
const intensity = computed(() => props.intensity);

const light: Ref<HemisphereLight> = ref(new HemisphereLight(skyColour.value, groundColour.value, intensity.value));

// console.log("HemisphereLight => light ", light.value);
scene.value.add(light.value);
</script>