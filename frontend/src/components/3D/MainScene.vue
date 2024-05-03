<script setup lang="ts">
import { Color, Fog, Scene } from 'three';
import { type Ref, computed, ref, provide, getCurrentInstance, type ComponentInternalInstance } from 'vue';


const props = defineProps<{
    colour: Color
}>();

const colour = computed(() => props.colour);
let scene: Ref<Scene | undefined> = ref();

function init() {
    const instance = getCurrentInstance();
    if (!instance)
        return;

    const { proxy } = instance as ComponentInternalInstance;
    if (!proxy)
        return;

    // proxy.$scene = new Scene();
    // Assert the existence of the $scene property on the proxy
    (proxy as { $scene?: Scene }).$scene = new Scene();

    if (!instance.proxy)
        return;

    // scene = ref(instance.proxy.$scene);
    // Access the $scene property using type assertion
    scene = ref((instance.proxy as { $scene?: Scene }).$scene);

    // scene = ref(new Scene());
    if (!scene.value)
        return;

    scene.value.background = new Color(colour.value);
    scene.value.fog = new Fog(colour.value, 200, 1000);
}


init();
provide("MainScene", scene.value);
</script>

<template>
    <slot></slot>
</template>