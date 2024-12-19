import { Mesh, Vector3, Scene, Group, MeshToonMaterial, Color, type Object3DEventMap, MeshBasicMaterial, BoxHelper, Box3, Object3D } from "three";
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
    if (!this.modelScene)
      return;

    this.modelScene.traverse((child: Object3D) => {
      const _child = child as Mesh;

      if (_child.isMesh) {
        if (!_child.name.toLowerCase().includes("outline")) {
          (_child.material as MeshToonMaterial).color = new Color(colour);
        }
      }
    });
  }

  async initMesh(): Promise<Group<Object3DEventMap>> {
    const loader = new GLTFLoader();

    return new Promise((resolve, reject) => {
      loader.load(
        this.gltfUrl,
        (gltf: GLTF) => {
          this.modelScene = gltf.scene;

          const parameters = {
            color: new Color(0xe2eab8),
          };

          const matToon = new MeshToonMaterial(parameters);
          matToon.opacity = 0.005;
          const matColor = new MeshBasicMaterial({ color: 0x3c3c3c });

          gltf.scene.traverse((child: Object3D) => {
            const _child = child as Mesh;

            if (_child.isMesh) {
              _child.geometry.computeBoundingBox();
            }

            if (_child.name.toLowerCase().includes("outline")) {
              _child.material = matColor;
            } else {
              _child.material = matToon;
              _child.castShadow = true;
            }

            _child.name += "_model";
          });

          this.modelScene.name = "root_model";
          this.modelScene.scale.multiplyScalar(this.scaleRatio);
          this.modelScene.position.set(this.pos.x, this.pos.y, this.pos.z);

          // Update transforms for modelScene and its children
          this.modelScene.updateMatrixWorld(true);

          // Resolve the promise with the loaded model
          resolve(this.modelScene);
        },
        undefined,
        (error) => {
          console.error("Error loading model:", error);
          reject(error); // Reject the promise on error
        }
      );
    });
  }

  updateMatrix(delta?: number) {
    if (!delta)
      delta = 1;

    if (!this.modelScene)
      return;

    if (this.boxHelper) {
      this.boxHelper.position.set(this.modelScene.position.x * delta, this.modelScene.position.y * delta, this.modelScene.position.z * delta);
      this.boxHelper.update();
    }

    if (this.boundingBox)
      this.boundingBox.setFromObject(this.modelScene);
  }

  tick(delta?: number): void {
    if (!this.modelScene)
      return;

    this.updateMatrix(delta);
  }

}
