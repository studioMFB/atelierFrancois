<script setup lang="ts">

import { Clock, Scene, WebGLRenderer, Vector3, PerspectiveCamera, Group, type Object3DEventMap, Box3 } from "three";
import { Model } from "@/components/modelViewer/resources/model";
import { computed, inject, provide, reactive, ref, toRefs, watch, watchEffect, type Ref } from "vue";

// Grid configuration to define boundaries
const GRID_SIZE = 5;
const gridLimits = {
  minX: -GRID_SIZE / 2,  // Minimum X value
  maxX: GRID_SIZE / 2,   // Maximum X value
  minY: 0,    // Minimum Y value (assuming Y is up)
  maxY: 0,    // Maximum Y value
  minZ: -GRID_SIZE / 2,  // Minimum Z value
  maxZ: GRID_SIZE / 2    // Maximum Z value
};

// Inject necessary resources from the parent context
// const modelsPool = inject("modelsPool", [] as Model[]);
const modelsPool = inject("modelsPool") as Model[];
if (!modelsPool) {
  throw new Error("Failed to inject 'modelsPool' in GameLoop. Ensure it is properly provided.");
}


const renderer = ref(inject("WebGlrenderer")) as Ref<WebGLRenderer>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const clock = new Clock();
const updatables: any[] = [];

// Provide updatables for other components
provide("GameLoopUpdatables", {
  updatables,
  hasUpdatables: () => updatables.length > 0,
});

start(); // Begin the game loop

// Collision detection using spatial hashing
function checkCollision(furnitureArray: Model[]) {
  if (furnitureArray.length === 0) return;

  const hashTable: Map<string, Model[]> = new Map();

  // Compute hash for spatial partitioning
  const getHash = (position: Vector3) => {
    const cellSize = GRID_SIZE / 2;
    const x = Math.floor(position.x / cellSize);
    const z = Math.floor(position.z / cellSize);
    return `${x},${z}`;
  };

  // Populate hash table with model positions
  furnitureArray.forEach(model => {
    if (model.modelScene) {
      const hash = getHash(model.modelScene.position);
      if (!hashTable.has(hash)) {
        hashTable.set(hash, []);
      }
      hashTable.get(hash)!.push(model);
    }
  });

  // Check collisions within cells and neighboring cells
  furnitureArray.forEach(model => {
    if (!model.modelScene || !model.boundingBox) return;
    const hash = getHash(model.modelScene.position);
    const neighbors = [hash, ...getNeighborHashes(hash)];

    neighbors.forEach(neighborHash => {
      const cellModels = hashTable.get(neighborHash) || [];
      cellModels.forEach(otherModel => {
        if (
          model !== otherModel &&
          model.boundingBox?.intersectsBox(otherModel.boundingBox!)
        ) {
          resolveOverlap(
            model.modelScene!,
            model.boundingBox!,
            otherModel.modelScene!,
            otherModel.boundingBox!
          );
        }
      });
    });
  });
}

// Get neighboring cell hashes for spatial hashing
function getNeighborHashes(hash: string): string[] {
  const [x, z] = hash.split(",").map(Number);
  const neighbors: string[] = [];
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      if (dx !== 0 || dz !== 0) {
        neighbors.push(`${x + dx},${z + dz}`);
      }
    }
  }
  return neighbors;
}

// Resolve overlapping objects by calculating displacement vectors
function resolveOverlap(object1: Group<Object3DEventMap>, box1: Box3, object2: Group<Object3DEventMap>, box2: Box3) {
  if (box1.intersectsBox(box2)) {
    const overlap = calculateOverlap(box1, box2);
    const move = determineResolutionVector(overlap, object1, object2);

    adjustPositions(object1, object2, move);

    restricMoveToBoundaries(object1, box1);
    restricMoveToBoundaries(object2, box2);
  }
}

// Calculate the overlap along each axis between two bounding boxes
function calculateOverlap(box1: Box3, box2: Box3): { overlapX: number; overlapY: number; overlapZ: number; } {
  const overlapX = Math.min(box1.max.x, box2.max.x) - Math.max(box1.min.x, box2.min.x);
  const overlapY = Math.min(box1.max.y, box2.max.y) - Math.max(box1.min.y, box2.min.y);
  const overlapZ = Math.min(box1.max.z, box2.max.z) - Math.max(box1.min.z, box2.min.z);

  return { overlapX, overlapY, overlapZ };
}

// Determine the direction and magnitude of movement to resolve overlap
function determineResolutionVector(overlap: { overlapX: number; overlapY: number; overlapZ: number; }, object1: Group<Object3DEventMap>, object2: Group<Object3DEventMap>): Vector3 {
  const { overlapX, overlapY, overlapZ } = overlap;
  const overlapMin = Math.min(overlapX, Math.min(overlapY, overlapZ));

  const move = new Vector3();

  if (overlapMin === overlapX) {
    move.setX(overlapX * (object1.position.x > object2.position.x ? 1 : -1));
  } else {
    move.setZ(overlapZ * (object1.position.z > object2.position.z ? 1 : -1));
  }

  return move;
}

// Adjust positions of overlapping objects
function adjustPositions(object1: Group<Object3DEventMap>, object2: Group<Object3DEventMap>, move: Vector3) {
  object1.position.add(move.multiplyScalar(0.5));
  object2.position.sub(move.multiplyScalar(0.5));
}

// Restrict object movement to within grid boundaries
function restricMoveToBoundaries(object: Group<Object3DEventMap>, box: Box3) {
  object.position.y = 0;
  object.position.x = Math.max(gridLimits.minX, Math.min(gridLimits.maxX, object.position.x));
  object.position.z = Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, object.position.z));
}

// Start the game loop
function start() {
  if (!renderer.value) {
    throw new Error("Renderer is not initialized.");
  }

  // console.log("Starting game loop...");
  renderer.value.setAnimationLoop(() => {
    // console.log("Animating...");
    //  console.log("modelsPool", modelsPool);
    // console.log("scene", scene.value);
    modelsPool.forEach((furniture: Model) => {
      const delta = clock.getDelta();
      furniture.tick(delta);
      checkCollision(modelsPool);
    });
  });
}

// Stop the game loop
function stop() {
  if (!renderer.value) {
    throw new Error("Renderer is not initialized.");
  }

  renderer.value.setAnimationLoop(null);
}

// Perform a single tick update
function tick(delta?: number) {
  if (!delta) {
    delta = clock.getDelta();
  }

  for (const data of updatables) {
    data.tick(delta);
  }
}
</script>

<template>
  <slot></slot>
</template>
   