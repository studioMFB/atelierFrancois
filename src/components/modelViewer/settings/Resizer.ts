
import { PerspectiveCamera, WebGLRenderer } from "three";
import { EffectComposer } from 'three-addons';


export class Resizer {

  constructor(camera: PerspectiveCamera, renderer: WebGLRenderer, composer: EffectComposer) {
    this.setSize(camera, renderer, composer);

    window.addEventListener('resize', () => {
      this.setSize(camera, renderer, composer);
    });
  }

  setSize(camera: PerspectiveCamera, renderer: WebGLRenderer, composer: EffectComposer): void {
    // camera.aspect = window.innerWidth / window.innerHeight;
    camera.aspect = window.innerWidth / window.innerHeight *.5;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // composer.setSize(window.innerWidth, window.innerHeight);
  }

}



