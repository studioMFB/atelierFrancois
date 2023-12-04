
import { PerspectiveCamera, WebGLRenderer } from "three";
import { EffectComposer } from 'three-addons';
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";


export class Resizer {

  constructor(camera: PerspectiveCamera, renderer: WebGLRenderer, composer?: EffectComposer, effectFXAA?: ShaderPass) {
    this.setSize(camera, renderer, composer);

    window.addEventListener('resize', () => {
      this.setSize(camera, renderer, composer, effectFXAA);
    });
  }

  setSize(camera: PerspectiveCamera, renderer: WebGLRenderer, composer?: EffectComposer, effectFXAA?: ShaderPass): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // camera.aspect = window.innerWidth / window.innerHeight *.5;
    camera.aspect = width / height;

    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    composer.setSize(width, height);


    if(effectFXAA && effectFXAA.uniforms){
      effectFXAA.uniforms["resolution"].value.set(
        1 / window.innerWidth,
        1 / window.innerHeight
        );
      }
    }

}