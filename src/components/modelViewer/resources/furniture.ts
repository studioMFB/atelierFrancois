import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color, Object3DEventMap, MeshBasicMaterial } from "three";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from "three"


export function findModelParent(mesh: Mesh): RootNodeObject {
  // If the mesh has no parent, return null
  if (!mesh.parent) {
    return null;
  }
  // If the parent is an instance of GameObject, return it
  if (mesh.parent.name.includes('root_model-')) {
    return mesh.parent as RootNodeObject;
  }
  // Otherwise, recursively call the function with the parent as the argument
  // return this.findModelParent(mesh.parent as Mesh);
}

export class RootNodeObject extends THREE.Object3D {
}
export class Furniture extends Mesh {

  // dim: Vector3;
  pos: Vector3;

  group?: Group;
  scene?: Group<Object3DEventMap>;
  rootNode: RootNodeObject;
  boxHelper: THREE.BoxHelper;
  mesh:Mesh;
  move:boolean;

  constructor(name: string, pos: Vector3) {
    super()

    this.name = name;
    // this.dim = dim;
    this.pos = pos;
  }

  changeColour(colour:string){
    this.scene.traverse((child: Mesh) => {
      if (child.isMesh) {
          if (!child.name.toLowerCase().includes("outline")) {
              (child.material as MeshToonMaterial).color = new THREE.Color(colour);
          }
      }
  });
  }

  async initMesh(id: number, scene: Scene, modelsArray:Group<Object3DEventMap>[]): Promise<void> {
    const loader = new GLTFLoader();
    const gltfUrl = new URL('./../models/table/1/littlewood_furniture.gltf', import.meta.url).toString();

    const parameters = {
      color: new Color(0xe2eab8)
    }

    const matToon = new MeshToonMaterial(parameters);
    matToon.opacity = .005;
    const matColor = new MeshBasicMaterial({ color: 0x3c3c3c });


    loader.load(gltfUrl, (gltf: GLTF) => {

      this.rootNode = new RootNodeObject();
      this.scene = gltf.scene;

      this.scene.traverse((child: Mesh) => {
        if (child.isMesh) {
          this.rootNode.children.push(child);
          if (child.name.toLowerCase().includes("outline")) {
            child.material = matColor;
          }
          else {
            child.material = matToon;
            child.castShadow = true;
          }

          child.name += "-model";
        }
      });

      this.scene.name = 'root_model-' + id;
      // this.rootNode.matrixAutoUpdate = true;
      scene.add(this.rootNode);
      modelsArray.push(this.scene);
    });
  }

  tick(delta: any): void {
  }

}