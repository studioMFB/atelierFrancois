
import { Camera, PerspectiveCamera, WebGLRenderer } from "three";
import { EffectComposer } from 'three-addons';
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";


export class Resizer {

  constructor(camera: Camera, renderer: WebGLRenderer) {
    this.setSize(camera, renderer);

    window.addEventListener('resize', () => {
      this.setSize(camera, renderer);
    });
  }

  setSize(camera: Camera, renderer: WebGLRenderer): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // camera.aspect = window.innerWidth / window.innerHeight *.5;
    // camera.aspect = width / height;

    (camera as PerspectiveCamera).updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    }

}