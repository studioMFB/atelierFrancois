class AnimatedSpriteSheet {
    constructor(pContext, pPosition, pRotation, pScale, pImage, pNumFrames, pFrameSizeX, pFrameSizeY) { 
        this.mContext = pContext;
        this.mImage = pImage;
        this.mNumFrames = pNumFrames;
        this.mFrameSizeX = pFrameSizeX;
        this.mFrameSizeY = pFrameSizeY;

        this.mFrameIndex = 0;
        //this.mUpdateCounter = 0;
        //this.mUpdateLimit = 650;

        this.mLastTime = Date.now();

        this.setPosition(pPosition);
        this.setRotation(pRotation);
        this.setScale(pScale);
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
    getScale() {
        return this.mScale;
    }
    setScale(pScale) {
        this.mScale = pScale;
    }
    
    draw(pWorldMatrix) {
        var translate, scale, transform, rotation;
        
        translate = Matrix.createTranslation(this.getPosition());
        rotation = Matrix.createRotation(this.getRotation());
        scale = Matrix.createScale(this.getScale());
        transform = pWorldMatrix.multiply(translate.multiply(rotation.multiply(scale)));
        
        transform.setTransform(this.mContext);

        this.drawAnimatedSprite(this.mContext);

        pWorldMatrix.setTransform(this.mContext);
    }    

    drawAnimatedSprite() {       
             
        var frameX, frameY, frameWidth, frameHeight;
        
        // Dims of our finale anime
        frameWidth = this.mFrameSizeX; 
        frameHeight = this.mFrameSizeY;    

        frameX =  this.mFrameIndex * frameWidth;
        frameY = 0;    

        this.mContext.drawImage(this.mImage, frameX, frameY, this.mFrameSizeX, this.mFrameSizeY,
            0, 0, frameWidth, frameHeight);
    }
    
    update() {
        var thisTime, deltaTime, delay;
        var x, y, velocityX, velocityY;

        //Move with velocity x/y
        //this.getPosition().getX() += velocityX * pDeltaTime;
        //this.getPosition().getY() += velocityY * pDeltaTime;

        /*
        if(this.mUpdateCounter < this.mUpdateLimit) {
            this.mUpdateCounter += 1;
            var newRotation = this.getRotation() + (this.getRotation() * (pDeltaTime/2000));
            this.setRotation(newRotation);
        }
        */

        thisTime = Date.now();
        deltaTime = thisTime - this.mLastTime;

        delay = 100;
       
            if (deltaTime >= delay) {
                if (this.mFrameIndex > this.mNumFrames) {
                    this.mFrameIndex = 0;
                }
                else {
                    this.mFrameIndex += 1;
                }
            
                if ((deltaTime - delay) > delay){
                    this.mLastTime = thisTime;
                } 
                else {
                this.mLastTime += delay;
                }
            }
    }
}

