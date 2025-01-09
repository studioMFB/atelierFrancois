import { COLOURS, MODEL_SUB_NAMES } from "@/constants";
import { Mesh, Vector3, Group, MeshToonMaterial, Color, type Object3DEventMap, MeshBasicMaterial, BoxHelper, Box3, Object3D } from "three";
import { type GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export class Model extends Mesh {
  scaleRatio: number;
  pos: Vector3;

  isSelected: boolean = false;
  fillColour: number = COLOURS.DEFAULT_FILL;
  outlineColour: number = COLOURS.DEFAULT_OUTLINE;

  group?: Group;
  modelScene?: Group<Object3DEventMap>;
  mesh?: Mesh;
  move?: boolean;

  boundingBox?: Box3;
  boxHelper?: BoxHelper;

  gltfUrl: string;

  constructor(name?: string, pos?: Vector3, scaleRatio?: number, gltfUrl?: string) {
    super()
    this.name = name || "";
    this.pos = pos || new Vector3(0, 0, 0);
    this.scaleRatio = scaleRatio || 0;
    this.gltfUrl = gltfUrl || "";
  }

  // Finds the parent of a model, recursively traversing upward until it matches the root model name
  findModelParent(mesh: any): Group<Object3DEventMap> | null {
    if (!mesh.parent) {
      return null;
    }

    const rootName = 'root_model';
    if (mesh.parent.name.includes(rootName)) {
      return mesh.parent as Group<Object3DEventMap>;
    }

    return this.findModelParent(mesh.parent);
  }

  changeOutlineColour(colour: number) {
    if (!this.modelScene) return;

    const newColour = new Color(colour);

    this.modelScene.traverse((child: Object3D) => {
      const _child = child as Mesh;

      if (_child.name.toLowerCase().includes(MODEL_SUB_NAMES.OUTLINE)) {
        const mat = _child.material as MeshBasicMaterial
        if (mat) {
          mat.color.set(newColour);
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

          const matFill = new MeshToonMaterial({ color: this.fillColour });
          matFill.opacity = 0.005;
          const matOutline = new MeshBasicMaterial({ color: this.outlineColour});

          this.modelScene.traverse((child: Object3D) => {
            const _child = child as Mesh;

            if (_child.isMesh) {
              _child.geometry.computeBoundingBox();
            }

            if (_child.name.toLowerCase().includes(MODEL_SUB_NAMES.OUTLINE)) {
              _child.material = matOutline;
            } else {
              _child.material = matFill;
              _child.castShadow = true;
            }

            _child.name += `${this.name}_${MODEL_SUB_NAMES.CHILD}`;
          });

          this.modelScene.name = `${this.name}_${MODEL_SUB_NAMES.ROOT}`;
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
