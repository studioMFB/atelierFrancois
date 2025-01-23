import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Group, Object3DEventMap } from 'three';

import type { Model } from '@/components/modelViewer/resources/model';


export const useModelStore = defineStore('modelStore', () => {
  const models = ref<Model[]>([]);
  const groupsObjects = ref<Group<Object3DEventMap>[]>([]);

  const addModel = (model: Model): void => {
    models.value.push(model);
  };

  const addGroupObjects = (groupObject: Group<Object3DEventMap>): void => {
    groupsObjects.value.push(groupObject);
  };

  const getModels = (): Model[] => models.value;
  const getGroupsObjects = (): Group<Object3DEventMap>[] => groupsObjects.value;

  return {
    addModel,
    addGroupObjects,
    getModels,
    getGroupsObjects,
  };
});
