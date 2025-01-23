import { defineStore } from 'pinia'
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


interface FurnitureModel {
  id: number
  name: string
  modelPath: string
  price: number
  thumbnail?: string
}

export const useModelsStore = defineStore('models', {
  state: () => ({
    models: [] as FurnitureModel[],
    loadedModels: {} as Record<number, any>
  }),

  actions: {
    async fetchModelsList() {
      try {
        const response = await fetch('/api/models');
        this.models = await response.json();
      } 
      catch (error) {
        console.error('Failed to fetch models:', error);
      }
    },

    async loadModel(modelId: number) {
      // Check if already loaded
      if (this.loadedModels[modelId]) {
        return this.loadedModels[modelId];
      }

      const loader = new GLTFLoader();

      try {
        const model = await new Promise((resolve, reject) => {
          loader.load(
            `/api/models/${modelId}`, 
            (gltf: GLTF) => resolve(gltf),
            undefined,
            (error) => reject(error)
          )
        });

        // Cache the loaded model
        this.loadedModels[modelId] = model;
        return model;
      } 
      catch (error) {
        console.error(`Failed to load model ${modelId}:`, error);
        throw error;
      }
    },

    async addModelToScene(modelId: number, scene: any) {
      try {
        const model = await this.loadModel(modelId);
        scene.add(model.scene);
        return model;
      } 
      catch (error) {
        console.error('Failed to add model to scene:', error);
      }
    }
  },

  getters: {
    getModelById: (state) => {
      return (modelId: number) => state.models.find(m => m.id === modelId);
    }
  }
})