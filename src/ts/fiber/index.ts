import data from './data';
import ObjectNode from './ObjectNode';
import FiberNode from './FiberNode';

interface Obj {
  tag: string;
  children?: Obj[];
}
function createObjectNode (obj: Obj): ObjectNode {
  const {tag, children = []} = obj;
  const objectNode = new ObjectNode(tag);
  objectNode.children = children.map(child => createObjectNode(child));
  return objectNode;
}

function doWalkObjectNode (objectNode: ObjectNode): void {
  console.log(objectNode.tag);
  objectNode.children.forEach((child) => {
    doWalkObjectNode(child);
  });
}

function createFiberNode (
  objectNode: ObjectNode, 
  siblingNode: FiberNode | null,
  returnNode: FiberNode | null,
): FiberNode {
  const fiberNode = new FiberNode(objectNode.tag);

  fiberNode.sibling = siblingNode;
  fiberNode.return = returnNode;

  if (objectNode.children.length > 0) {
    const children = [];
    for (let i = objectNode.children.length - 1; i >= 0; i--) {
      const prevSiblingNode = children[0] || null;
      const currentChild = objectNode.children[i];
      const sibling = createFiberNode(currentChild, prevSiblingNode, fiberNode);
      children.unshift(sibling);
    }
    fiberNode.child = children[0];
  }

  return fiberNode;
}

let count = 0;
function doWalkFiberNode (fiberNode: FiberNode, prevNode: FiberNode | null) {
  if (fiberNode === null) {
    console.log('<End>');
    return [fiberNode, prevNode];
  }
  if (count === 4) {
    count = 0;
    return [fiberNode, prevNode];
  }
  if (
    prevNode === null // 根节点过来
      || prevNode === fiberNode.return // 父节点过来
      || prevNode.sibling === fiberNode // 兄弟节点过来
  ) {
    console.log(fiberNode.tag);
    count++;
    if (fiberNode.child) {
      // 尝试遍历子节点
      return doWalkFiberNode(fiberNode.child, fiberNode);
    } else if (fiberNode.sibling) {
      // 尝试遍历兄弟节点
      return doWalkFiberNode(fiberNode.sibling, fiberNode);
    } else {
      // 当前节点及以下节点都已经遍历结束
      return doWalkFiberNode(fiberNode.return, fiberNode);
    }
  } else if (prevNode.return === fiberNode) {
    // 子节点过来
    if (fiberNode.sibling) {
      // 尝试遍历兄弟节点
      return doWalkFiberNode(fiberNode.sibling, fiberNode);
    } else {
      // 当前节点及以下节点都已经遍历结束
      return doWalkFiberNode(fiberNode.return, fiberNode);
    }
  }
}

export default function runner () {
  const objectNodeTree = createObjectNode(data);
  console.log('========== doWalkObjectNode ==========');
  doWalkObjectNode(objectNodeTree);
  const fiberNodeTree = createFiberNode(objectNodeTree, null, null);
  console.log('========== doWalkFiberNode ==========');
  const [fiberNode1, prevNode1] = doWalkFiberNode(fiberNodeTree, null);
  console.log('===== stop =====');
  const [fiberNode2, prevNode2] = doWalkFiberNode(fiberNode1, prevNode1);
  console.log('===== stop =====');
  const [fiberNode3, prevNode3] = doWalkFiberNode(fiberNode2, prevNode2);
  console.log('===== stop =====');
}
