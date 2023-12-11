
import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

import { ControlsController } from './settings/ControlsController';
import { CameraController } from "./settings/CameraController";
import { LightController } from "./settings/LightController";
import { LoopCOntroller } from "./settings/LoopController";
import { SceneController } from "./settings/SceneController";
import { Resizer } from "./settings/Resizer";
import { GridController } from './settings/GridControlller';
import { PlaneController } from './resources/PlaneController';
import { Terrain } from './resources/Terrain';
import { TerrainGhost } from './resources/TerrainGhost';
import { EventHub } from './../EventHub';
import { type Texture } from './../../interfaces/Texture';
import { Furniture } from './resources/furniture';


const GRID_SIZE = 5;
const GRID_DIVISION = 10;
const GRID_CELL_SIZE = 2;
const GRID_CELL_MID_SIZE = GRID_CELL_SIZE * .5;

const TERRAIN_SIZE = new THREE.Vector3(2, .5, 2);
const GHOST_OFFSET = 0;
const TERRAIN_OFFSET = .25;

export let c_event: CustomEvent;
export const eventHub = EventHub.createEventHub();


export class ModelViewer {

    private sceneController: SceneController;
    private scene: THREE.Scene;
    private canvas: HTMLCanvasElement;

    private loopController: LoopCOntroller;
    private renderer: THREE.WebGLRenderer;

    private controlsController: ControlsController;

    private cameraController: CameraController;
    private camera: THREE.Camera;

    private gridController: GridController;
    private planeController: PlaneController;

    private raycaster: THREE.Raycaster;
    private pointer: THREE.Vector2;
    private modelsArray: THREE.Group<THREE.Object3DEventMap>[];

    private intersected: any;
    private intersectedArray: any[];

    private terrainGhost: TerrainGhost;

    private table: Furniture;

    private meshArray: THREE.Mesh[];

    private isShiftDown: boolean;

    private terrainsList: Map<string, Terrain> = new Map();


    constructor(container: HTMLElement) {
        this.meshArray = [];
        this.modelsArray = [];
        this.intersectedArray = [];
        this.isShiftDown = false;

        // Scene //
        this.sceneController = new SceneController();
        this.scene = this.sceneController.init(new THREE.Color('#ded6d8'));

        // Renderer //
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.shadowMap.enabled = true;
        this.canvas = this.renderer.domElement;
        container.appendChild(this.canvas);

        // Camera //
        this.cameraController = new CameraController(new THREE.Vector3(-2, 3, 2));
        this.camera = this.cameraController.init();

        // Controls //
        this.controlsController = new ControlsController(this.camera, this.canvas)
        this.controlsController.init();

        // Light //
        const hLight = new THREE.HemisphereLight();
        this.scene.add(hLight);
        const lightController = new LightController();
        lightController.addSpotLight(this.scene, 0xffffff, new THREE.Vector3(5, 20, 7));

        lightController.addPointLight(this.scene, 0x0040ff, new THREE.Vector3(0, 4, 2));
        lightController.addPointLight(this.scene, 0x80ff80, new THREE.Vector3(2, 9, -2));
        lightController.addPointLight(this.scene, 0xffaa00, new THREE.Vector3(-2, 6, 2));

        this.loopController = new LoopCOntroller(this.camera, this.scene, this.renderer);

        // Grid //
        this.gridController = new GridController(GRID_SIZE, GRID_DIVISION);
        this.gridController.init(this.scene, '#888888');
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        // Plane // 
        this.planeController = new PlaneController("Plane", new THREE.Vector2(GRID_SIZE, GRID_SIZE), new THREE.Vector2(1, 1), new THREE.Vector3(0, 0, 0));
        this.planeController.initMesh(false);
        this.addObject(this.planeController);
        this.scene.add(this.planeController.ground);
        this.scene.add(this.planeController.shadowGround);

        // Ghost Terrain //
        // this.terrainGhost = new TerrainGhost("T-Ghost", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(0, 0, 0));
        // this.terrainGhost.initMesh(new THREE.Color(0xff0000), .5);
        // if (this.terrainGhost.mesh) {
        //     this.sceneController.addMesh(this.terrainGhost.mesh);
        //     this.loopController.addToUpdate(this.terrainGhost);
        // }

        // TEST FURNITURE TABLE //
        this.table = new Furniture("littlewood_furniture", new THREE.Vector3(0, 0, 0));
        this.table.initMesh(1, this.scene).then(() => {

            this.modelsArray.push(this.table.mesh);

            if (this.table.mesh) {
                for (let i = 0; i < this.table.mesh.children.length; ++i) {
                    const mesh = this.table.mesh.children[i] as THREE.Mesh;
                    this.sceneController.addMesh(mesh);
                }
                this.loopController.addToUpdate(this.table);
            }
        });

        // RESIZER //
        const resizer = new Resizer(this.camera, this.renderer);

        this.init();
    }

    private init(): void {
        // Add To render loop
        this.addObject(this.controlsController);
        this.addObject(this.cameraController);

        document.addEventListener("pointermove", (e: PointerEvent) => { this.onPointerMove(e) });
        document.addEventListener("pointerdown", (e: PointerEvent) => { this.onPointerDown(e) });
    }

    onPointerMove(event: PointerEvent) {
        event.preventDefault();
        this.pointer.x = (event.offsetX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(event.offsetY / window.innerHeight) * 2 + 1;
        // this.intersection();
    }

    onPointerDown(event: PointerEvent) {
        console.log("mouseDown");
        this.intersection();
    }

    intersection() {
        try {
            this.raycaster.setFromCamera(this.pointer, this.camera);
        }
        catch (e: any) {
            throw new Error(e.toString());
            return;
        }

        const intersects = this.raycaster.intersectObjects(this.scene.children, true);

        if (intersects.length > 0) {
            const tempIntersect = intersects[0].object;
            if (tempIntersect != this.intersected && tempIntersect.type === "Mesh") {
                this.intersected = tempIntersect;
                const id = this.intersected.name.split('-')[1];

                console.log("DO");

                for (let i = 0; i < intersects.length; ++i) {
                    const tempIntersect = intersects[i].object;

                    if (tempIntersect.name === `model-${id}`) {
                        ((tempIntersect as any).material as THREE.MeshToonMaterial).color.set(0xf47653);
                        this.intersectedArray.push(tempIntersect);

                        console.log(tempIntersect.name);
                    }
                }
            } 
            else {
                if (this.intersected) {
    
                    console.log("UNDO");
                    for (let i = 0; i < this.intersectedArray.length; ++i) {
                        (this.intersectedArray[i].material as THREE.MeshToonMaterial).color.set(0xffffff);
                    }
    
                    this.intersected = null;
                    this.intersectedArray = [];
                }
            }
        } 
        // else {
        //     if (this.intersected) {

        //         console.log("UNDO");
        //         for (let i = 0; i < this.intersectedArray.length; ++i) {
        //             (this.intersectedArray[i].material as THREE.MeshToonMaterial).color.set(0xffffff);
        //         }

        //         this.intersected = null;
        //         this.intersectedArray = [];
        //     }
        // }
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

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

    private onDocumentKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 16: this.isShiftDown = true; break;
        }
    }

    private onDocumentKeyUp(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 16: this.isShiftDown = false; break;
        }
    }

}