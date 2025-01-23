import { DoubleSide, Mesh, Vector3, PlaneGeometry, 
  Vector2, Color, MeshStandardMaterial, MeshBasicMaterial,
   ShadowMaterial, Scene, Shape, ExtrudeGeometry } from "three";


export class PlaneController extends Mesh {

  dim: Vector2;
  seg: Vector2;
  pos: Vector3;

  ground?: Mesh;
  shadowGround?: Mesh;

  constructor(name: string, dim: Vector2, seg: Vector2, pos: Vector3) {
    super()

    this.name = name;

    this.dim = dim;
    this.seg = seg;
    this.pos = pos;
  }

  initMesh(isVisible: boolean, scene: Scene, opacity:number, colour?: Color): void {
    // GROUND //
    this.geometry = new PlaneGeometry(this.dim.x, this.dim.y, this.seg.x, this.seg.y);
    this.geometry.rotateX(- Math.PI / 2);
    this.material = new MeshStandardMaterial({
      color: colour || new Color(0xff0000),
      visible: isVisible,
      opacity:opacity,
    });
    this.ground = new Mesh(this.geometry, this.material);
    this.ground.name = this.name;
    this.ground.receiveShadow = false;
    this.ground.position.set(this.pos.x, this.pos.y, this.pos.z);

    // SHADOW GROUND //
    this.shadowGround = this.ground.clone();

    this.shadowGround.material = new ShadowMaterial({
      opacity: .5,
      color: "#888888",
      side: DoubleSide,
      transparent: true
    });

    this.shadowGround.receiveShadow = true;
    this.shadowGround.position.set(this.pos.x + 0.01, this.pos.y + 0.01, this.pos.z + 0.01);

    this.roundEdgedBox(scene);
  }

  roundEdgedBox(scene: Scene) {
    const w = 5.2;
    const d = 5.2;
    const r = 0.2;
    const h = 0.1;

    //Generate the rounded rect shape
    const shape = new Shape();

    shape.moveTo(-w / 2, -d / 2 + r);
    shape.lineTo(-w / 2, d / 2 - r);
    shape.absarc(-w / 2 + r, d / 2 - r, r, 1 * Math.PI, 0.5 * Math.PI, true);
    shape.lineTo(w / 2 - r, d / 2);
    shape.absarc(w / 2 - r, d / 2 - r, r, 0.5 * Math.PI, 0 * Math.PI, true);
    shape.lineTo(w / 2, -d / 2 + r);
    shape.absarc(w / 2 - r, -d / 2 + r, r, 2 * Math.PI, 1.5 * Math.PI, true);
    shape.lineTo(-w / 2 + r, -d / 2);
    shape.absarc(-w / 2 + r, -d / 2 + r, r, 1.5 * Math.PI, 1 * Math.PI, true);

    //This is the material that is used to stop the
    //lines in the back from showing
    const mat = new MeshBasicMaterial({
      color: new Color(0xe5e0d8),
      side: DoubleSide,
      depthTest: true,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1
    });

    const geom = new ExtrudeGeometry(shape, { depth: h, bevelEnabled: false});

    const mesh = new Mesh(geom, mat);
    mesh.rotateX(1.57);
    mesh.position.y = -0.01;

    scene.add(mesh);
  }

  tick(delta: any): void {

  }

}