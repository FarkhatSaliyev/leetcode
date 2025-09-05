const goodNodes = require("./index");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe("goodNodes", () => {
  test("Empty tree", () => {
    expect(goodNodes(null)).toBe(0);
  });

  test("Single node", () => {
    const root = new TreeNode(1);
    expect(goodNodes(root)).toBe(1);
  });

  test("Example tree [3,1,4,3,null,1,5]", () => {
    const root = new TreeNode(
      3,
      new TreeNode(1, new TreeNode(3)),
      new TreeNode(4, new TreeNode(1), new TreeNode(5))
    );
    expect(goodNodes(root)).toBe(4);
  });

  test("Tree where all nodes are good [2,2,2]", () => {
    const root = new TreeNode(2, new TreeNode(2), new TreeNode(2));
    expect(goodNodes(root)).toBe(3);
  });

  test("Tree where only root is good [5,4,3]", () => {
    const root = new TreeNode(5, new TreeNode(4), new TreeNode(3));
    expect(goodNodes(root)).toBe(1);
  });
});
