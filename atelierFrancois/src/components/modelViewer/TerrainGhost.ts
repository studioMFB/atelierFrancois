import { BoxGeometry, Mesh, Vector3, MeshBasicMaterial, Color, PlaneGeometry } from "three";


export class TerrainGhost extends Mesh {

  dim:Vector3;
  seg:Vector3;
  pos:Vector3;
  
  mesh?: Mesh;

  constructor(name:string, dim: Vector3, seg: Vector3, pos: Vector3) {
    super()
    
    this.name = name;

    this.dim = dim;
    this.seg = seg;
    this.pos = pos;
  }

  initMesh(colour: Color, opacity:number): void {
    // this.geometry  = new BoxGeometry(this.dim.x, this.dim.y, this.dim.z);
    this.geometry  = new PlaneGeometry(this.dim.x, this.dim.z);
    this.geometry.rotateX( - Math.PI / 2 );

    this.material = new MeshBasicMaterial({ 
      color: colour, 
      opacity: opacity,
      transparent: true
    });

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.name = this.name;
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  tick(delta: any): void {
  }

}