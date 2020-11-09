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
        var i, j, x, y, rootSceneGraphNode, object, translationMatrix,
         rotationSceneGraphNode, rotationMatrix;
        
        this.mTranslationSceneGraphNode = this.getRootSceneGraphNode();

        //translationMatrix = Matrix.createTranslation(this.getPosition());
        //translationSceneGraphNode = new SceneGraphNode(translationMatrix);
        //this.mTranslationSceneGraphNode = new SceneGraphNode(translationMatrix);
        //rootSceneGraphNode.addChild(translationSceneGraphNode);
        //rootSceneGraphNode.addChild(this.mTranslationSceneGraphNode);

        rotationMatrix = Matrix.createRotation(-Math.PI / 4);
        rotationSceneGraphNode = new SceneGraphNode(rotationMatrix);
        //rootSceneGraphNode.addChild(rotationSceneGraphNode);
        //translationSceneGraphNode.addChild(rotationSceneGraphNode);
        this.mTranslationSceneGraphNode.addChild(rotationSceneGraphNode);

        var shootingStarLength = Math.floor(Math.random() * 21); 
        // (pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius)
        object = new Polygon(null, "#FFFFFF", 0.5, "round", null, 2, shootingStarLength); //need to generate various lenght
        rotationSceneGraphNode.addChild(object);

        /*
        var numOfStars = 6;
        for(i = 0; i < numOfStars; i += 1) {

            for(j = 0; j < numOfStars/2; j += 1) {
                translationMatrix = Matrix.createTranslation(new Vector(this.mX, this.mY, 1));
                var shootingStarTranslation = new SceneGraphNode(translationMatrix);
                rotationSceneGraphNode.addChild(shootingStarTranslation);
               
                this.mX = Math.floor(Math.random() * 2000); 
                this.mY = Math.floor(Math.random() * 2000); 

                var shootingStarLength = Math.floor(Math.random() * 21); 
                var shootingStar = new Polygon(null, null, "#FFFFFF", 0.5, "round", null, 2, shootingStarLength, 0, 0); //need to generate various lenght
                shootingStarTranslation.addChild(shootingStar);
            }
        }
        */
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

        //limit = 50;

        //limitX = -20;
        //limitY = -200;

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

