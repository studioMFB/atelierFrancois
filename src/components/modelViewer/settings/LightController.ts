import {type ColorRepresentation, PointLight, Vector3, SpotLight, DirectionalLight } from "three";


export class LightController {

    constructor() {
    }

    addPointLight(scene: THREE.Scene, color: ColorRepresentation, pos: Vector3): void {
        const power = 1700;
        const distance = 100;

        const pointLight = new PointLight( color, 0.1, distance );
        pointLight.position.set(pos.x, pos.y, pos.z);

        pointLight.castShadow = false;

		pointLight.power = power;

        scene.add(pointLight);
    }       
    
    addSpotLight(scene: THREE.Scene, color: ColorRepresentation, pos: Vector3) {
        const spotLight = new SpotLight(color, 0.001);
        // spotLight.castShadow = true;
        // spotLight.shadow.radius = 15;

        spotLight.angle = Math.PI / 5;
        spotLight.penumbra = 0.3;
        spotLight.position.set(pos.x, pos.y, pos.z);

        spotLight.castShadow = true;

        spotLight.shadow.camera.near = 10;
        spotLight.shadow.camera.far = 200;
        spotLight.shadow.mapSize.width = 200;
        spotLight.shadow.mapSize.height = 200;
        spotLight.shadow.bias = - 0.005;
        spotLight.shadow.radius = 20;

        scene.add(spotLight);
    }

    addDirectionalLight(scene: THREE.Scene, color: ColorRepresentation, pos: Vector3) {
        //Create a DirectionalLight and turn on shadows for the light
        const directLight = new DirectionalLight(color, .1);
        directLight.position.set(pos.x, pos.y, pos.z); //default; light shining from top

        directLight.castShadow = true;

        // Set up shadow properties for the light
        directLight.shadow.mapSize.width = 100; // default
        directLight.shadow.mapSize.height = 212; // default
        directLight.shadow.camera.near = 0.5; // default
        directLight.shadow.camera.far = 500; // default

        scene.add(directLight);
    }

    tick(delta: any):void{

    }

}