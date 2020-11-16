class GeometryNode extends SceneGraphNode{
    constructor(pDrawableObject, pTag){
        super(pTag);
        this.mType = "GeometryNode";
        this.SetDrawableObject(pDrawableObject);
    }
    SetDrawableObject(pDrawableObject) {
        this.mDrawableObject = pDrawableObject;
    }
    GetDrawableObject() {
        return this.mDrawableObject
    }
 }