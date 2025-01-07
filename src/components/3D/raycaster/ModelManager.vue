<script setup lang="ts">
import { inject, onMounted, reactive, ref, type Ref } from 'vue';

import { Scene, Vector3 } from 'three';

import type { ModelMetadata } from './types';

import { Model } from '@/components/modelViewer/resources/model';
import { useModelStore } from '@/store/modelStore';
import { GLTF_PATHS, MODEL_SCALES, DEFAULT_POSITIONS } from './constants';


const scene = ref(inject("MainScene")) as Ref<Scene>;
const modelStore = useModelStore();

// Define model configurations
const models = reactive({
    table: setupModel("table", DEFAULT_POSITIONS.MODEL, MODEL_SCALES.TABLE, GLTF_PATHS.TABLE),
    garlic: setupModel("garlic", DEFAULT_POSITIONS.MODEL, MODEL_SCALES.GARLIC, GLTF_PATHS.GARLIC),
    rock: setupModel("rock", DEFAULT_POSITIONS.MODEL, MODEL_SCALES.ROCK, GLTF_PATHS.ROCK),
});

function setupModel(name: string, position: Vector3, scale: number, url: string): ModelMetadata {
    return { name, position, scale, url };
}

async function addModelToScene(modelKey: keyof typeof models): Promise<void> {
    const model = models[modelKey];
    const modelInstance = new Model(model.name, model.position, model.scale, model.url);

    const modelScene = await modelInstance.initMesh();
    scene.value.add(modelScene);
    modelStore.addModel(modelInstance);
    modelStore.addGroupObjects(modelScene);
}

defineExpose({ addModelToScene, models });
</script>