
import * as THREE from 'three';
import { Lut } from "three/examples/jsm/math/Lut";
// import { OrbitControls, GLTFLoader, RGBELoader, LUTCubeLoader, LUT3dlLoader, LUTImageLoader, ShaderPass, DotScreenShader } from 'three-addons';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
// import { RGBShiftShader  } from 'three/examples/jsm/postprocessing/RGBShiftShader';

import { LUTPass } from 'three/examples/jsm/postprocessing/LUTPass';
// import { GUI } from 'three/examples/jsm/postprocessing/GUI';

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
import { lutimesSync } from 'fs';

const GRID_SIZE = 20;
const GRID_DIVISION = 40;
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

    private loopController: LoopCOntroller;
    private renderer: THREE.WebGLRenderer;
    private composer: EffectComposer;

    private controlsController: ControlsController;

    private cameraController: CameraController;
    private camera: THREE.PerspectiveCamera;

    private gridController: GridController;
    private planeController: PlaneController;

    private raycaster: THREE.Raycaster;
    private pointer: THREE.Vector2;

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
        this.renderer.shadowMap.enabled = true;
        const canvas = this.renderer.domElement;
        container.appendChild(canvas);

        // Effect Composer //
        // this.composer = new EffectComposer(this.renderer);

        // Camera //
        this.cameraController = new CameraController(new THREE.Vector3(-2, 3, 2));
        this.camera = this.cameraController.init();

        // Controls //
        this.controlsController = new ControlsController(this.camera, canvas)
        this.controlsController.init();

        const resizer = new Resizer(this.camera, this.renderer, this.composer);

        // Light //
        const lightController = new LightController();
        // lightController.addDirectionalLight(this.scene, 0xffffff, new THREE.Vector3(5, 10, 7));
        lightController.addSpotLight(this.scene, 0xffffff, new THREE.Vector3(5, 10, 7));

        // //lightController.addLight(this.scene, 0xff0040, new THREE.Vector3(0, 5, 2));
        lightController.addPointLight(this.scene, 0x0040ff, new THREE.Vector3(0, 4, 2));
        lightController.addPointLight(this.scene, 0x80ff80, new THREE.Vector3(2, 9, -2));
        lightController.addPointLight(this.scene, 0xffaa00, new THREE.Vector3(-2, 6, 2));

        // const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        // dirLight.position.set(0, 70, 100);
        // const d = 1000;
        // const r = 2;
        // const mapSize = 8192;
        // dirLight.castShadow = true;
        // dirLight.shadow.radius = r;
        // dirLight.shadow.mapSize.width = mapSize;
        // dirLight.shadow.mapSize.height = mapSize;
        // dirLight.shadow.camera.top = dirLight.shadow.camera.right = d;
        // dirLight.shadow.camera.bottom = dirLight.shadow.camera.left = -d;
        // dirLight.shadow.camera.near = 1;
        // dirLight.shadow.camera.far = 400000000;
        // //dirLight.shadow.camera.visible = true;
        // this.scene.add(dirLight);
        // this.scene.add(new THREE.DirectionalLightHelper(dirLight, 10));

        // const dirLight = new THREE.SpotLight(0xffa95c, 0.1);
        // dirLight.name = 'Directional Light';
        // dirLight.castShadow = true;
        // dirLight.position.set(1, 5, 1);
        // dirLight.shadow.mapSize = new THREE.Vector2(512, 512);
        // dirLight.shadow.camera.near = 0.1;
        // dirLight.shadow.camera.far = 3;
        // this.scene.add(dirLight);
        // this.scene.add(new THREE.CameraHelper(dirLight.shadow.camera));

        this.loopController = new LoopCOntroller(this.camera, this.scene, this.renderer);

        // Grid //
        this.gridController = new GridController(GRID_SIZE, GRID_DIVISION);
        this.gridController.init(this.scene);
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        // Plane // 
        this.planeController = new PlaneController("T-Plane", new THREE.Vector2(GRID_SIZE, GRID_SIZE), new THREE.Vector2(1, 1), new THREE.Vector3(0, 0, 0));
        this.planeController.initMesh(false);
        // this.addObject(this.planeController);
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

        this.init();
    }

    private init(): void {
        // Add To render loop
        this.addObject(this.controlsController);
        this.addObject(this.cameraController);

        // document.addEventListener("pointermove", (e: MouseEvent) => { this.onPointerMove(e) });
        // document.addEventListener("pointerdown", (e: MouseEvent) => { this.onPointerDown(e) });

        document.addEventListener('keydown', (e: KeyboardEvent) => { this.onDocumentKeyDown(e) });
        document.addEventListener('keyup', (e: KeyboardEvent) => { this.onDocumentKeyUp(e) })

        // Custom Event
        eventHub.on('spawnTerrain', () =>
            // {
            document.addEventListener("pointermove", (e: MouseEvent) => {
                this.onPointerMove(e);
            })
            // document.removeEventListener("pointermove", this.onPointerMove)
            //     this.controlsController.controls.enabled = true;
            // }
        );

        // eventHub.on('spawnTerrain', () =>            
        //         {document.removeEventListener("pointermove", this.onPointerMove)
        //         this.controlsController.controls.enabled = true;}
        // );

        // eventHub.on('spawnTerrain', (e: MouseEvent) => this.onPointerMove(e));
        eventHub.on('dropTerrain', async (terrain: Texture.ITerrain) => await this.onPointerDown(terrain.type, terrain.id));
        // eventHub.on('spawnTerrain', () => console.log('Message event fired'));


        // Add Space + click to drag
        // const dragControls = new DragControls(this.meshArray, this.camera, this.renderer.domElement);
        // add event listener to highlight dragged objects
        // dragControls.addEventListener("dragstart", (e: any) => {
        // e.object.mesh.material.color.set(0xaaaaaa);
        // });
        // dragControls.addEventListener('dragend', (e: any) => {
        // e.object.mesh.material.emissive.set(0x000000);
        // e.object.material.emissive.set(0x000000);

        // e.object.position.y = 1;

        // if(e.object.position.x < -(GRID_SIZE*.5)) e.object.position.x = -(GRID_SIZE*.5);
        // if(e.object.position.x > (GRID_SIZE*.5)) e.object.position.x = (GRID_SIZE*.5);
        // if(e.object.position.z < -(GRID_SIZE*.5)) e.object.position.z = -(GRID_SIZE*.5);
        // if(e.object.position.z > (GRID_SIZE*.5)) e.object.position.z = (GRID_SIZE*.5);
        // })
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

    onPointerMove(event: MouseEvent) {
        console.log("OnPointerMove =>");
        this.controlsController.controls.enabled = false;

        this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        if (intersects && intersects.length > 0) {

            const intersect = intersects[0];

            if (this.terrainGhost && this.terrainGhost.mesh && intersect && intersect.face) {
                this.terrainGhost.mesh.position.copy(intersect.point).add(intersect.face.normal);
                this.terrainGhost.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
                this.terrainGhost.mesh.position.y = GHOST_OFFSET;
            }

            this.render();
        }
    }

    async onPointerDown(terrainType: string, terrainIndex: number) {
        console.log("OnPointerDown =>");
        // this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        if (intersects && intersects.length > 0) {

            const intersect = intersects[0];

            // delete Terrain //
            if (this.isShiftDown) {
                if (intersect.object && intersect.object !== this.planeController.ground) {
                    this.scene.remove(intersect.object);
                    this.meshArray.splice(this.meshArray.indexOf(intersect.object as THREE.Mesh), 1);
                }
            } else {
                // create Terrain
                const key = `${terrainType}${terrainIndex}`;
                let terrain: Terrain | undefined;
                if (this.terrainsList.has(key)) {
                    terrain = this.terrainsList.get(key);
                }
                else {
                    terrain = new Terrain("T01", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(0, 0, 0));
                    await terrain.initMesh(terrainType, terrainIndex);
                }

                if (terrain && terrain.mesh && intersect && intersect.face) {
                    terrain.mesh.position.copy(intersect.point).add(intersect.face.normal);
                    terrain.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
                    terrain.mesh.position.y = TERRAIN_OFFSET;
                }

                this.addObject(terrain);
            }

            this.render();
        }

        this.controlsController.controls.enabled = true;
        document.removeEventListener("pointermove", this.onPointerMove);
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