import * as THREE from '../../../build/three.module.js';

export default class BallContainer {
    constructor(pPosition, pRadius, pWidth, pHeight, pColour) {
        this.mPosition = pPosition;
        this.mRadius = pRadius;
        this.mWidth = pWidth;
        this.mHeight = pHeight;
        this.mColour = pColour;
        this.mMesh;
    }

    draw(){
        const geometry = new THREE.SphereGeometry(this.mRadius, this.mWidth, this.Height);
        const material = new THREE.MeshLambertMaterial({
            color: this.mColour,
            transparent: true,
            opacity: 0.2,
            wireframe: false,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });
        this.mMesh = new THREE.Mesh(geometry, material);
        this.mMesh.position.copy(this.mPosition);
        return this.mMesh;
    }
}