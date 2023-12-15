import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color, Object3DEventMap, MeshBasicMaterial, BoxHelper, Box3 } from "three";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import * as THREE from "three"


export function findModelParent(mesh: Mesh, id: string): Group<Object3DEventMap> {
  // If the mesh has no parent, return null
  if (!mesh.parent) {
    return null;
  }

  const rootName = 'root_model-' + id;
  // If the parent is an instance of GameObject, return it
  // if (mesh.parent.name.includes('root_model-')) {
  if (mesh.parent.name === rootName) {
    return mesh.parent as Group<Object3DEventMap>;
  }
  // Otherwise, recursively call the function with the parent as the argument
  // return this.findModelParent(mesh.parent as Mesh);
}

export class Furniture extends Mesh {

  // dim: Vector3;
  pos: Vector3;

  group?: Group;
  scene?: Group<Object3DEventMap>;
  mesh: Mesh;
  move: boolean;

  boundingBox: Box3;
  boxHelper: BoxHelper;


  constructor(name: string, pos: Vector3) {
    super()

    this.name = name;
    // this.dim = dim;
    this.pos = pos;
  }

  changeColour(colour: string) {
    this.scene.traverse((child: Mesh) => {
      if (child.isMesh) {
        if (!child.name.toLowerCase().includes("outline")) {
          (child.material as MeshToonMaterial).color = new THREE.Color(colour);
        }
      }
    });
  }

  async initMesh(id: number, scene: Scene, modelsArray: Group<Object3DEventMap>[], transformControls: TransformControls): Promise<void> {
    const loader = new GLTFLoader();
    const gltfUrl = new URL('./../models/table/1/littlewood_furniture.gltf', import.meta.url).toString();

    const parameters = {
      color: new Color(0xe2eab8)
    }

    const matToon = new MeshToonMaterial(parameters);
    matToon.opacity = .005;
    const matColor = new MeshBasicMaterial({ color: 0x3c3c3c });

    loader.load(gltfUrl, (gltf: GLTF) => {

      this.scene = gltf.scene;

      this.scene.traverse((child: any) => {
        if (child.isMesh) {
          if (child.name.toLowerCase().includes("outline")) {
            child.material = matColor;
          }
          else {
            child.material = matToon;
            child.castShadow = true;
          }

          child.name += "-model-" + id;
          child.geometry.computeBoundingBox();


          // modelsArray.push(child);
        }
      });

      this.scene.name = 'root_model-' + id;
      this.scene.position.set(this.pos.x, this.pos.y, this.pos.z)
      this.scene.scale.set(1, 1, 1);

      this.boxHelper = new BoxHelper(this.scene, 0xff0000);
      this.boxHelper.name = 'boxHelper_model-' + id;
      this.boundingBox = new Box3().setFromObject(this.boxHelper);
      this.boxHelper.update();

      // If you want a visible bounding box
      // scene.add(this.scene);
      scene.add(this.scene, this.boxHelper);
      modelsArray.push(this.scene);
    });
  }

  updateMatrix() {
    this.boxHelper.position.set(this.scene.position.x, this.scene.position.y, this.scene.position.z);
    this.boxHelper.update();

    this.boundingBox.setFromObject(this.scene);

    // this.scene.updateMatrix();
    // this.scene.updateMatrixWorld(true);

    // this.scene.traverse((child: any) => {
    //   if (child.isMesh) {
    //     child.updateMatrix();
    //     child.updateMatrixWorld(true);
    //     this.boundingBox.copy(child.geometry.boundingBox);
    //   }
    // });

    // this.boundingBox.applyMatrix4(this.scene.matrixWorld);
  }

  tick(delta: any): void {
    if (!this.scene)
      return;

    this.updateMatrix();
  }

}