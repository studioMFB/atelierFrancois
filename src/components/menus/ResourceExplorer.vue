<script setup lang="ts">
import { ref, computed } from 'vue';

import { Vector3 } from 'three';
import type { Models, IModel } from '../3D/ModelViewer.vue';


const props = defineProps<{
    models: Models;
}>();

const emit = defineEmits<{
    (e: 'onAddModel', modelKey: keyof Models, point?: Vector3): void
}>()

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

function handleModelClick(modelKey: keyof Models) {
    emit("onAddModel", modelKey);
}

function handleDragStart(event: DragEvent, modelKey: string) {
    if (event.dataTransfer) {
        event.dataTransfer.setData('modelKey', modelKey);
        event.dataTransfer.effectAllowed = 'copy';
    }
}

function handleDrag(event: DragEvent) {
    // Handle drag preview position updates
}

function handleDragEnd(event: DragEvent) {
    // Clean up any drag preview
}
</script>

<template>
    <div class="model-explorer" :class="{ 'collapsed': isCollapsed }">
        <button class="collapse-toggle" @click="toggleCollapse">
            {{ isCollapsed ? '<' : '>' }}
            <!-- <h2>Models</h2> -->
        </button>

        <div v-show="!isCollapsed" class="explorer-content">
            <h2>Models</h2>

            <div class="model-grid">
                <div v-for="(model, key) in modelList" :key="key" class="model-item" draggable="true"
                    @click="handleModelClick(key as keyof Models)" @dragstart="handleDragStart($event, key)"
                    @drag="handleDrag($event)" @dragend="handleDragEnd">
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