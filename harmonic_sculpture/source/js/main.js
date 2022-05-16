import * as THREE from '../../build/three.module.js';

// Camera control
import {
    OrbitControls
} from '../../library/controls/OrbitControls.js';

// Audio Player
import AudioPlayer from './audio/audioPlayer.js';

// Spatial Hashing
import SpatialHashing from './spatialHashing/spatialHashing.js';

// Space
import BoxContainer from './space/BoxContainer.js';
import Wall from './space/wall.js';

import BoundaryBox from './octree/boundaryBox.js';

// Light
import PointLightBall from './light/pointLightBall.js';
// Entities
import Drone from './drones/drone.js';
import Conductor from './drones/conductor.js';

// DEBUG
// Control Panel
import ControlPanel from './debug/controlPanel.js';
// Tests
import TestSuite from './tests/testSuite.js';


function onLoad() {

    // WINDOW
    const WINDOW_WIDTH = window.innerWidth;
    const WINDOW_HEIGHT = window.innerHeight;
    // SPACE
    const MAIN_SPACE_BOX_LENGTH = 1000;//800;
    const NUM_OF_PARTITIONS_PER_SIDE = 10;//8;
    // SUN 
    const SUN_RADIUS = 60;
    const SUN_POSITION = new THREE.Vector3(MAIN_SPACE_BOX_LENGTH * 0.5, MAIN_SPACE_BOX_LENGTH * 0.5, MAIN_SPACE_BOX_LENGTH * 0.5);
    // DRONES
    const NUM_OF_DRONES = 2500; // 1000 // 2500 // 5000
    const VIEW_FIELD_RADIUS = 100;//35; //50; // 150 //25;
    // COLOUR
    const YELLOW = 0xFFE700;
    const RED = 0xFF0000;
    const GREEN = 0x1CFF00;
    const BLUE = 0x0057FF;
    // TIME
    const ONE_SECOND = 1000;

    // Three setup
    let mScene, mRenderer, mAxesHelper;
    // Camera
    let mCamera, mCamGroup, mFadePlane;
    // Orbit Controls
    let mOrbitControl;

    // Audio Player
    let mAudioPlayer;

    // Spatial Hashing
    let mSpatialHashing;

    // Space
    let mBoxContainer;
    // Walls
    let mWallTop;
    let mWallBottom;
    let mWallFront;
    let mWallBack;
    let mWallLeft;
    let mWallRight;

    // Light
    let mPointLightBall;
    let mLight = false;
    let mPointLight;

    // Entities
    let mConductor, mDrone;
    let mFlockOfDrones = []; //new THREE.Group();//[];
    let mLines = [];

    // Collect data to control drones
    // Default values
    let mSeparationFactor = 1,
        mAlignmentFactor = 1,
        mCohesionFactor = 1;
    let mAverageAllF = 1,
        mAverageLowF = 1,
        mAverageHighF = 1;

    // Delta time
    let mClock;

    // Test, Debug
    let mControlPanel;
    let mRunTestSuite = false,
        mDebug = false;
    let mFramerateCounter, mFrames, mStartTime, mFramerate;

    const mBoundaryBoxes = []
    let mCornerMin, mCornerMax;

    // Testing
    let mDataTest1 = [];
    let mDataTest2 = [];
    let mDataTest3 = [];
    let mDataTest4 = [];


    function initAll() {
        mClock = new THREE.Clock();

        mScene = new THREE.Scene();
        // mScene.fog = new THREE.FogExp2(0x5cb701, 0.0005); // NEW

        initFramerateCounter();
        initRenderer();
        initCamera();

        mControlPanel = new ControlPanel();
        mAudioPlayer = new AudioPlayer();
        mControlPanel = new ControlPanel();


        initSpatialHashing();

        initDebugOptions();

        // document.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('resize', onWindowResize);
    }
    // On mouse move
    // function onMouseMove(event) {
    // 	event.preventDefault();
    // 	mMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // 	mMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // 	let vector = new THREE.Vector3(mMouse.x, mMouse.y, 0.5);
    // 	vector.unproject(mCamera);
    // 	let dir = vector.sub(mCamera.position).normalize();
    // 	let distance = -mCamera.position.z / dir.z;
    // 	let pos = mCamera.position.clone().add(dir.multiplyScalar(distance));
    // 	mPointLight.position.copy(pos);
    // };

    function initAxesHelper() {
        mAxesHelper = new THREE.AxesHelper(500);
        mAxesHelper.visible = false;
        mScene.add(mAxesHelper);
    }

    function initRenderer() {
        mRenderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        document.body.appendChild(mRenderer.domElement);

        mRenderer.setPixelRatio(window.devicePixelRatio);
        mRenderer.setClearColor(new THREE.Color(0x00031A)); // darker blue

        mRenderer.setSize(window.innerWidth, window.innerHeight, true);
        // mRenderer.shadowMap.enabled = true;
    }

    function initCamera() {
        const FieldOfView = 45; // in degrees
        const aspectRatio = window.innerWidth / window.innerHeight;
        const nearClippingPlane = 0.1; // Objects closer to the camera than near won't be rendered.
        const farClippingPlane = 100000; // Objects further away from the camera than the value of far won't be rendered.
        mCamera = new THREE.PerspectiveCamera(FieldOfView, aspectRatio, nearClippingPlane, farClippingPlane);
        initOrbitControl();

        // mCamera.position.set(-window.innerWidth * 0.5, -window.innerHeight * 0.8, -window.innerWidth * 0.5);
        mCamera.position.x = -200;
        mCamera.position.y = -300;
        mCamera.position.z = -200;
        mCamera.zoom = 0.8;
        mCamera.updateProjectionMatrix();

        mCamera.lookAt(mScene.position);
        // mCamera.lookAt(SUN_POSITION);
        mOrbitControl.update();

        mScene.add(mCamera);
    }

    // function fadedPlane() {
    //     // Make highly-transparent plane
    //     const  material = new THREE.MeshBasicMaterial({
    //         color: 0x000000,
    //         transparent: true,
    //         opacity: 0.02
    //     });
    //     const geometry = new THREE.PlaneBufferGeometry(1, 1);
    //     return new THREE.Mesh(geometry, material);
    // }

    function initOrbitControl() {
        mOrbitControl = new OrbitControls(mCamera, mRenderer.domElement);
        mOrbitControl.autoRotate = false;
        mOrbitControl.enableZoom = true;
        mOrbitControl.enablePan = true;
        mOrbitControl.enableDamping = true;
        mOrbitControl.dampingFactor = 0.39;
        mOrbitControl.target = SUN_POSITION;
        // mOrbitControl.screenSpacePanning = false;
    }

    function initSpatialHashing() {
        // Single dim for a cube
        const binSize = MAIN_SPACE_BOX_LENGTH / NUM_OF_PARTITIONS_PER_SIDE;
        mSpatialHashing = new SpatialHashing(NUM_OF_PARTITIONS_PER_SIDE, binSize);
    }

    function randomPositionAroundSun() {
        const radius = SUN_RADIUS + 170;
        var u = Math.random();
        var v = Math.random();
        var theta = 2 * Math.PI * u;
        var phi = Math.acos(2 * v - 1);
        const x = SUN_POSITION.x + (radius * Math.sin(phi) * Math.cos(theta));
        const y = SUN_POSITION.y + (radius * Math.sin(phi) * Math.sin(theta));
        const z = SUN_POSITION.z + (radius * Math.cos(phi));

        return new THREE.Vector3(x, y, z);
    }

    function spaceContainer() {
        const p = MAIN_SPACE_BOX_LENGTH * 0.5;
        const position = new THREE.Vector3(p, p, p);
        mBoxContainer = new BoxContainer(position, MAIN_SPACE_BOX_LENGTH, MAIN_SPACE_BOX_LENGTH, MAIN_SPACE_BOX_LENGTH, 0xffffff);
        mScene.add(mBoxContainer.draw());
    }

    function drawWalls() {
        const FULL_SHIFT = MAIN_SPACE_BOX_LENGTH;
        const HALF_SHIFT = MAIN_SPACE_BOX_LENGTH * 0.5;
        const DEGREES_90 = Math.PI * 0.5;

        let meshGroup = new THREE.Group();

        //Top
        mWallTop = new Wall(new THREE.Vector3(HALF_SHIFT, FULL_SHIFT, HALF_SHIFT), new THREE.Vector3(DEGREES_90, 0, 0), MAIN_SPACE_BOX_LENGTH, 0xF19B76);
        meshGroup.add(mWallTop.draw());
        // // Bottom
        mWallBottom = new Wall(new THREE.Vector3(HALF_SHIFT, 0, HALF_SHIFT), new THREE.Vector3(DEGREES_90, 0, 0), MAIN_SPACE_BOX_LENGTH, 0xAA76F1);
        meshGroup.add(mWallBottom.draw());
        // Front
        mWallFront = new Wall(new THREE.Vector3(HALF_SHIFT, HALF_SHIFT, FULL_SHIFT), new THREE.Vector3(0, 0, 0), MAIN_SPACE_BOX_LENGTH, 0xC8A524);
        meshGroup.add(mWallFront.draw());
        // Back
        mWallBack = new Wall(new THREE.Vector3(HALF_SHIFT, HALF_SHIFT, 0), new THREE.Vector3(0, 0, 0), MAIN_SPACE_BOX_LENGTH, 0x5DC824);
        meshGroup.add(mWallBack.draw());
        // Left
        mWallLeft = new Wall(new THREE.Vector3(0, HALF_SHIFT, HALF_SHIFT), new THREE.Vector3(0, DEGREES_90, 0), MAIN_SPACE_BOX_LENGTH, 0x248AC8);
        meshGroup.add(mWallLeft.draw());
        // Right
        mWallRight = new Wall(new THREE.Vector3(FULL_SHIFT, HALF_SHIFT, HALF_SHIFT), new THREE.Vector3(0, DEGREES_90, 0), MAIN_SPACE_BOX_LENGTH, 0xF176AF);
        meshGroup.add(mWallRight.draw());

        mScene.add(meshGroup);
    }

    function lightings() {
        mPointLightBall = new PointLightBall(SUN_POSITION, SUN_RADIUS, 0xffffff);
        const meshLight = mPointLightBall.draw();
        meshLight.matrixAutoUpdate = false;
        mScene.add(meshLight);
    }

    function initConductor() {
        const id = 0;
        // const position = randomPositionAroundSun();
        const position = new THREE.Vector3(100, 100, 100);
        mConductor = new Conductor(id, position);

        // mSpatialHashing.add(mDrone);
        mScene.add(mConductor.draw(mScene));
    }

    function initDrones() {
        const centre = MAIN_SPACE_BOX_LENGTH * 0.5;
        const max = centre + 100;
        const min = centre - 100;

        for (let i = 0; i < NUM_OF_DRONES; ++i) {
            const position = randomPositionAroundSun();
            mDrone = new Drone(i, position, VIEW_FIELD_RADIUS, MAIN_SPACE_BOX_LENGTH, YELLOW);

            mFlockOfDrones.push(mDrone);
            mSpatialHashing.add(mDrone);
            mScene.add(mDrone.draw(mScene));
            mScene.add(mDrone.initDebugFeatures());

            // mConductor.setTarget(mRotationMatrix, mTargetQuaternion, mDrone);
        }
        // Debug
        // testBoundaries();

    }

    // let mMesh;
    function draw() {
        lightings();

        // spaceContainer();
        drawWalls();

        initConductor();
        initDrones();
    }

    function getDeltaTime() {
        return mClock.getDelta();
    }

    function update(pDeltaTime) {
        mConductor.update(pDeltaTime, SUN_POSITION);

        for (let i = 0; i < NUM_OF_DRONES; ++i){

            const tempDrones = mSpatialHashing.queryNeighbours(mFlockOfDrones[i]);

            if (tempDrones) {
                const drones = tempDrones.slice();
                drones.splice(drones.indexOf(mFlockOfDrones[i]), 1);
                mFlockOfDrones[i].applyFlockRules(drones, mSeparationFactor, mAlignmentFactor, mCohesionFactor, mAverageAllF);
                mFlockOfDrones[i].update(pDeltaTime, mConductor, SUN_POSITION, SUN_RADIUS, mWallTop, mWallBottom, mWallFront, mWallBack, mWallLeft, mWallRight);
                mSpatialHashing.update(mFlockOfDrones[i]);
            }
        }
    }

    function collectDataToControlDrones() {

        if (mAudioPlayer.getManager().isAudioPlaying()) {
            const frequencyDataInByte = mAudioPlayer.getManager().performFrequencyDataInByte();
            const splitData = mAudioPlayer.getManager().getControlsPanelSplitData();

            const frequencyBufferLength = mAudioPlayer.getManager().getFrequencyBufferLength();
            mAverageAllF = mAudioPlayer.getManager().calculateAmplitudeAverage(0, frequencyBufferLength - 1);
            mAverageLowF = mAudioPlayer.getManager().calculateAmplitudeAverage(0, splitData - 1);
            mAverageHighF = mAudioPlayer.getManager().calculateAmplitudeAverage(splitData, frequencyBufferLength - 1);

            const factor0 = 0.05;
            const factor1 = 0.15;
            mAverageAllF *= factor0; // Use to scale the drones (keep *value low)
            mAverageLowF *= factor1;
            mAverageHighF *= factor1;
            const factor2 = 10;
            mSeparationFactor = frequencyDataInByte[10] * factor2;
            mAlignmentFactor = mAverageLowF * factor2;
            mCohesionFactor = mAverageHighF * factor2;


            // TESTING
            // const t = mAudioPlayer.getManager().getAudio().currentTime;

            // if(t > 5 && t < 6){
            //     for (let i = 0; i < NUM_OF_DRONES; ++i)
            //         mDataTest1.push("Drone" + mFlockOfDrones[i].mId + ": x: " + mFlockOfDrones[i].getPosition().x + ", y: " + mFlockOfDrones[i].getPosition().y + ", z: " + mFlockOfDrones[i].getPosition().z);
            // }
            // else if(t > 10 && t < 11){
            //     for (let i = 0; i < NUM_OF_DRONES; ++i)
            //         mDataTest2.push("Drone" + mFlockOfDrones[i].mId + ": x: " + mFlockOfDrones[i].getPosition().x + ", y: " + mFlockOfDrones[i].getPosition().y + ", z: " + mFlockOfDrones[i].getPosition().z);
            // }
            // else if(t > 30 && t < 31){
            //     for (let i = 0; i < NUM_OF_DRONES; ++i)
            //         mDataTest3.push("Drone" + mFlockOfDrones[i].mId + ": x: " + mFlockOfDrones[i].getPosition().x + ", y: " + mFlockOfDrones[i].getPosition().y + ", z: " + mFlockOfDrones[i].getPosition().z);
            // }
            // else if(t > 60 && t < 61){
            //     for (let i = 0; i < NUM_OF_DRONES; ++i)
            //         mDataTest4.push("Drone" + mFlockOfDrones[i].mId + ": x: " + mFlockOfDrones[i].getPosition().x + ", y: " + mFlockOfDrones[i].getPosition().y + ", z: " + mFlockOfDrones[i].getPosition().z);
            // }    
        }
    }

    function animate() {
        requestAnimationFrame(animate);

        const deltaTime = getDeltaTime();

        // TEST + DEBUG AREA
        if (isTestSuiteActivated()) runTestSuite();
        (isDebugActivated()) ? debugOn() : debugOff();
        // Framerate performance
        measureFramerate();
        //mFramerate = 1000 / deltaTime;
        updateLabel(mFramerate);

        IsMoveDroneOn(deltaTime);

        collectDataToControlDrones();
        update(deltaTime);
        mOrbitControl.update();

        mRenderer.render(mScene, mCamera);
    }

    /* -- TEST + DEBUG -- */

    // Move mFlockOfDrones[0]
    function IsMoveDroneOn(pDeltaTime) {
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            switch (keyName) {
                case 'i':
                case 'ARROWUP':
                    // mMoveF = true;
                    // mFlockOfDrones[0].moveForward();
                    mConductor.moveForward(pDeltaTime);
                    return;
                case 'j':
                case 'ARROWLEFT':
                    // mMoveL = true;
                    // mFlockOfDrones[0].moveLeft();
                    mConductor.moveLeft(pDeltaTime);
                    return;
                case 'l':
                case 'ARROWRIGHT':
                    // mMoveR = true;
                    // mFlockOfDrones[0].moveRight();
                    mConductor.moveRight(pDeltaTime);
                    return;
                case 'k':
                case 'ARROWDOWN':
                    // mMoveB = true;
                    // mFlockOfDrones[0].moveBackward();
                    mConductor.moveBackward(pDeltaTime);
                    return;
                case 'm':
                    // mMoveU = true;
                    // mFlockOfDrones[0].moveUp();
                    mConductor.moveUp(pDeltaTime);
                    return;
                case 'n':
                    // mMoveD = true;
                    // mFlockOfDrones[0].moveDown();
                    mConductor.moveDown(pDeltaTime);
                    return;
                default:
                    false;
            }

        }, false);
    }

    function isTestSuiteActivated() {
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            if (keyName === 't') {
                mRunTestSuite = true;
                return;
            }
        }, false);
        return mRunTestSuite;
    }

    function isDebugActivated() {
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;

            if (keyName === 'd' && !mDebug) {
                mDebug = true;
                return;
            } else if (keyName === 'd' && mDebug) {
                mDebug = false;
                return;
            }
        }, false);
        return mDebug;
    }

    function runTestSuite() {
        const testWindow = window.open("", "tests_results", "width=400,height=400");
        const testSuite = new TestSuite(testWindow);

        // Collect resources needed to run the testSuite
        if (mAudioPlayer.getManager().isAudioPlaying()) {
            testSuite.setAudioAnalysisDataInByte(mAudioPlayer.getManager().performFrequencyDataInByte());
            // testSuite.setAudioAnalysisDataInFloat(mFrequencyDataInFloat);
        }
        testSuite.setFramerate(mFramerate);

        testSuite.run();

        // Stops multiple popup windows from being created
        mRunTestSuite = false;
    }

    /* Measure Framerate per second for performance testing */
    function initFramerateCounter() {
        mFramerateCounter = document.getElementById('framerateCounter');
        mFrames = 0;
        mStartTime = performance.now();
        mFramerate = 0;
    }

    function measureFramerate() {
        let returnValue = false;
        const currentTime = performance.now();
        const deltaTime = currentTime - mStartTime;

        if (deltaTime > ONE_SECOND) {
            mFramerate = mFrames * ONE_SECOND / deltaTime;
            // reset values
            mFrames = 0;
            mStartTime = currentTime;
            returnValue = true;
        }

        ++mFrames;

        if (returnValue) {
            return mFramerate.toFixed(2);
        }
    }

    function updateLabel(pFramerate) {
        mFramerateCounter.textContent = Math.round(pFramerate);
    }

    // TEST DRONES
    function testBoundaries() {
        let id = 1;
        testDrones(id++, 50, 50, 50, YELLOW); // 0
        testDrones(id++, 75, 50, 50, YELLOW); // 1

        // BOT BACK
        // testDrones(id++, 50, 50, 50, YELLOW); // 0
        // testDrones(id++, 150, 50, 50, YELLOW); // 1
        // // TOP BACK
        // testDrones(id++, 50, 150, 50, YELLOW); // 4
        // testDrones(id++, 150, 150, 50, YELLOW); // 5

        // // BOT FRONT
        // testDrones(id++, 50, 50, 150, YELLOW); // 2
        // testDrones(id++, 150, 50, 150, YELLOW); // 3
        // // TOP FRONT
        // testDrones(id++, 50, 150, 150, YELLOW); // 6
        // testDrones(id++, 150, 150, 150, YELLOW); // 7
    }

    function testDrones(pId, pX, pY, pZ, pColour) {
        // const dimensions = new THREE.Vector3(3, 3, 3);
        const position = new THREE.Vector3(pX, pY, pZ);
        // const scale = new THREE.Vector3(1, 1, 1);
        // const velocity = new THREE.Vector3(1, 1, 1);
        const acceleration = new THREE.Vector3(1, 1, 1);
        const drone = new Drone(pId, position, acceleration, VIEW_FIELD_RADIUS, MAIN_SPACE_BOX_LENGTH, pColour);
        // const drone = new Drone(pId, mSpatialHashing, dimensions, position, scale, velocity, acceleration, VIEW_FIELD_RADIUS, pColour, SPACE_BOX_LENGTH);

        mFlockOfDrones.push(drone);
        mSpatialHashing.add(drone);
    }
    //

    function initBoundaryBoxes() {
        let boundaryBox;
        let id = 0;
        const size = MAIN_SPACE_BOX_LENGTH / NUM_OF_PARTITIONS_PER_SIDE;
        // In case the box is not a cube
        const boxSizes = new THREE.Vector3(size, size, size);

        let trfX = 0;
        let trfY = 0;
        let trfZ = 0;

        let blbX = 0;
        let blbY = 0;
        let blbZ = 0;


        for (let x = 0; x < NUM_OF_PARTITIONS_PER_SIDE; ++x) {
            trfX = boxSizes.x * (x + 1);
            blbX = boxSizes.x * x;

            for (let y = 0; y < NUM_OF_PARTITIONS_PER_SIDE; ++y) {
                trfY = boxSizes.y * (y + 1);
                blbY = boxSizes.y * y;

                for (let z = 0; z < NUM_OF_PARTITIONS_PER_SIDE; ++z) {
                    trfZ = boxSizes.z * (z + 1);
                    blbZ = boxSizes.z * z;

                    const topRightFront = new THREE.Vector3();
                    topRightFront.x = trfX;
                    topRightFront.y = trfY;
                    topRightFront.z = trfZ;
                    const bottomLeftBack = new THREE.Vector3();
                    bottomLeftBack.x = blbX;
                    bottomLeftBack.y = blbY;
                    bottomLeftBack.z = blbZ;

                    boundaryBox = new BoundaryBox(id++, true, mScene, boxSizes, topRightFront, bottomLeftBack);

                    mScene.add(boundaryBox.draw());
                    boundaryBox.setVisible(false);
                    mBoundaryBoxes.push(boundaryBox);
                }
            }
        }
    }

    function initMainSpaceCorner(pPos, pColour) {
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshLambertMaterial({
            color: pColour
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(pPos);
        mesh.scale.set(5, 5, 5);
        mesh.visible = false;

        mScene.add(mesh);
        return mesh;
    }

    function initDebugOptions() {
        initAxesHelper();
        initBoundaryBoxes();
        mCornerMin = initMainSpaceCorner(new THREE.Vector3(0, 0, 0), RED);
        mCornerMax = initMainSpaceCorner(new THREE.Vector3(MAIN_SPACE_BOX_LENGTH, MAIN_SPACE_BOX_LENGTH, MAIN_SPACE_BOX_LENGTH), GREEN);
    }

    function debugOn() {
        mAxesHelper.visible = true;
        mCornerMin.visible = true;
        mCornerMax.visible = true;
        for (const boundaryBox of mBoundaryBoxes) boundaryBox.setVisible(true);
    }

    function debugOff() {
        mAxesHelper.visible = false;
        mCornerMin.visible = false;
        mCornerMax.visible = false;
        for (const boundaryBox of mBoundaryBoxes) boundaryBox.setVisible(false);
    }
    //

    function onWindowResize() {
        mCamera.aspect = window.innerWidth / window.innerHeight;
        mCamera.updateProjectionMatrix();
        mRenderer.setSize(window.innerWidth, window.innerHeight);
    }


    function saveTextFile() {
        const downloadToFile = (content, filename, contentType) => {
            const a = document.createElement('a');
            const file = new Blob([content], {type: contentType});
            
            a.href= URL.createObjectURL(file);
            a.download = filename;
            a.click();
            
            URL.revokeObjectURL(a.href);
          };
          
          document.querySelector('#btnSave').addEventListener('click', () => {
            
            
            downloadToFile(mDataTest1, 'out5.txt', 'text/plain');
            downloadToFile(mDataTest2, 'out10.txt', 'text/plain');
            downloadToFile(mDataTest3, 'out30.txt', 'text/plain');
            downloadToFile(mDataTest4, 'out60.txt', 'text/plain');
          });
    }


    initAll();
    draw();

    // saveTextFile(); // TEMPORARY FOR TESTING! TO TURN OFF LATER

    animate();
}
window.addEventListener('load', onLoad, false);
