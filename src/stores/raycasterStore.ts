// stores/raycasterStore.ts
import { defineStore } from 'pinia';

import { Raycaster, Vector2, Vector3, Plane, Camera, Scene, type Intersection } from 'three';

import { GRID, DEFAULT_POSITIONS, MODEL_SUB_NAMES } from '@/constants';

import { useModelStore } from './modelStore';


interface RaycasterState {
  raycaster: Raycaster;
  mouse: Vector2;
  camera: Camera | null;
  scene: Scene | null;
  currentIntersect: Intersection | null;
  isSpawn: boolean;
}

export const useRaycasterStore = defineStore('raycaster', {
  state: (): RaycasterState => ({
    raycaster: new Raycaster(),
    mouse: new Vector2(),
    camera: null,
    scene: null,
    currentIntersect: null,
    isSpawn: false
  }),

  actions: {
    setCamera(camera: Camera) {
      this.camera = camera;
    },

    setScene(scene: Scene) {
      this.scene = scene;
    },

    updateMousePosition(x: number, y: number) {
      this.mouse.x = x;
      this.mouse.y = y;
    },

    isRaycasterReady(): boolean {
      return !!(this.camera && this.scene && this.raycaster);
    },

    handleIntersection(): boolean {
      const modelStore = useModelStore();

      if (!this.isRaycasterReady()) {
        console.warn("Raycaster is not ready. Check dependencies and object configurations!");
        return false;
      }

      // Update raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera!);

      // Create a virtual ground plane for consistent intersection
      const groundNormal = new Vector3(0, 1, 0);
      const groundPlane = new Plane(groundNormal, -DEFAULT_POSITIONS.GROUND_Y_POSITION);

      // Get intersection point with ground plane
      const intersectionPoint = new Vector3();
      this.raycaster.ray.intersectPlane(groundPlane, intersectionPoint);

      if (intersectionPoint) {
        // Check if point is within grid boundaries
        if (intersectionPoint.x >= GRID.LIMITS.MIN_X &&
            intersectionPoint.x <= GRID.LIMITS.MAX_X &&
            intersectionPoint.z >= GRID.LIMITS.MIN_Z &&
            intersectionPoint.z <= GRID.LIMITS.MAX_Z) {
          
          // Create a synthetic intersection result
          this.currentIntersect = {
            point: intersectionPoint,
            distance: this.camera!.position.distanceTo(intersectionPoint),
            object: this.scene!.getObjectByName(MODEL_SUB_NAMES.GROUND) || this.scene!.children[0],
            face: null,
            faceIndex: 0,
            uv: new Vector2(0, 0)
          };

          return true;
        }
      }

      const intersects = this.raycaster.intersectObjects(modelStore.getGroupsObjects(), true)
        .sort((a, b) => a.distance - b.distance);

      if (intersects.length > 0) {
        this.currentIntersect = intersects[0];
        return true;
      }

      this.currentIntersect = null;
      return false;
    },

    getCurrentIntersect(): Intersection | null {
      return this.currentIntersect;
    }
  }
});