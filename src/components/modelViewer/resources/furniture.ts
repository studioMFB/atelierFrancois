import { BoxGeometry, Float32BufferAttribute, MeshStandardMaterial, TextureLoader, Mesh, DoubleSide, Vector3, Scene } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import * as THREE from "three";
import { GitHubApi } from "../../../api/gitHubApi";



export class Furniture extends Mesh {

  dim: Vector3;
  pos: Vector3;

  mesh?: Mesh;

  constructor(name: string, dim: Vector3, pos: Vector3) {
    super()

    this.name = name;

    this.dim = dim;
    this.pos = pos;
  }

  async initMesh(): Promise<void> {
    const loader = new GLTFLoader();

    // loader.load(
    //   // resource URL
    //   'models/gltf/duck/duck.gltf',
    //   // called when the resource is loaded
    //   function ( gltf ) {
    
    //     scene.add( gltf.scene );
    
    //     gltf.animations; // Array<THREE.AnimationClip>
    //     gltf.scene; // THREE.Group
    //     gltf.scenes; // Array<THREE.Group>
    //     gltf.cameras; // Array<THREE.Camera>
    //     gltf.asset; // Object
    
    //   },
    //   // called while loading is progressing
    //   function ( xhr ) {
    //     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    //   },
    //   // called when loading has errors
    //   function ( error ) {
    //     console.log('An error happened');
    //   }
    // );

    const loadedData = await loader.loadAsync('./../models/table/littlewood_furniture.gltf');

    // this.mesh = new Mesh(this.geometry, this.material);

    this.mesh.name = this.name;
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  tick(delta: any): void {
  }

}