<script setup lang="ts">

import { Clock, Scene, WebGLRenderer, Vector3, PerspectiveCamera, Group, type Object3DEventMap, Box3 } from "three";
import { Model } from "@/components/modelViewer/resources/model";
import { computed, inject, provide, ref, toRefs, watch, watchEffect, type Ref } from "vue";


const GRID_SIZE = 5;
const gridLimits = {
  minX: -GRID_SIZE / 2,  // Minimum X value
  maxX: GRID_SIZE / 2,   // Maximum X value
  minY: 0,    // Minimum Y value (assuming Y is up)
  maxY: 0,   // Maximum Y value
  minZ: -GRID_SIZE / 2,  // Minimum Z value
  maxZ: GRID_SIZE / 2    // Maximum Z value
};

const props = defineProps<{
  furnitureArray: any[];
}>();

let furnitureArray = ref(props.furnitureArray);

watch(() => props.furnitureArray, (newFurnitureArray) => {
  // console.log("Gameloop => watch => newFurnitureArray ", newFurnitureArray);

  furnitureArray.value = newFurnitureArray;
  // checkCollision(furnitureArray.value);
  // start();
});

const renderer = ref(inject("WebGlrenderer")) as Ref<WebGLRenderer>;
const scene = ref(inject("MainScene")) as Ref<Scene>;
const camera = ref(inject("PerspectiveCamera")) as Ref<PerspectiveCamera>;
const clock = new Clock();
const updatables: any[] = [];

provide("GameLoopUpdatables", updatables)

start();

// function addToUpdate(object: any) {
//   updatables.push(object);
// }

function checkCollision(furnitureArray: Model[]) {
  // console.log("GameLoop => checkCollision => furnitureArray ", furnitureArray);

  if (furnitureArray.length == 0 || !furnitureArray[0].modelScene)
    return;

  for (let i = 0; i < furnitureArray.length; ++i) {
    if (!furnitureArray[i].modelScene)
      return;

    // this.restricMoveToBoundaries(furnitureArray[i].scene, furnitureArray[i].boundingBox);
    for (let j = 0; j < furnitureArray.length; ++j) {
      if (!furnitureArray[j].modelScene)
        return;

      // Don't collide with itself.
      if (j == i)
        continue;

      if (!furnitureArray[i].boundingBox)
        return;

      if (furnitureArray[i].boundingBox?.intersectsBox(furnitureArray[j].boundingBox!)) {
        // Handle collision
        // console.log("GameLoop => checkCollision => resolveOverlap ");
        resolveOverlap(furnitureArray[i].modelScene!, furnitureArray[i].boundingBox!, furnitureArray[j].modelScene!, furnitureArray[j].boundingBox!);
      }
    }
  }
}

function resolveOverlap(object1: Group<Object3DEventMap>, box1: Box3, object2: Group<Object3DEventMap>, box2: Box3) {
  if (box1.intersectsBox(box2)) {
    // Calculate overlap on each axis
    const overlapX = Math.min(box1.max.x, box2.max.x) - Math.max(box1.min.x, box2.min.x);
    const overlapY = Math.min(box1.max.y, box2.max.y) - Math.max(box1.min.y, box2.min.y);
    const overlapZ = Math.min(box1.max.z, box2.max.z) - Math.max(box1.min.z, box2.min.z);

    // Determine the minimum overlap direction
    // const overlapMin = Math.min(overlapX, Math.min(overlapZ));
    const overlapMin = Math.min(overlapX, Math.min(overlapY, overlapZ));

    // Create a vector for the resolution movement
    const move = new Vector3();

    // Depending on the minimum overlap, move on the corresponding axis
    if (overlapMin === overlapX) {
      move.setX(overlapX * (object1.position.x > object2.position.x ? 1 : -1));
    }
    //  else if (overlapMin === overlapY) {
    //   move.setY(overlapY * (object1.position.y > object2.position.y ? 1 : -1));
    // move.setY(-1);
    // } 
    else { // overlapMin == overlapZ
      move.setZ(overlapZ * (object1.position.z > object2.position.z ? 1 : -1));
    }

    // object1.position.y = 0;
    // object2.position.y = 0;

    // Adjust the position to resolve the overlap
    object1.position.add(move.multiplyScalar(0.5)); // Adjusting both objects by half the overlap
    object2.position.sub(move.multiplyScalar(0.5));

    restricMoveToBoundaries(object1, box1);
    restricMoveToBoundaries(object2, box2);
  }
}

function restricMoveToBoundaries(object: Group<Object3DEventMap>, box: Box3) {
  // Constrain X position
  // object1.position.x = Math.max(gridLimits.minX, Math.min(gridLimits.maxX, object1.position.x));
  // object1.position.x = Math.max(gridLimits.minX, Math.min(gridLimits.maxX, box1.min.x));
  // object1.position.x = Math.min(gridLimits.maxX, box1.max.x) - Math.max(gridLimits.minX, box1.min.x);

  // Stop the lifting the model up.
  object.position.y = 0;

  // Constrain Z position
  // object1.position.z = Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, object1.position.z));
  // object1.position.z = Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, box1.min.z));
  // object1.position.z = Math.min(gridLimits.maxZ, box1.max.z) - Math.max(gridLimits.minZ, box1.min.z);

  object.position.x = Math.max(gridLimits.minX, Math.min(gridLimits.maxX, object.position.x));
  object.position.z = Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, object.position.z));
}

function start() {
  renderer.value.setAnimationLoop(() => {
    // console.log("Renderer => Start animation Loop", renderer.value);
    furnitureArray.value.forEach((furniture: Model) => {
      const delta = clock.getDelta();
      furniture.tick(delta);
      checkCollision(furnitureArray.value);
      // console.log("camera.position ", camera.value.position);
            
      // try{
        // if(renderer.value && scene.value && camera.value)
          // renderer.value.render(scene.value, camera.value);
        
          // Render using composer if using post-processing
          // composer.render();
        // }
        // catch(e:any){
        //     throw new Error(e);
        //   }
    });
  });
}

function stop() {
  renderer.value.setAnimationLoop(null);
}

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