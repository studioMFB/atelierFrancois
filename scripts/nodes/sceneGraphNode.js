/*
class SceneGraphNode extends RenderVisitor {
    constructor() {

        this.mType = "SceneGraphNode";
    }
    getType() {
        return this.mType;
    }

    accept(pVisitor){
        pVisitor.visit(this);
    }
}
*/
// task 1
class SceneGraphNode {
    constructor(pLocalMatrix) {

    this.mChildren = []; // task 2
    this.setLocalMatrix(pLocalMatrix); // task 1
    this.mLastTime = Date.now();

    }
    getLocalMatrix() {
        return this.mLocalMatrix;
    }
    setLocalMatrix(pLocalMatrix) {
        this.mLocalMatrix = pLocalMatrix;
    }

    getNumberOfChildren() {
       return this.mChildren.length;
    }
    getChildAt(pIndex) {
        return this.mChildren[pIndex];
    }
    addChild(pChild) {
        this.mChildren.push(pChild);
    }

    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }

    draw(pContext, pWorldTransformMatrix) {
        var i, localTransformMatrix, numberOfChildren, child;

        localTransformMatrix = pWorldTransformMatrix.multiply(this.getLocalMatrix());
        localTransformMatrix.setTransform(pContext);

        numberOfChildren = this.getNumberOfChildren();

        for (i = 0; i < numberOfChildren; i += 1 ) {
            child =  this.getChildAt(i);
            child.update();
            child.draw(pContext, localTransformMatrix);
        }

        pWorldTransformMatrix.setTransform(pContext);
    }

    update(pDeltaTime) {
    }

}
