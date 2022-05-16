export default class DoublyLinkedNode {
    constructor(pItem) {
        this.mItem = pItem;
        this.mPrevious = null;
        this.mNext = null;
    }

    setItem(pItem){
        this.mItem = pItem;
    }
    getItem(){
        return this.mItem;
    }

    setPrevious(pPrevious) {
        this.mPrevious = pPrevious;
    }
    getPrevious() {
        return this.mPrevious;
    }

    setNext(pNext) {
        this.mNext = pNext;
    }   
    getNext() {
        return this.mNext;
    }

}