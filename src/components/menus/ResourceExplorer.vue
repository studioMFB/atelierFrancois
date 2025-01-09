<script setup lang="ts">
import { ref, computed, inject, type Ref } from 'vue';

import { Scene } from 'three';

import type { Models, IModel } from '../3D/ModelViewer.vue';
import { useRaycasterStore } from '@/stores/raycasterStore';


const props = defineProps<{
    models: Models;
}>();

const emit = defineEmits<{
    (e: 'onAddModel', scene: Scene, modelKey: keyof Models): void,
    (e: 'onAddModelAtCursor', scene: Scene, modelKey: keyof Models): void,
}>();

const scene = ref(inject("MainScene")) as Ref<Scene>;
const raycasterStore = useRaycasterStore();
const isCollapsed = ref(false);

// Transform models data into a format suitable for display
const modelList = computed(() => {
    return Object.entries(props.models).reduce((acc, [key, model]) => {
        return {
            ...acc,
            [key]: {
                ...model as IModel,
                thumbnail: `/api/placeholder/100/100` // Replace with actual thumbnails
            }
        };
    }, {} as Record<string, any>);
});

function toggleCollapse() {
    isCollapsed.value = !isCollapsed.value;
}

function addModel(modelKey: keyof Models) {
    emit("onAddModel", scene.value, modelKey);
}

function handleDragStart(event: DragEvent, modelKey: keyof Models) {
    // Show Spwan target
    raycasterStore.isSpawn = true;
}

function handleDrag(event: DragEvent, modelKey: keyof Models) {

}

function handleDragEnd(event: DragEvent, modelKey: keyof Models) {
    emit("onAddModelAtCursor", scene.value, modelKey);
    // Hide Spwan target
    raycasterStore.isSpawn = false;
}
</script>

<template>
    <div class="model-explorer" :class="{ 'collapsed': isCollapsed }">
        <button class="collapse-toggle" @click="toggleCollapse">
            {{ isCollapsed ? '<' : '>' }} </button>

                <div v-show="!isCollapsed" class="explorer-content">
                    <h2>Models</h2>

                    <div class="model-grid">
                        <div v-for="(model, key) in modelList" :key="key" class="model-item" draggable="true"
                            @click="addModel(key as keyof Models)"
                            @dragstart="handleDragStart($event, key as keyof Models)"
                            @drag="handleDrag($event, key as keyof Models)"
                            @dragend="handleDragEnd($event, key as keyof Models)">
                            <img :src="model.thumbnail" :alt="model.name">
                            <p>{{ model.name }}</p>
                        </div>
                    </div>
                </div>
    </div>
</template>

<style scoped lang="scss">
$menu-top: calc(1px + var(--header-height));

.model-explorer {
    z-index: 1000;
    position: fixed;
    display: block;
    top: $menu-top;

    right: 0;
    height: 100vh;
    width: 20rem;
    background-color: var(--header-background);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease;
}

.model-explorer.collapsed {
    width: 0px;
}

.collapse-toggle {
    cursor: pointer;
    position: absolute;
    left: -1.5rem;
    top: 16px;
    padding: 8px;
    border: none;
    border-radius: 4px 0 0 4px;
    background-color: var(--header-background);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
}

.explorer-content {
    padding: 16px;
}

.model-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 16px;
}

.model-item {
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    background: #f5f5f5;
    transition: box-shadow 0.2s ease;

    &:hover {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    img {
        width: 100%;
        height: auto;
        margin-bottom: 8px;
        border-radius: 4px;
    }

    p {
        margin: 0;
        font-size: 14px;
        text-align: center;
    }
}
</style>