import * as THREE from '../../../build/three.module.js';

export default class Cone {
    constructor(pPosition, pRadius, pHeight, pColour) {
        this.mPosition = pPosition;
        // this.mScale = pScale;
        this.mRadius = pRadius;
        this.mHeight = pHeight;
        this.mMesh;
        this.mBoxAABB;
        this.mMaterial;
        // this.mColour = pColour;

        this.mMaterial = new THREE.MeshPhongMaterial({
            // color: pColour,
            color: 0x3c3d62,
            emissive: 0x000000,
            specular: 0xca49e4,
            flatShading: true,
            shininess: 100,
        });
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
    }
    getPosition() {
        return this.mPosition;
    }

    setScale(pScale) {
        this.mMesh.scale.set(pScale.x, pScale.y, pScale.z);
    }
    setRadius(pRadius) {
        this.mMesh.geometry.radius = pRadius;
    }
    setHeight(pHeight) {
        this.mMesh.geometry.height = pHeight;
    }
    // getHeight() {
    //     return this.mHeight;
    // }

    setColour(pColour) {
        // this.mMaterial.color.setHex(pColour);
        this.mMaterial.specular.setHex(pColour);
    }

    draw(pScene) {
        const geometry = new THREE.ConeGeometry(this.mRadius, this.mHeight, 8);
        // By default the cone point is aligned with the Y axis 
        // which can be fixed by rotating the cone geometry by Math.PI / 2 about X:
        geometry.rotateX(Math.PI / 2);
    
        this.mMesh = new THREE.Mesh(geometry, this.mMaterial);
        this.mMesh.position.copy(this.mPosition);
        this.mMesh.up.set(0, 0, 1);

        // const dir = new THREE.Vector3(1, 2, 0);
        // //normalize the direction vector (convert to vector of length 1)
        // dir.normalize();
        // const origin = this.mPosition;
        // const length = 1;
        // const hex = 0xffff00;
        // const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
        // pScene.add(arrowHelper);

        return this.mMesh;
    }

}