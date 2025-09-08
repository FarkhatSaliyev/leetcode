const buildTree = require("./index");

// Helper: convert tree to level order array for easier comparison
function levelOrderTraversal(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node) {
        level.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (level.length > 0) res.push(level);
  }
  return res;
}

test("buildTree simple example", () => {
  const preorder = [3, 9, 20, 15, 7];
  const inorder = [9, 3, 15, 20, 7];
  const root = buildTree(preorder, inorder);
  expect(levelOrderTraversal(root)).toEqual([[3], [9, 20], [15, 7]]);
});

test("buildTree with only left child", () => {
  const preorder = [1, 2, 3];
  const inorder = [3, 2, 1];
  const root = buildTree(preorder, inorder);
  expect(levelOrderTraversal(root)).toEqual([[1], [2], [3]]);
});

test("buildTree with only right child", () => {
  const preorder = [1, 2, 3];
  const inorder = [1, 2, 3];
  const root = buildTree(preorder, inorder);
  expect(levelOrderTraversal(root)).toEqual([[1], [2], [3]]);
});

test("buildTree single node", () => {
  const preorder = [1];
  const inorder = [1];
  const root = buildTree(preorder, inorder);
  expect(levelOrderTraversal(root)).toEqual([[1]]);
});

test("buildTree empty input", () => {
  const preorder = [];
  const inorder = [];
  const root = buildTree(preorder, inorder);
  expect(root).toBeNull();
});
