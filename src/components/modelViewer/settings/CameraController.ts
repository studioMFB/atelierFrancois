import { PerspectiveCamera, Vector3, OrthographicCamera } from 'three';
import * as THREE from 'three';


export class CameraController {

    private camera?: PerspectiveCamera

    private pos: Vector3;


    constructor(position: Vector3) {
        this.pos = position;
    }

    init(): PerspectiveCamera {
        // this.camera = new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
        // this.camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
        // this.camera = new OrthographicCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );

        // const width = window.innerWidth;
        // const height = window.innerHeight;
        // this.camera = new THREE.OrthographicCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);

        const rathio = 5.2;
        const left = -1.0, right = 1.0,
            top = 0.6, bottom = -0.6,
            near = 0.1, far = 100;
        this.camera = new THREE.OrthographicCamera(left *rathio, right*rathio, top*rathio, bottom*rathio, near*rathio, far*rathio);

        // const frustumSize = 500;
        // const aspect = window.innerWidth / window.innerHeight;
        // this.camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000);

        this.camera.position.set(this.pos.x, this.pos.y, this.pos.z);
        this.camera.lookAt(0, 0, 0);

        return this.camera;
    }

    tick(delta: any): void {

    }

}
