import * as THREE from '../../../build/three.module.js';

export default class BoxContainer {
    constructor(pPosition, pWidth, pHeight, pDepth, pColour) {
        this.mPosition = pPosition;
        this.mWidth = pWidth;
        this.mHeight = pHeight;
        this.mDepth = pDepth;
        this.mColour = pColour;
        this.mMesh;
        this.mBox;
        this.mMaterial;
    }

    getPosition(){
        return this.mPosition;
    }
    getMesh() {
        return this.mMesh;
    }
    getBox(){
        return this.mBox;
    }
    // getMaterial(){
    //     return this.mMaterial;
    // }

    draw() {
        const geometry = new THREE.BoxGeometry(this.mWidth, this.mHeight, this.mDepth, 10, 10, 10);
        this.mMaterial = new THREE.MeshLambertMaterial({
            color: this.mColour,
            transparent: true,
            opacity: 0,//0.2,
            wireframe: false,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        this.mMesh = new THREE.Mesh(geometry, this.mMaterial);
        this.mMesh.position.copy(this.mPosition);
        // this.mMesh.rotation.x -= 100;
        // this.mMesh.rotation.y -= 70;


        /////////////////////////////////////////////////
        // const box = new THREE.Box3();
        // const mesh = new THREE.Mesh(
        //     new THREE.SphereGeometry(),
        //     new THREE.MeshBasicMaterial()
        // );
        // // ensure the bounding box is computed for its geometry
        // // this should be done only once (assuming static geometries)
        // mesh.geometry.computeBoundingBox();

        this.mBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        this.mBox.setFromObject(this.mMesh);
        /////////////////////////////////////////////////

        return this.mMesh;
    }
}