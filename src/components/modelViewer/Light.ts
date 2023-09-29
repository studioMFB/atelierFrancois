import {Color, DirectionalLight, PointLight, AmbientLight, type ColorRepresentation } from "three";
import type { Loop } from "./Loop";


export class Light {

    constructor() {
    }

    init(scene: THREE.Scene, dColor: ColorRepresentation, aColour: ColorRepresentation): void {
        const light = new DirectionalLight(dColor, 1.5);
        light.position.set(0, 0, 5);
        scene.add(light);

        // aColour = new Color(0x256e3e);
        const aLight = new AmbientLight(aColour, .7);
        aLight.position.set(-2, 0, 5);
        scene.add(aLight);

        // const pLight = new PointLight("white", 4);
        // pLight.position.set(0, 0, 5);
        // scene.add(pLight);
    }

    tick(delta: any):void{

    }

}