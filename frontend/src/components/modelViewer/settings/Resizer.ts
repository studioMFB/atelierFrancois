
import { PerspectiveCamera, WebGLRenderer } from "three";


export class Resizer {

  constructor(camera: PerspectiveCamera, renderer: WebGLRenderer) {
    this.setSize(camera, renderer);

    window.addEventListener('resize', () => {
      this.setSize(camera, renderer);
    });
  }

  setSize(camera: PerspectiveCamera, renderer: WebGLRenderer): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // camera.aspect = window.innerWidth / window.innerHeight *.5;
    // camera.aspect = width / height;

    (camera).updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    }

}