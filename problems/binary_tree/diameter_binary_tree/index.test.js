const diameterOfBinaryTree = require("./index");

// Helper to build tree nodes
function TreeNode(val, left = null, right = null) {
  return { val, left, right };
}

describe("diameterOfBinaryTree", () => {
  test("empty tree → diameter = 0", () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
  });

  test("single node → diameter = 0", () => {
    const root = TreeNode(1);
    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  test("two nodes → diameter = 1", () => {
    const root = TreeNode(1, TreeNode(2));
    expect(diameterOfBinaryTree(root)).toBe(1);
  });

  test("balanced tree", () => {
    // Tree:   1
    //       /   \
    //      2     3
    //     / \
    //    4   5
    const root = TreeNode(
      1,
      TreeNode(2, TreeNode(4), TreeNode(5)),
      TreeNode(3)
    );
    expect(diameterOfBinaryTree(root)).toBe(3); // path: 4-2-1-3
  });

  test("skewed tree (linked list)", () => {
    // Tree: 1-2-3-4-5
    let root = TreeNode(1);
    root.left = TreeNode(2);
    root.left.left = TreeNode(3);
    root.left.left.left = TreeNode(4);
    root.left.left.left.left = TreeNode(5);

    expect(diameterOfBinaryTree(root)).toBe(4); // path length = 4
  });
});
