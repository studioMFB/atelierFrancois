import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color, ShaderMaterial, Object3DEventMap, MeshBasicMaterial } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Lut } from "three/examples/jsm/math/Lut";


export class Furniture extends Mesh {

  // dim: Vector3;
  pos: Vector3;

  group?: Group;
  mesh?: Group<Object3DEventMap>;

  constructor(name: string, pos: Vector3) {
    super()

    this.name = name;

    // this.dim = dim;
    this.pos = pos;
  }

  async initMesh(id: number, scene: Scene): Promise<void> {
    const loader = new GLTFLoader();
    const gltfUrl = new URL('./../models/table/1/littlewood_furniture.gltf', import.meta.url).toString();

    const parameters = {
      color: new Color('#e2eab8')
    }

    const matToon = new MeshToonMaterial(parameters);
    const matColor = new MeshBasicMaterial({ color: 0x1d2e58 });

    loader.load(gltfUrl, (gltf) => {
      this.mesh = gltf.scene as Group<Object3DEventMap>;

      gltf.scene.traverse((child: Mesh) => {
        console.log("GLTF traverse child ", child);
        child.castShadow = true;

        if(child.name.toLowerCase().includes("outline")){
          child.material = matColor;
        }
      });

      for (let i = 0; i < gltf.scene.children.length; ++i) {
        const mesh = gltf.scene.children[i] as Mesh;
        mesh.material = matToon;
      }

      this.mesh.name = this.name;
      this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
      scene.add(this.mesh);
    });
  }

  tick(delta: any): void {
  }

}