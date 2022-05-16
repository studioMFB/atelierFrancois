export default class DoublyLinkedList {
    constructor(pHead = null) {
        this.mHead = pHead;
    }

    setHead(pHead){
        this.mHead = pHead;
    }
    getHead() {
        return this.mHead;
    }

    getTail() {
        let tail = this.mHead;

        // Make sure the head is not null
        if (tail) {
            // Go as far as possible to retrieve the tail
            while (tail.getNext()) {
                tail = tail.getNext();
            }
        }
        return tail
    }

    size() {
        let count = 0;
        let currentNode = this.mHead;

        // loop as far as possible
        while (currentNode) {
            ++count;
            currentNode = currentNode.getNext();
        }
        return count;
    }

    clear() {
        // break link
        this.mHead = null;
    }

}