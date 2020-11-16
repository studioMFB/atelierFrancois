class TransformNode extends GroupNode {
    constructor(pLocalMatrix, pTag) {
        super(pTag);
        this.mType = "TransformNode";
        this.mTransform = pLocalMatrix;
    }
    getTransform() {
        return this.mTransform
    } 
    setTransform(pTransform) {
        this.mTransform = pTransform;
    }
}