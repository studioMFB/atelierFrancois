
import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { TransformControls, TransformControlsGizmo, TransformControlsPlane } from 'three/examples/jsm/controls/TransformControls.js';

import { ControlsController } from './settings/ControlsController';
import { CameraController } from "./settings/CameraController";
import { LightController } from "./settings/LightController";
import { LoopController } from "./settings/LoopController";
import { SceneController } from "./settings/SceneController";
import { Resizer } from "./settings/Resizer";
import { GridController } from './settings/GridControlller';
import { PlaneController } from './resources/PlaneController';
import { TerrainGhost } from './resources/TerrainGhost';
import { EventHub } from './../EventHub';
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

    private loopController: LoopController;
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

    private intersected: THREE.Group<THREE.Object3DEventMap>;
    // private terrainGhost: TerrainGhost;

    private furnitureArray: Furniture[];

    private isShiftDown: boolean;


    constructor(container: HTMLElement) {
        this.furnitureArray =[];
        this.modelsArray = [];

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
        this.cameraController = new CameraController(new THREE.Vector3(-3, 4.5, 3));
        this.camera = this.cameraController.init();
        (this.camera as THREE.PerspectiveCamera).zoom = 2.2;

        // Controls //
        this.controlsController = new ControlsController(this.camera, this.canvas)
        this.controlsController.init();

        // Light //
        const hLight = new THREE.HemisphereLight(new THREE.Color(0xffffff), null, 1.05);
        this.scene.add(hLight);
        const lightController = new LightController();
        lightController.addSpotLight(this.scene, 0xffffff, new THREE.Vector3(5, 9, 7));

        lightController.addPointLight(this.scene, 0xff0040, new THREE.Vector3(0, 10.5, 2));
        lightController.addPointLight(this.scene, 0x0040ff, new THREE.Vector3(0, 4.5, 2));
        lightController.addPointLight(this.scene, 0x80ff80, new THREE.Vector3(2, 9.5, -2));
        lightController.addPointLight(this.scene, 0xffaa00, new THREE.Vector3(-2, 6.5, 2));

        this.loopController = new LoopController(this.camera, this.scene, this.renderer);

        // Grid //
        this.gridController = new GridController(GRID_SIZE, GRID_DIVISION);
        this.gridController.init(this.scene, "#888888");
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        // Plane // 
        this.planeController = new PlaneController("Plane", new THREE.Vector2(GRID_SIZE, GRID_SIZE), new THREE.Vector2(1, 1), new THREE.Vector3(0, 0, 0));
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

        // MOVE TO OWN CLASS
        this.transformControls = new TransformControls(this.camera, this.canvas);
        this.scene.add(this.transformControls);

        // Find a way to switch between modes and apply the custom flags.
        // this.transformControls.setMode('translate');
        // this.transformControls.showY = false; // Idealy don't show the Y arrow, but this removes the centre square.

        // this.transformControls.setMode('rotate'); // rotate only around the Y axis.
        // this.transformControls.showX = false;
        // this.transformControls.showZ = false;

        // this.transformControls.setMode('scale'); // Desable scaling.
        // this.transformControls.showX = false;
        // this.transformControls.showY = false;
        // this.transformControls.showZ = false;

        // Adjust gizmo pos to be in centre of model.
        this.transformControls.position.x -= .1;
        this.transformControls.position.y += .6;

        // console.log("this.transformControls ", this.transformControls);
        // console.log("(this.transformControls.children[0] as TransformControlsGizmo).picker.translate ", (this.transformControls.children[0] as TransformControlsGizmo).picker.translate);

        // Main gizmo, arrows and squares
        (this.transformControls.children[0] as TransformControlsGizmo).gizmo.translate.traverse((child: any) => {
            if (child.isMesh) {
                // The square in the centre of the gizmos,
                // with which you can move the model in any direction.
                if (child.name === 'XYZ') {
                    (child.material as THREE.MeshBasicMaterial).color.set(0x0e73e6);
                }
                else {
                    (child.material as THREE.MeshBasicMaterial).color.set(0xffffff);
                    (child.material as THREE.MeshBasicMaterial).opacity = 0.00001;
                }
            }
            else {
                // (child.material as THREE.MeshBasicMaterial).opacity = 0.00001;
                // console.log("child not a mesh ", child);    
                // Scaling somewhat changes the position of the gizmos from the model not in an even way.
                // Making repositioning all gizmos to the centre of there model impossible. 
                // Investigate at a later time.
                // child.scale.x *= 0.5;            
                // child.scale.y *= 0.5;            
                // child.scale.z *= 0.5; 

                // child.position.x -= .1;
                // child.position.y += .6;
                // child.position.z = 0;
            }
        });

        // Pickers
        // Not sure it does much.
        // (this.transformControls.children[0] as TransformControlsGizmo).picker.translate.traverse((child: any) => {
        //     if (child.isMesh) {
        //         (child.material as THREE.MeshBasicMaterial).color.set(0xffffff);
        //     }
        //     console.log("child ", child);
        // });

        // Helper transform lines axis
        (this.transformControls.children[0] as TransformControlsGizmo).helper.translate.traverse((child: any) => {
            if (child.isLine) {
                (child.material as THREE.MeshBasicMaterial).opacity = 0.00001;
            }
        });

        this.transformControls.addEventListener('dragging-changed', (event: any) => {
            if (!this.intersected)
                return;

            this.intersected.position.y = 0;
        });

        // document.addEventListener('click', (e) => {
        //     if (!this.intersected)
        //         return;

        //     // transformControlsGizmo.attach(this.intersected);
        //     // this.controlsController.controls.enabled = false;
        //     // this.transformControls.attach(this.intersected);
        //     // this.changeColour('#e2eab8');
        // });

        document.addEventListener("pointerdown", () => {
            this.changeColour('#f47653');
        });
        document.addEventListener("pointerup", () => {
            this.transformControls.detach();
            this.changeColour('#e2eab8');
        });
        this.transformControls.addEventListener("mouseDown", () => {
            this.controlsController.controls.enabled = false;
        });
        this.transformControls.addEventListener("mouseUp", () => {
            this.controlsController.controls.enabled = true;
        });

        // FOR DEV ONLY, later models will be spwaned from a menu into the scene.
        // TEST FURNITURE TABLE //
        const table1 = new Furniture("furniture", new THREE.Vector3(0, 0, -1));
        table1.initMesh(1, this.scene, this.modelsArray, this.transformControls).then(() => {
            // this.addObject(table1);
            this.loopController.addToUpdate(table1);
            this.furnitureArray.push(table1);
        });

        const table2 = new Furniture("furniture", new THREE.Vector3(1, 0, 1));
        table2.initMesh(2, this.scene, this.modelsArray, this.transformControls).then(() => {
            // this.addObject(table2);
            this.loopController.addToUpdate(table2);
            this.furnitureArray.push(table2);
        });

        // RESIZER //
        const resizer = new Resizer(this.camera, this.renderer);

        this.init();
    }

    findParent(mesh: THREE.Mesh): THREE.Mesh {
        // If the mesh has no parent, return null
        if (!mesh.parent) {
            return mesh;
        }

        return this.findParent(mesh.parent as THREE.Mesh);
    }

    private init(): void {
        // Add To render loop
        // this.addObject(this.controlsController);
        // this.addObject(this.cameraController);

        // MOVE TO OWN CLASS
        // this.dragControls = new DragControls(this.modelsArray, this.camera, this.canvas);
        // this.dragControls.transformGroup = true;

        // this.dragControls.addEventListener('dragstart', (e) => { this.onDragStart(e) });
        // this.dragControls.addEventListener('drag', (e) => { this.onDrag(e) });
        // this.dragControls.addEventListener('dragend', (e) => { this.onDragEnd(e) });

        // this.dragControls.addEventListener('hoveron', (e) => { this.onHoverOn(e) });
        // this.dragControls.addEventListener('hoveroff', (e) => { this.onHoverOff(e) });

        document.addEventListener("pointermove", (e: PointerEvent) => { this.onPointerMove(e) });
    }

    onHoverOn(event: any) {
        const split = event.object.name.split('-');
        const id = split[split.length - 1];
        this.intersected = findModelParent(event.object as THREE.Mesh, id);

        this.changeColour('#f47653');
    }
    onHoverOff(event: any) {
        this.changeColour('#e2eab8');
    }

    onDragStart(event: any) {
        this.controlsController.controls.enabled = false;

        this.changeColour('#f47653');
    }

    onDrag(event: any) {
        this.intersected.position.y = 0;
    }

    onDragEnd(event: any) {
        this.controlsController.controls.enabled = true;

        this.changeColour('#e2eab8');
    }

    onPointerMove(event: PointerEvent) {
        this.updatePointerMode(event);

        if (this.intersection()) {
            this.changeColour('#f47653');
            this.transformControls.attach(this.intersected);
        }
        else {
            this.changeColour('#e2eab8');
        }
    }

    // onPointerDown(event: PointerEvent) {
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
        // Check for collision
        // if (this.furnitureArray[0].boundingBox.intersectsBox(this.furnitureArray[1].boundingBox)) {
        //     // Handle collision
        //     alert("Collision detected");
        // }

        this.renderer.render(this.scene, this.camera);
    }

    start() {
        this.loopController.start(this.furnitureArray);
    }

    stop() {
        this.loopController.stop();
    }

    addObject(object: any) {
        if (!object) {
            console.log("Object is null or undifined and will not be added to the scene!");
            return;
        }

        if (object.isMesh) {
            this.sceneController.addMesh(object.mesh);
            // this.meshArray.push(object.mesh);
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