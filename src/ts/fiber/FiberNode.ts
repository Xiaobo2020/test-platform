class FiberNode {
  public tag: string;
  public child: FiberNode | null;
  public sibling: FiberNode | null;
  public return: FiberNode | null;
  constructor (tag, siblingNode, returnNode) {
    this.tag = tag;
    this.child = null;
    this.sibling = siblingNode;
    this.return = returnNode;
  }
}

export default FiberNode;
