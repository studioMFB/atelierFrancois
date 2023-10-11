import { BoxGeometry, Float32BufferAttribute, MeshStandardMaterial, TextureLoader, Mesh, DoubleSide, Vector3 } from "three";
// import {type Texture} from "./../../../interfaces/Texture";
// import * as terrain from "./../../../textures/terrains.json";

export class Terrain extends Mesh {

  dim: Vector3;
  seg: Vector3;
  pos: Vector3;

  mesh?: Mesh;

  constructor(name: string, dim: Vector3, seg: Vector3, pos: Vector3) {
    super()

    this.name = name;

    this.dim = dim;
    this.seg = seg;
    this.pos = pos;
  }

  initMesh(name: string, id: number): void {
    let aoMapUrl = "";
    let bMapUrl = "";
    let nMapUrl = "";
    let dMapUrl = "";
    let difMapUrl = "";

    switch (id) {
      case 1:
        aoMapUrl = new URL(`./../textures/terrains/mountain/1/ao.png`, import.meta.url).pathname;
        bMapUrl = new URL(`./../textures/terrains/mountain/1/bump.png`, import.meta.url).pathname;
        nMapUrl = new URL(`./../textures/terrains/mountain/1/normal.png`, import.meta.url).pathname;
        dMapUrl = new URL(`./../textures/terrains/mountain/1/displacement.png`, import.meta.url).pathname;
        difMapUrl = new URL(`./../textures/terrains/mountain/1/diffuse.png`, import.meta.url).pathname;
        break;
      case 2:
        aoMapUrl = new URL(`./../textures/terrains/mountain/2/ao.png`, import.meta.url).pathname;
        bMapUrl = new URL(`./../textures/terrains/mountain/2/bump.png`, import.meta.url).pathname;
        nMapUrl = new URL(`./../textures/terrains/mountain/2/normal.png`, import.meta.url).pathname;
        dMapUrl = new URL(`./../textures/terrains/mountain/2/displacement.png`, import.meta.url).pathname;
        difMapUrl = new URL(`./../textures/terrains/mountain/2/diffuse.png`, import.meta.url).pathname;
        break;
      case 3:
        aoMapUrl = new URL(`./../textures/terrains/mountain/3/ao.png`, import.meta.url).pathname;
        bMapUrl = new URL(`./../textures/terrains/mountain/3/bump.png`, import.meta.url).pathname;
        nMapUrl = new URL(`./../textures/terrains/mountain/3/normal.png`, import.meta.url).pathname;
        dMapUrl = new URL(`./../textures/terrains/mountain/3/displacement.png`, import.meta.url).pathname;
        difMapUrl = new URL(`./../textures/terrains/mountain/3/diffuse.png`, import.meta.url).pathname;
        break;
    }

    const texLoader = new TextureLoader();
    const aoMap = texLoader.load(aoMapUrl);
    const bMap = texLoader.load(bMapUrl);
    const nMap = texLoader.load(nMapUrl);
    const dMap = texLoader.load(dMapUrl);
    const difMap = texLoader.load(difMapUrl);


    this.geometry = new BoxGeometry(this.dim.x, this.dim.y, this.dim.z, this.seg.x, this.seg.y, this.seg.z);
    const pos = this.geometry.attributes.position;
    const nor = this.geometry.attributes.normal;
    const enableDisplacement: number[] = [];

    for (let i = 0; i < pos.count; i++) {
      enableDisplacement.push(
        Math.sign(pos.getY(i)), // point can be displaced
        Math.sign(nor.getY(i)) // normal needs to be re-computed
      );

      //re-compute UV (for displacement)
      const u = (pos.getX(i) + this.dim.x * 0.5) / this.dim.x;
      const v = 1 - (pos.getZ(i) + this.dim.z * 0.5) / this.dim.z;
      this.geometry.attributes.uv.setXY(i, u, v);
    }

    this.geometry.setAttribute(
      "enableDisp",
      new Float32BufferAttribute(enableDisplacement, 2)
    );

    this.material = new MeshStandardMaterial({
      aoMap: aoMap,
      normalMap: nMap,
      bumpMap: bMap,
      bumpScale: .5,
      displacementMap: dMap,
      displacementScale: 1.5,
      map: difMap,

      side: DoubleSide,
    });

    this.material.onBeforeCompile = (shader) => {
      shader.vertexShader = `
            attribute vec2 enableDisp;
            varying vec2 vUv; 
            varying vec3 mNormal;
            varying vec3 vPos;
            ${shader.vertexShader}
          `.replace(`#include <displacementmap_vertex>`,
        `
            #ifdef USE_DISPLACEMENTMAP

            vUv = uv;

              if (enableDisp.x > 0.) {
                
                vec3 vUp = vec3(0, 1, 0);
  
                vec3 v0 = normalize( vUp ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
                transformed += v0;
                
                if(enableDisp.y > 0.) {
                  float txl = 1. / 256.;
  
                  vec3 v1 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(txl, 0.) ).x * displacementScale + displacementBias );
                  v1.xz = vec2(txl, 0.) * 20.;
                  vec3 v2 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(0., txl) ).x * displacementScale + displacementBias );
                  v2.xz = -vec2(0., txl) * 20.;

                  vec3 n = normalize(cross(v1 - v0, v2 - v0));
                  mNormal = n;
                  vNormal = normalMatrix * n;

                  vPos = transformed;
                }              
              }
            #endif
            `
      );
      shader.fragmentShader = `

        varying vec2 vUv;
        varying vec3 mNormal;
        varying vec3 vPos;

        vec3 bbMin = vec3(.1, .1, .1);
        vec3 bbMax = vec3(.3, .3, .3);

        vec3 color1 = vec3(1.000,0.833,0.224); // yellow
        vec3 color2 = vec3(0.01, 0.03, 0.01); // green
        vec3 color3 = vec3(0.0, 0.0, 0.0); // black

        ${shader.fragmentShader}
      `.replace(`#include <dithering_fragment>`,

        `#include <dithering_fragment>

        #ifdef GL_ES
        precision mediump float;
        #endif

        vec2 uv = (vUv - .5) * vec2(.6, .6);
        vec3 color = mix(color1, color2, length(uv));
         
        if (length(mNormal) < 0.001) {
            gl_FragColor = vec4(color, 1.);  
          } 
        `
      );
    }

    this.mesh = new Mesh(this.geometry, this.material);

    this.mesh.name = this.name;
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  tick(delta: any): void {
  }

}