import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Group, Object3DEventMap } from 'three';

import type { Model } from '@/components/modelViewer/resources/model';


export const useModelStore = defineStore('modelStore', () => {
  // Reactive state
  const models = ref<Model[]>([]);
  const groupsObjects = ref<Group<Object3DEventMap>[]>([]);

  // Actions to modify state
  const addModel = (model: Model): void => {
    models.value.push(model);
    // console.log('Models:', models.value);
  };

  const addGroupObjects = (groupObject: Group<Object3DEventMap>): void => {
    groupsObjects.value.push(groupObject);
    // console.log('Group Objects:', groupsObjects.value);
  };

  // Getters for computed properties
  const getModels = (): Model[] => models.value;
  const getGroupsObjects = (): Group<Object3DEventMap>[] => groupsObjects.value;

  return {
    // models,
    // groupsObjects,
    addModel,
    addGroupObjects,
    getModels,
    getGroupsObjects,
  };
});
