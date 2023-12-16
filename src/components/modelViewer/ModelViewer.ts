
import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";

import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import { TransformControls, TransformControlsGizmo } from 'three/examples/jsm/controls/TransformControls.js';

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
// const GRID_SIZE = 20;
// const GRID_DIVISION = 40;
const GRID_CELL_SIZE = GRID_DIVISION / GRID_SIZE;
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
    private camera: THREE.PerspectiveCamera;

    private gridController: GridController;
    private planeController: PlaneController;

    private raycaster: THREE.Raycaster;
    private pointer: THREE.Vector2;
    private modelsArray: THREE.Group<THREE.Object3DEventMap>[];

    private composer: EffectComposer;
    private outlinePass: OutlinePass;

    private intersect: THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>;
    private intersected: THREE.Group<THREE.Object3DEventMap>;

    private terrainGhost: TerrainGhost;

    private furnitureArray: Furniture[];

    private isShiftDown: boolean;


    constructor(container: HTMLElement) {
        this.furnitureArray = [];
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

        // COMPOSER //
        // MOVE TO OWN CLASS //
        this.composer = new EffectComposer(this.renderer);
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        this.outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), this.scene, this.camera);
        this.composer.addPass(this.outlinePass);

        this.outlinePass.edgeStrength = 3;
        this.outlinePass.edgeGlow = 0.7;
        this.outlinePass.edgeThickness = 1;
        this.outlinePass.pulsePeriod = 2;
        this.outlinePass.visibleEdgeColor.set('#ff0000'); // red color
        this.outlinePass.hiddenEdgeColor.set('#190a05');

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

        // Stop Models from leaving the grid.

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
        this.terrainGhost = new TerrainGhost("T-Ghost", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(0, 0, 0));
        this.terrainGhost.initMesh(new THREE.Color(0xff0000), .5);
        if (this.terrainGhost.mesh) {
            this.sceneController.addMesh(this.terrainGhost.mesh);
            this.loopController.addToUpdate(this.terrainGhost);
        }

        // GIZMOS //
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
        // console.log("(this.transformControls.children[1] as TransformControlsGizmo) ", (this.transformControls.children[1] as TransformControlsGizmo));

        // Main gizmo, arrows and squares
        (this.transformControls.children[0] as TransformControlsGizmo).gizmo.translate.traverse((child: any) => {
            if (child.isMesh) {
                // The square in the centre of the gizmos,
                // with which you can move the model in any direction.
                if (child.name === 'XYZ') {
                    (child.material as THREE.MeshBasicMaterial).color.set(0x0e73e6);
                    (child.material as THREE.MeshBasicMaterial).opacity = 0.5;
                }
                else {
                    (child.material as THREE.MeshBasicMaterial).visible = false;
                }
            }
        });

        // Pickers
        // Not sure it does much.
        (this.transformControls.children[0] as TransformControlsGizmo).picker.translate.traverse((child: any) => {
            if (child.isMesh) {
                (child.material as THREE.MeshBasicMaterial).visible = false;
            }
        });

        // Helper transform lines axis
        (this.transformControls.children[0] as TransformControlsGizmo).helper.translate.traverse((child: any) => {
            if (child.isLine) {
                (child.material as THREE.MeshBasicMaterial).visible = false;
            }
        });

        this.transformControls.addEventListener("mouseDown", () => { this.controlsController.controls.enabled = false; });
        this.transformControls.addEventListener("mouseUp", () => { this.controlsController.controls.enabled = true; });

        document.addEventListener("pointerdown", () => {
            this.changeColour('#f47653');
        });
        document.addEventListener("pointerup", () => {
            this.transformControls.detach();
            this.changeColour('#e2eab8');
            // this.intersected = null;
        });

        // FOR DEV ONLY, later models will be spwaned from a menu into the scene.
        // TEST FURNITURE TABLE //
        const table1 = new Furniture("furniture", new THREE.Vector3(0, 0, -1));
        table1.initMesh(1, this.scene, this.modelsArray, this.transformControls).then(() => {
            this.loopController.addToUpdate(table1);
            this.furnitureArray.push(table1);
        });

        const table2 = new Furniture("furniture", new THREE.Vector3(1, 0, 1));
        table2.initMesh(2, this.scene, this.modelsArray, this.transformControls).then(() => {
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

        // this.dragControls.addEventListener('hoveron', (e) => { this.onHoverOn(e) });
        // this.dragControls.addEventListener('hoveroff', (e) => { this.onHoverOff(e) });

        // this.dragControls.addEventListener('dragstart', (e) => { this.onDragStart(e) });
        // this.dragControls.addEventListener('drag', (e) => { this.onDrag(e) });
        // this.dragControls.addEventListener('dragend', (e) => { this.onDragEnd(e) });

        // Pointer
        document.addEventListener("pointermove", (e: PointerEvent) => { this.onPointerMove(e) });
        document.addEventListener("pointerdown", (e: PointerEvent) => { this.onPointerDown() });

        // Keys
        document.addEventListener('keydown', (e: KeyboardEvent) => { this.onDocumentKeyDown(e) });
        document.addEventListener('keyup', (e: KeyboardEvent) => { this.onDocumentKeyUp(e) })
    }

    onPointerMove(event: PointerEvent) {
        this.updatePointerMode(event);

        if (this.intersection()) {
            this.changeColour('#f47653');
            this.transformControls.attach(this.intersected);

            // try{
            //     this.outlinePass.selectedObjects = [this.intersected];
            // }
            // catch (e: any) {
            //     throw new Error(e.toString());
            // }
        }
        else {
            this.changeColour('#e2eab8');
            // this.outlinePass.selectedObjects = [];
        }

        // Stop the abillity to lift the model
        if (this.intersected)
            this.intersected.position.y = 0;
    }

    async onPointerDown() {
        if (!this.intersected)
            return;

        // delete Terrain //
        if (this.isShiftDown) {
            //     this.scene.remove(this.intersected);
            //     this.modelsArray.splice(this.modelsArray.indexOf(this.intersected), 1);
            // } else {

            // create Terrain
            // ADD Key to Spwan Model.
            const table = new Furniture("furniture", new THREE.Vector3(0, 0, 3));
            await table.initMesh(3, this.scene, this.modelsArray, this.transformControls);
            this.loopController.addToUpdate(table);
            this.furnitureArray.push(table);

            // Move to function
            // Render a red square to show where the model would land.
            // if (table && table.mesh && this.intersect && this.intersect.face) {
            //     table.mesh.position.copy(this.intersect.point).add(this.intersect.face.normal);
            //     table.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
            //     table.mesh.position.y = TERRAIN_OFFSET;
            // }

        }

        // this.render();
        // this.controlsController.controls.enabled = true;
        // document.removeEventListener("pointermove", this.onPointerMove);
    }


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
        }

        const intersects = this.raycaster.intersectObjects(this.modelsArray, true);

        if (intersects.length > 0) {

            const split = intersects[0].object.name.split('-');
            const id = split[split.length - 1];

            this.intersect = intersects[0];
            this.intersected = findModelParent(this.intersect.object as THREE.Mesh, id);
            // const selectedObject = intersects[0].object;

            // Move to function
            // Render a red square to show where the model would land.
            // if (this.terrainGhost && this.terrainGhost.mesh && this.intersect && this.intersect.face) {
            //     this.terrainGhost.mesh.position.copy(this.intersect.point).add(this.intersect.face.normal);
            //     this.terrainGhost.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
            //     this.terrainGhost.mesh.position.y = GHOST_OFFSET;
            // }
            return true;
        }
        else {
            return false;
        }
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
        this.loopController.start(this.furnitureArray, this.composer);
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