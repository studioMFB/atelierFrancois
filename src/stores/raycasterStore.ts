import { defineStore } from 'pinia';

import { type Intersection } from 'three';


interface RaycasterState {
    currentIntersect: Intersection | null;
    isSpawn: boolean;
}

export const useRaycasterStore = defineStore('raycaster', {
    state: (): RaycasterState => ({
        currentIntersect: null,
        isSpawn: false
    }),

    actions: {
        getCurrentIntersect(): Intersection | null {
            return this.currentIntersect;
        },

        setCurrentIntersect(intersect: Intersection): void {
            this.currentIntersect = intersect;
        }
    }
});