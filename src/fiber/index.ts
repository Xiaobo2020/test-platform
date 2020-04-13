import data from './data';
import {ObjectNode, doWalk as doWalkObjectNode} from './ObjectNode';
import {FiberNode, doWalk as doWalkFiberNode} from './FiberNode';

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

const objectNodeTree = createObjectNode(data);
doWalkObjectNode(objectNodeTree);

function createFiberNode (
  objectNode: ObjectNode, 
  returnNode: FiberNode | null,
): FiberNode {
  const fiberNode = new FiberNode(objectNode.tag);

  return fiberNode;
}

