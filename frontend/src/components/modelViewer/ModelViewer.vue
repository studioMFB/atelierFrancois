<script setup lang="ts">

import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

import { TransformControls, TransformControlsGizmo } from 'three/examples/jsm/controls/TransformControls.js';

import { ControlsController } from './settings/ControlsController';
import { CameraController } from "./settings/CameraController";
import { LightController } from "./settings/LightController";
import { LoopController } from "./settings/LoopController";
import { SceneController } from "./settings/SceneController";
import { Resizer } from "./settings/Resizer";
import { GridController } from './settings/GridControlller';
import { PlaneController } from './resources/PlaneController';

import { Model, findModelParent } from './resources/model';
import { onBeforeMount, onMounted, ref, type Ref } from 'vue';


// GRID in meters
const GRID_SIZE = 5;
const GRID_DIVISION = 0.5;
const GRID_CELL_SIZE = GRID_SIZE / GRID_DIVISION;

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

    let sceneController: SceneController;
    let scene: THREE.Scene;
    const canvasRef = ref() as Ref<HTMLCanvasElement>;

    let loopController: LoopController;
    let renderer: THREE.WebGLRenderer;

    let controlsController: ControlsController;
    let transformControls: TransformControls;

    let cameraController: CameraController;
    let camera: THREE.PerspectiveCamera;

    let gridController: GridController;
    let planeController: PlaneController;

    let raycaster: THREE.Raycaster;
    let pointer: THREE.Vector2;

    let allModelsArray: THREE.Group<THREE.Object3DEventMap>[];
    let furnitureArray: Model[];

    let composer: EffectComposer;
    let outlinePass: OutlinePass;

    let intersect: THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>>;
    let intersected: THREE.Group<THREE.Object3DEventMap>;

    let ghost: THREE.Mesh;

    // Key, Mouse Controlls
    let isShiftDown: boolean;
    let isKeyGDown: boolean;
    let isKeyRDown: boolean;

    let isLeftMouseButtonDown: boolean;
    let rotationDelta: number;

    let isSelected: boolean;

    onMounted(()=>{
        allModelsArray = [];
        furnitureArray = [];

        isLeftMouseButtonDown = false;
        rotationDelta = 0;

        isSelected = false;

        isShiftDown = false;
        isKeyGDown = false;
        isKeyRDown = false;

        // Scene //
        sceneController = new SceneController();
        scene = sceneController.init(new THREE.Color(0xded6d8));

        // Renderer //
        renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.value });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.shadowMap.enabled = true;


        console.log("renderer.domElement ", renderer.domElement);
        console.log("canvas ", canvasRef.value);

        // Camera //
        cameraController = new CameraController(new THREE.Vector3(-3, 4.5, 3));
        camera = cameraController.init();
        (camera as THREE.PerspectiveCamera).zoom = 2.2;

        // Controls //
        controlsController = new ControlsController(camera, canvasRef.value)
        controlsController.init();

        // COMPOSER //
        // MOVE TO OWN CLASS //
        composer = new EffectComposer(renderer);
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);

        outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
        composer.addPass(outlinePass);

        outlinePass.edgeStrength = 3;
        outlinePass.edgeGlow = 0.7;
        outlinePass.edgeThickness = 1;
        outlinePass.pulsePeriod = 2;
        outlinePass.visibleEdgeColor.set('#ff0000'); // red color
        outlinePass.hiddenEdgeColor.set('#190a05');

        // Light //
        const hLight = new THREE.HemisphereLight(new THREE.Color(0xffffff), undefined, 1.05);
        scene.add(hLight);
        const lightController = new LightController();
        lightController.addSpotLight(scene, 0xffffff, new THREE.Vector3(5, 9, 7));

        lightController.addPointLight(scene, 0xff0040, new THREE.Vector3(0, 10.5, 2));
        lightController.addPointLight(scene, 0x0040ff, new THREE.Vector3(0, 4.5, 2));
        lightController.addPointLight(scene, 0x80ff80, new THREE.Vector3(2, 9.5, -2));
        lightController.addPointLight(scene, 0xffaa00, new THREE.Vector3(-2, 6.5, 2));

        loopController = new LoopController(camera, scene, renderer);

        // Stop Models from leaving the grid.

        // Grid //
        gridController = new GridController(GRID_SIZE, GRID_CELL_SIZE);
        gridController.init(scene, "#888888");
        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2();

        // Plane // 
        planeController = new PlaneController("Plane", new THREE.Vector2(GRID_SIZE, GRID_SIZE), new THREE.Vector2(1, 1), new THREE.Vector3(0, 0, 0));
        planeController.initMesh(false, scene, 1);
        scene.add(planeController.ground as  THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>);
        scene.add(planeController.shadowGround as THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>);

        // Ghost Terrain //
        // terrainGhost = new TerrainGhost("T-Ghost", TERRAIN_SIZE, new THREE.Vector3(50, 1, 50), new THREE.Vector3(0, 0, 0));
        // terrainGhost.initMesh(new THREE.Color(0xff0000), .5);
        // if (terrainGhost.mesh) {
        //     sceneController.addMesh(terrainGhost.mesh);
        //     loopController.addToUpdate(terrainGhost);
        // }

        // GIZMOS //
        // MOVE TO OWN CLASS
        transformControls = new TransformControls(camera, canvasRef.value);
        transformControls.setMode('translate');
        // transformControls.translationSnap = 0.5; // Snaps to 500mm increments.
        scene.add(transformControls);

        // FIND A FIX TO ADJUST GIZMO POSITION FOR ALL MODELS
        // Adjust gizmo pos to be in centre of Table model.
        transformControls.position.x -= .1;
        transformControls.position.y += .6;

        // Main gizmo, arrows and squares
        (transformControls.children[0] as TransformControlsGizmo).gizmo.translate.traverse((child: any) => {
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
        (transformControls.children[0] as TransformControlsGizmo).picker.translate.traverse((child: any) => {
            if (child.isMesh) {
                (child.material as THREE.MeshBasicMaterial).visible = false;
            }
        });

        // Helper transform lines axis
        (transformControls.children[0] as TransformControlsGizmo).helper.translate.traverse((child: any) => {
            if (child.isLine) {
                (child.material as THREE.MeshBasicMaterial).visible = false;
            }
        });

        transformControls.addEventListener("mouseDown", () => {
            // Desable camera controls.
            controlsController.controls.enabled = false;
            // enable rotating selected model on mouse wheel input.
            isLeftMouseButtonDown = true;
            // Lock selected colour (on).
            isSelected = true;
        });
        transformControls.addEventListener("mouseUp", () => {
            // Enable camera controls.
            controlsController.controls.enabled = true;
            // Desable rotating selected model on mouse wheel input.
            isLeftMouseButtonDown = false;
            // UnLock selected colour (off).
            isSelected = false;
        });

        // DEVELOPMENT ONLY
        const table = new Model("table", new THREE.Vector3(0, 0, 0), 1, GLTF_TABLE);
        table.initMesh(scene, allModelsArray).then(() => {

            // adjustGizmoPosition(table.scene, transformControls);

            loopController.addToUpdate(table);
            furnitureArray.push(table);

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
            
            // ghost = new THREE.Mesh(geometry, material);
            // ghost.name = "ghost";
            // ghost.receiveShadow = true;
            // ghost.position.set(-0.1, 0, 0);
            // scene.add(ghost);

            transformControls.addEventListener('change', () => {
                if (transformControls.mode === 'translate') {
                    // Snap position to grid
                    // position.x = Math.round(position.x / 0.5) * 0.5; // Assuming 50 cm grid
                    // position.z = Math.round(position.z / 0.5) * 0.5;
                    // Update the position of the plane
                    if(ghost && intersected)
                        ghost.position.set(intersected.position.x, 0, intersected.position.z);
                }
            });
        });

        // RESIZER //
        const resizer = new Resizer(camera, renderer);

        // init();
    });

    
    // onMounted(()=>{ 
    //     console.log("canvas before init() ", canvasRef.value);
    //     console.log("canvas after init() ", canvasRef.value);
    // });
    

    function  findParent(mesh: THREE.Mesh): THREE.Mesh {
        // If the mesh has no parent, return null
        if (!mesh.parent) {
            return mesh;
        }

        return findParent(mesh.parent as THREE.Mesh);
    }

    function init(): void {
        // Pointer
        document.addEventListener("pointermove", (e: PointerEvent) => { onPointerMove(e) });
        document.addEventListener("pointerdown", (e: PointerEvent) => { onPointerDown(e) });
        // canvas.addEventListener("pointerup", (e: PointerEvent) => { onPointerUp(e) });

        document.addEventListener('wheel', (e: WheelEvent) => { onWheel(e) });

        // Keys
        document.addEventListener('keydown', (e: KeyboardEvent) => { onDocumentKeyDown(e) });
        document.addEventListener('keyup', (e: KeyboardEvent) => { onDocumentKeyUp(e) })

        canvasRef.value.addEventListener("pointerup", () => {
            transformControls.detach();
            changeColour(COLOUR_UNSELECTED);
        });
    }

    function onPointerMove(event: PointerEvent) {
        updatePointerMode(event);

        if (!isSelected)
            changeColour(COLOUR_UNSELECTED);

        if (intersection()) {
            changeColour(COLOUR_SELECTED);
            // adjustGizmoPosition(intersected, transformControls);
            if(intersected)
                transformControls.attach(intersected);
        }

        restricMoveToBoundaries()
    }

    function restricMoveToBoundaries() {
        // This is currently missing the min and max of the boundary box.
        // This is needed to stop the model accuratly.

        if (intersected) {
            // Constrain X position
            intersected.position.x = Math.max(gridLimits.minX, Math.min(gridLimits.maxX, intersected.position.x));

            // Stop the lifting the model up.
            intersected.position.y = 0;

            // Constrain Z position
            intersected.position.z = Math.max(gridLimits.minZ, Math.min(gridLimits.maxZ, intersected.position.z));
        }
    }

    function onPointerDown(event: PointerEvent) {
        console.log("Pointer Down");
        console.log("isShiftDown ", isShiftDown);
        console.log("isKeyGDown ", isKeyGDown);
        console.log("isKeyRDown ", isKeyRDown);

        // Add Table
        if (isShiftDown) {
            //     scene.remove(intersected);
            //     modelsArray.splice(modelsArray.indexOf(intersected), 1);
            // } else {

            const table = new Model("table", new THREE.Vector3(-0.5, 0, -0.5), 1, GLTF_TABLE);
            table.initMesh(scene, allModelsArray).then(() => {
                // adjustGizmoPosition(table.scene, transformControls);
                loopController.addToUpdate(table);
                furnitureArray.push(table);
            });

            // Move to function
            // Render a red square to show where the model would land.
            // if (table && table.mesh && intersect && intersect.face) {
            //     table.mesh.position.copy(intersect.point).add(intersect.face.normal);
            //     table.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
            //     table.mesh.position.y = TERRAIN_OFFSET;
            // }
        }
        if (isKeyGDown) {
            console.log("G");
            const garlic = new Model("garlic", new THREE.Vector3(0, 0, 0), 10, GLTF_GARLIC);
            garlic.initMesh(scene, allModelsArray).then(() => {
                // adjustGizmoPosition(garlic.scene, transformControls);
                loopController.addToUpdate(garlic);
                furnitureArray.push(garlic);
                // ornamentArray.push(garlic);
            });
        }
        if (isKeyRDown) {
            console.log("R");
            const stone = new Model("stone", new THREE.Vector3(0, 0, 0), 0.5, GLTF_STONE);
            stone.initMesh(scene, allModelsArray).then(() => {
                // adjustGizmoPosition(stone.scene, transformControls);
                loopController.addToUpdate(stone);
                furnitureArray.push(stone);
                // ornamentArray.push(stone);
            });
        }
    }

    // onPointerUp(event: PointerEvent) {
    // if (event.button === 0) {
    //     isLeftMouseButtonDown = false;
    // }
    // }

    function onWheel(event: WheelEvent) {
        // Rotate the model by increment of 90'.
        if (isLeftMouseButtonDown) {
            // Determine the scroll direction and amount
            const delta = Math.sign(event.deltaY);
            // Define the rotation speed
            const rotationSpeed = Math.PI / 2;
            // Update the rotation delta
            rotationDelta = delta * rotationSpeed;

            if(intersected)
                intersected.rotation.y += rotationDelta;
        }
    }

    function updatePointerMode(event: PointerEvent) {
        event.preventDefault();
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function intersection(): boolean {
        try {
            raycaster.setFromCamera(pointer, camera);
        }
        catch (e: any) {
            throw new Error(e.toString());
        }

        const intersects = raycaster.intersectObjects(allModelsArray, true);

        if (intersects.length > 0) {
            intersect = intersects[0];

            const tempIntersected = findModelParent(intersect.object as THREE.Mesh);
            if(tempIntersected)
                intersected = tempIntersected;

            // adjustGizmoPosition(intersected);

            // const selectedObject = intersects[0].object;

            // Move to function
            // Render a red square to show where the model would land.
            // if (terrainGhost && terrainGhost.mesh && intersect && intersect.face) {
            //     terrainGhost.mesh.position.copy(intersect.point).add(intersect.face.normal);
            //     terrainGhost.mesh.position.divideScalar(GRID_CELL_SIZE).floor().multiplyScalar(GRID_CELL_SIZE).addScalar(GRID_CELL_MID_SIZE);
            //     terrainGhost.mesh.position.y = GHOST_OFFSET;
            // }
            return true;
        }
        else {
            return false;
        }
    }

    function adjustGizmoPosition(model: any, transformControls: TransformControls): void {
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

    function changeColour(colour: string) {
        if (!intersected)
            return;

        intersected.children.forEach(child => {
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

    function render() {
        renderer.render(scene, camera);
    }

    function start() {
        loopController.start(furnitureArray);
    }

    function stop() {
        loopController.stop();
    }

    function addObject(object: any) {
        if (!object) {
            console.log("Object is null or undifined and will not be added to the scene!");
            return;
        }

        if (object.isMesh) {
            sceneController.addMesh(object.mesh);
        }

        loopController.addToUpdate(object);
    }

    function onDocumentKeyDown(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 16: isShiftDown = true; console.log("SHIFT down"); break;
            case 71: isKeyGDown = true; console.log("G down"); break;
            case 82: isKeyRDown = true; console.log("R down"); break;
        }
    }

    function onDocumentKeyUp(event: KeyboardEvent) {
        switch (event.keyCode) {
            case 16: isShiftDown = false; console.log("SHIFT up"); break;
            case 71: isKeyGDown = false; console.log("G up"); break;
            case 82: isKeyRDown = false; console.log("R up"); break;
        }
    }  
    
    

            // console.log("canvas after init() ", canvasRef.value);

</script>

<template>
    <canvas ref="canvasRef" class="scene-viewer"></canvas>
</template>

<style lang="scss">
.scene-viewer{
    position: fixed;
    top:4rem;
    // left: 2rem;
    width: 96% !important;
    height: 100% !important;
    border: none;
    border-radius: 10px;
    margin: 0 2rem;
    // background:#e5e0d8;
    background-color: #a26400;
}
</style>