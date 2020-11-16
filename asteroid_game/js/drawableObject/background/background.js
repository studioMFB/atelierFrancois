class Background {
    constructor(pCanvas, pContext, pPosition) {
        this.mTag = "Background";
        this.mCanvas = pCanvas;
        this.mContext = pContext;

        this.setPosition(pPosition);
        this.initialiseSceneGraph();
    }
    getRootSceneGraphNode() {
        return this.mRootSceneGraphNode;
    }
    setRootSceneGraphNode(pRootSceneGraphNode) {
        this.mRootSceneGraphNode = pRootSceneGraphNode;
    }
    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }

    initialiseSceneGraph() {
        var index, numberOfStars, maxRandomValue, translationSceneGraphNode, translationMatrix,
        rotationSceneGraphNode, rotationMatrix, scaleSceneGraphNode, scaleMatrix;
               
        translationMatrix = Matrix.createTranslation(this.getPosition());
        translationSceneGraphNode = new TransformNode(translationMatrix, this.mTag);

        rotationMatrix = Matrix.createRotation(Math.PI/4);
        rotationSceneGraphNode = new TransformNode(rotationMatrix, this.mTag);
        translationSceneGraphNode.addChild(rotationSceneGraphNode);

        scaleMatrix = Matrix.createScale(new Vector(2, 2, 1));
        scaleSceneGraphNode = new TransformNode(scaleMatrix, this.mTag);
        rotationSceneGraphNode.addChild(scaleSceneGraphNode);

        this.mBackRectangle = new GeometryNode(new Polygon( "#345789", null, null, null, null, 4 , 290), this.mTag);
        scaleSceneGraphNode.addChild(this.mBackRectangle);

        var starTranslationMatrix = Matrix.createTranslation(new Vector(-550,-450, 1)); // To star outside the canvas
        var starTranslationSceneGraphNode = new TransformNode(starTranslationMatrix, this.mTag);
        translationSceneGraphNode.addChild(starTranslationSceneGraphNode);

        this.mShootingStars = [];
        numberOfStars = 30;
        maxRandomValue = 3000;
        for(index = 0; index < numberOfStars; index += 1) {
            var x = Math.floor(Math.random() * maxRandomValue); 
            var y = Math.floor(Math.random() * maxRandomValue);       
         
            var shootingstar = new ShootingStar(this.mCanvas, index, maxRandomValue, new Vector(x, y, 1), (Math.PI / 3), new Vector(50, 50, 1));

            this.mShootingStars.push(shootingstar);
            starTranslationSceneGraphNode.addChild(shootingstar.getRootSceneGraphNode());
        }

            this.setRootSceneGraphNode(translationSceneGraphNode);
    }

    update(pDeltaTime) {
        for(var index = 0; index < this.mShootingStars.length; index += 1) {
            this.mShootingStars[index].setIndex(index);
            this.mShootingStars[index].update(pDeltaTime);
        }
    }
}
   


