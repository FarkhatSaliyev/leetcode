const isSameTree = require("./index");

// Helper function to build a binary tree node
function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

test("same trees with identical structure and values", () => {
  const p = TreeNode(1, TreeNode(2), TreeNode(3));
  const q = TreeNode(1, TreeNode(2), TreeNode(3));

  expect(isSameTree(p, q)).toBe(true);
});

test("different trees - one has extra child", () => {
  const p = TreeNode(1, TreeNode(2));
  const q = TreeNode(1, TreeNode(2, null, TreeNode(3)));

  expect(isSameTree(p, q)).toBe(false);
});

test("different trees - different values", () => {
  const p = TreeNode(1, TreeNode(2), TreeNode(3));
  const q = TreeNode(1, TreeNode(2), TreeNode(4));

  expect(isSameTree(p, q)).toBe(false);
});

test("both trees are null", () => {
  expect(isSameTree(null, null)).toBe(true);
});

test("one tree is null, other is not", () => {
  const p = TreeNode(1);
  expect(isSameTree(p, null)).toBe(false);
});
