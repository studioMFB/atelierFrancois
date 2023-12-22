import { Clock, Scene, WebGLRenderer, Vector3, PerspectiveCamera } from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { Model } from "../resources/model";


const GRID_SIZE = 5;
const gridLimits = {
  minX: -GRID_SIZE / 2,  // Minimum X value
  maxX: GRID_SIZE / 2,   // Maximum X value
  minY: 0,    // Minimum Y value (assuming Y is up)
  maxY: 0,   // Maximum Y value
  minZ: -GRID_SIZE / 2,  // Minimum Z value
  maxZ: GRID_SIZE / 2    // Maximum Z value
};


export class LoopController {

  clock: Clock;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  updatables: any[];


  constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
    this.clock = new Clock();
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  public addToUpdate(object: any) {
    this.updatables.push(object);
  }

  checkCollision(furnitureArray: Model[]) {
    if (furnitureArray.length == 0 || !furnitureArray[0].scene)
      return;

    for (let i = 0; i < furnitureArray.length; ++i) {
      if (!furnitureArray[i].scene)
        return;

      // this.restricMoveToBoundaries(furnitureArray[i].scene, furnitureArray[i].boundingBox);
      for (let j = 0; j < furnitureArray.length; ++j) {
        if (!furnitureArray[j].scene)
          return;

        // Don't collide with itself.
        if (j == i)
          continue;

        if (furnitureArray[i].boundingBox.intersectsBox(furnitureArray[j].boundingBox)) {
          // Handle collision
          this.resolveOverlap(furnitureArray[i].scene, furnitureArray[i].boundingBox, furnitureArray[j].scene, furnitureArray[j].boundingBox);
        }
      }
    }
  }

  resolveOverlap(object1, box1, object2, box2) {
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

      this.restricMoveToBoundaries(object1, box1);
      this.restricMoveToBoundaries(object2, box2);
    }
  }

  restricMoveToBoundaries(object, box) {
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

  start(furnitureArray: Model[], composer: EffectComposer) {
    this.renderer.setAnimationLoop(() => {

      this.tick();

      this.checkCollision(furnitureArray);

      this.renderer.render(this.scene, this.camera);
      // Render using composer if using post-processing
      // composer.render();
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick(delta?: number) {
    if (!delta) {
      delta = this.clock.getDelta();
    }

    for (const data of this.updatables) {
      data.tick(delta);
    }
  }

}




