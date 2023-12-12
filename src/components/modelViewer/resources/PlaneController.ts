import { DoubleSide, Mesh, Vector3, PlaneGeometry, Vector2, Color, MeshStandardMaterial, WebGLRenderTarget, MeshBasicMaterial, ShadowMaterial} from "three";


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

  initMesh(isVisible: boolean, colour?: Color): void {
    // GROUND //
    this.geometry = new PlaneGeometry(this.dim.x, this.dim.y, this.seg.x, this.seg.y);
    this.geometry.rotateX(- Math.PI / 2);
    this.material = new MeshStandardMaterial({
      color: colour || new Color(0xff0000),
      visible: isVisible,
    });
    this.ground = new Mesh(this.geometry, this.material);
    this.ground.name = this.name;
    this.ground.receiveShadow = false;
    this.ground.position.set(this.pos.x, this.pos.y, this.pos.z);

    // SHADOW GROUND //
    this.shadowGround = this.ground.clone();

    this.shadowGround.material = new ShadowMaterial({
      opacity: .5,    
      color:"#888888",
      side:DoubleSide,
      transparent:true
    });

    this.shadowGround.receiveShadow = true;
    this.shadowGround.position.set(this.pos.x+0.01, this.pos.y+0.01, this.pos.z+0.01);
  }

  tick(delta: any): void {

  }

}