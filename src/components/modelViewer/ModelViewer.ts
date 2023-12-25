
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
import { Model, findModelParent } from './resources/model';


// GRID in meters
const GRID_SIZE = 5;
const GRID_DIVISION = 0.5;
const GRID_CELL_SIZE = GRID_SIZE / GRID_DIVISION;

const TERRAIN_SIZE = new THREE.Vector3(2, .5, 2);

// Colour //
const COLOUR_SELECTED = '#f47653';
const COLOUR_UNSELECTED = '#e2eab8';

// GLTF //
const GLTF_TABLE = new URL('./models/table/1/littlewood_furniture.gltf', import.meta.url).toString();
const GLTF_GARLIC = new URL('./models/garlic/scene.gltf', import.meta.url).toString();
const GLTF_STONE = new URL('./models/piedra/scene.gltf', import.meta.url).toString();


const gridLimits = {
    minX: -GRID_SIZE / 2,  // Minimum X value
    maxX: GRID_SIZE / 2,   // Maximum X value
    minY: 0,    // Minimum Y value (assuming Y is up)
    maxY: 0,   // Maximum Y value
    minZ: -GRID_SIZE / 2,  // Minimum Z value
    maxZ: GRID_SIZE / 2    // Maximum Z value
};

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

    private allModelsArray: THREE.Group<THREE.Object3DEventMap>[];
    private furnitureArray: Model[];
    private ornamentArray: Model[];

    private composer: EffectComposer;
    private outlinePass: OutlinePass;

    private intersect: THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>;
    private intersected: THREE.Group<THREE.Object3DEventMap>;

    private terrainGhost: TerrainGhost;
    private ghost: THREE.Mesh;

    // Key, Mouse Controlls
    private isShiftDown: boolean;
    private isKeyGDown: boolean;
    private isKeyRDown: boolean;

    private isLeftMouseButtonDown: boolean;
    private rotationDelta: number;

    private isSelected: boolean;

    constructor(container: HTMLElement) {
        this.allModelsArray = [];
        this.furnitureArray = [];
        this.ornamentArray = [];

        this.isLeftMouseButtonDown = false;
        this.rotationDelta = 0;

        this.isSelected = false;

        this.isShiftDown = false;
        this.isKeyGDown = false;
        this.isKeyRDown = false;

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
        this.gridController = new GridController(GRID_SIZE, GRID_CELL_SIZE);
        this.gridController.init(this.scene, "#888888");
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        // Plane // 
        this.planeController = new PlaneController("Plane", new THREE.Vector2(GRID_SIZE, GRID_SIZE), new THREE.Vector2(1, 1), new THREE.Vector3(0, 0, 0));
        this.planeController.initMesh(false, this.scene, 1);
        this.scene.add(this.planeController.ground);
        this.scene.add(this.planeController.shadowGround);

        // Ghost Terrain //
        // this.terrainGhost = new TerrainGhost("T-Ghost", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(0, 0, 0));
        // this.terrainGhost.initMesh(new THREE.Color(0xff0000), .5);
        // if (this.terrainGhost.mesh) {
        //     this.sceneController.addMesh(this.terrainGhost.mesh);
        //     this.loopController.addToUpdate(this.terrainGhost);
        // }

        // GIZMOS //
        // MOVE TO OWN CLASS
        this.transformControls = new TransformControls(this.camera, this.canvas);
        this.transformControls.setMode('translate');
        // this.transformControls.translationSnap = 0.5; // Snaps to 500mm increments.
        this.scene.add(this.transformControls);

        // FIND A FIX TO ADJUST GIZMO POSITION FOR ALL MODELS
        // Adjust gizmo pos to be in centre of Table model.
        this.transformControls.position.x -= .1;
        this.transformControls.position.y += .6;

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

        this.transformControls.addEventListener("mouseDown", () => {
            // Desable camera controls.
            this.controlsController.controls.enabled = false;
            // enable rotating selected model on mouse wheel input.
            this.isLeftMouseButtonDown = true;
            // Lock selected colour (on).
            this.isSelected = true;
        });
        this.transformControls.addEventListener("mouseUp", () => {
            // Enable camera controls.
            this.controlsController.controls.enabled = true;
            // Desable rotating selected model on mouse wheel input.
            this.isLeftMouseButtonDown = false;
            // UnLock selected colour (off).
            this.isSelected = false;
        });

        // DEVELOPMENT ONLY
        const table = new Model("table", new THREE.Vector3(0, 0, 0), 1, GLTF_TABLE);
        table.initMesh(this.scene, this.allModelsArray).then(() => {

            // this.adjustGizmoPosition(table.scene, this.transformControls);

            this.loopController.addToUpdate(table);
            this.furnitureArray.push(table);

            // GHOST //        
            // // const bbox = new THREE.Box3().setFromObject(table.scene); 
            // const bboxSize = new THREE.Vector3();
            const bboxSize = new THREE.Vector3(1.5, 0, 0.55);
            // bbox.getSize(bboxSize);

            const geometry = new THREE.PlaneGeometry(bboxSize.x, bboxSize.z, 1, 1);
            geometry.rotateX(- Math.PI / 2);
            geometry.rotateY(- Math.PI / 2);

            const material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(COLOUR_SELECTED),
                visible: true,
                opacity: 0.4,
            });
            // const material = new THREE.ShadowMaterial({
            //     opacity: .5,
            //     color: COLOUR_SELECTED,
            //     side: THREE.DoubleSide,
            //     transparent: false
            //   });
            this.ghost = new THREE.Mesh(geometry, material);
            this.ghost.name = "ghost";
            this.ghost.receiveShadow = true;
            this.ghost.position.set(-0.1, 0, 0);
            this.scene.add(this.ghost);

            this.transformControls.addEventListener('change', () => {
                if (this.transformControls.mode === 'translate') {
                    // Snap position to grid
                    // position.x = Math.round(position.x / 0.5) * 0.5; // Assuming 50 cm grid
                    // position.z = Math.round(position.z / 0.5) * 0.5;
                    // Update the position of the plane
                    this.ghost.position.set(this.intersected.position.x, 0, this.intersected.position.z);
                }
            });
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
        // Pointer
        document.addEventListener("pointermove", (e: PointerEvent) => { this.onPointerMove(e) });
        document.addEventListener("pointerdown", (e: PointerEvent) => { this.onPointerDown(e) });
        // this.canvas.addEventListener("pointerup", (e: PointerEvent) => { this.onPointerUp(e) });

        document.addEventListener('wheel', (e: WheelEvent) => { this.onWheel(e) });

        // Keys
        document.addEventListener('keydown', (e: KeyboardEvent) => { this.onDocumentKeyDown(e) });
        document.addEventListener('keyup', (e: KeyboardEvent) => { this.onDocumentKeyUp(e) })

        this.canvas.addEventListener("pointerup", () => {
            this.transformControls.detach();
            this.changeColour(COLOUR_UNSELECTED);
        });
    }

    onPointerMove(event: PointerEvent) {
        this.updatePointerMode(event);

        if (!this.isSelected)
            this.changeColour(COLOUR_UNSELECTED);

        if (this.intersection()) {
            this.changeColour(COLOUR_SELECTED);
            // this.adjustGizmoPosition(this.intersected, this.transformControls);
            this.transformControls.attach(this.intersected);
        }

        this.restricMoveToBoundaries()
    }

    restricMoveToBoundaries() {
        // This is currently missing the min and max of the boundary box.
        // This is needed to stop the model accuratly.

        if (this.intersected) {
            // Constrain X position
            this.intersected.position.x = Math.max(gridLimits.minX, Math.min(gridLimits.maxX, this.intersected.position.x));

            // Stop the lifting the model up.
            this.intersected.position.y = 0;

            // Constrain Z position
            this.intersected.position.z = Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, this.intersected.position.z));
        }
    }

    onPointerDown(event: PointerEvent) {
        console.log("Pointer Down");
        console.log("this.isShiftDown ", this.isShiftDown);
        console.log("this.isKeyGDown ", this.isKeyGDown);
        console.log("this.isKeyRDown ", this.isKeyRDown);

        // Add Table
        if (this.isShiftDown) {
            //     this.scene.remove(this.intersected);
            //     this.modelsArray.splice(this.modelsArray.indexOf(this.intersected), 1);
            // } else {

            const table = new Model("table", new THREE.Vector3(-0.5, 0, -0.5), 1, GLTF_TABLE);
            table.initMesh(this.scene, this.allModelsArray).then(() => {
                // this.adjustGizmoPosition(table.scene, this.transformControls);
                this.loopController.addToUpdate(table);
                this.furnitureArray.push(table);
            });

            // Move to function
            // Render a red square to show where the model would land.
            // if (table && table.mesh && this.intersect && this.intersect.face) {
            //     table.mesh.position.copy(this.intersect.point).add(this.intersect.face.normal);
            //     table.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
            //     table.mesh.position.y = TERRAIN_OFFSET;
            // }
        }
        if (this.isKeyGDown) {
            console.log("G");
            const garlic = new Model("garlic", new THREE.Vector3(0, 0, 0), 10, GLTF_GARLIC);
            garlic.initMesh(this.scene, this.allModelsArray).then(() => {
                // this.adjustGizmoPosition(garlic.scene, this.transformControls);
                this.loopController.addToUpdate(garlic);
                this.furnitureArray.push(garlic);
                // this.ornamentArray.push(garlic);
            });
        }
        if (this.isKeyRDown) {
            console.log("R");
            const stone = new Model("stone", new THREE.Vector3(0, 0, 0), 0.5, GLTF_STONE);
            stone.initMesh(this.scene, this.allModelsArray).then(() => {
                // this.adjustGizmoPosition(stone.scene, this.transformControls);
                this.loopController.addToUpdate(stone);
                this.furnitureArray.push(stone);
                // this.ornamentArray.push(stone);
            });
        }
    }

    // onPointerUp(event: PointerEvent) {
    // if (event.button === 0) {
    //     this.isLeftMouseButtonDown = false;
    // }
    // }

    onWheel(event: WheelEvent) {
        // Rotate the model by increment of 90'.
        if (this.isLeftMouseButtonDown) {
            // Determine the scroll direction and amount
            const delta = Math.sign(event.deltaY);
            // Define the rotation speed
            const rotationSpeed = Math.PI / 2;
            // Update the rotation delta
            this.rotationDelta = delta * rotationSpeed;

            this.intersected.rotation.y += this.rotationDelta;
        }
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

        const intersects = this.raycaster.intersectObjects(this.allModelsArray, true);

        if (intersects.length > 0) {
            this.intersect = intersects[0];
            this.intersected = findModelParent(this.intersect.object as THREE.Mesh);

            // this.adjustGizmoPosition(this.intersected);

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

    adjustGizmoPosition(model: any, transformControls: TransformControls): void {
        const bbox = new THREE.Box3().setFromObject(model);

        const bboxCenter = new THREE.Vector3();
        bbox.getCenter(bboxCenter);
        const bboxSize = new THREE.Vector3();
        bbox.getSize(bboxSize);

        const topCenterPosition = new THREE.Vector3(
            bboxCenter.x,
            bboxCenter.y + bboxSize.y / 2,
            bboxCenter.z
        );

        transformControls.position.copy(topCenterPosition);

        transformControls.attach(model);
        // scene.add(transformControls);
    }

    changeColour(colour: string) {
        if (!this.intersected)
            return;

        this.intersected.children.forEach(child => {
            const c = child as THREE.Mesh;
            if (!c.name.toLowerCase().includes("outline")) {
                const mat = (c.material as THREE.MeshToonMaterial);

                if (mat) {
                    (c.material as THREE.MeshToonMaterial).color = new THREE.Color(colour);
                    return;
                }
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
            case 16: this.isShiftDown = true; console.log("SHIFT down"); break;
            case 71: this.isKeyGDown = true; console.log("G down"); break;
            case 82: this.isKeyRDown = true; console.log("R down"); break;
        }
    }

    private onDocumentKeyUp(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 16: this.isShiftDown = false; console.log("SHIFT up"); break;
            case 71: this.isKeyGDown = false; console.log("G up"); break;
            case 82: this.isKeyRDown = false; console.log("R up"); break;
        }
    }

}