import { defineStore } from 'pinia';


export const useOrbitControlsStore = defineStore('orbitControls', {
    state: () => ({
        isOrbiting: false,  // True when the camera is being rotated or panned
        isDragging: false,  // True while dragging
    }),
    actions: {
        getOrbiting(): boolean {
            return this.isOrbiting;
        },
        getDragging(): boolean {
            return this.isDragging;
        },

        setOrbiting(status: boolean): void {
            this.isOrbiting = status;
        },
        setDragging(status: boolean): void {
            this.isDragging = status;
        },
    },
});
