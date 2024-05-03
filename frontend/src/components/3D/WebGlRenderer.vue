<script setup lang="ts">
import { PCFSoftShadowMap, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { type Ref, computed, ref, provide, onMounted, inject } from 'vue';


const props = defineProps<{
    canvas?: HTMLCanvasElement
}>();

const canvas = computed(() => props.canvas);
const scene = computed(() => inject("MainScene") as Scene);
const camera = computed(() => inject("PerspectiveCamera") as PerspectiveCamera);

let renderer: Ref<WebGLRenderer | undefined> = ref();

function init(){
    renderer = ref(new WebGLRenderer({ antialias: true, canvas: canvas.value }));

    if(!renderer.value)
        return;

    renderer.value.setPixelRatio(window.devicePixelRatio);
    renderer.value.setSize(window.innerWidth, window.innerHeight);
    renderer.value.shadowMap.type = PCFSoftShadowMap;
    renderer.value.shadowMap.enabled = true;
} 

function animate() {
    requestAnimationFrame(animate);

    if(renderer.value)
    renderer.value.render(scene.value, camera.value);
}

init();
console.log("renderer ", renderer.value);
console.log("scene ", scene.value);
console.log("camera ", camera.value);
animate();
</script>