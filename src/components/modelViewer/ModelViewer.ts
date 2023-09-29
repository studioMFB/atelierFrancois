
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { ControlsController } from './ControlsController';
import { CameraController } from "./CameraController";
import { LightController } from "./LightController";
import { LoopCOntroller } from "./LoopController";
import { SceneController } from "./SceneController";
import { Resizer } from "./Resizer";
import { GridController } from './GridControlller';
import { PlaneController } from './PlaneController';
import { Terrain } from './Terrain';
// import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class ModelViewer {

    private sceneController: SceneController;
    private scene: THREE.Scene;

    private loopController: LoopCOntroller;

    private renderer: THREE.WebGLRenderer;

    private cameraController: CameraController;
    private camera: THREE.PerspectiveCamera;

    private controlsController: ControlsController;

    private gridController: GridController;

    private raycaster: THREE.Raycaster;
    private pointer: THREE.Vector2;

    private planeController: PlaneController;
    private rollOverMesh?: THREE.Mesh;


    private meshArray: THREE.Mesh[];

    // private composer: EffectComposer;


    constructor(container: HTMLElement) {
        this.meshArray = [];

        // Scene //
        this.sceneController = new SceneController();
        this.scene = this.sceneController.init(new THREE.Color('#17181b'));

        // Renderer //
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        container.appendChild(this.renderer.domElement);

        // Camera //
        this.cameraController = new CameraController(new THREE.Vector3(0, 15, 15));
        this.camera = this.cameraController.init();

        // Controls //
        this.controlsController = new ControlsController(this.camera, container)
        this.controlsController.init();

        const resizer = new Resizer(this.camera, this.renderer);

        // Light //
        const lightController = new LightController();
        lightController.init(this.scene, new THREE.Color(0xffffff), new THREE.Color(0x52f78a));

        // this.composer = new EffectComposer(this.renderer);

        this.loopController = new LoopCOntroller(this.camera, this.scene, this.renderer);

        // Grid //
        this.gridController = new GridController(20, 20);
        this.gridController.init(this.scene);
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        // Plane // 
        this.planeController = new PlaneController("Plane", new THREE.Vector2(20, 20), new THREE.Vector2(0, 0), new THREE.Vector3(0, 0, 0));
        this.planeController.initMesh();
        this.addObject(this.planeController);

        this.init();
    }

    private init(): void {
        // Add To render loop
        this.addObject(this.controlsController);
        this.addObject(this.cameraController);

        // roll-over helpers //
        const rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
        const rollOverMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.5, transparent: true });
        this.rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
        this.scene.add(this.rollOverMesh);

        // const renderScene = new RenderPass(this.scene, this.camera);
        // const effectFXAA = new ShaderPass(FXAAShader);
        // effectFXAA.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight);

        // const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        // bloomPass.threshold = 0.21;
        // bloomPass.strength = 1.2;
        // bloomPass.radius = 0.55;
        // bloomPass.renderToScreen = true;

        // this.composer.setSize(window.innerWidth, window.innerHeight);
        // this.composer.addPass(renderScene);
        // this.composer.addPass(effectFXAA);
        // this.composer.addPass(bloomPass);
    }

    // render() {
    //     this.renderer.render(this.scene, this.camera);
    // }

    start() {
        this.loopController.start();
    }

    stop() {
        this.loopController.stop();
    }

    addObject(object: any) {
        if (!object) {
            console.log("Object is null or undifined and will not be added to the scene!");
            return;
        }

        if (object.mesh) {
            this.sceneController.addMesh(object.mesh);
            this.meshArray.push(object.mesh);
        }

        this.loopController.addToUpdate(object);
    }

    onPointerMove(event: MouseEvent) {

        this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1);

        this.raycaster.setFromCamera(this.pointer, this.camera);

        const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        if (intersects.length > 0) {

            const intersect = intersects[0];

            if (this.rollOverMesh && intersect && intersect.face) {
                this.rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
                this.rollOverMesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
            }

            // render();
        }

    }

    onPointerDown(event: MouseEvent) {
        this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, - (event.clientY / window.innerHeight) * 2 + 1);

        this.raycaster.setFromCamera(this.pointer, this.camera);

        const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        if (intersects.length > 0) {

            const intersect = intersects[0];

            // // delete cube
            // if (isShiftDown) {

            //     if (intersect.object !== this.planeController.mesh) {

            //         this.scene.remove(intersect.object);

            //         this.meshArray.splice(this.meshArray.indexOf(intersect.object), 1);

            //     }

            //     // create cube

            // } else {

            const terrain = new Terrain("T01", new THREE.Vector3(2, .5, 2), new THREE.Vector3(50, 1, 50), new THREE.Vector3(1, 0, 0));
            terrain.initMesh();

            if (terrain.mesh && intersect && intersect.face) {
                terrain.mesh.position.copy(intersect.point).add(intersect.face.normal);
                terrain.mesh.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25);
            }

            this.addObject(terrain);
            // }

            // render();
        }
    }

}