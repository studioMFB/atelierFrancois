class SceneGraphNode extends RenderVisitor {
    constructor() {

        this.mType = "SceneGraphNode";
    }
    getType() {
        return this.mType;
    }

    accept(pVisitor){
        pVisitor.visit(this);
    }
}
/*
// task 1
class SceneGraphNode {
    constructor(pLocalMatrix) {

    this.mChildren = []; // task 2
    this.setLocalMatrix(pLocalMatrix); // task 1 
    this.mLastTime = Date.now();

    }
    // task 1
    getLocalMatrix() {
        return this.mLocalMatrix;
    }
    setLocalMatrix(pLocalMatrix) {
        this.mLocalMatrix = pLocalMatrix;
    }
    // task 2
    getNumberOfChildren() {
       return this.mChildren.length;
    }
    getChildAt(pIndex) {
        return this.mChildren[pIndex];
    }
    addChild(pChild) {
        this.mChildren.push(pChild);
    }

    getPosition() {
        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }


    // task 3
    draw(pContext, pWorldTransformMatrix) {
        var i, localTransformMatrix, numberOfChildren, child;

        localTransformMatrix = pWorldTransformMatrix.multiply(this.getLocalMatrix());
        localTransformMatrix.setTransform(pContext);

        // task 4
        numberOfChildren = this.getNumberOfChildren();

        for (i = 0; i < numberOfChildren; i += 1 ) {
            child =  this.getChildAt(i);
            child.update();
            child.draw(pContext, localTransformMatrix);
        }

        pWorldTransformMatrix.setTransform(pContext);
    }
    
    newPosition(pWorldMatrix) {
        var x, y, translate, newPosition;

        x = this.getPosition().getX();
        y = this.getPosition().getY();
   
        newPosition = new Vector(x, y, 1);
        this.setPosition(newPosition);
        translate = Matrix.createTranslation(this.getPosition());
        this.mLocalTransformMatrix = pWorldMatrix.multiply(translate);
    }

    moveUp() {
        var y = this.getPosition().getY();
        y -= 200;
        this.getPosition().setY(y);
    }
    moveDown() {
        var y = this.getPosition().getY();
        y += 50;
        this.getPosition().setY(y);
    }
    moveLeft() {
        var rotate = this.getRotation();
        rotate = -Math.PI/4;
        //rotate -= 10;
        this.setRotation(rotate);
    }
    moveRight() {
        var rotate = this.getRotation();
        rotate = Math.PI/3;
        //rotate += 10;
        this.setRotation(rotate);
    }



    update(pDeltaTime) {
        /*
        var x, y, velocityX, velocityY, jumpFrame;
        var thisTime, deltaTime, delay;

        thisTime = Date.now();
        deltaTime = thisTime - this.mLastTime;

        var delay = 1000;
   
        if (pDeltaTime >= delay) {
            jumpFrame = 1;
        }
        else {
            //jumpFrame = 0;
        }
        if ((deltaTime - delay) > delay){
            this.mLastTime = thisTime;
            //jumpFrame = 0;
        } 
        else {
        this.mLastTime += delay;
        jumpFrame = 0;
        }

        return jumpFrame;
        */

        //this.mX = (pDeltaTime * Math.floor(Math.random() * 1501));
        //this.mY = (pDeltaTime * Math.floor(Math.random() * 1501));

        //this.mX += pDeltaTime;
        //this.mY += pDeltaTime;


        //Move with velocity x/y
        //this.getPosition().getX() += velocityX * pDeltaTime;
        //this.getPosition().getY() += velocityY * pDeltaTime;
        /*
        if(this.mUpdateCounter < this.mUpdateLimit) {
            this.mUpdateCounter += 1;
            var newRotation = this.getRotation() + (this.getRotation() * (pDeltaTime/2000));
            this.setRotation(newRotation);
        }
        
    }
}
*/