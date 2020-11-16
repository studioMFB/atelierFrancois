// VERSION WITH RENDER VISITOR
class SceneGraphNode {//extends RenderVisitor {
    constructor(pTag) {
        this.mTag = pTag;
        this.mType = "SceneGraphNode";
    }
    getType() {
        return this.mType;
    }
    accept(pVisitor){
        pVisitor.visit(this);
    }
}
/*
// WORKING VERSION WITHOUT RENDER VISITOR
class SceneGraphNode {
    constructor(pLocalMatrix) {

    this.mChildren = [];
    this.setLocalMatrix(pLocalMatrix);
    this.mLastTime = Date.now();

    }
    getLocalMatrix() {
        return this.mLocalMatrix;
    }
    setLocalMatrix(pLocalMatrix) {
        this.mLocalMatrix = pLocalMatrix;
    }
    // task 2
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


    draw(pContext, pWorldTransformMatrix, pDeltaTime) {
        var i, localTransformMatrix, numberOfChildren, child;

        localTransformMatrix = pWorldTransformMatrix.multiply(this.getLocalMatrix());
        localTransformMatrix.setTransform(pContext);

        // task 4
        numberOfChildren = this.getNumberOfChildren();

        for (i = 0; i < numberOfChildren; i += 1 ) {
            child =  this.getChildAt(i);
            child.update(pDeltaTime);
            child.draw(pContext, localTransformMatrix);
        }

        pWorldTransformMatrix.setTransform(pContext);
    }
  
    update() {
    }
}
*/