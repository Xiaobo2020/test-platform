class FiberNode {
  public tag: string;
  public child: FiberNode | null;
  public sibling: FiberNode | null;
  public return: FiberNode | null;
  constructor (tag) {
    this.tag = tag;
    this.child = null;
    this.sibling = null;
    this.return = null;
  }
}

export default FiberNode;
