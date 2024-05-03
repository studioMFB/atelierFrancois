<script setup lang="ts">
import { computed, inject } from 'vue';

import { PerspectiveCamera } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


const props = defineProps<{
    canvas?: HTMLElement
}>();

const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera)
const canvas = computed(() => props.canvas)

const controls = new OrbitControls(camera.value, canvas.value);
controls.enabled = true;
controls.autoRotate = false;
controls.autoRotateSpeed = 1;
        
controls.enableDamping = true;
controls.enableZoom = true;
controls.enablePan = true;
        
controls.minDistance = 2;
controls.maxDistance = 10;
controls.target.set( 0, 0, - 0.2 );
controls.update();
</script>