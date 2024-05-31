import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color, type Object3DEventMap, MeshBasicMaterial, BoxHelper, Box3 } from "three";
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// export function findModelParent(mesh: any): Group<Object3DEventMap> | undefined {
//   // If the mesh has no parent, return null
//   if (!mesh.parent) {
//     return undefined;
//   }

//   const rootName = 'root_model_scene';
//   // If the parent is an instance of GameObject, return it
//   if (mesh.parent.name === rootName) {
//     return mesh.parent as Group<Object3DEventMap>;
//   }

//   // Otherwise, recursively call the function with the parent as the argument
//   return findModelParent(mesh.parent);
// }

export class Model extends Mesh {

  scaleRatio: number;
  pos: Vector3;

  group?: Group;
  modelScene?: Group<Object3DEventMap>;
  mesh?: Mesh;
  move?: boolean;

  boundingBox?: Box3;
  boxHelper?: BoxHelper;

  gltfUrl: string;


  constructor(name: string, pos: Vector3, scaleRatio: number, gltfUrl: string) {
    super()

    this.name = name;
    this.scaleRatio = scaleRatio;
    this.pos = pos;

    this.gltfUrl = gltfUrl;
  }

  changeColour(colour: string) {
    if(!this.modelScene)
      return;

    this.modelScene.traverse((child: any) => {
      if (child.isMesh) {
        if (!child.name.toLowerCase().includes("outline")) {
          (child.material as MeshToonMaterial).color = new Color(colour);
        }
      }
    });
  }

  async initMesh(scene: Scene, modelsArray: Group<Object3DEventMap>[]): Promise<void> {
    const loader = new GLTFLoader();

    const parameters = {
      color: new Color(0xe2eab8)
    }

    const matToon = new MeshToonMaterial(parameters);
    matToon.opacity = .005;
    const matColor = new MeshBasicMaterial({ color: 0x3c3c3c });

    loader.load(this.gltfUrl, (gltf: GLTF) => {

      this.modelScene = gltf.scene;
      
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.geometry.computeBoundingBox();
        }

        if (child.name.toLowerCase().includes("outline")) {
          child.material = matColor;
        }
        else {
          child.material = matToon;
          child.castShadow = true;
        }

        child.name += "-model";
      });
      
      this.modelScene.name = 'root_model_scene';
      this.modelScene.scale.multiplyScalar(this.scaleRatio);
      this.modelScene.position.set(this.pos.x, this.pos.y, this.pos.z);      
      
      this.boxHelper = new BoxHelper(this.modelScene, 0xff0000);
      this.boxHelper.name = 'boxHelper_model';
      this.boundingBox = new Box3().setFromObject(this.boxHelper);
      this.boxHelper.update();
      
      // console.log("Model => initMesh => scene ", scene);
      
      scene.add(this.modelScene);
      // If you want a visible bounding box
      // scene.add(this.modelScene, this.boxHelper);

      modelsArray.push(this.modelScene);

    });
  }

  updateMatrix(delta?: number) {
    if(!delta)
      delta = 1;

    if(!this.modelScene)
      return;

      if(this.boxHelper){
        // console.log("Before Update => this.boxHelper.position ", this.boxHelper.position);
        this.boxHelper.position.set(this.modelScene.position.x *delta, this.modelScene.position.y *delta, this.modelScene.position.z *delta);
        this.boxHelper.update();
        // console.log("After Update => this.boxHelper.position ", this.boxHelper.position);
      }

    if(this.boundingBox)
      this.boundingBox.setFromObject(this.modelScene);
  }

  tick(delta?: number): void {
    if (!this.modelScene)
      return;

    this.updateMatrix(delta);
  }

}