import { Color, Scene, Fog, Mesh} from "three";


export class SceneController {

    private scene: Scene;

    constructor() {
        this.scene = new Scene();
    }

    init(colour: Color): Scene {
        this.scene.background = new Color(colour);
        this.scene.fog = new Fog(colour, 200, 1000);

        return this.scene;
    }

    // getScene(){
    //     return this.scene;
    // }

    // addMesh(mesh: Mesh) {
    //     if (!mesh) {
    //         console.log("Mesh is null or undifined and will not be added to the scene!");
    //         return;
    //     }
    //     if (mesh instanceof Mesh) {
    //         this.scene.add(mesh);
    //         return;
    //     }
    //     console.log("This parameter is not a Mesh and will not be added to the scene!");

    // }
}