
import { PerspectiveCamera, WebGLRenderer } from "three";

export class Resizer {

  constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
    this.setSize(camera, renderer);

    window.addEventListener('resize', () => {
      this.setSize(camera, renderer);
    });
  }

  setSize(camera: PerspectiveCamera, renderer: WebGLRenderer): void {
    // camera.aspect = window.innerWidth / window.innerHeight;
    camera.aspect = window.innerWidth / window.innerHeight *.5;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}



