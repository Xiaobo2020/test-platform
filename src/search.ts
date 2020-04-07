interface VNode {
  tag: string;
  children?: VNode[];
}

const tree: VNode = {
  tag: 'html',
  children: [
    {
      tag: 'head',
      children: [
        {
          tag: 'title',
        },
        {
          tag: 'style',
        },
      ]
    },
    {
      tag: 'body',
      children: [
        {
          tag: 'h1'
        },
        {
          tag: 'div',
          children: [
            {
              tag: 'h2',
              children: [
                {
                  tag: 'span'
                }
              ]
            }
          ]
        },
        {
          tag: 'script',
        }
      ]
    }
  ]
}

const doWalkDFS = (tree: VNode) => {
  const walk = (vnode: VNode) => {
    console.log(vnode.tag);
    (vnode.children || []).forEach((item) => {
      walk(item);
    });
  };
  walk(tree);
};

const doWalkBFS = (tree: VNode) => {
  let queue = [tree];
  const walk = (vnode: VNode) => {
    console.log(vnode.tag);
    queue = queue.concat(vnode.children || []);
  };
  let item: VNode;
  while (item = queue.shift()) {
    walk(item);
  }
}

doWalkDFS(tree);
// html head title style body h1 div h2 span script

doWalkBFS(tree);
// html head body title style h1 div script h2 span

interface BTNode {
  tag: string;
  child: BTNode | null;
  sibling: BTNode | null;
  ret: BTNode | null;
}

const convert = (vnode: VNode): BTNode => {
  return;
}