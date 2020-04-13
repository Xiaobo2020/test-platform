export class FiberNode {
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

export function doWalk (fiberNode: FiberNode): void {
  // 由父节点进入
  // 由子节点进入
  // 由
}

export default FiberNode;
