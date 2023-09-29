
import * as THREE from 'three';
import type { Loop } from './Loop';



export default class Cylinder {

    geom?: THREE.CylinderGeometry;
    mesh?: THREE.Mesh;

    constructor(loop: Loop, scene: THREE.Scene) {
        this.init(loop, scene);
    }

    private init(loop: Loop, scene: THREE.Scene): void {
        this.geom = new THREE.CylinderGeometry(.4, .4, .02, 100, 1);

        const loader = new THREE.TextureLoader();
        // const heightMap = loader.load("./../../assets/textures/height.png");
        const heightMap = loader.load("./height.png");
        // const heightMap = THREE.useTexture("./height.png");
        // console.log("height map ", heightMap);

        // var heightMap = THREE.ImageUtils.loadTexture("./coin_sides.png");
        const mat = new THREE.MeshLambertMaterial({
            color: 0xeeaeca,
            map:heightMap
        });

        const shadMat = new THREE.ShaderMaterial({
            uniforms: {
                // Feed the heightmap
                  bumpTexture: { value: heightMap },
                // Feed the scaling constant for the heightmap
                //   bumpScale: { value: 50 },
                color1: { value: new THREE.Color(0xeeaeca) },
                color2: { value: new THREE.Color(0x94bbe9) },
                ratio: { value: innerWidth / innerHeight }

            },
            vertexShader: `varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = vec4(position, 1.);
      }`,
            fragmentShader: `varying vec2 vUv;
            uniform sampler2D bumpTexture;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float ratio;
        void main(){
        	vec2 uv = (vUv - 0.5) * vec2(ratio, 1.);
            vec4 firstData = texture(bumpTexture, uv);
          gl_FragColor = vec4( mix( color1, color2, length(uv)), 1. );
        }`
        });

        this.mesh = new THREE.Mesh(this.geom, shadMat);

        scene.add(this.mesh);
    }

    // rotateGeometry() {
    //     this.mesh!.tick = (delta) => {
    //         this.geom?.rotateX(.005);
    //         this.geom?.rotateY(.009);
    //     };
    // }

    tick(delta: any):void{
        this.geom?.rotateX(.005);
           this.geom?.rotateY(.009);
   }

}