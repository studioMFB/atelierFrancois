import * as THREE from '../../../build/three.module.js';

export default class Wall {
    constructor(pPosition, pRotation, pLength, pColour) {
        this.mPosition = pPosition;
        this.mRotation = pRotation;
        this.mLength = pLength;
        this.mColour = pColour;

    }

    getPosition() {
        return this.mPosition;
    }
    getMesh() {
        return this.mMesh;
    }
    // getGeometry() {
    //     return this.mGeometry;
    // }
    getNormal() {
        return this.mPlane.normal;
    }
    getPlane(){
        return this.mPlane;
    }

    draw() {
        const geometry = new THREE.PlaneGeometry(this.mLength, this.mLength);
        const material = new THREE.MeshBasicMaterial({
            color: this.mColour,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0,//0,// 0.3, TO HELP DEBUG THE DRONES' STEERING
        });
        this.mMesh = new THREE.Mesh(geometry, material);
        this.mMesh.position.copy(this.mPosition);
        this.mMesh.rotation.x = this.mRotation.x;
        this.mMesh.rotation.y = this.mRotation.y;
        this.mMesh.rotation.z = this.mRotation.z;


        // There's an object in the scene - myObject - and
        // I want to take its rotation and make my plane
        // have the same rotation.
        // const rotation = this.mMesh.quaternion.clone();

        // let defaultNormal = new THREE.Vector3(0, 1, 0);
        // const distance = this.mLength;
        // this.mPlane = new THREE.Plane(defaultNormal, distance);
        this.mPlane = new THREE.Plane(this.mPosition.clone().normalize(), 0);

        // this.mPlane.normal.set(0, 0, 1).applyQuaternion(rotation);

        return this.mMesh;
    }
}