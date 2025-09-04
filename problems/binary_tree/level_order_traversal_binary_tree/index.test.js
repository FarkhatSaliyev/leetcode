const { levelOrderBFS, levelOrderDFS } = require("./index");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe("Level Order Traversal", () => {
  // Helper: build binary tree [1,2,3,4,5,6,7]
  function buildTree() {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    return root;
  }

  test("BFS: root=[1,2,3,4,5,6,7]", () => {
    let root = buildTree();
    expect(levelOrderBFS(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  test("DFS: root=[1,2,3,4,5,6,7]", () => {
    let root = buildTree();
    expect(levelOrderDFS(root)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
  });

  test("Single node tree", () => {
    let root = new TreeNode(1);
    expect(levelOrderBFS(root)).toEqual([[1]]);
    expect(levelOrderDFS(root)).toEqual([[1]]);
  });

  test("Empty tree", () => {
    expect(levelOrderBFS(null)).toEqual([]);
    expect(levelOrderDFS(null)).toEqual([]);
  });

  test("Unbalanced tree", () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);

    expect(levelOrderBFS(root)).toEqual([[1], [2], [3]]);
    expect(levelOrderDFS(root)).toEqual([[1], [2], [3]]);
  });
});
