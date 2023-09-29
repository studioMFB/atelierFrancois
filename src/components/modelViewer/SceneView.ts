
import { Color, Scene, Fog } from "three";


export default class SceneView {

    private scene: Scene;

    constructor() {
        this.scene = new Scene();
    }

    init(colour: Color): Scene {

        this.scene.background = new Color(colour);

        this.scene.fog = new Fog(colour, 50, 90);

        return this.scene;
    }
}