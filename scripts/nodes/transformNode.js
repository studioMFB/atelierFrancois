class TransformNode extends GroupNode {
    constructor(pLocalMatrix) {

        this.mType = "TransformNode";
        this.mTransform = pLocalMatrix;
    }
    getTransform() {
        return this.mTransform
    }

    visitTransform(pNode) {
        this.pushTransform(pNode.getTransform());
        this.visitGroup(pNode);
        this.popTransform();
    }
}