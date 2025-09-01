const invertTree = require('./index');

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
}

describe('invertTree', () => {
  test('should return null for empty tree', () => {
    expect(invertTree(null)).toBeNull();
  });

  test('should invert a single node tree', () => {
    const root = new TreeNode(1);
    const result = invertTree(root);
    expect(result.val).toBe(1);
    expect(result.left).toBeNull();
    expect(result.right).toBeNull();
  });

  test('should invert a tree with two children', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const result = invertTree(root);

    expect(result.val).toBe(1);
    expect(result.left.val).toBe(3);
    expect(result.right.val).toBe(2);
  });

  test('should invert a full binary tree', () => {
    const root = new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7, new TreeNode(6), new TreeNode(9))
    );

    const result = invertTree(root);

    // After inversion should look like:
    //       4
    //      / \
    //     7   2
    //    / \ / \
    //   9  6 3  1

    expect(result.left.val).toBe(7);
    expect(result.right.val).toBe(2);

    expect(result.left.left.val).toBe(9);
    expect(result.left.right.val).toBe(6);

    expect(result.right.left.val).toBe(3);
    expect(result.right.right.val).toBe(1);
  });

  test('should handle unbalanced tree', () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
    const result = invertTree(root);

    // Original:   1
    //           /
    //          2
    //         /
    //        3
    //
    // Inverted:   1
    //              \
    //               2
    //                \
    //                 3

    expect(result.left).toBeNull();
    expect(result.right.val).toBe(2);
    expect(result.right.right.val).toBe(3);
  });
});
