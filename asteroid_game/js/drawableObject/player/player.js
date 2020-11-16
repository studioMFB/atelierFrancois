class Player {
//class Player extends Entity {
    constructor(pCanvas, pPosition, pVelocity, pRotation, pRotationRate) { 
        this.mCanvas = pCanvas;
        this.mTag = "Player";    

        this.setPosition(pPosition);
        this.setRotation(pRotation);  
        this.setVelocity(pVelocity);  
        this.setRotationRate(pRotationRate);

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
    setRotationRate(pRotationRate) {
        this.mRotationRate = pRotationRate;
    }
    getRotationRate() {
        return this.mRotationRate;
    }

    initialiseSceneGraph() {
        var translationMatrix, rotationMatrix;
        var vectors, spaceShipBodyObject, spaceShipHeadObject;

        translationMatrix = Matrix.createTranslation(this.getPosition());
        this.mTranslationSceneGraphNode = new TransformNode(translationMatrix, this.mTag); // TransformNode instead + tag
     
        rotationMatrix = Matrix.createRotation(this.getRotation());
        this.mRotationSceneGraphNode = new TransformNode(rotationMatrix, this.mTag);
        this.mTranslationSceneGraphNode.addChild(this.mRotationSceneGraphNode);

        vectors = [new Vector(-7, 12, 1), new Vector(0, -12, 1), new Vector(7, 12, 1)];
        spaceShipBodyObject = new GeometryNode(new Polygon(null, "#FFFFFF", 1, null, vectors), this.mTag);
        this.mRotationSceneGraphNode.addChild(spaceShipBodyObject);

        vectors = [new Vector(-3, -3, 1), new Vector(0, -10, 1), new Vector(3, -3, 1)]
        spaceShipHeadObject = new GeometryNode(new Polygon("#FFFFFF", null, 1, null, vectors), this.mTag);
        this.mRotationSceneGraphNode.addChild(spaceShipHeadObject);

        this.mSpaceShipRocketsFire = new SpaceShipRocketsFire(new Vector(0, -20, 1));
        this.mRotationSceneGraphNode.addChild(this.mSpaceShipRocketsFire.getRootSceneGraphNode());

        this.mSpaceShipLaser = new SpaceShipLaser(this.mCanvas, new Vector(0, -35, 1), (Math.PI /2), new Vector(100, 100, 1));
        this.mRotationSceneGraphNode.addChild(this.mSpaceShipLaser.getRootSceneGraphNode());
        
        this.setRootSceneGraphNode(this.mTranslationSceneGraphNode);
    }

    update(pDeltaTime, pUpPressed, pLeftPressed, pRightPressed, pSpacePressed) {
        var newVelocity;

        newVelocity = this.findPlayersHeadingDirection(pDeltaTime);
       
        if(pLeftPressed) {
            this.rotateLeft(pDeltaTime);
        }
        else if(pRightPressed) {
            this.rotateRight(pDeltaTime);
        } 
        if(pUpPressed) {
            this.moveForward(pDeltaTime, newVelocity);
        }
        
       this.mSpaceShipRocketsFire.update(pUpPressed); // DO I NEED DELTATIME IF ONLY CHANGING THE FILL COLOUR?
       //this.mSpaceShipLaser.update(pDeltaTime, pSpacePressed)
       this.mSpaceShipLaser.update(pDeltaTime, pSpacePressed, this.getRotation());
    }

    findPlayersHeadingDirection(pDeltaTime) {
        var x, y, newVelocity;
        

        this.mCosRotation = Math.cos(this.getRotation());
        this.mSinRotation = Math.sin(this.getRotation());

        x = this.mSinRotation * this.getVelocity().getX();
        y = this.mCosRotation * this.getVelocity().getY();

        //this.mNewVelocity = new Vector(x, -y, 1);
        return newVelocity = new Vector(x, -y, 1);

        //this.moveForward(pDeltaTime, this.mNewVelocity);
        
        // THIS WOULD BE MORE APPROPRIATE!
        // BUT CURRENTLY DOES NOT BEHAVE PROPALLY!!
        //this.mNewVelocity = this.getVelocity().rotate(this.getRotation());
        //this.moveForward(pDeltaTime, new Vector(-this.mNewVelocity.getX(), -this.mNewVelocity.getY(), 1));
    }

    moveForward(pDeltaTime, pNewVelocity) {
        var velocityDelta, newPosition, translationMatrix;

        this.ifPositionOffCanvas();

        velocityDelta = pNewVelocity.multiply(pDeltaTime);
        newPosition = this.getPosition().add(velocityDelta);
        this.setPosition(newPosition);

        translationMatrix = Matrix.createTranslation(this.getPosition());

        this.getRootSceneGraphNode().setTransform(translationMatrix);
    }

    rotateLeft(pDeltaTime) {
        var rotationMatrix, rotationRateDelta, newRotation

        rotationRateDelta = -this.getRotationRate() * pDeltaTime;
        newRotation = this.getRotation() + rotationRateDelta;
        this.setRotation(newRotation);

        rotationMatrix = Matrix.createRotation(this.getRotation());

        this.mRotationSceneGraphNode.setTransform(rotationMatrix);
    }

    rotateRight(pDeltaTime) {
        var rotationMatrix, rotationRateDelta, newRotation

        rotationRateDelta = this.getRotationRate() * pDeltaTime;
        newRotation = this.getRotation() + rotationRateDelta;
        this.setRotation(newRotation);

        rotationMatrix = Matrix.createRotation(this.getRotation());

        this.mRotationSceneGraphNode.setTransform(rotationMatrix);
    }

       // SHOULD BE IN GAME CLASS OR SOMETHING LIKE THAT
    // checks if player is gone outside the canvas bouderies 
    // and reposition it on the opposite side
    ifPositionOffCanvas() {
        if (this.getPosition().getX() < -this.mCanvas.width/2) {
            this.getPosition().setX(this.mCanvas.width/2);
        }
        else if (this.getPosition().getX() > this.mCanvas.width/2) {
            this.getPosition().setX(-this.mCanvas.width/2);
        }
        if (this.getPosition().getY() < -this.mCanvas.height/2) {
            this.getPosition().setY(this.mCanvas.height/2);
        }
        else if (this.getPosition().getY() > this.mCanvas.height/2) {
            this.getPosition().setY(-this.mCanvas.height/2);
        }
    }
}