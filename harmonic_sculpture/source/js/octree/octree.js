import * as THREE from '../../../build/three.module.js';

import BoundaryBox from '../octree/boundaryBox.js';

const N = 0.1; // Default value of a position outside the boundaries

const TOP_RIGHT_FRONT = 0;
const TOP_LEFT_FRONT = 1;
const BOTTOM_LEFT_FRONT = 2;
const BOTTOM_RIGHT_FRONT = 3;
const TOP_RIGHT_BACK = 4;
const TOP_LEFT_BACK = 5;
const BOTTOM_LEFT_BACK = 6;
const BOTTOM_RIGHT_BACK = 7;


let _id = 0; // each Boundary Box gets a unique ID.
export default class Octree {
    // Always pTopRightFront > pBottomLeftBack
    constructor(pScene, pMargin, pTopRightFront, pBottomLeftBack) {
        this.mScene = pScene;
        // (-N,-N,-N) represents a position outside the boundaries
        const defaultPoint = new THREE.Vector3(N, N, N);
        this.mPointNodePosition = defaultPoint;
        this.mTopRightFront = defaultPoint;
        this.mBottomLeftBack = defaultPoint;

        this.mMargin = pMargin;
        // this.mMinSizeBox = (pMinSizeBox.multiplyScalar(2)).addScalar(1);

        this.mTrees = [];
        //this.mLocationIds = [];
        this.mDronesIndex = [];

        // no vectors pass
        if (!pTopRightFront && !pBottomLeftBack) {
            this.mPointNodePosition = defaultPoint;
        }
        // Only one vector is passed
        // if only pTopRightFront
        else if (pTopRightFront && !pBottomLeftBack) {
            this.mPointNodePosition = pTopRightFront;
        }
        // if only pBottomLeftBack
        else if (pBottomLeftBack && !pTopRightFront) {
            this.mPointNodePosition = pBottomLeftBack;
        }
        // Both vectors pass
        else {
            // Use to construct Octree with boundaries defined
            if (pTopRightFront.x < pBottomLeftBack.x || pTopRightFront.y < pBottomLeftBack.y || pTopRightFront.z < pBottomLeftBack.z) {
                return;
            }

            this.mPointNodePosition = null;
            this.mTopRightFront = pTopRightFront;
            this.mBottomLeftBack = pBottomLeftBack;

            this.createNewBoundaryBox();

            for (let i = TOP_RIGHT_FRONT; i <= BOTTOM_RIGHT_BACK; ++i) {
                this.mTrees[i] = new Octree(this.mScene, this.mMargin);
            }
        }
    }

    getPointNodePosition() {
        return this.mPointNodePosition;
    }
    getBoundaryBox() {
        return this.mBoundaryBox;
    }
    getTrees() {
        return this.mTrees;
    }
    setDebug(pIsDebug) {
        this.mDebug = pIsDebug;
        if (this.mDebug) this.mBoundaryBox.showBoundaries();
    }

    resetCorners(pTopRightFront, pBottomLeftBack) {
        this.mTopRightFront = pTopRightFront;
        this.mBottomLeftBack = pBottomLeftBack;
    }

    /*
     * Add a point to the tree.
     * pPoint is the position of a drone => drone.position
     */
    addPoint(pDebug, pCurrentPoint, pPointIndex) {
        // If the point is outside the boundaries,
        // don't add it.
         if (!this.isWithinBoundaries(pCurrentPoint, pPointIndex)) {
            return this.mDronesIndex = []; // false;
        }

        // If the point is already in the octree,
        // don't add it.
        if (this.findPoint(pCurrentPoint, pPointIndex)[0]) {
            return this.mDronesIndex;
        }

        const middle = this.findMiddleOfBin();
        const index = this.findPositionIndex(pCurrentPoint, middle);

        // If internal node add and return
        // if (this.addPointIfInternalBinFound(pPoint)) {
        //     return;
        // }
        if (!this.mTrees[index].getPointNodePosition()) { // False if null
            this.mDronesIndex = this.mTrees[index].addPoint(pDebug, pCurrentPoint, pPointIndex);
            // this.addDroneIndex(pPointIndex);
            return this.mDronesIndex;
        }
        // If empty bin
        else if (this.mTrees[index].getPointNodePosition().x == N) {
            this.mDronesIndex = [];
            this.mBoundaryBox.removeFromScene();
            this.mTrees[index] = new Octree(this.mScene, this.mMargin, pCurrentPoint);
            this.addDroneIndex(pPointIndex);
            return this.mDronesIndex;
        } else {

            let corner1, corner2;
            // +n to middle for corner1 => so it is > corner2
            const n = 0;
            switch (index) {
                case TOP_RIGHT_FRONT:
                    corner1 = this.mTopRightFront;
                    corner2 = middle;
                    break;
                case TOP_LEFT_FRONT:
                    corner1 = new THREE.Vector3(middle.x + n, this.mTopRightFront.y, this.mTopRightFront.z);
                    corner2 = new THREE.Vector3(this.mBottomLeftBack.x, middle.y, middle.z);
                    break;
                case BOTTOM_LEFT_FRONT:
                    corner1 = new THREE.Vector3(middle.x + n, middle.y + n, this.mTopRightFront.z);
                    corner2 = new THREE.Vector3(this.mBottomLeftBack.x, this.mBottomLeftBack.y, middle.z);
                    break;
                case BOTTOM_RIGHT_FRONT:
                    corner1 = new THREE.Vector3(this.mTopRightFront.x, middle.y + n, this.mTopRightFront.z);
                    corner2 = new THREE.Vector3(middle.x, this.mBottomLeftBack.y, middle.z);
                    break;
                case TOP_RIGHT_BACK:
                    corner1 = new THREE.Vector3(this.mTopRightFront.x, this.mTopRightFront.y, middle.z + n);
                    corner2 = new THREE.Vector3(middle.x, middle.y, this.mBottomLeftBack.z);
                    break;
                case TOP_LEFT_BACK:
                    corner1 = new THREE.Vector3(middle.x + n, this.mTopRightFront.y, middle.z + n);
                    corner2 = new THREE.Vector3(this.mBottomLeftBack.x, middle.y, this.mBottomLeftBack.z);
                    break;
                case BOTTOM_LEFT_BACK:
                    corner1 = new THREE.Vector3(middle.x + n, middle.y + n, middle.z + n);
                    corner2 = this.mBottomLeftBack;
                    break;
                case BOTTOM_RIGHT_BACK:
                    corner1 = new THREE.Vector3(this.mTopRightFront.x, middle.y + n, middle.z + n);
                    corner2 = new THREE.Vector3(middle.x, this.mBottomLeftBack.y, this.mBottomLeftBack.z);
                    break;
            }

            this.mBoundaryBox.removeFromScene(); // Remove wireFrame debug box
            //this.mDronesIndex = [];

            // TO DEBUG!!!
            //const size = this.checkBoundaryBoxSizeAgainstMin();
            this.mTrees[index] = new Octree(this.mScene, this.mMargin, corner1, corner2);

            // let w = (this.mTopRightFront.x - this.mBottomLeftBack.x);
            // let h = (this.mTopRightFront.y - this.mBottomLeftBack.y);
            // let d = (this.mTopRightFront.z - this.mBottomLeftBack.z);
            // // new size cannot be smaller than minimum
            // if (w <= this.mMinSizeBox || h <= this.mMinSizeBox || d <= this.mMinSizeBox) {
            //     this.mTrees[index] = new Octree(this.mScene, this.mMinSizeBox, corner1, corner2);
            // }
            // else{
            //     const size = new THREE.Vector3(w,h,d);
            //     this.mTrees[index] = new Octree(this.mScene, size, corner1, corner2);
            // }

            this.mDronesIndex = this.mTrees[index].addPoint(pDebug, pCurrentPoint, pPointIndex);
            this.addDroneIndex(pPointIndex);
            this.mTrees[index].setDebug(pDebug);
            //if (this.mDronesIndex.length > 2) {
            return this.mDronesIndex;
            // }
        }
    }

    // Return True if the pPoint exists in the octree
    // Return current location ID.
    findPoint(pPoint, pPointIndex) {
        // const r = 1000;
        // const l = 0;
        // if (pPoint.x >= (r - this.mMargin.x) || pPoint.x <= (l + this.mMargin.x) ||
        //     pPoint.y >= (r - this.mMargin.y) || pPoint.y <= (l + this.mMargin.y) ||
        //     pPoint.z >= (r - this.mMargin.z) || pPoint.z <= (l + this.mMargin.z)) {
        //     return [false, this.mDronesIndex = []];
        // }
        // if (this.mTopRightFront.x == N ||!this.isWithinBoundaries(pPoint, pPointIndex)) {
        if (!this.isWithinBoundaries(pPoint, pPointIndex)) {
            return [false, this.mDronesIndex = []];
        }

        const middle = this.findMiddleOfBin();
        const index = this.findPositionIndex(pPoint, middle);

        this.addDroneIndex(pPointIndex);
        //this.mLocationIds.push(index);
        // If internal node add and return
        // if (this.addPointIfInternalBinFound(pPoint)) {
        //     return;
        // }
        if (!this.mTrees[index].getPointNodePosition()) { // False if null
            this.mBoundaryBox.removeFromScene();
            this.removeDroneIndex(pPointIndex);
            return this.mTrees[index].findPoint(pPoint, pPointIndex);
        }
        // If empty bin
        else if (this.mTrees[index].getPointNodePosition().x == N) {
            this.mBoundaryBox.removeFromScene();
            this.removeDroneIndex(pPointIndex);
            return [false, this.mDronesIndex = []];
        } else {
            // If found node
            if (this.mTrees.length > 0 && pPoint.x == this.mTrees[index].getPointNodePosition().x) {
                if (pPoint.y == this.mTrees[index].getPointNodePosition().y) {
                    if (pPoint.z == this.mTrees[index].getPointNodePosition().z) {
                        return [true, this.mDronesIndex];
                    }
                }
            }
        }
        this.mBoundaryBox.removeFromScene();
        this.removeDroneIndex(pPointIndex);
        return false;
    }

    // delete(pIndex){
    //     // const middle = this.findMiddleOfBin();
    //     // const index = this.findPositionIndex(pPoint, middle);

    //     // this.mBoundaryBox.removeFromScene(); // Remove wireFrame debug box
    //     // this.mTrees.splice(pIndex, 1);
    // }

    /*
     * Return true if an internal bin is found
     */
    // addPointIfInternalBinFound(pPoint, pPointIndex){
    //     // pPointNodePosition is declare null when a new bin is created
    //     if (!this.mTrees[index].getPointNodePosition()) {
    //             this.mTrees[index].add(this.mDebug, pPoint, pPointIndex);
    //         return true;
    //     }
    //     return false;
    // }

    // To avoid duplicates, 
    // do not add the index if already in the array.
    addDroneIndex(pPointIndex) {
        if (!this.mDronesIndex.includes(pPointIndex)) {
            this.mDronesIndex.push(pPointIndex);
        }
    }
    removeDroneIndex(pPointIndex) {
        // If not found, remove DronesIndex
        // First check if it is in the array
        if (this.mDronesIndex.includes(pPointIndex)) {
            const index = this.mDronesIndex.indexOf(pPointIndex); // Get index of this item
            this.mDronesIndex.splice(index, 1);
        }
    }

    /*
     * Return false if the point is out of bound
     */
    isWithinBoundaries(pPoint, pPointIndex) {
        // Margin determines how closes to the edges a point can go
        // before being flagged as being outside the boundaries.
        //let margin = this.mMargin.clone();
        //margin = (margin.multiplyScalar(2)).addScalar(1);

        // Margin must only be applied to the most outer box.
        //if (this.mBoundaryBox.getName() ==  "BoundaryBox_0_mesh" ) margin = 10;

        if (pPoint.x > (this.mTopRightFront.x - this.mMargin.x) || pPoint.x < (this.mBottomLeftBack.x + this.mMargin.x) ||
            pPoint.y > (this.mTopRightFront.y - this.mMargin.y) || pPoint.y < (this.mBottomLeftBack.y + this.mMargin.y) ||
            pPoint.z > (this.mTopRightFront.z - this.mMargin.z) || pPoint.z < (this.mBottomLeftBack.z + this.mMargin.z)) {
            this.mBoundaryBox.removeFromScene();
            this.removeDroneIndex(pPointIndex);
            return false;
        }
        return true;
    }

    /*
     * Binary search to insert the point // also used in find() => MOVE to own FUNC
     */
    findMiddleOfBin() {
        let middle = this.calculateBoundaryBoxSize();
        middle = middle.divideScalar(2);

        // const x = (this.mTopRightFront.x + this.mBottomLeftBack.x) * 0.5;
        // const y = (this.mTopRightFront.y + this.mBottomLeftBack.y) * 0.5;
        // const z = (this.mTopRightFront.z + this.mBottomLeftBack.z) * 0.5;
        // const middle = new THREE.Vector3(x, y, z);

        return middle;
    }

    /*
     * Deciding the position where to move // also used in add() => MOVE to own FUNC
     */
    findPositionIndex(pPoint, pMiddle) {
        let index = -1; // default value set outside the boundaries

        if (pPoint.x >= pMiddle.x) { // RIGHT
            if (pPoint.y >= pMiddle.y) { // TOP
                if (pPoint.z >= pMiddle.z) { // FRONT
                    index = TOP_RIGHT_FRONT;
                } else { // BACK
                    index = TOP_RIGHT_BACK;
                }
            } else { // BOTTOM
                if (pPoint.z >= pMiddle.z) { // FRONT
                    index = BOTTOM_RIGHT_FRONT;
                } else { // BACK
                    index = BOTTOM_RIGHT_BACK;
                }
            }
        } else { // LEFT
            if (pPoint.y >= pMiddle.y) { // TOP
                if (pPoint.z >= pMiddle.z) { // FRONT
                    index = TOP_LEFT_FRONT;
                } else {
                    index = TOP_LEFT_BACK;
                }
            } else { // BOTTOM
                if (pPoint.z >= pMiddle.z) { // FRONT
                    index = BOTTOM_LEFT_FRONT;
                } else { // BACK
                    index = BOTTOM_LEFT_BACK;
                }
            }
        }

        return index;
    }

    /*
     * Boundary Box may not always be a cube.
     * Therefore, we must calculate width, height, depth.
     */
    calculateBoundaryBoxSize() {
        // let w = (this.mTopRightFront.x - this.mBottomLeftBack.x);
        // let h = (this.mTopRightFront.y - this.mBottomLeftBack.y);
        // let d = (this.mTopRightFront.z - this.mBottomLeftBack.z);
        // const size = new THREE.Vector3(w, h, d);

        const size = (this.mTopRightFront.sub(this.mBottomLeftBack)).clone();
        return size;
    }
    checkBoundaryBoxSizeAgainstMin() {
        let size = this.calculateBoundaryBoxSize();

        // if (size.x == 62.5) {
        //     const stop = true;
        // }

        // min size is the margin x 2 + 1
        //const min = (this.mMargin.clone().multiplyScalar(2)).addScalar(1);
        const min = (this.mMargin.clone().multiplyScalar(3));


        // new size cannot be smaller than minimum
        if (size.x < min.x) {
            size.x = min.x;
        }
        if (size.y < min.y) {
            size.y = min.y;
        }
        if (size.z < min.z) {
            size.z = min.z;
        }

        return size;
    }

    createNewBoundaryBox() {
        const size = this.checkBoundaryBoxSizeAgainstMin();
        this.mBoundaryBox = new BoundaryBox(_id++, this.mDebug, this.mScene, size, this.mTopRightFront, this.mBottomLeftBack);
    }


    // testOctree() {
    //     const range1 = new THREE.Vector3(1, 1, 1);
    //     const range2 = new THREE.Vector3(5, 5, 5);
    //     // const range1 = new THREE.Vector3(1,1,1);
    //     // const range2 = new THREE.Vector3(4,4,4);
    //     let tree = new Octree(this.mDebug, range1, range2);

    //     const point1 = new THREE.Vector3(1, 2, 3);
    //     const point2 = new THREE.Vector3(6, 5, 5);
    //     // const point1 = new THREE.Vector3(3,3,3);
    //     // const point2 = new THREE.Vector3(3,3,4);
    //     tree.add(point1);
    //     tree.add(point1);
    //     tree.add(point2);
    //     (tree.find(point1)) ? console.log("Found"): console.log("Not found");

    //     const point3 = new THREE.Vector3(3, 4, 4);
    //     // const point3 = new THREE.Vector3(3,4,4);

    //     (tree.find(point3)) ? console.log("Found"): console.log("Not found");
    //     tree.add(point3);
    //     (tree.find(point3)) ? console.log("Found"): console.log("Not found");
    // }

}