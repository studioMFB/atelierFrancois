<script setup lang="ts">
import { PerspectiveCamera } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { type Ref, computed, ref, inject } from 'vue';


const props = defineProps<{
    canvas?: HTMLElement
}>();

const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera)
const canvas = computed(() => props.canvas)

const controls: Ref<OrbitControls> = ref(new OrbitControls(camera.value, canvas.value));
controls.value.enabled = true;
controls.value.autoRotate = false;
controls.value.autoRotateSpeed = 1;
        
controls.value.enableDamping = true;
controls.value.enableZoom = true;
controls.value.enablePan = true;
        
controls.value.minDistance = 2;
controls.value.maxDistance = 10;
controls.value.target.set( 0, 0, - 0.2 );
controls.value.update();
</script>