class Background {
    constructor(pRootSceneGraphNode, pCanvas, pPosition) {
        this.mCanvas = pCanvas;
        
        this.setPosition(pPosition);

        this.setRootSceneGraphNode(pRootSceneGraphNode);
        this.initialiseSceneGraph();
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
        var i, rootSceneGraphNode, object, translationSceneGraphNode, translationMatrix,
         rotationSceneGraphNode, rotationMatrix;
               
        rootSceneGraphNode = this.getRootSceneGraphNode();

        translationMatrix = Matrix.createTranslation(this.getPosition());
        translationSceneGraphNode = new SceneGraphNode(translationMatrix);
        rootSceneGraphNode.addChild(translationSceneGraphNode);

        rotationMatrix = Matrix.createRotation(Math.PI/4);
        rotationSceneGraphNode = new SceneGraphNode(rotationMatrix);
        translationSceneGraphNode.addChild(rotationSceneGraphNode);

        object = new Polygon( "#345789", null, null, null, null, 4 , 570);
        rotationSceneGraphNode.addChild(object);

        //

        var numOfStars = 100;
        for(i = 0; i < numOfStars; i += 1) {
            var x = Math.floor(Math.random() * -1000); 
            var y = Math.floor(Math.random() * -1000); 
            var newVector = new Vector(x, y, 1);
            translationMatrix = Matrix.createTranslation(newVector);
            translationSceneGraphNode = new SceneGraphNode(translationMatrix);
            rootSceneGraphNode.addChild(translationSceneGraphNode);

            object = new ShootingStar(translationSceneGraphNode, newVector, i);
            translationSceneGraphNode.addChild(object);
        }
        
        /*
        translationMatrix = Matrix.createTranslation(this.getPosition());
        translationSceneGraphNode = new SceneGraphNode(translationMatrix);
        rootSceneGraphNode.addChild(translationSceneGraphNode);

        var shootingStar = new ShootingStar(rootSceneGraphNode, this.mCanvas);
        translationSceneGraphNode.addChild(shootingStar);

        vectors = this.canvasVectorsCoordinates();
        object = new Polygon(null, "#000000", null, 0.5, "round", vectors);
        translationSceneGraphNode.addChild(object);
        */
    }

    draw() {
    }
    update() {
    }

    canvasVectorsCoordinates() {
        var width, height, a, b, c, d;
        var vectors = [];

        width = this.mCanvas.width;
        height = this.mCanvas.height;

        a = new Vector(width, 0, 1);
        b = new Vector(width, height, 1);
        c = new Vector(0, height,1);
        d = new Vector(0, 0, 1);

        return vectors = [a, b, c, d];
    }
    
}
   


