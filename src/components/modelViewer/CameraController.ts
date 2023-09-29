import { PerspectiveCamera } from 'three';


export class CameraController {

    private camera: PerspectiveCamera


    constructor() {
        this.camera = new PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
    }

    init(): void {
        this.camera.position.set(0, 3, 10);
    }

    getCamera(): PerspectiveCamera {
        return this.camera
    }

    tick(delta: any): void {

    }

}
