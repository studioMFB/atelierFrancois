class Entity {
    constructor(pContext, pRootSceneGraphNode, pPosition, pRotation) { 
        
        this.mContext = pContext;  
        this.setPosition(pPosition);    
        this.setRotation(pRotation);

        this.setRootSceneGraphNode(pRootSceneGraphNode);
        this.initialiseSceneGraph();

        this.mObject;
        this.mTranslationSceneGraphNode;
        this.mRotationSceneGraphNode;
    }
    getRootSceneGraphNode() {
        return this.mRootSceneGraphNode;
    }
    setRootSceneGraphNode(pRootSceneGraphNode) {
        this.mRootSceneGraphNode = pRootSceneGraphNode ;
    }
    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    getRotation() {
        return this.mRotation;
    }
    setRotation(pRotation) {
        this.mRotation = pRotation;
    }

    // TRY VERSION WITH RENDER VISITOR
    initialiseSceneGraph() {
       
    }

    draw() {
    }
    update() {
        this.mRotationSceneGraphNode.setLocalMatrix(this.newRotationMatrix());
    }
    newRotationMatrix() {
        var rotationMatrix = Matrix.createRotation(this.getRotation());
        return rotationMatrix;
    }
    /*
    newTranslationMatrix() {
        var translationMatrix = Matrix.createTranslation(this.getPosition());
        return translationMatrix;
    }
    moveUp() {
        var y = this.getPosition().getY();
        y -= 1;
        this.getPosition().setY(y);
    }
    moveDown() {
        var y = this.getPosition().getY();
        y += 1;
        this.getPosition().setY(y);
    }
    */
    moveLeft() {
        var rotate = this.getRotation();
        rotate -= 0.1;
        this.setRotation(rotate);
    }
    moveRight() {
        var rotate = this.getRotation();
        rotate += 0.1;
        this.setRotation(rotate);
    }

}