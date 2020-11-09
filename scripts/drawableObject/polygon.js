class Polygon {
    //constructor(pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius, pCenterX, pCenterY) {
        constructor(pFillColour, pStrokeColour, pLineThickness, pLineJoin, pVectors, pNumSegments, pRadius) {
        
        this.mFillColour = pFillColour;
        this.mStrokeColour = pStrokeColour;
        this.mLineThickness = pLineThickness;
        this.mLineJoin = pLineJoin;
        
        this.mVectors = pVectors;  

        this.mNumSegments = pNumSegments;
        this.mRadius = pRadius;
        this.mCenterX = 0;
        this.mCenterY = 0;
        //this.mCenterX = pCenterX;
        //this.mCenterY = pCenterY;
    
    }
 
    draw(pContext) {
            if(this.mVectors == null){
                this.drawPolygon(pContext);
        }
        else {
            this.drawShape(pContext);
        }
}

    drawPolygon(pContext) {
        var x, y, angle, anglePerSegment, i;

        pContext.fillStyle = this.mFillColour;
        pContext.strokeStyle = this.mStrokeColour;
        pContext.lineWidth = this.mLineThickness;
        pContext.lineJoin = this.mLineJoin;
  
        // numSegments determines the shape of our polygon
        anglePerSegment = Math.PI * 2 / this.mNumSegments; 

        pContext.beginPath();

        for (i = 0; i <= this.mNumSegments; i = i + 1) {
            angle = anglePerSegment * i;
            x = this.mCenterX + this.mRadius * Math.cos(angle);
            y = this.mCenterY + this.mRadius * Math.sin(angle);
            if (i == 0) {
                pContext.moveTo(x,y);
            }else {
                pContext.lineTo(x,y);
            }
        }
        pContext.closePath();
        if(this.mFillColour != null) {
            pContext.fill();
        }
        if(this.mStrokeColour != null) {
            pContext.stroke(); 
        }
    }

    drawShape(pContext){
        var i;
        pContext.fillStyle = this.mFillColour;
        pContext.strokeStyle = this.mStrokeColour;
        pContext.lineWidth = this.mLineThickness;
        pContext.lineJoin = this.mLineJoin;

        pContext.beginPath();

        this.mVectors.forEach(vector => pContext.lineTo(vector.getX(), vector.getY()));
        /*
        for(i = 0; i < this.mVectors.length; i += 1) {
            if(i == 0) {
                pContext.moveTo(this.mVectors[i].getX(), this.mVectors[i].getY());
            }
            pContext.lineTo(this.mVectors[i].getX(), this.mVectors[i].getY());
        }
        */
        pContext.closePath();

        if(this.mFillColour != null) {
            pContext.fill();
        }
        if(this.mStrokeColour != null) {
            pContext.stroke(); 
        }
    }

    update() {
        
    }

}