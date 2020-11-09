class Asteroid {
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
        var rootSceneGraphNode, translationMatrix, translationSceneGraphNode,
        rotationSceneGraphNode, rotationMatrix, object;
        var vectors = [];
        
        rootSceneGraphNode = this.getRootSceneGraphNode();

        translationMatrix = Matrix.createTranslation(this.getPosition());
        this.mTranslationSceneGraphNode = new SceneGraphNode(translationMatrix);
        rootSceneGraphNode.addChild(this.mTranslationSceneGraphNode);
        
        rotationMatrix = Matrix.createRotation(this.getRotation());
        this.mRotationSceneGraphNode = new SceneGraphNode(rotationMatrix);
        this.mTranslationSceneGraphNode.addChild(this.mRotationSceneGraphNode);

        vectors = [new vectors(1, 1, 1)];
        //pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius, pCenterX, pCenterY
        object = new Polygon(null, "#FFFFFF", 1, null, vectors, 3 , 20, 0, 0);
    
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