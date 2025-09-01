const maxDepth = require("./index");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe("maxDepth", () => {
  test("should return 0 for empty tree", () => {
    expect(maxDepth(null)).toBe(0);
  });

  test("should return 1 for single node", () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  test("should return correct depth for balanced tree", () => {
    //    1
    //   / \
    //  2   3
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(maxDepth(root)).toBe(2);
  });

  test("should return correct depth for unbalanced tree (left heavy)", () => {
    //    1
    //   /
    //  2
    // /
    //3
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    expect(maxDepth(root)).toBe(3);
  });

  test("should return correct depth for unbalanced tree (right heavy)", () => {
    // 1
    //  \
    //   2
    //    \
    //     3
    //      \
    //       4
    const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))));
    expect(maxDepth(root)).toBe(4);
  });
});
