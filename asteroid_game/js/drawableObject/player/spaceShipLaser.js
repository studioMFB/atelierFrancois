class SpaceShipLaser {
    //class SpaceShipLaser extends Player{
        constructor(pCanvas, pPosition, pRotation, pVelocity) { 
        this.mCanvas = pCanvas;
        //super("SpaceShipLaser");    
        this.mTag = "SpaceShipLaser";    
        this.mIndex = 0;

        //super(pPosition);
        //super(pRotation);
        //super(pVelocity);
        this.setPosition(pPosition);
        this.setRotation(pRotation);
        this.setVelocity(pVelocity);  

        this.initialiseSceneGraph();    
        //super(initialiseSceneGraph());    
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
    getRotation() {
        return this.mRotation;
    }
    setRotation(pRotation) {
        this.mRotation = pRotation;
    }

    setVelocity(pVelocity) {
        this.mVelocity = pVelocity;
    }
    getVelocity() {
        return this.mVelocity;
    }

    initialiseSceneGraph() {
        var translationMatrix, translationSceneGraphNode, rotationSceneGraphNode, rotationMatrix;

        this.mOriginalPosition = this.getPosition();

        translationMatrix = Matrix.createTranslation(this.getPosition());
        translationSceneGraphNode = new TransformNode(translationMatrix, this.mTag);

        rotationMatrix = Matrix.createRotation(this.getRotation());
        rotationSceneGraphNode = new TransformNode(rotationMatrix, this.mTag);
        translationSceneGraphNode.addChild(rotationSceneGraphNode);

        this.mObject = new GeometryNode(new Polygon(null, null, 1, "round", null, 2, 7), this.mTag);
        //super(object) = new GeometryNode(new Polygon(null, null, 1, "round", null, 2, 7), this.mTag);
        rotationSceneGraphNode.addChild(this.mObject);

        this.setRootSceneGraphNode(translationSceneGraphNode);
    }

    update(pDeltaTime, pLaser, pPlayerRotation) {
        var strokeColour,  newVelocity

        //this.setRotation(pPlayerRotation);
        //newVelocity = this.establishLaserDirection();

        if((pLaser || this.mShootingLaser) && this.mIndex < 10) {
            this.mShootingLaser = true;
            strokeColour = "#FFFFFF";
        }
        else if (this.mIndex < 14){
           strokeColour = null;
        }
        else {
            this.mIndex = 0;
        }
        this.mIndex += 1;

        if (this.mShootingLaser) {
            //this.shootForward(pDeltaTime, newVelocity);
            this.newTranslationMatrix(pDeltaTime);
        }  
      
        this.draw(strokeColour);
    }

    draw(pStrokeColour) {
        this.mObject.GetDrawableObject().setStrokeColour(pStrokeColour);
    }
    /*
    establishLaserDirection() {
        var x, y, newVelocity;

        this.mCosRotation = Math.cos(this.getRotation());
        this.mSinRotation = Math.sin(this.getRotation());

        x = this.mSinRotation * this.getVelocity().getX();
        y = this.mCosRotation * this.getVelocity().getY();

        return newVelocity = new Vector(x, -y, 1);
    }
    shootForward(pDeltaTime, pNewVelocity) {
        var velocityDelta, newPosition, translationMatrix;

        this.ifPositionOffCanvas();

        velocityDelta = this.getVelocity().multiply(pDeltaTime);
        //velocityDelta = pNewVelocity.multiply(pDeltaTime);
        newPosition = this.getPosition().add(velocityDelta);
        this.setPosition(newPosition);

        translationMatrix = Matrix.createTranslation(this.getPosition());

        this.getRootSceneGraphNode().setTransform(translationMatrix);
    }
    */
    newTranslationMatrix(pDeltaTime) {
        var translationMatrix;

        this.ifPositionOffCanvas();

        var newVelocity = new Vector(1, -this.getVelocity().getY(), 1);
        var velocityDelta = newVelocity.multiply(pDeltaTime);

        var newPosition = this.getPosition().add(velocityDelta);
        this.setPosition(newPosition);
        translationMatrix = Matrix.createTranslation(this.getPosition());

       this.getRootSceneGraphNode().setTransform(translationMatrix);
    }

    ifPositionOffCanvas() {
        if (this.getPosition().getX() < -this.mCanvas.width/2) {
            //this.getPosition().setX(this.mCanvas.width/2);
            this.mShootingLaser = false;
            this.setPosition(this.mOriginalPosition);
        }
        else if (this.getPosition().getX() > this.mCanvas.width/2) {
            //this.getPosition().setX(-this.mCanvas.width/2);
            this.mShootingLaser = false;
            this.setPosition(this.mOriginalPosition);
        }
        if (this.getPosition().getY() < -this.mCanvas.height/2) {
            //this.getPosition().setY(this.mCanvas.height/2);
            this.mShootingLaser = false;
            this.setPosition(this.mOriginalPosition);
        }
        else if (this.getPosition().getY() > this.mCanvas.height/2) {
            //this.getPosition().setY(-this.mCanvas.height/2);
            this.mShootingLaser = false;
            this.setPosition(this.mOriginalPosition);
        }
    }

}