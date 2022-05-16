import * as THREE from '../../../build/three.module.js';

// Light
import PointLightBall from '../light/pointLightBall.js';
// Geometry
import Sphere from '../shapes/sphere.js';

const CONDUCTOR_SPHERE_NAME = "conductor_sphere_";
const CONDUCTOR_POINT_LIGHT_BALL_NAME = "conductor_pointLightBall";
const MAIN_SPACE_BOX_LENGTH = 400;
// Move
const MOVE_FORCE = 0.5;

// export default class Conductor extends Drone {
export default class Conductor {
    constructor(pId, pPosition) {
        this.mNameConductorSphere = CONDUCTOR_SPHERE_NAME + pId;
        this.mNameConductorPointLightBall = CONDUCTOR_POINT_LIGHT_BALL_NAME + pId;

        this.mPosition = pPosition;
        this.mVelocity = new THREE.Vector3(1,1,1);
        this.mRadius = 7;
        // this.randomPosition();

        // super.mRadius = this.generateRandomNumber(0.5, 2.5);
        // this.mSphere = new Sphere(this.mPosition, super.mRadius, 0xffffff);
        // this.mSphere = new Sphere(this.mPosition, this.mRadius, 0xffffff);
        this.mPointLightBall = new PointLightBall(this.mPosition, this.mRadius, 0xffffff);

        // this.mRotationMatrix = new THREE.Matrix4();
        // this.mTargetQuaternion = new THREE.Quaternion();

        this.mTime = 0;
    }

    // setSphereName() {
    //     this.mSphere.setMeshName(this.mNameConductorSphere);
    // }
    setPointLightBallName() {
        this.mPointLightBall.setMeshName(this.mNameConductorPointLightBall);
    }
    getPosition(){
        return this.mPosition;
    } 
    getVelocity(){
        return this.mVelocity;
    }

    draw(pScene) {
        // const mesh = this.mSphere.draw(pScene);
        // this.setSphereName();
        const mesh = this.mPointLightBall.draw();
        mesh.visible = false;
        this.setPointLightBallName();
        return mesh;
    }

    randomPosition() {
        const centre = MAIN_SPACE_BOX_LENGTH * 0.5;
        const max = centre + 100;
        const min = centre - 100;
        this.mPosition.x = Math.random() * (max - min) + min;
        this.mPosition.y = Math.random() * (max - min) + min;
        this.mPosition.z = Math.random() * (max - min) + min;
    }

    update(pDelta, pSunPosition) {
        // this.randomPosition();
        // this.moveInCircle(pDelta, pSunPosition);
        // this.mPosition.x += 1;

        // this.mSphere.copyPosition(this.mPosition);
        this.mPointLightBall.copyPosition(this.mPosition);
    }

    moveInCircle(pDelta, pSunPosition){
        // this.mPosition.x = pSunPosition.x + Math.cos(pDelta) * 10;
        // this.mPosition.y = pSunPosition.y + Math.sin(pDelta) * 10;
        // this.mPosition.z = pSunPosition.z + Math.sin(pDelta) * 10;
        this.mTime += 2 * pDelta; 
        const margin = 100;
        this.mPosition.x = 20* Math.cos(this.mTime) + (pSunPosition.x);
        this.mPosition.y = 20* Math.sin(this.mTime) + (pSunPosition.y);
        this.mPosition.z = 20* Math.sin(this.mTime) + (pSunPosition.z);
    }

    setTarget(pRotationMatrix, pTargetQuaternion, pDrone) {
        // compute target rotation
        // pRotationMatrix.lookAt(new THREE.Vector3().copy(pDrone.mCone.mMesh.position).sub(new THREE.Vector3(0, 1, 0)), pDrone.mCone.mMesh.position, new THREE.Vector3(0, 1, 0));
        pRotationMatrix.lookAt(this.mSphere.mMesh.position);
        // pRotationMatrix.lookAt(this.mSphere.mMesh.position, pDrone.mCone.mMesh.position, new THREE.Vector3(0, 1, 0));
        //pRotationMatrix.lookAt(this.mPosition, pDrone.mCone.mMesh.position, pDrone.mCone.mMesh.up);
        pTargetQuaternion.setFromRotationMatrix(pRotationMatrix);
        // setTarget(new THREE.Vector3().copy(pDrone.mCone.mMesh.position).sub(new THREE.Vector3(0, 1, 0)));
    }

    // -- MOVE --
    moveForward(pDeltaTime) {
        this.mPosition.z -= MOVE_FORCE *pDeltaTime;
    }
    moveBackward(pDeltaTime) {
        this.mPosition.z += MOVE_FORCE *pDeltaTime;
    }
    moveLeft(pDeltaTime) {
        this.mPosition.x -= MOVE_FORCE *pDeltaTime;
    }
    moveRight(pDeltaTime) {
        this.mPosition.x += MOVE_FORCE *pDeltaTime;
    }
    moveUp(pDeltaTime) {
        this.mPosition.y += MOVE_FORCE *pDeltaTime;
    }
    moveDown(pDeltaTime) {
        this.mPosition.y -= MOVE_FORCE *pDeltaTime;
    }

}