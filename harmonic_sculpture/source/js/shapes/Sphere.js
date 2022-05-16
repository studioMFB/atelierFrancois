import * as THREE from '../../../build/three.module.js';

export default class Sphere {
    constructor(pPosition, pRadius, pColour, pOpacity, pVisible) {
        this.mPosition = pPosition;
        // this.mScale = pScale;
        this.mRadius = pRadius;
        this.mMesh;
        this.mMaterial;
        this.mColour = pColour;
        this.mOpacity = pOpacity;
        this.mVisible = pVisible;
    }

    getMeshName() {
        return this.mMesh.name;
    }
    setMeshName(pName) {
        this.mMesh.name = pName;
    }

    setVisible(pVisible) {
        this.mMesh.visible = pVisible;
    }

    setMesh(pMesh) {
        this.mMesh = pMesh
    }
    getMesh() {
        return this.mMesh;
    }

    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    copyPosition(pPosition) {
        this.mMesh.position.copy(pPosition);

        // this.mLine.position.copy(pPosition);

        // this.mGeometry1 .attributes.position.array[0] = pPosition.x;
        // this.mGeometry1 .attributes.position.array[1] = pPosition.y;
        // this.mGeometry1 .attributes.position.array[2] = pPosition.z;
        // const p = pPosition.clone().addScalar(20);
        // this.mGeometry1 .attributes.position.array[3] = p.x;
        // this.mGeometry1 .attributes.position.array[4] = p.y;
        // this.mGeometry1 .attributes.position.array[5] = p.z;
    }
    getPosition() {
        return this.mPosition;
    }

    // setScale(pScale) {
    //     this.mMesh.scale.set(pScale.x, pScale.y, pScale.z);
    // }

    setRadius(pRadius) {
        this.mMesh.geometry.radius = pRadius;
    }

    setColour(pColour) {
        this.mColour = pColour;
    }

    draw() {
        const geometry = new THREE.SphereGeometry(this.mRadius);
        this.mMaterial = new THREE.MeshLambertMaterial({
            color: this.mColour,
            opacity: this.mOpacity,
            visible: this.mVisible,
        });
     
        this.mMesh = new THREE.Mesh(geometry, this.mMaterial);
        this.mMesh.position.copy(this.mPosition);
        // this.mMesh.scale.copy(this.mScale);

        return this.mMesh;
    }

}