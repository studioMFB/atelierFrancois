import { reactive } from 'vue';

import type { Model } from '@/components/modelViewer/resources/model';


interface ModelStoreState {
  modelsPool: Model[];
}

export const modelsPoolStore = () => {
  // Explicitly type the state
  const state: ModelStoreState = reactive({
    modelsPool: [],
  });

  // Explicitly type the methods
  const addModel = (model: Model): void => {
    state.modelsPool.push(model);
  };

  // Explicitly type the return value of the store
  return {
    state,
    addModel,
  };
};
