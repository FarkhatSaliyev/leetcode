const rightSideView = require("./index");

// Minimal TreeNode and builder for tests
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Build a binary tree from a level-order array with nulls
function buildTree(arr) {
  if (!arr || arr.length === 0) return null;
  const nodes = arr.map((v) => (v == null ? null : new TreeNode(v)));
  let i = 0,
    j = 1;
  while (j < nodes.length) {
    if (nodes[i] !== null) {
      if (j < nodes.length) nodes[i].left = nodes[j++];
      if (j < nodes.length) nodes[i].right = nodes[j++];
    }
    i++;
  }
  return nodes[0];
}

describe("rightSideView", () => {
  test("empty tree -> []", () => {
    const root = null;
    expect(rightSideView(root)).toEqual([]);
  });

  test("single node", () => {
    const root = buildTree([7]);
    expect(rightSideView(root)).toEqual([7]);
  });

  test("balanced full tree", () => {
    //        1
    //      /   \
    //     2     3
    //    / \   / \
    //   4  5  6   7
    const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
    expect(rightSideView(root)).toEqual([1, 3, 7]);
  });

  test("classic example with gaps: [1,2,3,null,5,null,4] -> [1,3,4]", () => {
    //       1
    //     /   \
    //    2     3
    //     \     \
    //      5     4
    const root = buildTree([1, 2, 3, null, 5, null, 4]);
    expect(rightSideView(root)).toEqual([1, 3, 4]);
  });

  test("left-skewed tree shows left nodes (since they are also rightmost at each level)", () => {
    //   1
    //  /
    // 2
    //  \
    //   3
    const root = buildTree([1, 2, null, null, 3]);
    expect(rightSideView(root)).toEqual([1, 2, 3]);
  });

  test("right-skewed tree", () => {
    // 1
    //  \
    //   2
    //    \
    //     3
    const root = buildTree([1, null, 2, null, 3]);
    expect(rightSideView(root)).toEqual([1, 2, 3]);
  });

  test("mixed: left child deeper provides visibility when no right node at that level", () => {
    //     1
    //    / \
    //   2   3
    //  /
    // 4
    const root = buildTree([1, 2, 3, 4]);
    expect(rightSideView(root)).toEqual([1, 3, 4]);
  });

  test("another irregular shape", () => {
    //       1
    //      / \
    //     2   3
    //      \
    //       5
    //      /
    //     6
    const root = buildTree([1, 2, 3, null, 5, null, null, 6]);
    expect(rightSideView(root)).toEqual([1, 3, 5, 6]);
  });
});
