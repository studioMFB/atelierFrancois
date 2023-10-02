import { BoxGeometry, Float32BufferAttribute, MeshStandardMaterial, TextureLoader, Mesh, DoubleSide, Vector3 } from "three";


export class Terrain extends Mesh {

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

  initMesh(): void {
    const texLoader = new TextureLoader();
    const aoMap = texLoader.load(new URL('./../../assets/textures/Mountains01/MOUNTAINS-01_AO.png', import.meta.url).toString());
    const bMap = texLoader.load(new URL('./../../assets/textures/Mountains01/MOUNTAINS-01_HEIGHT.png', import.meta.url).toString());
    const nMap = texLoader.load(new URL('./../../assets/textures/Mountains01/MOUNTAINS-01_NORMAL.png', import.meta.url).toString());
    const dMap = texLoader.load(new URL('./../../assets/textures/Mountains01/MOUNTAINS-01_DEPTH.png', import.meta.url).toString());
    const difMap = texLoader.load(new URL('./../../assets/textures/Mountains01/MOUNTAINS-01_DIFFUSE1.png', import.meta.url).toString());

    // const aoMap = texLoader.load(new URL('./../../../dist/assets/textures/Mountains01/MOUNTAINS-01_AO-91b48a00.png', import.meta.url).toString());
    // const bMap = texLoader.load(new URL('./../../../dis/assets/textures/Mountains01/MOUNTAINS-01_HEIGHT-434367d4.png', import.meta.url).toString());
    // const nMap = texLoader.load(new URL('./../../../dis/assets/textures/Mountains01/MOUNTAINS-01_NORMAL-55f2cd1b.png', import.meta.url).toString());
    // const dMap = texLoader.load(new URL('./../../../dis/assets/textures/Mountains01/MOUNTAINS-01_DEPTH-fd977b47.png', import.meta.url).toString());
    // const difMap = texLoader.load(new URL('./../../../dis/assets/textures/Mountains01/MOUNTAINS-01_DIFFUSE1-0329f90f.png', import.meta.url).toString());

    this.geometry = new BoxGeometry(this.dim.x, this.dim.y, this.dim.z, this.seg.x, this.seg.y, this.seg.z);
    const pos = this.geometry.attributes.position;
    const nor = this.geometry.attributes.normal;
    const enableDisplacement = [];

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
      // aoMapIntensity: 1,
      normalMap: nMap,
      bumpMap: bMap,
      bumpScale: .5,
      displacementMap: dMap,
      displacementScale: 1,
      // displacementBias: -.5,
      map: difMap,

      // wireframe: true,
      side: DoubleSide,
    });

    this.material.onBeforeCompile = (shader) => {
      // shader.uniforms.color = {value: new Vector4(0.10, 0.37, 0.12, 1.0)};

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

        // uuniform vec4 color;

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

        // To debug.
        // gl_FragColor = vec4(mNormal.xyz, 1);

        vec2 uv = (vUv - .5) * vec2(.6, .6);
        vec3 color = mix(color1, color2, length(uv));
        // color = vec3(0.01, 0.03, 0.01);
       
        // float f = clamp((vPos.y - bbMin.y) / (bbMax.y - bbMin.y), 0., 1.);
        // vec3 col = mix(color1, color2, f);
        // col = mix(color3, col, vUv.x);
  
        if (length(mNormal) < 0.001) {
            gl_FragColor = vec4(color, 1.);  
            // gl_FragColor = vec4(col, 1.);
          } 
        `
      );
    }

    this.mesh = new Mesh(this.geometry, this.material);

    this.mesh.name = this.name;
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  tick(delta: any): void {
    // this.geometry?.rotateX(.005);
    // this.geometry?.rotateY(.009);
  }

}