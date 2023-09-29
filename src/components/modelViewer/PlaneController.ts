import { Mesh, Vector3, MeshBasicMaterial, PlaneGeometry, Vector2 } from "three";


export class PlaneController extends Mesh {

  name: string;

  dim:Vector2;
  seg:Vector2;
  pos:Vector3;
  
  mesh?: Mesh;

  constructor(name:string, dim: Vector2, seg: Vector2, pos: Vector3) {
    super()
    
    this.name = name;

    this.dim = dim;
    this.seg = seg;
    this.pos = pos;
  }

  initMesh(): void {
    this.geometry = new PlaneGeometry(this.dim.x, this.dim.y, this.seg.x, this.seg.y);
    this.geometry.rotateX( - Math.PI / 2 );

    this.material = new MeshBasicMaterial( {visible: false } );

    this.mesh = new Mesh( this.geometry, this.material);

    // scene.add( plane );
    // objects.push( plane );

    this.mesh = new Mesh(this.geometry, this.material);

    this.mesh.name = this.name;
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  tick(delta: any): void {

  }

}