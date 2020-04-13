export class ObjectNode {
  public tag: string;
  public children: ObjectNode[];
  constructor (tag) {
    this.tag = tag;
    this.children = [];
  }
}

export function doWalk (objectNode: ObjectNode): void {
  console.log(objectNode.tag);
  objectNode.children.forEach((child) => {
    doWalk(child);
  });
}

export default ObjectNode;
