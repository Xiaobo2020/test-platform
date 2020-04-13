import data from './data';
import ObjectNode from './ObjectNode';

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

export default function runner () {
  const objectNodeTree = createObjectNode(data);
  doWalkObjectNode(objectNodeTree);
}
