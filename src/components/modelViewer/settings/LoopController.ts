import { Clock, Scene, WebGLRenderer, Vector3, PerspectiveCamera } from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { Furniture } from "../resources/furniture";


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

  checkCollision(furnitureArray: Furniture[]) {
    if (!furnitureArray[0].scene)
      return;

    for (let i = 0; i < furnitureArray.length; ++i) {
      if (!furnitureArray[i].scene)
        return;

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

      object1.position.y = 0;
      object2.position.y = 0;

      // Adjust the position to resolve the overlap
      object1.position.add(move.multiplyScalar(0.5)); // Adjusting both objects by half the overlap
      object2.position.sub(move.multiplyScalar(0.5));
    }
  }

  start(furnitureArray: Furniture[], composer: EffectComposer) {
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




