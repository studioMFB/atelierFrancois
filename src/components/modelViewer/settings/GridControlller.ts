import { GridHelper, Scene } from "three";


export class GridController {

    gridHelper?: GridHelper;

    size: number;
    divisions: number;

    constructor(size: number, divisions: number) {
        this.size = size;
        this.divisions = divisions;
    }

    init(scene: Scene, colour:string) {
        this.gridHelper = new GridHelper(this.size, this.divisions, colour, colour);
        this.gridHelper.name = "GridHelper";
        // this.gridHelper.material.visible = false;

        scene.add(this.gridHelper);
    }

}