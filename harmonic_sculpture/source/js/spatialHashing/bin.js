export default class Bin {
    constructor(){
          this.mMin = null;
          this.mMax = null;
          this.mNodes = null;
    }

    setMin(pMin){
        this.mMin = pMin;
    }    
    getMin(){
        return this.mMin;
    } 

    setMax(pMax){
        this.mMax = pMax;
    }    
    getMax(){
        return this.mMax;
    }  

    setNodes(pNodes){
        this.mNodes = pNodes;
    }
    getNodes(){
        return this.mNodes;
    }
    getNodesAt(pIndexX, pIndexY){
        return this.mNodes[pIndexX][pIndexY];
    }
}