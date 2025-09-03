const lowestCommonAncestor = require("./index");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

test("lowestCommonAncestor simple case", () => {
  // Tree:     6
  //         /   \
  //        2     8
  //       / \   / \
  //      0   4 7   9
  //         / \
  //        3   5
  const root = new TreeNode(
    6,
    new TreeNode(
      2,
      new TreeNode(0),
      new TreeNode(4, new TreeNode(3), new TreeNode(5))
    ),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  );

  const p = root.left; // 2
  const q = root.right; // 8
  expect(lowestCommonAncestor(root, p, q).val).toBe(6);
});

test("lowestCommonAncestor inside left subtree", () => {
  const root = new TreeNode(
    6,
    new TreeNode(
      2,
      new TreeNode(0),
      new TreeNode(4, new TreeNode(3), new TreeNode(5))
    ),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  );

  const p = root.left; // 2
  const q = root.left.right; // 4
  expect(lowestCommonAncestor(root, p, q).val).toBe(2);
});

test("lowestCommonAncestor same node", () => {
  const root = new TreeNode(2, new TreeNode(1));
  const p = root.left; // 1
  const q = root.left; // 1
  expect(lowestCommonAncestor(root, p, q).val).toBe(1);
});
