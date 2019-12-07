class Node {
  constructor(value) {
    this.value = value;
    this.left = Node;
    this.right = Node;
  }
}

function tree(preorder, start, end) {
  if (start > end) {
    return null;
  }
  let node = new Node(preorder[start]);
  let i = 0;
  for (i = start; i < end; i++) {
    if (preorder[i] > node.value) {
      break;
    }
  }
  node.left = tree(preorder, start + 1, i - 1);
  node.right = tree(preorder, i, end);
  return node;
}

function BinarySearchTreeLCA(strArr) {
  let node = tree(strArr[0], 0, strArr[0].length - 1);
  return lowestCommonAncestor(node, strArr[1], strArr[2]);
}

function lowestCommonAncestor(root, p, q) {
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

console.log(BinarySearchTreeLCA([[10, 5, 1, 7, 40, 50], "1", "7"]));
