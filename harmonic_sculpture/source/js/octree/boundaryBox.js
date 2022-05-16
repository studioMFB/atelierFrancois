import * as THREE from '../../../build/three.module.js';
// Geometry
import Cube from '../shapes/cube.js';

export default class BoundaryBox {
    constructor(pId, pIsDebug, pScene, pDims, pCornerRightTopFront, pCornerLeftBottomBack) {
        this.mId = pId; // -1 by default
        this.mScene = pScene;

        this.mCornerRTF = pCornerRightTopFront;
        this.mCornerLBB = pCornerLeftBottomBack;

        this.mDims = pDims;
        this.mPosition = this.calculatePosition();
        this.mScale = new THREE.Vector3(1, 1, 1); // don't scale
        const wireFrame = true;
        this.mColour = 0xFFE700;
        // this.mCube = new Cube(this.mCornerRTF, this.mCornerLBB, this.mDims.x, this.mDims.y, this.mDims.z, this.mPosition, this.mScale, wireFrame, this.mColour);
        this.mName = "BoundaryBox_" + this.mId + "_mesh";
    }

    setVisible(pVisible) {
        // this.mCube.setVisible(pVisible);
        this.mMesh.visible = pVisible;
    }

    getName() {
        return this.mName;
    }
    getId() {
        return this.mId;
    }
    getCube() {
        return this.mCube;
    }

    getPosition() {
        return this.mPosition;
    }

    removeFromScene() {
        const name = this.mCube.getName();
        const selectedObject = this.mScene.getObjectByName(name);
        this.mScene.remove(selectedObject);
    }

    getCornerLeftBottomBack() {
        return this.mCornerLBB;
    }
    getCornerRightTopFront() {
        return this.mCornerRTF;
    }
    getDims() {
        return this.mDims;
    }

    getGeometry() {
        return this.mCube.getGeometry();
    }
    getMaterial() {
        return this.mCube.getMaterial();
    }

    draw() {
        const geometry = new THREE.BoxGeometry(this.mDims.x, this.mDims.y, this.mDims.z);
        const edges = new THREE.EdgesGeometry(geometry);
        const material = new THREE.LineBasicMaterial({
            color: this.mColour
        });
        this.mMesh = new THREE.LineSegments(edges, material);

        this.mMesh.position.copy(this.mPosition);

        return this.mMesh;


        // return this.mCube.draw(this.mName, this.mScene);
    }

    /* Return indices value between 0 and 1 */
    getCornerIndices(pEntityPosition) {
        let value;

        value = (pEntityPosition.x - this.mCornerLBB.x) / (this.mCornerRTF.x - this.mCornerLBB.x);
        const x = Math.min(Math.max(value, 0.0), 1.0);
        value = (pEntityPosition.y - this.mCornerLBB.y) / (this.mCornerRTF.y - this.mCornerLBB.y);
        const y = Math.min(Math.max(value, 0.0), 1.0);
        value = (pEntityPosition.z - this.mCornerLBB.z) / (this.mCornerRTF.z - this.mCornerLBB.z);
        const z = Math.min(Math.max(value, 0.0), 1.0);

        const indexX = Math.floor(x * (this.mDims.x - 1));
        const indexY = Math.floor(y * (this.mDims.y - 1));
        const indexZ = Math.floor(z * (this.mDims.z - 1));

        const indices = new THREE.Vector3(indexX, indexY, indexZ);
        //return [indexX, indexY, indexZ];
        return indices;
    }

    /*
     * Position is always at the centre of the geometry.
     */
    calculatePosition() {
        const x = (this.mCornerRTF.x + this.mCornerLBB.x) * 0.5;
        const y = (this.mCornerRTF.y + this.mCornerLBB.y) * 0.5;
        const z = (this.mCornerRTF.z + this.mCornerLBB.z) * 0.5;
        const position = new THREE.Vector3(x, y, z);

        return position;
    }

}