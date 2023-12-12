import { Clock, Scene, OrthographicCamera, WebGLRenderer, PerspectiveCamera} from "three";


export class LoopCOntroller {

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

  public addToUpdate(object: any){
    this.updatables.push(object);
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();

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




