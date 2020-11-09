class ShootingStar {
    constructor(pRootSceneGraphNode, pPosition, pIndex) {
        this.setRootSceneGraphNode(pRootSceneGraphNode);
        this.initialiseSceneGraph();

        this.setPosition(pPosition);
        this.mTranslationSceneGraphNode

        this.mIndex = pIndex;
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
    initialiseSceneGraph() {
        var object, rotationSceneGraphNode, rotationMatrix;

        this.mTranslationSceneGraphNode = this.getRootSceneGraphNode();

        rotationMatrix = Matrix.createRotation(-Math.PI / 4);
        rotationSceneGraphNode = new SceneGraphNode(rotationMatrix);
        this.mTranslationSceneGraphNode.addChild(rotationSceneGraphNode);

        var shootingStarLength = Math.floor(Math.random() * 21);
        // (pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius)
        object = new Polygon(null, "#FFFFFF", 0.5, "round", null, 2, shootingStarLength);
        rotationSceneGraphNode.addChild(object);
    }

    draw() {
    }

    update() {
        this.mTranslationSceneGraphNode.setLocalMatrix(this.newTranslationMatrix());
    }
    newTranslationMatrix() {
        var x, y, limitMin, limitMax;//limit; //limitX, limitY;

        x = this.getPosition().getX();
        y = this.getPosition().getY();

        limitMin = -2000;
        limitMax = 300;

        if((x < limitMin || y < limitMin) || (x > limitMax || y > limitMax)){
            //if(x > limit || y > limit){
                x = Math.floor(Math.random() * -1000);
            y = Math.floor(Math.random() * -1000);
        }

        if(this.mIndex %2 == 0){
            x += 1;
            y -= 1;
        }
        else {
            x += 2;
            y -= 2;
        }

        this.getPosition().setX(x);
        this.getPosition().setY(y);

        var translationMatrix = Matrix.createTranslation(this.getPosition());
        return translationMatrix;
    }
}
