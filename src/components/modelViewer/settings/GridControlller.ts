import { GridHelper, Scene } from "three";


export class GridController {

    gridHelper?: GridHelper;
    // raycaster: Raycaster;
    // pointer: Vector2;

    size: number;
    divisions: number;

    constructor(size: number, divisions: number) {
        this.size = size;
        this.divisions = divisions;

        // this.raycaster = new Raycaster();
        // this.pointer = new Vector2();
    }

    init(scene: Scene) {
        this.gridHelper = new GridHelper(this.size, this.divisions);
        // this.gridHelper.material.visible = false;


        scene.add(this.gridHelper);
    }

}