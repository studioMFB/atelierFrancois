
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { LoopSubdivision } from 'three-subdivide';

export default class TerrainOld {

    // geom?: THREE.BoxGeometry;
    // geom?: THREE.PlaneGeometry;
    geom?: THREE.BoxGeometry;
    mesh?: THREE.Mesh;

    constructor() {
    }

    initGeom() {
        const geometry = new THREE.BufferGeometry();

        const vertices = new Float32Array([
            // front
            -1, -1, 1, 1, -1, 1, -1, 1, 1,
            -1, 1, 1, 1, -1, 1, 1, 1, 1,
            // back
            1, -1, -1, -1, -1, -1, 1, 1, -1,
            1, 1, -1, -1, -1, -1, -1, 1, -1,
            // left
            -1, -1, -1, -1, -1, 1, -1, 1, -1,
            -1, 1, -1, -1, -1, 1, -1, 1, 1,
            // right
            1, -1, 1, 1, -1, -1, 1, 1, 1,
            1, 1, 1, 1, -1, -1, 1, 1, -1,
            // top
            1, 1, -1, -1, 1, -1, 1, 1, 1,
            1, 1, 1, -1, 1, -1, -1, 1, 1,
            // bottom
            1, -1, 1, -1, -1, 1, 1, -1, -1,
            1, -1, -1, -1, -1, 1, -1, -1, -1,
        ])

        // itemSize = 3 because there are 3 values (components) per vertex
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

        return geometry;
    }

    init(scene: THREE.Scene): void {
        const width = 2, height = .5, depth = 2;
        const segW = 50, segH = 1, segD = 50;

        // const colour = new THREE.Color(0x94bbe9);
        const colour = new THREE.Color(0x256e3e);
        const isWireFrame = false;

        const params = {
            split: false,       // optional, default: true
            uvSmooth: true,      // optional, default: false
            preserveEdges: true,      // optional, default: false
            flatOnly: true,      // optional, default: false
            maxTriangles: Infinity,   // optional, default: Infinity
        };
        const iterations = 5;
        // this.geom = LoopSubdivision.modify(new THREE.BoxGeometry(width, height, depth, segW, segH, segD), iterations, params);

        this.geom = new THREE.BoxGeometry(width, height, depth, segW, segH, segD) as THREE.BoxGeometry;
        // this.geom = new THREE.PlaneGeometry(width, sidpthze, segW, segD);

        const texLoader = new THREE.TextureLoader();
        const aoMap = texLoader.load(new URL('./../../assets/textures/Mountains 01/tex/MOUNTAINS-01_AO_8k.png', import.meta.url).toString());
        const bMap = texLoader.load(new URL('./../../assets/textures/Mountains 01/tex/MOUNTAINS-01_HEIGHT_8k.png', import.meta.url).toString());
        const nMap = texLoader.load(new URL('./../../assets/textures/Mountains 01/tex/MOUNTAINS-01_NORMAL_8k.png', import.meta.url).toString());
        const dMap = texLoader.load(new URL('./../../assets/textures/Mountains 01/tex/MOUNTAINS-01_DEPTH_8k.png', import.meta.url).toString());
        const difMap = texLoader.load(new URL('./../../assets/textures/Mountains 01/tex/MOUNTAINS-01_DIFFUSE1_8k.png', import.meta.url).toString());

        // const mat = new THREE.MeshStandardMaterial({
        //     // color: colour,
        //     aoMap: aoMap,
        //     // aoMapIntensity: 1,
        //     normalMap: nMap,
        //     bumpMap: bMap,
        //     // bumpScale: .5,
        //     displacementMap: dMap,
        //     // displacementScale: 2,
        //     displacementBias: -.5,
        //     map: difMap,

        //     // wireframe: isWireFrame,
        //     side: THREE.DoubleSide,
        // });

        const mat = new THREE.MeshPhongMaterial({
            displacementMap: dMap,
            // displacementScale: 2,
            displacementBias: -0.5,
            normalMap: nMap,
            bumpMap: bMap,
            // bumpScale: .5,
            aoMap: aoMap,
            // aoMapIntensity: 1,
            map: difMap,

            // wireframe: isWireFrame,
            side: THREE.DoubleSide,
        });

        // mat.onBeforeCompile= (shader) => {
        //     shader.uniforms.dmap = {value: dMap};	// Displacement Map
        //     shader.vertexShader = `
        //         uniform sampler2D dmap;
        //         varying vec2 vUv;					
        //     ${shader.vertexShader}
        //     `
        //     .replace(
        //         `#include <begin_vertex>`,
        //         `#include <begin_vertex>
        //             vec3 dsp = vec3(1.0,1.0,1.0)*(texture2D(dmap, uv).rgb * 1.0 + 0.0);
        //             transformed.x += dsp.y;
        //             transformed.y += dsp.x;		// displacementMap stores heigh in x
        //             transformed.z += dsp.z;
        //         `
        //     );
        // };


        // new GLTFLoader().load(new URL('./../../assets/models/cube/scene.gltf', import.meta.url).toString(), (gltf) => {
        //     if (gltf) {
        //         this.mesh = gltf.scene.children[0] as THREE.Mesh;
        //         // this.mesh.material = new THREE.MeshStandardMaterial({ color: colour, side: THREE.DoubleSide, wireframe: isWireFrame });
        //         const materials = this.mesh.material as THREE.MeshStandardMaterial[];

        //         // for(let i=0; i<materials.length; ++i){
        //         //     materials[i] = new THREE.MeshStandardMaterial({ color: colour, side: THREE.DoubleSide, wireframe: isWireFrame })
        //         // }

        //         console.log("GLTF ", gltf);
        //         console.log("Mesh ", this.mesh);

        //         scene.add(this.mesh);
        //     }
        // });

        const matCube = [
            new THREE.MeshStandardMaterial({ color: colour, side: THREE.DoubleSide, wireframe: isWireFrame }), //right side
            new THREE.MeshStandardMaterial({ color: colour, side: THREE.DoubleSide, wireframe: isWireFrame }), //left side
            mat, //top side
            new THREE.MeshStandardMaterial({ color: colour, side: THREE.DoubleSide, wireframe: isWireFrame }), //bottom side
            new THREE.MeshStandardMaterial({ color: colour, side: THREE.DoubleSide, wireframe: isWireFrame }), //front side
            new THREE.MeshStandardMaterial({ color: colour, side: THREE.DoubleSide, wireframe: isWireFrame }), //back side
        ];

        {
            // let pos = this.geom.attributes.position;
            // let nor = this.geom.attributes.normal;
            // let enableDisplacement = [];

            // for (let i = 0; i < pos.count; i++) {
            //     enableDisplacement.push(
            //         1,
            //         //Math.sign(pos.getY(i)), // point can be displaced
            //         Math.sign(nor.getY(i)) // normal needs to be re-computed
            //     );

            //     //re-compute UV (for displacement)
            //     let u = (pos.getX(i) + width * 0.5) / width;
            //     let v = 1 - (pos.getZ(i) + depth * 0.5) / depth;
            //     this.geom.attributes.uv.setXY(i, u, v);
            // }

            // this.geom.setAttribute(
            //     "enableDisp",
            //     new THREE.Float32BufferAttribute(enableDisplacement, 2)
            // );

            // console.log("new THREE.Float32BufferAttribute(enableDisplacement, 2) ", new THREE.Float32BufferAttribute(enableDisplacement, 2));

            // const mat = new THREE.MeshStandardMaterial({
            //     color: new THREE.Color(0x94bbe9),
            //     aoMap: aoMap,
            //     aoMapIntensity: 1,
            //     normalMap: nMap,
            //     bumpMap: bMap,
            //     bumpScale: .5,
            //     displacementMap: dMap,
            //     displacementScale: 5,
            //     displacementBias: 0,
            //     // map: difMap,

            //     // wireframe:true,
            //     side: THREE.DoubleSide,
            // });

            // mat.onBeforeCompile = (shader) => {
            //     shader.vertexShader = `
            //       attribute vec2 enableDisp;

            //       ${shader.vertexShader}
            //     `.replace(
            //       `#include <displacementmap_vertex>`,
            //       `
            //       //#ifdef USE_DISPLACEMENTMAP
            //         if (enableDisp.x > 0.) {

            //           vec3 vUp = vec3(0, 1, 0);

            //           vec3 v0 = normalize( vUp ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
            //           transformed += v0;

            //           if(enableDisp.y > 0.) {
            //             float txl = 1. / 256.;

            //             vec3 v1 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(txl, 0.) ).x * displacementScale + displacementBias );
            //             v1.xz = vec2(txl, 0.) * 20.;
            //             vec3 v2 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(0., txl) ).x * displacementScale + displacementBias );
            //             v2.xz = -vec2(0., txl) * 20.;

            //             vec3 n = normalize(cross(v1 - v0, v2 - v0));
            //             vNormal = normalMatrix * n;
            //           }              
            //         }
            //       //#endif
            //       `
            //     );
            //      console.log(shader.vertexShader);
            // };

            //   console.log("new THREE.Vector2(enableDisplacement[0], enableDisplacement[1] ", new THREE.Vector2(enableDisplacement[0], enableDisplacement[1]));

            // const shMat = new THREE.ShaderMaterial({
            //     uniforms: {
            //         //wireframe: true,
            //         //side: DoubleSide,
            //         // color: { value: new THREE.Color(0xeeaeca) },
            //         color1: { value: new THREE.Color(0xeeaeca) },
            //         color2: { value: new THREE.Color(0x94bbe9) },
            //         // aoMap: { value: aoMap },
            //         // aoMapIntensity: { value: 1 },
            //         // normalMap: { value: nMap },
            //         // bumpMap: { value: bMap },
            //         // bumpScale: { value: .5 },
            //         displacementMap: { value: dMap },
            //         displacementScale: { value: 5 },
            //         displacementBias: { value: 0.15 },
            //         enableDisp: {value: new THREE.Vector2(1.0, 1.0)}
            //         // map: { value: difMap },
            //     },
            //     vertexShader: `
            //     uniform vec2 enableDisp;

            //     varying vec2 vUv;
            //     varying vec3 transformed;
            //     varying vec3 vNormal;

            //     uniform sampler2D displacementMap;
            //     uniform float displacementScale;
            //     uniform float displacementBias;

            //     void main(){
            //         vUv = uv;

            //         if (enableDisp.x > 0.0) {

            //             vec3 vUp = vec3(0, 1, 0);

            //             vec3 v0 = normalize( vUp ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
            //             transformed += v0;

            //             if(enableDisp.y > 0.0) {
            //                 float txl = 1. / 256.;

            //                 vec3 v1 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(txl, 0.) ).x * displacementScale + displacementBias );
            //                 v1.xz = vec2(txl, 0.) * 20.;
            //                 vec3 v2 = normalize( vUp ) * ( texture2D( displacementMap, vUv + vec2(0., txl) ).x * displacementScale + displacementBias );
            //                 v2.xz = -vec2(0., txl) * 20.;

            //                 vec3 n = normalize(cross(v1 - v0, v2 - v0));
            //                 vNormal = normalMatrix * n;

            //                 gl_Position = vec4( position + vNormal, 1.);
            //             }  
            //         }
            //     }`,

            //   fragmentShader: `
            //     varying vec2 vUv;
            //     uniform sampler2D displacementMap;

            //     // uniform vec3 color;
            //     uniform vec3 color1;
            //     uniform vec3 color2;

            //     uniform float displacementScale;

            //     void main(){
            //         vec2 uv = (vUv - 0.5) * vec2(displacementScale, 1.);
            //         vec4 firstData = texture(displacementMap, uv);

            //         // gl_FragColor = vec4( mix( color, length(uv)), 1. );
            //         gl_FragColor = vec4( mix( color1, color2, length(uv)), 1. );
            //     }`  
            // });
        }

        // let geom = this.initGeom();// as THREE.BoxGeometry;
        // geom = LoopSubdivision.modify(geom, iterations, params);
        // const mat01 = new THREE.MeshStandardMaterial({
        //     displacementMap: dMap,
        //     // displacementScale: 2,
        //     displacementBias: -0.5,
        //     normalMap: nMap,
        //     bumpMap: bMap,
        //     // bumpScale: .5,
        //     aoMap: aoMap,
        //     // aoMapIntensity: 1,
        //     map: difMap,
        //     // wireframe: true,
        //     side: THREE.DoubleSide,
        // });

        this.mesh = new THREE.Mesh(this.geom, matCube);

        // this.mesh.layers.enable(BLOOM_SCENE);

        scene.add(this.mesh);
    }

    tick(delta: any): void {
        // this.geom?.rotateX(.005);
        // this.geom?.rotateY(.009);
    }


}