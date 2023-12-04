import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class Furniture extends Mesh {

  // dim: Vector3;
  pos: Vector3;

  group?: Group;
  mesh?: Mesh;

  constructor(name: string, pos: Vector3) {
    super()

    this.name = name;

    // this.dim = dim;
    this.pos = pos;
  }

  async initMesh(id:number, scene: Scene): Promise<void> {
    const loader = new GLTFLoader();
    const gltfUrl = new URL('./../models/table/1/littlewood_furniture.gltf', import.meta.url).toString();    
    const loadedData = await loader.loadAsync(gltfUrl);
    
    const matToon = new MeshToonMaterial();

    for(let i=0; i< loadedData.scene.children.length; ++i){
      const mesh = loadedData.scene.children[i] as Mesh;
      matToon.color = new Color('#e2eab8');
      mesh.material = matToon;
    }

    loadedData.scene.name = this.name;
    loadedData.scene.position.set(this.pos.x, this.pos.y, this.pos.z);
    scene.add( loadedData.scene );
  }

  tick(delta: any): void {
  }

}