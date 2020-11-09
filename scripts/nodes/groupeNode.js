class GroupNode extends SceneGraphNode{
    constructor(){

        this.mType = "GroupNode";
        this.mChildren = [];
    }

    getNumberOfChildren() {
        return this.mChildren.length;
    }
    getChildAt(pIndex) {
        return this.mChildren[pIndex];
    }
    addChild(pChild) {
        this.mChildren.push(pChild);
    }

    visitGroup(pNode) {
        var index, child;

        for(index= 0; index < pNode.getNumberOfChildren; index += 1) {
            child = pNode.getChild(index);
            child.accept(this);
        }
    
    }
}