import { Clock, Scene, Camera, WebGLRenderer } from "three";
import { Furniture } from "../resources/furniture";


export class LoopController {

  clock: Clock;
  camera: Camera;
  scene: Scene;
  renderer: WebGLRenderer;
  updatables: any[];


  constructor(camera: Camera, scene: Scene, renderer: WebGLRenderer) {
    this.clock = new Clock();
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  public addToUpdate(object: any) {
    this.updatables.push(object);
  }

  intersect(furnitureArray: Furniture[]) {
    if (!furnitureArray[0].scene)
      return;

    for (let i = 0; i < furnitureArray.length; ++i) {
      for (let j = 0; j < furnitureArray.length; ++j) {
        // Don't collide with itself.
        if(j == i)
          continue;

        if (furnitureArray[i].boundingBox.intersectsBox(furnitureArray[j].boundingBox)) {
          // Handle collision
          console.warn("Collision detected");
        }
      }
    }
  }

  start(furnitureArray: Furniture[]) {
    this.renderer.setAnimationLoop(() => {

      this.tick();

      this.intersect(furnitureArray);

      this.renderer.render(this.scene, this.camera);
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




