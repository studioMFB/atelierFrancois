import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


export class ControlsController {

    controls: OrbitControls;


    constructor(camera: PerspectiveCamera, canvas: HTMLElement) {
        this.controls = new OrbitControls(camera, canvas);
    }
    
    init(): OrbitControls {
        this.controls.enabled = true;
        this.controls.autoRotate = false;
        this.controls.autoRotateSpeed = 1;
        
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;
        
        this.controls.minDistance = 2;
        this.controls.maxDistance = 10;
        this.controls.target.set( 0, 0, - 0.2 );
        this.controls.update();

        return this.controls;
    }

    tick(delta: any):void{
        this.controls.update();
    }

}
