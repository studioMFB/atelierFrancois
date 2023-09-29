
import { Clock, Scene, PerspectiveCamera, WebGLRenderer} from "three";
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';


export class Loop {

  clock: Clock;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  updatables: any[];

  composer: EffectComposer;


  constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer, composer: EffectComposer) {
    this.clock = new Clock();
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];

    this.composer = composer
  }

  public addToUpdate(object: any){
    this.updatables.push(object);
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();

      // requestAnimationFrame(render);
    
      this.renderer.autoClear = false;
      this.renderer.clear();
      
      this.camera.layers.set(1);
      this.composer.render();
      
      this.renderer.clearDepth();
      this.camera.layers.set(0);
      this.renderer.render(this.scene, this.camera);


      // render a frame
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick(delta?:number) {
    if(!delta){
      delta = this.clock.getDelta();
    }

    for (const data of this.updatables) {
      data.tick(delta);
    }
  }

}




