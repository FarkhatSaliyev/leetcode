const isBalanced = require("./index");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

test("Empty tree is balanced", () => {
  expect(isBalanced(null)).toBe(true);
});

test("Single node is balanced", () => {
  const root = new TreeNode(1);
  expect(isBalanced(root)).toBe(true);
});

test("Two nodes (balanced)", () => {
  const root = new TreeNode(1, new TreeNode(2));
  expect(isBalanced(root)).toBe(true);
});

test("Balanced tree with depth 2", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  );
  expect(isBalanced(root)).toBe(true);
});

test("Unbalanced tree (linked list)", () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.left.left = new TreeNode(4);
  expect(isBalanced(root)).toBe(false);
});
