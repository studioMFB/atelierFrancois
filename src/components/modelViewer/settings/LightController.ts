import {DirectionalLight, AmbientLight, type ColorRepresentation, PointLight, LightShadow, SpotLight } from "three";


export class LightController {

    constructor() {
    }

    init(scene: THREE.Scene, dColor: ColorRepresentation, aColour: ColorRepresentation): void {
        const light = new DirectionalLight(dColor, 1.5);
        light.position.set(0, 0, 5);
        scene.add(light);

        // // aColour = new Color(0x256e3e);
        // const aLight = new AmbientLight(aColour, .7);
        // aLight.position.set(-2, 0, 5);
        // scene.add(aLight);

        // const pLight = new PointLight("white", 4);
        // pLight.position.set(0, 0, 5);
        // scene.add(pLight);

        const sLight = new DirectionalLight('#ed6b6b', 4);
        sLight.position.set(0, 5, 0);
        scene.add(sLight);
    }        

    tick(delta: any):void{

    }

}