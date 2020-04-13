class ObjectNode {
  public tag: string;
  public children: ObjectNode[];
  constructor (tag) {
    this.tag = tag;
    this.children = [];
  }
}

export default ObjectNode;
