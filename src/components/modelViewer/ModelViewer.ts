
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import { ControlsController } from './ControlsController';
import { CameraController } from "./CameraController";
import { LightController } from "./LightController";
import { LoopCOntroller } from "./LoopController";
import {SceneController} from "./SceneController";
import { Resizer } from "./Resizer";
import { GridController } from './GridControlller';
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

    gridController: GridController;

    // private composer: EffectComposer;


    constructor(container: HTMLElement) {
        this.sceneController = new SceneController();
        this.scene = this.sceneController.init(new THREE.Color('#17181b'));

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        container.appendChild(this.renderer.domElement);

        this.cameraController = new CameraController(new THREE.Vector3(0, 15, 15));
        this.camera = this.cameraController.init();

        this.controlsController = new ControlsController(this.camera, container)
        this.controlsController.init();

        const resizer = new Resizer(this.camera, this.renderer);

        const lightController = new LightController();
        lightController.init(this.scene, new THREE.Color(0xffffff), new THREE.Color(0x52f78a));

        // this.composer = new EffectComposer(this.renderer);

        this.loopController = new LoopCOntroller(this.camera, this.scene, this.renderer);

        this.gridController = new GridController( 20, 20);
        this.gridController.init(this.scene);

        this.init();
    }

    private init(): void {
        // Add To render loop
        this.addObject(this.controlsController);
        this.addObject(this.cameraController);

        const renderScene = new RenderPass(this.scene, this.camera);
        const effectFXAA = new ShaderPass(FXAAShader);
        effectFXAA.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0.21;
        bloomPass.strength = 1.2;
        bloomPass.radius = 0.55;
        bloomPass.renderToScreen = true;

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

    addObject(object: any){
        if(!object){
            console.log("Object is null or undifined and will not be added to the scene!");
            return;
        }
        
        if(object.mesh){
            this.sceneController.addMesh(object.mesh);
        }
        
        this.loopController.addToUpdate(object);
    }

}