import { PerspectiveCamera, Vector3 } from 'three';


export class CameraController {

    private camera?: PerspectiveCamera

    private pos: Vector3;


    constructor(position: Vector3) {
        this.pos = position;
    }
    
    init(): PerspectiveCamera {
        // this.camera = new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
        this.camera.position.set(this.pos.x, this.pos.y, this.pos.z);
        this.camera.lookAt( 0, 0, 0 );

        return this.camera;
    }

    tick(delta: any): void {

    }

}
