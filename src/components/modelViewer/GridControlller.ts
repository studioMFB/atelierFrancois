import { GridHelper, Scene } from "three";


export class GridController {


    gridHelper?: GridHelper;

    size: number;
    divisions: number;

    constructor(size: number, divisions: number) {
        this.size = size;
        this.divisions = divisions;
    }

    init(scene: Scene) {
        const gridHelper = new GridHelper(this.size, this.divisions);

        scene.add(gridHelper);
    }
}