<script setup lang="ts">
import { ref, onMounted, onUnmounted, inject, type Ref, watch, computed } from 'vue';

import { CircleGeometry, Mesh, MeshBasicMaterial, Scene, Vector3, Plane, Raycaster } from 'three';

import { COLOURS, PREVIEW } from '../../../constants';


const props = defineProps<{
  visible: boolean;
  raycaster: Raycaster;
  gridLimits: {
    minX: number;
    maxX: number;
    minZ: number;
    maxZ: number;
  };
}>();

const scene = ref(inject("MainScene")) as Ref<Scene>;

const raycaster = computed(() => props.raycaster) as Ref<Raycaster>;

const previewMesh = ref<Mesh | null>(null);

let pulseAnimation: number;

function createPreviewMesh(): void {
  const geometry = new CircleGeometry(PREVIEW.SIZE, 32);
  const material = new MeshBasicMaterial({
    color: COLOURS.PREVIEW,
    side: 2,
    transparent: true,
    opacity: 0.5,
  });

  previewMesh.value = new Mesh(geometry, material);
  previewMesh.value.rotateX(-Math.PI / 2);
  previewMesh.value.position.y = 0.1;
  previewMesh.value.visible = props.visible;

  scene.value.add(previewMesh.value);
}

function animatePreview(): void {
  if (previewMesh.value) {
    const material = previewMesh.value.material as MeshBasicMaterial;
    material.opacity = 0.3 + Math.sin(Date.now() * 0.003 * PREVIEW.PULSE.SPEED) * 0.2;
    updatePosition(raycaster.value);
  }
  pulseAnimation = requestAnimationFrame(animatePreview);
}

// Updates the preview mesh position based on raycaster intersection
function updatePosition(raycaster: Raycaster, gridSize: number = 0.5): void {
  if (!previewMesh.value) return;

  const groundNormal = new Vector3(0, 1, 0);
  const groundPlane = new Plane(groundNormal, 0);
  const intersectionPoint = new Vector3();

  if (raycaster.ray.intersectPlane(groundPlane, intersectionPoint)) {
    const snappedPosition = new Vector3(
      Math.round(intersectionPoint.x / gridSize) * gridSize,
      0.1,
      Math.round(intersectionPoint.z / gridSize) * gridSize
    );

    if (
      snappedPosition.x >= props.gridLimits.minX &&
      snappedPosition.x <= props.gridLimits.maxX &&
      snappedPosition.z >= props.gridLimits.minZ &&
      snappedPosition.z <= props.gridLimits.maxZ
    ) {
      previewMesh.value.position.copy(snappedPosition);
      previewMesh.value.visible = props.visible;
    } else {
      previewMesh.value.visible = false;
    }
  }
}

// Watch for visibility changes
watch(() => props.visible, (newVisible: boolean) => {
  if (previewMesh.value) {
    previewMesh.value.visible = newVisible;
  }
});

defineExpose({
    previewMesh, // Expose `previewMesh` as part of the component's public API
});

onMounted(() => {
  createPreviewMesh();
  animatePreview();
});

onUnmounted(() => {
  if (previewMesh.value) {
    scene.value.remove(previewMesh.value);
    previewMesh.value.geometry.dispose();
    (previewMesh.value.material as MeshBasicMaterial).dispose();
  }
  cancelAnimationFrame(pulseAnimation);
});
</script>

<template>
  <slot></slot>
</template>