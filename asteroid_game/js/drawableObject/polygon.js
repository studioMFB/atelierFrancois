class Polygon {
        constructor(pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumberSegments, pRadius) {
        
        this.setFillColour(pFillColour);
        this.setStrokeColour(pStrokeColour);
        this.mLineThickness = pLineThickness;
        this.mLineJoin = pLineJoin;
        
        this.mVectors = pVectors;  

        this.mNumberSegments = pNumberSegments;
        this.setRadius(pRadius);

        this.mCenterX = 0;
        this.mCenterY = 0;
        //this.mCenterX = pCenterX;
        //this.mCenterY = pCenterY;
    
    }
    getVectorAtIndex(pIndex) {
        return this.mVectors[pIndex];
    }
    setFillColour(pFillColour){
        this.mFillColour = pFillColour;
   }
   setStrokeColour(pStrokeColour){
        this.mStrokeColour = pStrokeColour;
    }
    getRadius(){
        return this.mRadius;
    }
    setRadius(pRadius){
         this.mRadius = pRadius;
    }
 
    draw(pContext) {
        pContext.beginPath();
        //
        if(this.mVectors == null){
            this.drawPolygon(pContext);
        }
        else {
            this.drawComplexShape(pContext);
        }
        //
        pContext.closePath();

        if(this.mFillColour != null) {
            pContext.fillStyle = this.mFillColour;

            pContext.fill();
        }
        if(this.mStrokeColour != null) {
            pContext.strokeStyle = this.mStrokeColour;
            pContext.lineWidth = this.mLineThickness;
            pContext.lineJoin = this.mLineJoin;
    
            pContext.stroke(); 
        }
    }

    drawPolygon(pContext) {
        var i, x, y, angle, anglePerSegment;
  
        // numSegments determines the shape of our polygon
        anglePerSegment = Math.PI * 2 / this.mNumberSegments; 

        //pContext.beginPath();

        for (i = 0; i <= this.mNumberSegments; i = i + 1) {

            angle = anglePerSegment * i;
            x = this.mCenterX + this.getRadius() * Math.cos(angle);
            y = this.mCenterY + this.getRadius() * Math.sin(angle);

            if (i == 0) {
                pContext.moveTo(x,y);
            }
            else {
                pContext.lineTo(x,y);
            }
        }
        /*
        pContext.closePath();

        if(this.mFillColour != null) {
            pContext.fillStyle = this.mFillColour;

            pContext.fill();
        }
        if(this.mStrokeColour != null) {
            pContext.strokeStyle = this.mStrokeColour;
            pContext.lineWidth = this.mLineThickness;
            pContext.lineJoin = this.mLineJoin;
    
            pContext.stroke(); 
        }
        */
    }

    drawComplexShape(pContext){
        //var i;
     
        //pContext.beginPath();

        this.mVectors.forEach(vector => pContext.lineTo(vector.getX(), vector.getY()));
        /*
        for(i = 0; i < this.mVectors.length; i += 1) {
            if(i == 0) {
                pContext.moveTo(this.mVectors[i].getX(), this.mVectors[i].getY());
            }
            pContext.lineTo(this.mVectors[i].getX(), this.mVectors[i].getY());
        }
        */
       /*
        pContext.closePath();

        if(this.mFillColour != null) {
            pContext.fillStyle = this.mFillColour;

            pContext.fill();
        }
        if(this.mStrokeColour != null) {
            pContext.strokeStyle = this.mStrokeColour;
            pContext.lineWidth = this.mLineThickness;
            pContext.lineJoin = this.mLineJoin;

            pContext.stroke(); 
        }
        */
    }
}