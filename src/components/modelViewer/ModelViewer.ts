
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


    //shader effect members
    private composer: EffectComposer;
    private renderPass: RenderPass;
    private outlinePass: OutlinePass;
    private effectFXAA: ShaderPass;

    private controlsController: ControlsController;

    private cameraController: CameraController;
    private camera: THREE.PerspectiveCamera;

    private gridController: GridController;
    private planeController: PlaneController;

    private raycaster: THREE.Raycaster;
    private pointer: THREE.Vector2;
    private selectedObjects: THREE.Object3D<THREE.Object3DEventMap>[];

    private terrainGhost: TerrainGhost;

    private table: Furniture;

    private meshArray: THREE.Mesh[];

    private isShiftDown: boolean;

    private terrainsList: Map<string, Terrain> = new Map();


    constructor(container: HTMLElement) {
        this.meshArray = [];
        this.isShiftDown = false;

        // Scene //
        this.sceneController = new SceneController();
        // this.scene = this.sceneController.init(new THREE.Color('#ffffff'));
        // this.scene = this.sceneController.init(new THREE.Color('#17181b'));
        this.scene = this.sceneController.init(new THREE.Color('#ded6d8'));

        // Renderer //
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.shadowMap.enabled = true;
        this.canvas = this.renderer.domElement;
        container.appendChild(this.canvas);

        // Effect Composer //
        this.composer = new EffectComposer(this.renderer);

        // Camera //
        this.cameraController = new CameraController(new THREE.Vector3(-2, 3, 2));
        this.camera = this.cameraController.init();

        // Controls //
        this.controlsController = new ControlsController(this.camera, this.canvas)
        this.controlsController.init();

        // Light //
        const lightController = new LightController();
        // lightController.addDirectionalLight(this.scene, 0xffffff, new THREE.Vector3(5, 10, 7));
        lightController.addSpotLight(this.scene, 0xffffff, new THREE.Vector3(5, 10, 7));

        //lightController.addLight(this.scene, 0xff0040, new THREE.Vector3(0, 5, 2));
        lightController.addPointLight(this.scene, 0x0040ff, new THREE.Vector3(0, 4, 2));
        lightController.addPointLight(this.scene, 0x80ff80, new THREE.Vector3(2, 9, -2));
        lightController.addPointLight(this.scene, 0xffaa00, new THREE.Vector3(-2, 6, 2));

        this.outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera);
        this.composer.addPass(this.outlinePass);

        this.loopController = new LoopCOntroller(this.camera, this.scene, this.renderer);

        // Grid //
        this.gridController = new GridController(GRID_SIZE, GRID_DIVISION);
        this.gridController.init(this.scene);
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        // Plane // 
        this.planeController = new PlaneController("T-Plane", new THREE.Vector2(GRID_SIZE, GRID_SIZE), new THREE.Vector2(1, 1), new THREE.Vector3(0, 0, 0));
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
            if (this.table.mesh) {
                // alert("littlewood_furniture");
                for (let i = 0; i < this.table.mesh.children.length; ++i) {
                    const mesh = this.table.mesh.children[i] as THREE.Mesh;
                    this.sceneController.addMesh(mesh);
                }
                this.loopController.addToUpdate(this.table);
            }
        });

        // -- shader effect
        // - composer
        this.composer = new EffectComposer(this.renderer);
        this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // - render pass
        this.renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(this.renderPass);
        // - outline pass
        this.outlinePass = new OutlinePass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            this.scene,
            this.camera
        );
        // -- parameter config
        this.outlinePass.edgeStrength = 3.0;
        this.outlinePass.edgeGlow = 1.0;
        this.outlinePass.edgeThickness = 3.0;
        this.outlinePass.pulsePeriod = 0;
        this.outlinePass.usePatternTexture = false; // patter texture for an object mesh
        this.outlinePass.visibleEdgeColor.set("#00ff7f"); // set basic edge color
        this.outlinePass.hiddenEdgeColor.set("#00ff7f"); // set edge color when it hidden by other objects
        this.composer.addPass(this.outlinePass);

        //shader
        this.effectFXAA = new ShaderPass(FXAAShader);
        this.effectFXAA.uniforms["resolution"].value.set(
            1 / window.innerWidth,
            1 / window.innerHeight
        );
        this.effectFXAA.renderToScreen = true;
        this.composer.addPass(this.effectFXAA);

        // RESIZER //
        const resizer = new Resizer(this.camera, this.renderer, this.composer, this.effectFXAA);

        this.init();
    }

    private init(): void {
        // Add To render loop
        this.addObject(this.controlsController);
        this.addObject(this.cameraController);

        document.addEventListener("pointermove", (e: PointerEvent) => { this.onPointerMove(e) });
        document.addEventListener("pointerdown", (e: PointerEvent) => { this.onPointerDown(e) });

        // document.addEventListener('keydown', (e: KeyboardEvent) => { this.onDocumentKeyDown(e) });
        // document.addEventListener('keyup', (e: KeyboardEvent) => { this.onDocumentKeyUp(e) })

        // Custom Event
        // eventHub.on('spawnTerrain', () =>
        //     document.addEventListener("pointermove", (e: PointerEvent) => {
        //         this.onPointerMove(e);
        //     });
        // );

        // eventHub.on('spawnTerrain', () =>            
        //         {document.removeEventListener("pointermove", this.onPointerMove)
        //         this.controlsController.controls.enabled = true;}
        // );

        // eventHub.on('spawnTerrain', (e: MouseEvent) => this.onPointerMove(e));
        // eventHub.on('dropTerrain', async (terrain: Texture.ITerrain) => await this.onPointerDown(terrain.type, terrain.id));
        // eventHub.on('spawnTerrain', () => console.log('Message event fired'));
    }

    render() {
        // this.renderer.render(this.scene, this.camera);
        this.composer.render();
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

    CheckIntersection() {
        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        if (intersects && intersects.length > 0) {
            // const intersect = intersects[0];
            //When there is more than one intersected objects
            // const selectedGroup = intersects[0].object.parent as THREE.Group;
            // this.AddSelectedObject(selectedGroup);
            // this.outlinePass.selectedObjects = this.selectedObjects;

            const obj = intersects[0].object; // the object that was intersected
            this.outlinePass.selectedObjects[0] = obj;
        } 
        else {
            this.outlinePass.selectedObjects = [];
        }
    }

    AddSelectedObject(group: THREE.Group) {
        this.selectedObjects = [];
        this.selectedObjects.push(group.children[0]); // group : [gltf, cylinder]
    }

    onPointerMove(event: PointerEvent) {
        console.log("OnPointerMove =>");
        
        // this.controlsController.controls.enabled = false;
        this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

        this.CheckIntersection();

        // this.raycaster.setFromCamera(this.pointer, this.camera);
        // const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        // if (intersects && intersects.length > 0) {

        //     const intersect = intersects[0];

        //     if (this.terrainGhost && this.terrainGhost.mesh && intersect && intersect.face) {
        //         this.terrainGhost.mesh.position.copy(intersect.point).add(intersect.face.normal);
        //         this.terrainGhost.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
        //         this.terrainGhost.mesh.position.y = GHOST_OFFSET;
        //     }

        //     this.render();
        // }
    }

    async onPointerDown(event: PointerEvent, terrainType?: string, terrainIndex?: number) {
        console.log("OnPointerDown =>");

        this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
    
        this.CheckIntersection();

        // this.raycaster.setFromCamera(this.pointer, this.camera);
        // const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        // if (intersects && intersects.length > 0) {

        //     const intersect = intersects[0];

        //     const obj = intersects[0].object; // the object that was intersected
        //     this.outlinePass.selectedObjects[0] = obj;

        //     // delete Terrain //
        //     if (this.isShiftDown) {
        //         if (intersect.object && intersect.object !== this.planeController.ground) {
        //             this.scene.remove(intersect.object);
        //             this.meshArray.splice(this.meshArray.indexOf(intersect.object as THREE.Mesh), 1);
        //         }
        //     } else {
        //         // create Terrain
        //         const key = `${terrainType}${terrainIndex}`;
        //         let terrain: Terrain | undefined;
        //         if (this.terrainsList.has(key)) {
        //             terrain = this.terrainsList.get(key);
        //         }
        //         else {
        //             terrain = new Terrain("T01", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(0, 0, 0));
        //             await terrain.initMesh(terrainType, terrainIndex);
        //         }

        //         if (terrain && terrain.mesh && intersect && intersect.face) {
        //             terrain.mesh.position.copy(intersect.point).add(intersect.face.normal);
        //             terrain.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
        //             terrain.mesh.position.y = TERRAIN_OFFSET;
        //         }

        //         this.addObject(terrain);
        //     }

        //     this.render();
        // }

        // this.controlsController.controls.enabled = true;
        // document.removeEventListener("pointermove", this.onPointerMove);
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