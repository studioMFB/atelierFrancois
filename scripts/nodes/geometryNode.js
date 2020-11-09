class GeometryNode extends SceneGraphNode{
    constructor(pDrawableObject, pContext){

        this.mType = "GeometryNode";
        this.mDrawableObject = pDrawableObject;
        this.mContext = pContext;
    }

    visitGeometry(pRenderVisitor) {
        var currentTransformMatrix;
        currentTransformMatrix = pRenderVisitor.peekTransform();
        currentTransformMatrix.setTransform(this.mContext);
        this.mDrawableObject.draw(this.mContext);
    }

 }