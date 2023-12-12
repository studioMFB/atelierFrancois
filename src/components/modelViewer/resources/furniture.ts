import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color, ShaderMaterial, Object3DEventMap, MeshBasicMaterial } from "three";
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Lut } from "three/examples/jsm/math/Lut";
import * as THREE from "three"


export function findModelParent(mesh: Mesh): RootNodeObject {
  console.log("findModelParent => Mesh.parent ", mesh.parent);
  // If the mesh has no parent, return null
  if (!mesh.parent) {
    return null;
  }
  // If the parent is an instance of GameObject, return it
  if (mesh.parent instanceof RootNodeObject || mesh.parent.name.includes('root_model-')) {
    return mesh.parent as RootNodeObject;
  }
  // Otherwise, recursively call the function with the parent as the argument
  return this.findModelParent(mesh.parent as Mesh);
}

export class RootNodeObject extends THREE.Object3D {

}
export class Furniture extends Mesh {

  // dim: Vector3;
  pos: Vector3;

  group?: Group;
  mesh?: Group<Object3DEventMap>;
  // mesh?: Mesh;

  constructor(name: string, pos: Vector3) {
    super()

    this.name = name;

    // this.dim = dim;
    this.pos = pos;
  }

  // bubbleParent(mesh:Mesh) {

  //     while (mesh.parent !== null) {
  //         mesh = mesh.parent as Mesh;
  //     }
  //     return mesh;
  // }

  async initMesh(id: number, scene: Scene): Promise<void> {
    const loader = new GLTFLoader();
    const gltfUrl = new URL('./../models/table/1/littlewood_furniture.gltf', import.meta.url).toString();

    const parameters = {
      color: new Color(0xe2eab8)
    }

    const matToon = new MeshToonMaterial(parameters);
    const matColor = new MeshBasicMaterial({ color: 0x1d2e58 });

    loader.load(gltfUrl, (gltf: GLTF) => {

      const rootNode = new RootNodeObject();

      this.mesh = gltf.scene as Group<Object3DEventMap>;

      this.mesh.traverse((child: Mesh) => {
        if (child.isMesh) {
          rootNode.children.push(child);
          if (child.name.toLowerCase().includes("outline")) {
            child.material = matColor;
          }
          else {
            child.material = matToon;
            child.castShadow = true;
          }
        }
      });

      // const geometry = new THREE.BoxGeometry();
      // this.mesh = new Mesh(geometry, matToon);
      // rootNode.children.push(this.mesh);

      this.mesh.name = 'root_model-' + id;
      // scene.add(this.mesh);
      scene.add(rootNode);
      // rootNode.position.set(this.pos.x, -10, this.pos.z);
    });
  }

  tick(delta: any): void {
  }

}