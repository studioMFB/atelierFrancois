class SpaceShipRocketsFire {
            constructor(pPosition) { 
            this.mTag = "SpaceShipRocketsFire";    
            this.mIndex = 0;
    
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
            var translationMatrix, translationSceneGraphNode
            var vectors;
        
            translationMatrix = Matrix.createTranslation(this.getPosition());
            translationSceneGraphNode = new TransformNode(translationMatrix, this.mTag);
    
            vectors = [new Vector(-5, 35, 1), new Vector(0, 45, 1), new Vector(5, 35, 1)];
            this.mObject = new GeometryNode(new Polygon(null, null, 1, null, vectors), this.mTag);
            translationSceneGraphNode.addChild(this.mObject);
    
            this.setRootSceneGraphNode(translationSceneGraphNode);
        }
    
        update(pFireRockets) {
            var fillColour;

            if(pFireRockets && this.mIndex < 3) {
                fillColour = "#FFFFFF";
            }
            else if (this.mIndex < 6){
                fillColour = null;
            }
            else {
                this.mIndex = 0;
            }
            this.mIndex += 1;

            this.draw(fillColour);
        }
        draw(pFillColour) {
            this.mObject.GetDrawableObject().setFillColour(pFillColour);
        }
    }