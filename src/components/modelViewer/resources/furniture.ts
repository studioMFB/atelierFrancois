import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color, ShaderMaterial, Object3DEventMap } from "three";
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
    const loadedData = await loader.loadAsync(gltfUrl);

    // // Look Up Table //
    // const lut = new Lut('rainbow', 512);
    // const color = lut.getColor(0.5);

    const parameters = {
      // color: color
      color: new Color('#e2eab8')
    }

    const matToon = new MeshToonMaterial(parameters);

    for (let i = 0; i < loadedData.scene.children.length; ++i) {
      const mesh = loadedData.scene.children[i] as Mesh;
      mesh.material = matToon;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }

    this.mesh = loadedData.scene as Group<Object3DEventMap>;
    this.mesh.name = this.name;

    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    scene.add(this.mesh);
  }

  tick(delta: any): void {
  }

}