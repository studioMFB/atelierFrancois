
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Loop } from "./Loop";
import { Resizer } from "./Resizer";
import { CameraController } from "./CameraController";
import { ControlsController } from './ControlsController';
import { Light } from "./Light";
import SceneView from "./SceneView";


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';

export default class ModelViewer {

    scene: THREE.Scene;
    loop: Loop;
    renderer: THREE.WebGLRenderer;

    cameraController: CameraController;
    camera: THREE.PerspectiveCamera;

    controlsController: ControlsController;

    composer: EffectComposer;


    constructor(container: HTMLElement) {
        this.scene = new SceneView().init(new THREE.Color('#17181b'));
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        container.appendChild(this.renderer.domElement);

        this.cameraController = new CameraController();
        this.cameraController.init();
        this.camera = this.cameraController.getCamera();

        this.controlsController = new ControlsController(this.camera, container)
        this.controlsController.init();

        const resizer = new Resizer(this.camera, this.renderer);

        const light = new Light();

        light.init(this.scene, new THREE.Color(0xffffff), new THREE.Color(0x52f78a));

        this.composer = new EffectComposer(this.renderer);

        this.loop = new Loop(this.camera, this.scene, this.renderer, this.composer);

        this.initLoop();
    }

    private initLoop(): void {
        // Add To render loop
        this.loop.addToUpdate(this.controlsController);
        this.loop.addToUpdate(this.cameraController);


        const renderScene = new RenderPass(this.scene, this.camera);
        const effectFXAA = new ShaderPass(FXAAShader);
        effectFXAA.uniforms.resolution.value.set(1 / window.innerWidth, 1 / window.innerHeight);

        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
        bloomPass.threshold = 0.21;
        bloomPass.strength = 1.2;
        bloomPass.radius = 0.55;
        bloomPass.renderToScreen = true;

        this.composer.setSize(window.innerWidth, window.innerHeight);

        this.composer.addPass(renderScene);
        this.composer.addPass(effectFXAA);
        this.composer.addPass(bloomPass);
    }

    // render() {
    //     this.renderer.render(this.scene, this.camera);
    // }

    start() {
        this.loop.start();
    }

    stop() {
        this.loop.stop();
    }

}