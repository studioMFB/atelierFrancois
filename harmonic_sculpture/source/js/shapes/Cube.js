import * as THREE from '../../../build/three.module.js';

export default class Cube {
    constructor(pTopRightFront, pBottomLeftBack, pWidth, pHeight, pDepth, pPosition, pScale, pWireframe, pColour) {

        this.mTopRightFront = pTopRightFront;
        this.mBottomLeftBack = pBottomLeftBack;

        this.mWidth = pWidth;
        this.mHeight = pHeight;
        this.mDepth = pDepth;
        this.mPosition = pPosition;
        this.mScale = pScale;
        this.mWireframe = pWireframe;
        this.mColour = pColour;

        this.mMesh;
    }

    getName() {
        return this.mName;
    }

    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    getPosition() {
        return this.mPosition;
    }

    setScale(pScale) {
        this.mScale = pScale;
    }
    getScale() {
        return this.mScale;
    }

    getMesh() {
        return this.mMesh;
    }

    getWireFrame() {
        return this.mWireframe;
    }

    setVisible(pVisible) {
        this.mMesh.visible = pVisible;
    }

    draw(pName, pScene) {
        this.mGeometry = new THREE.BoxBufferGeometry(this.mWidth, this.mHeight, this.mDepth);

        this.mMaterial = new THREE.MeshLambertMaterial({
            wireframe: this.mWireframe,
            color: this.mColour,
        });
        // Required For Shadows
        // this.mMaterial = new THREE.MeshPhongMaterial({ 
        //     wireframe: this.mWireframe,
        //     color: this.mColour,
        //     specular: 0x000000,
        //     shininess: 10
        // });

        this.mMesh = new THREE.Mesh(this.mGeometry, this.mMaterial);
        this.mMesh.position.copy(this.mPosition);
        // this.mMesh.scale.set(this.mScale);
        // this.mMesh.castShadow = true;
        // this.mMesh.receiveShadow = true;

        this.mName = pName;
        this.mMesh.name = this.mName;

        // pScene.add(this.mMesh);

        return this.mMesh;
    }

    rotate(pDeltaTime) {
        const speed = 0.5 * pDeltaTime;

        this.mMesh.rotation.x -= speed * 2;
        this.mMesh.rotation.y -= speed;
        this.mMesh.rotation.z -= speed * 3;
    }
}