import { MathUtils, Camera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


export class ControlsController {

    controls: OrbitControls;


    constructor(camera: Camera, canvas: HTMLElement) {
        this.controls = new OrbitControls(camera, canvas);
    }
    
    init(): OrbitControls {

        this.controls.enabled = true;
        this.controls.autoRotate = false;
        this.controls.autoRotateSpeed = 1;

        this.controls.enableDamping = false;
        this.controls.enableZoom = true;
        this.controls.enablePan = true;

        return this.controls;
    }

    tick(delta: any):void{
        this.controls.update();
    }

}
