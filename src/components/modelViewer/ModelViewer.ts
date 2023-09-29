
import * as THREE from 'three';
import { DragControls } from 'three/addons/controls/DragControls.js';
import { ControlsController } from './ControlsController';
import { CameraController } from "./CameraController";
import { LightController } from "./LightController";
import { LoopCOntroller } from "./LoopController";
import { SceneController } from "./SceneController";
import { Resizer } from "./Resizer";
import { GridController } from './GridControlller';
import { PlaneController } from './PlaneController';
import { Terrain } from './Terrain';
import { TerrainGhost } from './TerrainGhost';

const DIVIDE_SCALAR = 2;
const MULTIPLY_SCALAR = 2;
const ADD_SCALAR = 1.4;

const TERRAIN_SIZE = new THREE.Vector3(2, .5, 2);

export class ModelViewer {

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

    private terrainGhost: TerrainGhost;

    private isShiftDown: boolean;

    private meshArray: THREE.Mesh[];


    constructor(container: HTMLElement) {
        this.meshArray = [];
        this.isShiftDown = false;

        // Scene //
        this.sceneController = new SceneController();
        this.scene = this.sceneController.init(new THREE.Color('#17181b'));

        // Renderer //
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
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

        this.loopController = new LoopCOntroller(this.camera, this.scene, this.renderer);

        // Grid //
        this.gridController = new GridController(20, 20);
        this.gridController.init(this.scene);
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();

        // Plane // 
        this.planeController = new PlaneController("T-Plane", new THREE.Vector2(20, 20), new THREE.Vector2(1, 1), new THREE.Vector3(0, 0, 0));
        this.planeController.initMesh();
        this.addObject(this.planeController);

        // Ghost Terrain //
        this.terrainGhost = new TerrainGhost("T-Ghost", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(1, 0, 0));
        this.terrainGhost.initMesh(new THREE.Color(0xff0000), .5);
        // this.addObject(this.terrainGhost);
        if (this.terrainGhost.mesh) {
            this.sceneController.addMesh(this.terrainGhost.mesh);
            this.loopController.addToUpdate(this.terrainGhost);
        }

        this.init();
    }

    private init(): void {
        // Add To render loop
        this.addObject(this.controlsController);
        this.addObject(this.cameraController);


        document.addEventListener("pointermove", (e: MouseEvent) => { this.onPointerMove(e) });
        document.addEventListener("pointerdown", (e: MouseEvent) => { this.onPointerDown(e) });

        document.addEventListener('keydown', (e: KeyboardEvent) => { this.onDocumentKeyDown(e) });
        document.addEventListener('keyup', (e: KeyboardEvent) => { this.onDocumentKeyUp(e) })


        // Add Space + click to drag
        const controls = new DragControls(this.meshArray, this.camera, this.renderer.domElement);
        // add event listener to highlight dragged objects
        // controls.addEventListener("dragstart", (e: any) => {
        //     // e.object.mesh.material.emissive.set(0xaaaaaa);
        // });
        // controls.addEventListener('dragend', (e: any) => {
        //     // e.object.mesh.material.emissive.set(0x000000);
        //     // e.object.material.emissive.set(0x000000);
        // });
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
        this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        if (intersects && intersects.length > 0) {

            const intersect = intersects[0];

            if (this.terrainGhost && this.terrainGhost.mesh && intersect && intersect.face) {
                // const x = Math.round(intersect.point.x / this.gridController.size) * this.gridController.size;
                // const y = Math.round(intersect.point.y / this.gridController.size) * this.gridController.size;
                // const z = Math.round(intersect.point.z / this.gridController.size) * this.gridController.size;
                // this.terrainGhost.mesh.position.copy(new THREE.Vector3(x,y,z)).add(intersect.face.normal);

                this.terrainGhost.mesh.position.copy(intersect.point).add(intersect.face.normal);
                this.terrainGhost.mesh.position.divideScalar(DIVIDE_SCALAR).floor().multiplyScalar(MULTIPLY_SCALAR).addScalar(ADD_SCALAR);
            }

            this.render();
        }

    }

    onPointerDown(event: MouseEvent) {
        this.pointer.set((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);

        this.raycaster.setFromCamera(this.pointer, this.camera);
        const intersects = this.raycaster.intersectObjects(this.meshArray, false);

        if (intersects && intersects.length > 0) {

            const intersect = intersects[0];

            // delete Terrain //
            if (this.isShiftDown) {
                if (intersect.object && intersect.object !== this.planeController.mesh) {
                    this.scene.remove(intersect.object);
                    this.meshArray.splice(this.meshArray.indexOf(intersect.object as THREE.Mesh), 1);
                }
            } else {

                // create Terrain
                const terrain = new Terrain("T01", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(1, 0, 0));
                terrain.initMesh();

                if (terrain.mesh && intersect && intersect.face) {
                    // const x = Math.round(intersect.point.x / this.gridController.size) * this.gridController.size;
                    // const y = Math.round(intersect.point.y / this.gridController.size) * this.gridController.size;
                    // const z = Math.round(intersect.point.z / this.gridController.size) * this.gridController.size;
                    // terrain.mesh.position.copy(new THREE.Vector3(x,y,z)).add(intersect.face.normal);

                    terrain.mesh.position.copy(intersect.point).add(intersect.face.normal);
                    terrain.mesh.position.divideScalar(DIVIDE_SCALAR).floor().multiplyScalar(MULTIPLY_SCALAR).addScalar(ADD_SCALAR);
                }

                this.addObject(terrain);
            }

            this.render();
        }
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