
import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

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
import { Furniture, findModelParent } from './resources/furniture';


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
    private dragControls: DragControls;
    private transformControls: TransformControls;

    private cameraController: CameraController;
    private camera: THREE.Camera;

    private gridController: GridController;
    private planeController: PlaneController;

    private raycaster: THREE.Raycaster;
    private pointer: THREE.Vector2;
    private modelsArray: THREE.Group<THREE.Object3DEventMap>[];
    // private modelsArray: RootNodeObject[];
    private group: THREE.Group;
    private enableSelection = false;

    private intersected: THREE.Group<THREE.Object3DEventMap>;
    // private intersectedArray: any[];

    // private terrainGhost: TerrainGhost;

    private table: Furniture;

    private meshArray: THREE.Mesh[];

    private isShiftDown: boolean;

    // private terrainsList: Map<string, Terrain> = new Map();


    constructor(container: HTMLElement) {
        this.meshArray = [];
        this.modelsArray = [];
        // this.intersectedArray = [];
        // this.isShiftDown = false;

        // Scene //
        this.sceneController = new SceneController();
        this.scene = this.sceneController.init(new THREE.Color(0xded6d8));

        // Renderer //
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.shadowMap.enabled = true;
        this.canvas = this.renderer.domElement;
        container.appendChild(this.canvas);

        // Camera //
        // this.cameraController = new CameraController(new THREE.Vector3(-2, 2, 2));
        this.cameraController = new CameraController(new THREE.Vector3(-3, 4.5, 3));
        this.camera = this.cameraController.init();
        (this.camera as THREE.PerspectiveCamera).zoom = 2.2;

        // Controls //
        this.controlsController = new ControlsController(this.camera, this.canvas)
        this.controlsController.init();

        // Light //
        // const hLight = new THREE.HemisphereLight(new THREE.Color(0xded6d8), null, 1.3);
        const hLight = new THREE.HemisphereLight(new THREE.Color(0xffffff), null, 1.05);
        this.scene.add(hLight);
        const lightController = new LightController();
        lightController.addSpotLight(this.scene, 0xffffff, new THREE.Vector3(5, 9, 7));

        lightController.addPointLight(this.scene, 0xff0040, new THREE.Vector3(0, 10.5, 2));
        lightController.addPointLight(this.scene, 0x0040ff, new THREE.Vector3(0, 4.5, 2));
        lightController.addPointLight(this.scene, 0x80ff80, new THREE.Vector3(2, 9.5, -2));
        lightController.addPointLight(this.scene, 0xffaa00, new THREE.Vector3(-2, 6.5, 2));

        this.loopController = new LoopCOntroller(this.camera, this.scene, this.renderer);

        // Grid //
        this.gridController = new GridController(GRID_SIZE, GRID_DIVISION);
        this.gridController.init(this.scene, "#888888");
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

        this.transformControls = new TransformControls(this.camera, this.canvas);
        this.scene.add(this.transformControls);
        // this.transformControls.setMode('translate');
        this.transformControls.addEventListener('dragging-changed', (event: any) => {  this.intersected.position.y = 0; });
        // this.transformControls.addEventListener('dragging-changed', (event: any) => {this.controlsController.controls.enabled = ! event.value;});
        document.addEventListener('click', (e) => {
            if (!this.intersected)
                 return;
                this.transformControls.attach(this.intersected);
            this.controlsController.controls.enabled = false;
        });
        // this.transformControls.addEventListener("mouseDown", () => {
        //     if (!this.intersected)
        //         return;
        //     this.transformControls.attach(this.intersected);
        //     this.controlsController.controls.enabled = false;
        // });
        this.transformControls.addEventListener("mouseUp", () => {
            this.controlsController.controls.enabled = true;
            this.transformControls.detach();
        });

        // TEST FURNITURE TABLE //
        const table1 = new Furniture("furniture", new THREE.Vector3(0, 0, 0));
        table1.initMesh(1, this.scene, this.modelsArray, this.transformControls);
        const table2 = new Furniture("furniture", new THREE.Vector3(1, 0, 1));
        table2.initMesh(2, this.scene, this.modelsArray, this.transformControls);

        // this.loopController.addToUpdate(this.table);

        // RESIZER //
        const resizer = new Resizer(this.camera, this.renderer);

        // this.group = new THREE.Group();
        // this.scene.add(this.group);

        this.init();
    }

    private init(): void {
        // Add To render loop
        // this.addObject(this.controlsController);
        // this.addObject(this.cameraController);
        // this.modelsArray = [];
        // this.dragControls = new DragControls(this.modelsArray, this.camera, this.canvas);
        // this.dragControls = new DragControls([... this.modelsArray], this.camera, this.canvas);
        // this.dragControls.transformGroup = true;

        // this.dragControls.addEventListener('dragstart', (e) => { this.onDragStart(e) });
        // this.dragControls.addEventListener('drag', (e) => { this.onDrag(e) });
        // this.dragControls.addEventListener('dragend', (e) => { this.onDragEnd(e) });

        // this.dragControls.addEventListener('hoveron', (e) => { this.onHoverOn(e) });
        // this.dragControls.addEventListener('hoveroff', (e) => { this.onHoverOff(e) });

        document.addEventListener("pointermove", (e: PointerEvent) => { this.onPointerMove(e) });

        // document.addEventListener("pointerdown", (e: PointerEvent) => { this.onPointerDown(e) });

        // document.addEventListener("pointerdown", () => { this.controlsController.controls.enabled = false; });
        // document.addEventListener("pointerup", () => { this.controlsController.controls.enabled = true; });

        // this.dragControls.addEventListener('dragstart', (e) => { this.controlsController.controls.enabled = false;});
        // this.dragControls.addEventListener('dragend', (e) => { this.controlsController.controls.enabled = true; });

        // document.addEventListener('click', (e) => { this.onClick(e) });

        // window.addEventListener( 'keydown', (e) => { this.onKeyDown(e) });
        // window.addEventListener( 'keyup', () => { this.onKeyUp() });
    }

    // onKeyDown(event: any) {
    //     this.enableSelection = (event.keyCode === 16) ? true : false;
    // }
    // onKeyUp() {
    //     this.enableSelection = false;
    // }

    onClick(event: MouseEvent) {
        event.preventDefault();

        // if (this.enableSelection === true) {

        let draggableObjects = this.dragControls.getObjects();
        draggableObjects = [];
        // this.modelsArray = [];

        // Convert mouse position to NDC for raycasting
        this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
        this.raycaster.setFromCamera(this.pointer, this.camera);

        // Find intersected objects
        const intersections = this.raycaster.intersectObjects(this.modelsArray, true);

        if (intersections.length > 0) {
            const selectedObject = intersections[0].object;
            draggableObjects = [selectedObject]; // Update draggableObjects to contain only the selected object
            this.dragControls.transformGroup = false; // Ensure individual object transformation
        }

        // if (!this.intersected) {

        // this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        // this.pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

        // this.raycaster.setFromCamera(this.pointer, this.camera);

        // const intersections = this.raycaster.intersectObjects(this.modelsArray, true);

        // if (intersections.length > 0) {
        // const object = intersections[0].object as THREE.Mesh;
        // const split = intersections[0].object.name.split('-');
        // const id = split[split.length - 1];
        // this.intersected = findModelParent(intersections[0].object as THREE.Mesh, id);
        // draggableObjects = [this.intersected]; // Update draggableObjects to contain only the selected object
        // this.modelsArray = [this.intersected]; // Update draggableObjects to contain only the selected object
        // this.dragControls.transformGroup = false;


        // } else { 

        // if (this.group.children.includes(this.intersected) === true) {
        //     // (object.material as THREE.MeshToonMaterial).emissive.set(0x000000);
        //     this.scene.attach(this.intersected);

        // } else {
        //     // (object.material as THREE.MeshToonMaterial).emissive.set(0xaaaaaa);
        //     this.group.attach(this.intersected);
        // }

        // // this.dragControls.transformGroup = true;
        // draggableObjects.push(this.group);
        // }
        // }

        // if (this.group.children.length === 0) {
        //     // this.dragControls.transformGroup = true;
        //     draggableObjects.push(...this.modelsArray);
        // }
        // }
        // this.render();
    }

    onHoverOn(event: any) {
        console.log("onHoverOn => event.object ", event.object);
        const split = event.object.name.split('-');
        const id = split[split.length - 1];
        this.intersected = findModelParent(event.object as THREE.Mesh, id);
        console.log("onHoverOn => this.intersected ", this.intersected);
        // this.intersection();

        this.changeColour('#f47653');
    }
    onHoverOff(event: any) {
        // setTimeout(()=>{
        this.changeColour('#e2eab8');
        // this.intersected = null;
        // },100);
    }

    onDragStart(event: any) {
        this.controlsController.controls.enabled = false;

        // console.log("onDragStart => event.object ", event.object);
        // this.intersected = findModelParent(event.object as THREE.Mesh);
        // this.intersection();
        console.log("onDragStart => this.intersected ", this.intersected);

        // this.intersected = findModelParent(event.object as THREE.Mesh);

        this.changeColour('#f47653');
        // ( (this.intersected as THREE.Mesh).material as THREE.MeshToonMaterial).emissive.set( 0xaaaaaa );
    }


    onDrag(event: any) {
        event.object.position.y = 0;
    }
    onDragEnd(event: any) {
        this.controlsController.controls.enabled = true;
        this.changeColour('#e2eab8');
        // this.intersected = null;
        // ( (this.intersected as THREE.Mesh).material as THREE.MeshToonMaterial).emissive.set( 0x000000 );
    }

    onPointerMove(event: PointerEvent) {
        this.updatePointerMode(event);

        if (this.intersection()) {
            this.changeColour('#f47653');
            // this.transformControls.attach(this.intersected);
        }
        else {
            this.changeColour('#e2eab8');
            // this.transformControls.detach();
        }
    }

    // onPointerDown(event: PointerEvent) {
    // if (this.intersection())
    // this.changePosition();
    // }

    updatePointerMode(event: PointerEvent) {
        event.preventDefault();
        this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    intersection(): boolean {
        try {
            this.raycaster.setFromCamera(this.pointer, this.camera);
        }
        catch (e: any) {
            throw new Error(e.toString());
            return;
        }

        const intersects = this.raycaster.intersectObjects(this.modelsArray, true);

        if (intersects.length > 0) {
            const split = intersects[0].object.name.split('-');
            const id = split[split.length - 1];
            this.intersected = findModelParent(intersects[0].object as THREE.Mesh, id);
            return true;
        }
        else {
            return false;
        }
    }

    // changePosition() {
    //     // const intersect = this.raycaster.intersectObject(this.gridController.gridHelper);
    //     // this.raycaster.
    //     // intersect

    //     const pickedPoint = new THREE.Vector3(this.pointer.x, 1, this.pointer.y);
    //     const pos = this.calculateClosestGridPosition(pickedPoint);
    //     console.log("Pos ", pos);

    //     this.intersected.children.forEach(child => {
    //         const c = child as THREE.Mesh;
    //         c.position.x += pos.x;
    //         c.position.y += pos.y;
    //         c.position.z += pos.z;
    //     });
    //     // console.log(this.intersected.position);
    // }
    calculateClosestGridPosition(pickedPoint: THREE.Vector3) {
        const snappedX = Math.round(pickedPoint.x / GRID_SIZE) * GRID_SIZE;
        // const snappedY = Math.round(pickedPoint.y / GRID_SIZE) * GRID_SIZE;
        const snappedZ = Math.round(pickedPoint.z / GRID_SIZE) * GRID_SIZE;
        // Use the node's Y value.
        return new THREE.Vector3(snappedX, this.intersected.position.y, snappedZ);
    }

    changeColour(colour: string) {
        if (!this.intersected)
            return;

        this.intersected.children.forEach(child => {
            const c = child as THREE.Mesh;
            if (!c.name.toLowerCase().includes("outline")) {
                (c.material as THREE.MeshToonMaterial).color = new THREE.Color(colour);
                return;
            }
        });
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