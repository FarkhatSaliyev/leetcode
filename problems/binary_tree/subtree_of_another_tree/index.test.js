const isSubtree = require("./index");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

describe("isSubtree", () => {
  test("subtree exists inside root", () => {
    const root = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      new TreeNode(5)
    );

    const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

    expect(isSubtree(root, subRoot)).toBe(true);
  });

  test("subtree does not exist inside root", () => {
    const root = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(1), new TreeNode(2)),
      new TreeNode(5)
    );

    const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(3));

    expect(isSubtree(root, subRoot)).toBe(false);
  });

  test("empty subtree is always valid", () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    expect(isSubtree(root, null)).toBe(true);
  });

  test("empty root but non-empty subtree should be false", () => {
    const subRoot = new TreeNode(1);
    expect(isSubtree(null, subRoot)).toBe(false);
  });
});
