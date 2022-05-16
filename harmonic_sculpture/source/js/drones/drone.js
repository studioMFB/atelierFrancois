import * as THREE from '../../../build/three.module.js';

// Light
import PointLightBall from '../light/pointLightBall.js';
// Geometry
import Cone from '../shapes/cone.js';
import Sphere from '../shapes/sphere.js';

import Bin from '../spatialHashing/bin.js';

// -- Forces --
const MAX_SPEED = 0.5; //6;
// const MAX_ALIGN_FORCE = 150; //15;
// const MAX_SEPARATION_FORCE = 220; //12;
// const MAX_COHESION_FORCE = 200; //20;
// const MAX_STEERING_FORCE = 250; //2.5;
const MAX_ALIGN_FORCE = 15;
const MAX_SEPARATION_FORCE = 12;
const MAX_COHESION_FORCE = 20;
const MAX_STEERING_FORCE = 2.5;
// Move
const MOVE_FORCE = 0.3;
// Wander
const CIRCLE_DISTANCE = 20; // 10; // 100;
const CIRCLE_RADIUS = 23; //25;
const ANGLE_CHANGE = Math.PI / 2; // =>90 ///4; // =>45 ///6; //=>30
//
// const ALIGNMENT_FACTOR = 120; //1.2;
// const SEPARATION_FACTOR = 150; //1.5;
// const COHESION_FACTOR = 120; //1.2;
const ALIGNMENT_FACTOR = 1.2;
const SEPARATION_FACTOR = 1.5;
const COHESION_FACTOR = 1.2;
//
const VIEW_FIELD_RADIUS_ALIGN_SQRT = 20 * 20; //50; // 150 //25;
const VIEW_FIELD_RADIUS_SEPAR_SQRT = 30 * 30; //50; // 150 //25;
const VIEW_FIELD_RADIUS_COHES_SQRT = 30 * 30; //50; // 150 //25;

// Names
const DRONE_CONE_NAME = "drone_cone_";
const DRONE_SPHERE_NAME = "drone_sphere_";
const DRONE_POINT_LIGHT_BALL_NAME = "drone_pointLightBall";
// Colour
const YELLOW = 0xFFE700;
const WHITE = 0x50ffffff;

export default class Drone {
    constructor(pId, pPosition, pViewFieldRadius, pSpaceLength, pColour) {

        this.mSpaceLength = pSpaceLength;

        this.mId = pId;
        this.mNameDroneCone = DRONE_CONE_NAME + pId;
        this.mNameDroneSphere = DRONE_SPHERE_NAME + pId;
        this.mNameDronePointLightBall = DRONE_POINT_LIGHT_BALL_NAME + pId;

        this.mPosition = pPosition;
        this.mScale = new THREE.Vector3();
        this.mRotation = 0;
        this.mVelocity = new THREE.Vector3(0.1, 1, 0.1);
        this.mAcceleration = new THREE.Vector3();

        this.mWanderAngle = 1;
        this.mViewFieldRadius = pViewFieldRadius;
        this.mViewFieldRadiusSquared = this.mViewFieldRadius * this.mViewFieldRadius;

        this.mRadius = this.generateRandomNumber(2, 4);
        this.mHeight = this.generateRandomNumber(3, 7);
        this.mMass = this.calculateMassOfSphere();
        this.mColour = pColour;
        // this.mSphere = new Sphere(this.mPosition, this.mRadius, pColour);
        this.mCone = new Cone(this.mPosition, this.mRadius, this.mHeight, pColour);

        this.mPointLightBall = new PointLightBall(this.mPosition, this.mRadius, 0xffffff);
        this.mLight = false;

        // Current Spatial hashing bin index
        this.mBinIndex;
        this.mDistances = [];

        // Util generic vectors
        this.mForce = new THREE.Vector3();
        this.mSteeringForce = new THREE.Vector3();
        this.mTempVector = new THREE.Vector3();
        //
        const margin1 = this.mViewFieldRadius * 0.5;
        this.mLimitMin = margin1;
        this.mLimitMax = this.mSpaceLength - margin1;
        this.mBoundariesLimitMin = new THREE.Vector3(this.mLimitMin, this.mLimitMin, this.mLimitMin);
        this.mBoundariesLimitMax = new THREE.Vector3(this.mLimitMax, this.mLimitMax, this.mLimitMax);

        this.mWorker = new Worker('./../webWorkerScript/updateDrones.js');
    }

    initDebugFeatures() {
        this.mDebug = false
        const opacity = 0.3;
        const visible = false;

        let radius = Math.sqrt(VIEW_FIELD_RADIUS_ALIGN_SQRT);
        let colour = 0xE44E80;
        this.mViewFieldSphereAlign = new Sphere(this.mPosition, radius, colour, opacity, visible);

        radius = Math.sqrt(VIEW_FIELD_RADIUS_COHES_SQRT);
        colour = 0x4EA8E4;
        this.mViewFieldSphereCohesion = new Sphere(this.mPosition, radius, colour, opacity, visible);

        radius = Math.sqrt(VIEW_FIELD_RADIUS_ALIGN_SQRT);
        colour = 0x4EE494;
        this.mViewFieldSphereSeparation = new Sphere(this.mPosition, radius, colour, opacity, visible);

        return this.drawDebugFeature();
    }
    drawDebugFeature() {
        let meshGroup = new THREE.Group();

        meshGroup.add(this.mViewFieldSphereAlign.draw());
        meshGroup.add(this.mViewFieldSphereCohesion.draw());
        meshGroup.add(this.mViewFieldSphereSeparation.draw());

        return meshGroup;
    }
    updateDebugFeature() {
        this.mViewFieldSphereAlign.copyPosition(this.mPosition);
        this.mViewFieldSphereCohesion.copyPosition(this.mPosition);
        this.mViewFieldSphereSeparation.copyPosition(this.mPosition);
    }
    setDebug(pDebug) {
        this.mDebug = pDebug;
    }
    setViewFieldSphereAlignVisible(pVisible) {
        this.mViewFieldSphereAlign.setVisible(pVisible);
    }
    setViewFieldSphereCohesionVisible(pVisible) {
        this.mViewFieldSphereCohesion.setVisible(pVisible);
    }
    setViewFieldSphereSeparationVisible(pVisible) {
        this.mViewFieldSphereSeparation.setVisible(pVisible);
    }

    setSphereName() {
        this.mSphere.setMeshName(this.mNameDroneSphere);
    }
    getDroneSphereName() {
        return this.mNameDroneSphere;
    }

    setConeName() {
        this.mCone.setMeshName(this.mNameDroneCone);
    }
    getDroneConeName() {
        return this.mNameDroneCone;
    }

    setPointLightBallName() {
        this.mPointLightBall.setMeshName(this.mNameDronePointLightBall);
    }
    getPointLightBallName() {
        return this.mNameDronePointLightBall;
    }

    /* Change colour based on bin's index */
    setBinIndex(pIndex) {
        this.mBinIndex = pIndex;
        this.setBinColour(pIndex);
    }
    getBinIndex() {
        return this.mBinIndex;
    }
    setBinColour(pIndex) {
        // Variant of red/pink/magenta
        const r = 255; //pIndex *4;
        const g = Math.floor(255 - pIndex * 0.5);
        const b = 1 + pIndex;

        // cold palette
        // const r = 25 + pIndex;
        // const g = 12 + pIndex;
        // const b = 10 + pIndex;

        const colour = this.rgbToHexColour(r, g, b);
        this.setColour(colour);
    }

    setColour(pColour) {
        if (this.mLight) pColour = 0xffffff;
        // this.mSphere.setColour(pColour);
        this.mCone.setColour(pColour);
    }
    /* Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
    /* By @cwolves, last Access [15.03.2022] */
    rgbToHexColour(r, g, b) {
        return "0x" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    setCurrentBoxIndices(pCurrentBoxIndices) {
        this.mCurrentBoxIndices = pCurrentBoxIndices;
    }
    getCurrentBoxIndices() {
        return this.mCurrentBoxIndices;
    }

    setSphereMesh(pMesh) {
        this.mSphere.setMesh(pMesh);
    }
    getSphereMesh() {
        return this.mSphere.getMesh();
    }

    setConeMesh(pMesh) {
        this.mCone.setMesh(pMesh);
    }
    getConeMesh() {
        return this.mCone.getMesh();
    }
    getHeight() {
        return this.mHeight; //this.mCone.getHeight();
    }

    getBoxAABB() {
        return this.mSphere.getBoxAABB();
    }
    updateBoundingBoxAABB() {
        this.mSphere.updateBoundingBoxAABB();
    }

    setPosition(pPosition) {
        if (this.mLight) return this.mPointLightBall.setPosition(pPosition);
        // this.mSphere.setPosition(pPosition);
        this.mCone.setPosition(pPosition);
    }
    copyPosition(pPosition) {
        (this.mLight) ? this.mPointLightBall.copyPosition(pPosition):
            // this.mSphere.copyPosition(pPosition);
            this.mCone.copyPosition(pPosition);
    }
    getPosition() {
        if (this.mLight) return this.mPointLightBall.getPosition();
        // return this.mSphere.getPosition();
        return this.mCone.getPosition();
    }

    setScale(pScale) {
        (this.mLight) ? this.mPointLightBall.setScale(pScale):
            // this.mSphere.setScale(pScale);
            this.mCone.setScale(pScale);
    }
    setRadius(pRadius) {
        // this.mSphere.setRadius(pRadius);
        this.mCone.setRadius(pRadius);
    }
    setHeight(pHeight) {
        this.mCone.setHeight(pHeight);
    }

    setVelocity(pVelocity) {
        this.mVelocity = pVelocity;
    }
    getVelocity() {
        return this.mVelocity;
    }

    getPointLightBall() {
        return this.mPointLightBall;
    }

    switchLight(pVisible) {
        // this.mSphere.setVisible(!pVisible);
        this.mCone.setVisible(!pVisible);
        this.mPointLightBall.setVisible(pVisible);
    }
    dimLight(pIntensity, pIndexBrightness) {
        this.mPointLightBall.dimLight(pIntensity, pIndexBrightness);
    }

    drawCone(pScene) {
        return this.mCone.draw(pScene);
    }
    drawSphere(pScene) {
        return this.mSphere.draw(pScene);
    }
    drawPointLightBall() {
        return this.mPointLightBall.draw();
    }

    draw(pScene) {
        let meshGroup = new THREE.Group();
        meshGroup.add(this.drawCone(pScene));
        this.setConeName();
        // meshGroup.add(this.drawSphere(pScene));
        // this.setSphereName();
        meshGroup.add(this.drawPointLightBall());
        this.setPointLightBallName();
        this.switchLight(this.mLight);

        return meshGroup;
    }

    drawLine(pNextDrone) {
        //create a blue LineBasicMaterial
        const material = new THREE.LineBasicMaterial({
            color: 0x070200,
            linewidth: 0.01
        });
        //After material we will need a geometry with some vertices:
        const points = [];
        points.push(this.mPosition);
        points.push(pNextDrone.getPosition());

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        //Note that lines are drawn between each consecutive pair of vertices, but not between the first and last (the line is not closed.)

        //Now that we have points for two lines and a material, we can put them together to form a line.
        this.mLine = new THREE.Line(geometry, material);

        return this.mLine;
    }

    generateRandomNumber(pMin, pMax) {
        // return Math.random() * pMax - pMin;
        return Math.floor(Math.random() * (pMax - pMin + 1)) + pMin;
    }

    generateRandomCoords(pMin, pMax) {
        this.mTempVector.set(0, 0, 0);
        // const maxV = 50; // 10
        // const minV = 3; // 5
        // const maxV = MAX_SPEED;
        // const minV = 0.3;
        this.mTempVector.x = Math.floor(Math.random() * (pMax - pMin + 1)) + pMin;
        this.mTempVector.y = Math.floor(Math.random() * (pMax - pMin + 1)) + pMin;
        this.mTempVector.z = Math.floor(Math.random() * (pMax - pMin + 1)) + pMin;
        // vector.setLength(Math.floor(Math.random() * 2));
        return this.mTempVector;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    // From Craig Reynolds website:
    // https://www.red3d.com/cwr/boids/

    align(pFlock) {
        this.mForce.set(0, 0, 0);
        this.mSteeringForce.set(0, 0, 0);
        let total = 0;

        for (let i = 0; i < pFlock.length; ++i) {
            if (this.mDistances[i] <= VIEW_FIELD_RADIUS_ALIGN_SQRT) {
                this.mForce.add(pFlock[i].getVelocity());
                total++;
            }
        }
        if (total > 0) {
            this.mForce.divideScalar(total);
            this.mForce.normalize();
            this.mForce.multiplyScalar(ALIGNMENT_FACTOR);
            this.mSteeringForce.subVectors(this.mForce, this.mVelocity);

            if (this.mSteeringForce.length() > MAX_ALIGN_FORCE) {
                this.mSteeringForce.clampLength(0, MAX_ALIGN_FORCE);
            }
        }
        return this.mSteeringForce;
    }

    separate(pFlock) {
        this.mForce.set(0, 0, 0);
        this.mSteeringForce.set(0, 0, 0);
        let total = 0;

        for (let i = 0; i < pFlock.length; ++i) {
            if (this.mDistances[i] <= VIEW_FIELD_RADIUS_SEPAR_SQRT) {
                this.mTempVector.set(0, 0, 0);
                this.mTempVector.subVectors(pFlock[i].getPosition(), this.getPosition());
                this.mForce.add(this.mTempVector);
                total++;
            }
        }
        if (total > 0) {
            this.mForce.divideScalar(total);
            this.mForce.multiplyScalar(-1);
            this.mForce.normalize();
            this.mForce.multiplyScalar(SEPARATION_FACTOR);
            this.mSteeringForce.subVectors(this.mForce, this.mVelocity);

            if (this.mSteeringForce.length() > MAX_SEPARATION_FORCE) {
                this.mSteeringForce.clampLength(0, MAX_SEPARATION_FORCE);
            }
        }
        return this.mSteeringForce;
    }

    cohesion(pFlock) {
        this.mForce.set(0, 0, 0);
        this.mSteeringForce.set(0, 0, 0);
        let total = 0;

        for (let i = 0; i < pFlock.length; ++i) {
            if (this.mDistances[i] <= VIEW_FIELD_RADIUS_COHES_SQRT) {
                this.mForce.add(pFlock[i].getPosition());
                total++;
            }
        }
        if (total > 0) {
            this.mForce.divideScalar(total);
            this.mForce.normalize();
            this.mForce.multiplyScalar(COHESION_FACTOR);
            this.mSteeringForce.subVectors(this.mForce, this.mVelocity);

            if (this.mSteeringForce.length() > MAX_COHESION_FORCE) {
                this.mSteeringForce.clampLength(0, MAX_COHESION_FORCE);
            }
        }
        return this.mSteeringForce;
    }

    /* Apply average velocity to neighboured drones. */
    /* So they form clusters and start moving as a flock. */
    applyFlockRules(pFlock, pSeparationFactor, pAlignFactor, pCohesionFactor, pAverageAllF) {

        this.setScale(new THREE.Vector3(1, 1, pAverageAllF));

        for (const drone of pFlock) {
            this.mDistances.push(this.mPosition.distanceToSquared(drone.getPosition()));
        }

        this.addForceToAcceleration(this.align(pFlock).multiplyScalar(pAlignFactor));
        this.addForceToAcceleration(this.separate(pFlock).multiplyScalar(pSeparationFactor));
        this.addForceToAcceleration(this.cohesion(pFlock).multiplyScalar(pCohesionFactor));
        // this.addForceToAcceleration(this.align(pFlock));
        // this.addForceToAcceleration(this.separate(pFlock));
        // this.addForceToAcceleration(this.cohesion(pFlock));

        // if (!this.mLight && pSeparationFactor > 10) {
        //     this.mLight = true;
        //     this.switchLight(this.mLight);
        //     this.dimLight(0.5, 3);
        // } else if (this.mLight && pSeparationFactor < 4) {
        //     this.mLight = false;
        //     this.switchLight(this.mLight);
        // }
    }

    /////////////////////////////////////////////////////////////////

    update(pDeltaTime, pConductor, pSunPosition, pSunRadius, pWallTop, pWallBottom, pWallFront, pWallBack, pWallLeft, pWallRight) {

        // let conductorPos = pConductor.mPosition.clone();
        // avoid Sun
        this.avoid(pSunPosition, pSunRadius);

        // chase the Conductor
        // this.addForceToAcceleration(this.moveTowards(pDeltaTime, conductorPos));

        // flee from Conductor if to close
        // this.addForceToAcceleration(this.fleeAwayFrom(pDeltaTime, pConductor));
        // flee
        // this.addForceToAcceleration(this.flee(conductorPos));

        // follow Conductor
        // this.addForceToAcceleration(this.follow(conductorPos));
        // stay behind
        // this.addForceToAcceleration(this.stayBehind(pConductor));

        // wander // LOOKS GOOD
        this.addForceToAcceleration(this.wander());
        //
        // this.mWorker.postMessage(this.mVelocity.clone());
        // this.mWorker.onmessage = e => {
        //     let circleCenter = e.data;
        //     this.addForceToAcceleration(circleCenter);
        // }

        // avoid Walls // WORKS
        // this.addForceToAcceleration(this.avoidBoundaryWalls(this.mAcceleration, pWallTop, pWallBottom, pWallFront, pWallBack, pWallLeft, pWallRight));

        ////////
        // let prevVelocity = this.mVelocity.clone(); // v
        this.mAcceleration.multiplyScalar(pDeltaTime); // a*t
        this.mAcceleration.clampLength(0, MAX_STEERING_FORCE);
        this.mAcceleration.divideScalar(this.mMass);
        this.mVelocity.add(this.mAcceleration); // v + (a*t)

        // this.mVelocity.add(prevVelocity); // (v + nV)
        // this.mVelocity.divideScalar(2); // ((v + nV) / 2)
        // this.mVelocity.multiplyScalar(pDeltaTime); // ((v + nV) / 2) * t

        // this.mVelocity = this.avoidBoundaryWalls(this.mVelocity, pWallTop, pWallBottom, pWallFront, pWallBack, pWallLeft, pWallRight);
        this.mVelocity.clampLength(0, MAX_SPEED);
        this.mPosition.add(this.mVelocity);

        ////////
        // // avoid Walls
        // this.addForceToAcceleration(this.avoidBoundaryWalls(this.mAcceleration, pWallTop, pWallBottom, pWallFront, pWallBack, pWallLeft, pWallRight));

        // // next velocity
        // // v + a * t
        // let nextVelocity = this.mVelocity.clone(); // v
        // this.mAcceleration.multiplyScalar(pDeltaTime); // a*t
        // nextVelocity.add(this.mAcceleration); // v + (a*t)

        // // next position
        // // p + ((v + nV) / 2) * t
        // nextVelocity.add(this.mVelocity); // (v + nV)
        // nextVelocity.divideScalar(2); // ((v + nV) / 2)
        // nextVelocity.multiplyScalar(pDeltaTime); // ((v + nV) / 2) * t

        // // next velocity max speed
        // nextVelocity.clampLength(0, MAX_SPEED);
        // // create new position
        // this.mPosition.add(nextVelocity); // p + ((v + nV) / 2) * t

        // keep next position within space boundaries
        this.mPosition.clamp(this.mBoundariesLimitMin, this.mBoundariesLimitMax);

        // Apply next position to mesh
        this.copyPosition(this.getPosition());

        if (this.mDebug) this.updateDebugFeature();

        // reset acceleration
        this.mAcceleration.set(0, 0, 0);

        // point towards direction of next velocity
        this.mCone.mMesh.lookAt(this.mPosition.add(this.mVelocity));
    }

    avoidObstacle(pWall) {
        const MAX_SEE_AHEAD = 1.1; //this.mViewFieldRadius; // *0.5
        this.mTempVector.set(0, 0, 0);
        // this.mTempVector = this.mPosition.clone().add(this.mVelocity.clone().normalize()).multiplyScalar(MAX_SEE_AHEAD);
        // head of obstacle detection line
        this.mTempVector = this.mPosition.clone().add(this.mVelocity.clone().normalize()).multiplyScalar(MAX_SEE_AHEAD);
        // this.mForce = this.mTempVector.multiplyScalar(0.5);

        // starts from the center of the drone up to the head
        const detectionLine = new THREE.Line3(this.mPosition, this.mTempVector);

        // this.mScene.add(detectionLine);
        // if line crosses plane wall
        // const x = pWall.getPlane().intersectLine(detectionLine).x;
        // const y = pWall.getPlane().intersectLine(detectionLine).y;
        // const z = pWall.getPlane().intersectLine(detectionLine).z;

        // TO HELP DEBUG!
        const d = this.mPosition.distanceTo(pWall.getPosition());
        let vec = new THREE.Vector3();
        vec.subVectors(this.mTempVector, this.mPosition);
        const lineLength = vec.length();

        if (d <= lineLength) {
            // Collision!
            // const stop = true;
            const MAX_AVOID_FORCE = 30;
            this.mForce.set(0, 0, 0);
            this.mForce.subVectors(this.mTempVector, pWall.getPosition());
            this.mForce.normalize().multiplyScalar(MAX_AVOID_FORCE);
        }
        //

        // if (pWall.getPlane().intersectLine(detectionLine)) {
        //     // avoid
        //     const MAX_AVOID_FORCE = 30;
        //     this.mForce.set(0, 0, 0);
        //     this.mForce.subVectors(this.mTempVector, pWall.getPosition());
        //     this.mForce.normalize().multiplyScalar(MAX_AVOID_FORCE);
        // }

        return this.mForce;
    }

    flee(pTargetPos) {
        this.mForce.set(0, 0, 0);
        this.mForce = ((this.mPosition.clone().sub(pTargetPos)).normalize()).multiplyScalar(MAX_SPEED);
        return this.mForce.sub(this.mVelocity);
    }

    wander() {
        let circleCenter = this.mVelocity.clone();
        circleCenter.normalize();
        circleCenter.multiplyScalar(this.mViewFieldRadius);

        let wander = this.generateRandomCoords(-1, 1);
        wander.multiplyScalar(this.mViewFieldRadius);
        this.mWanderAngle += Math.random() * ANGLE_CHANGE - ANGLE_CHANGE * 0.5;
        this.setAngleOf(wander);

        return circleCenter.add(wander);
    }

    setAngleOf(pVector) {
        const l = pVector.length();
        pVector.x = Math.cos(this.mWanderAngle) * l;
        pVector.y = Math.sin(this.mWanderAngle) * l;
        pVector.z = Math.sin(this.mWanderAngle) * l;
    }


    follow(pConductorPos) {
        // const behindForce = this.stayBehind(pConductor);
        this.mForce.set(0, 0, 0);
        return this.mForce.add(this.arrive(pConductorPos));
    }
    stayBehind(pConductor) {
        const LEADER_BEHIND_DIST = 20;
        this.mForce.set(0, 0, 0);
        this.mForce = pConductor.getVelocity().clone().multiplyScalar(-1);
        this.mForce.normalize().multiplyScalar(LEADER_BEHIND_DIST);
        return this.mForce.add(pConductor.getPosition());
    }
    arrive(pConductorPos) {
        this.mForce.set(0, 0, 0);
        const slowingRadius = 10; // 2 x LEADER_BEHIND_DIST
        // Calculate the desired velocity
        this.mForce = pConductorPos.clone().sub(this.mPosition);

        const distance = this.mForce.length();

        // Check the distance to detect whether the character
        // is inside the slowing area
        if (distance < slowingRadius) {
            // Inside the slowing area
            (this.mForce.normalize()).multiplyScalar(MAX_SPEED * (distance / slowingRadius));
        } else {
            // Outside the slowing area.
            (this.mForce.normalize()).multiplyScalar(MAX_SPEED);
        }

        // Set the steering based on this
        return this.mForce.sub(this.mVelocity);
    }

    // fleeAwayFrom(pDeltaTime, pConductor) {
    //     const desiredVelocity = new THREE.Vector3();
    //     const fleeForce = new THREE.Vector3();
    //     const target = this.target;

    //     // only flee if the target is within panic distance
    //     const panicDistance = 50;
    //     const distance = this.mPosition.distanceTo(pConductor.getPosition());

    //     if (distance <= (panicDistance)) {
    //         // from here, the only difference compared to seek is that the desired
    //         // velocity is calculated using a vector pointing in the opposite direction
    //         desiredVelocity.subVectors(pConductor.getPosition(), this.mPosition).normalize();

    //         // if target and vehicle position are identical, choose default velocity
    //         if (desiredVelocity.length() === 0) {
    //             desiredVelocity.set(0, 0, 1);
    //         }
    //         desiredVelocity.multiplyScalar(MAX_SPEED);
    //         fleeForce.subVectors(desiredVelocity, this.mVelocity);
    //     }
    //     return fleeForce;
    // }

    moveTowards(pDeltaTime, pConductorPos) {
        this.mForce.set(0, 0, 0);
        const sensitivity = 0.01; //150;
        const rotateAngle = Math.PI / 2 * pDeltaTime * sensitivity;
        this.mPosition.applyAxisAngle(pConductorPos.clone().normalize(), rotateAngle);

        return this.mForce.subVectors(pConductorPos, this.mPosition);
    }

    calculateVolumeOfSphere() {
        return 4 / 3 * Math.PI * Math.pow(this.mRadius, 3);
    }
    calculateMassOfSphere() {
        const v = this.calculateVolumeOfSphere();
        const density = 0.027; // Aluminum = 2700 kg/m3 = 0.0027 kg/cm3
        return density * v;
    }
    // calculateAcceleration(pDelta, pPrevVelocity, pCurVelocity, pMass) {
    //     const subVelocity = pCurVelocity.sub(pPrevVelocity);
    //     const mV = subVelocity.multiplyScalar(pMass);
    //     return mV.divideScalar(pDelta);
    // }
    // calculateVelocity(pDelta, pPrevVelocity, pMass, pAcceleration) {
    //     const mA = pAcceleration.multiplyScalar(1 / pMass);
    //     const mAT = pAcceleration.multiplyScalar(pDelta);
    //     return pPrevVelocity.add(mAT);
    // }

    addForceToAcceleration(pForce) {
        // let f = pForce.clone();
        // f.divideScalar(this.mMass);
        this.mAcceleration.add(pForce);
    }

    avoid(pConductorPos, pConductorRadius) {
        const pos = this.mPosition;
        const distanceSqrt = pos.distanceToSquared(pConductorPos);
        const margin = 30;
        const limitSqrt = pConductorRadius * pConductorRadius + margin * margin;
        if (distanceSqrt < limitSqrt) {
            this.mForce.set(0, 0, 0);
            this.mForce.subVectors(pos, pConductorPos);
            this.addForceToAcceleration(this.mForce.multiplyScalar(2));
        }
    }


    avoidBoundaryWalls(pNextVelocity, pWallTop, pWallBottom, pWallFront, pWallBack, pWallLeft, pWallRight) {
        const pos = this.mPosition;

        if (pos.x < this.mLimitMin) {
            pNextVelocity.reflect(pWallLeft.getPosition());

        } else if (pos.x > this.mLimitMax) {
            pNextVelocity.reflect(pWallRight.getPosition());
        }
        if (pos.y < this.mLimitMin) {
            pNextVelocity.reflect(pWallBottom.getPosition());

        } else if (pos.y > this.mLimitMax) {
            pNextVelocity.reflect(pWallTop.getPosition());
        }
        if (pos.z < this.mLimitMin) {
            pNextVelocity.reflect(pWallBack.getPosition());

        } else if (pos.z > this.mLimitMax) {
            pNextVelocity.reflect(pWallFront.getPosition());
        }

        return pNextVelocity; //.multiplyScalar(1.5);
    }

    rotate(pNormal, pRotateAngle, pNextVelocity) {
        const rotSin = Math.sin(this.mRotation);
        const rotCos = Math.cos(this.mRotation);
        const distance = 0.9; //0.9; //200;

        // pNextVelocity.x -= (distance * rotX) * pNormal.x;
        // pNextVelocity.y -= (distance * rotZ) * pNormal.y;
        // pNextVelocity.z -= (distance * rotZ) * pNormal.z; 
        pNextVelocity.x -= (distance * rotSin);
        pNextVelocity.y -= (distance * rotSin);
        pNextVelocity.z -= (distance * rotCos);

        return pNextVelocity;

        // this.mPosition.x -= (distance * rotX) * pNormal.x;
        // this.mPosition.y -= (distance * rotZ) * pNormal.y;
        // this.mPosition.z -= (distance * rotZ) * pNormal.z;




        // const rotX = Math.atan2(this.mPosition.y, this.mPosition.z);
        // const rotY = -Math.atan2(this.mPosition.x * Math.cos(rotX), this.mPosition.z);
        // const rotZ = Math.atan2(Math.cos(rotX), Math.sin(rotX) * Math.sin(rotY));
        // this.mPosition.add(new THREE.Vector3(rotX, rotY, rotZ));

        // const euler = new THREE.Euler(pRotateAngle, pRotateAngle, pRotateAngle, 'XYZ' );
        // this.mPosition.applyEuler(euler);//setFromEuler(pRotateAngle);

        // this.mPosition.applyAxisAngle(pNormal, pRotateAngle);
    }

    // -- MOVE --
    moveForward(pDeltaTime) {
        this.mPosition.z -= MOVE_FORCE * pDeltaTime;
    }
    moveBackward(pDeltaTime) {
        this.mPosition.z += MOVE_FORCE * pDeltaTime;
    }
    moveLeft(pDeltaTime) {
        this.mPosition.x -= MOVE_FORCE * pDeltaTime;
    }
    moveRight(pDeltaTime) {
        this.mPosition.x += MOVE_FORCE * pDeltaTime;
    }
    moveUp(pDeltaTime) {
        this.mPosition.y += MOVE_FORCE * pDeltaTime;
    }
    moveDown(pDeltaTime) {
        this.mPosition.y -= MOVE_FORCE * pDeltaTime;
    }

}