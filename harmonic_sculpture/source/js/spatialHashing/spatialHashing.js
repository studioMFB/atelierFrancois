export default class SpatialHash {
    constructor(pPartitionsPerSize, pBinSize) {
        this.mBins = new Array(pPartitionsPerSize*pPartitionsPerSize*pPartitionsPerSize);
        for(let i =0; i< this.mBins.length; ++i){
            this.mBins[i] = [];
        }
        this.mpPartitionsPerSize = pPartitionsPerSize;
        this.mBinSize = pBinSize;
    }

    /* Return the bin location index ranging from 0 to length-1 of Bins array. */
    binIndex(pPos) {
        const x = (Math.floor(pPos.x / this.mBinSize)) * this.mBinSize;
        const y = (Math.floor(pPos.y / this.mBinSize)) * this.mBinSize;
        const z = (Math.floor(pPos.z / this.mBinSize)) * this.mBinSize;

        // x + (y * width) + (height * width) * z;
        const index = (x + (y*this.mpPartitionsPerSize) + (this.mpPartitionsPerSize*this.mpPartitionsPerSize)*z) / this.mBinSize;
        return index;
    }

    /* Add a single entity to a bin specified by its current location index. */
    add(pEntity) {
        let index = this.binIndex(pEntity.getPosition());    

        if(index < 0 || index >= this.mBinSize){
            const t = true;
            index = pEntity.getBinIndex();
        }

        // While I fixe drones living the Space
        if(index > -1 && index < this.mBins.length) {
            pEntity.setBinIndex(index); // Record bin index
            this.mBins[index].push(pEntity); 
        }
    }

    /* Remove a single entity from a bin specified by its previous location index. */
    /* Move last entity in bin to fill the empty index left by the removed entity. */
    remove(pEntity, pIndex) {
        this.mBins[pIndex].splice(this.mBins[pIndex].indexOf(pEntity), 1);
    }

    /* Check if Entity has move to a new bin based on its index location. */
    /* If so, remove entity from previous bin and add it to the current bin. */
    update(pEntity) {
        // NEW NEW
        // Only update if bin index has changed 
        // i.e: has entity moved to a new bin?
        const currentIndex = this.binIndex(pEntity.getPosition());
        const previousIndex = pEntity.getBinIndex();

        if (previousIndex != undefined && previousIndex != currentIndex) {
            this.remove(pEntity, previousIndex);
            this.add(pEntity);
        }
    }

    /* Return an array of all the entities present within the same current bin as the entity parameter. */
    queryNeighbours(pEntity) {
         const index = this.binIndex(pEntity.getPosition());
         if (index >= this.mBins.length) return[];
        //  if (index >= this.mBins.length) return this.mBins[this.mBins.length-1];
         return this.mBins[index];
    }

}
