const isValidBST = require("./index");

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

test("Valid BST [2,1,3]", () => {
  const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
  expect(isValidBST(root)).toBe(true);
});

test("Invalid BST [5,1,4,null,null,3,6]", () => {
  const root = new TreeNode(
    5,
    new TreeNode(1),
    new TreeNode(4, new TreeNode(3), new TreeNode(6))
  );
  expect(isValidBST(root)).toBe(false);
});

test("Single node tree", () => {
  const root = new TreeNode(1);
  expect(isValidBST(root)).toBe(true);
});

test("Valid BST [10,5,15,null,null,12,20]", () => {
  const root = new TreeNode(
    10,
    new TreeNode(5),
    new TreeNode(15, new TreeNode(12), new TreeNode(20))
  );
  expect(isValidBST(root)).toBe(true);
});

test("Invalid BST because left child is greater", () => {
  const root = new TreeNode(10, new TreeNode(12), new TreeNode(15));
  expect(isValidBST(root)).toBe(false);
});
