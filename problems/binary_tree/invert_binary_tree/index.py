class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def invertTree(root):
    if not root:
        return None

    #Swap tree branches
    temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root

# ----------------
# Tests
# ----------------
if __name__ == "__main__":
    # Test 1: Empty tree
    assert invertTree(None) == None

    # Test 2: Single node
    root = TreeNode(1)
    result = invertTree(root)
    assert result.val == 1
    assert result.left is None
    assert result.right is None

    # Test 3: Simple tree
    # Before:   1
    #         /   \
    #        2     3
    # After:   1
    #         /   \
    #        3     2
    root = TreeNode(1, TreeNode(2), TreeNode(3))
    result = invertTree(root)
    assert result.left.val == 3
    assert result.right.val == 2

    # Test 4: Full binary tree
    # Before:       4
    #             /   \
    #            2     7
    #           / \   / \
    #          1   3 6   9
    # After:        4
    #             /   \
    #            7     2
    #           / \   / \
    #          9   6 3   1
    root = TreeNode(4,
            TreeNode(2, TreeNode(1), TreeNode(3)),
            TreeNode(7, TreeNode(6), TreeNode(9))
          )
    result = invertTree(root)
    assert result.left.val == 7
    assert result.right.val == 2
    assert result.left.left.val == 9
    assert result.left.right.val == 6
    assert result.right.left.val == 3
    assert result.right.right.val == 1

    # Test 5: Unbalanced tree
    # Before:   1
    #         /
    #        2
    #       /
    #      3
    #
    # After:    1
    #             \
    #              2
    #               \
    #                3
    root = TreeNode(1, TreeNode(2, TreeNode(3)))
    result = invertTree(root)
    assert result.left is None
    assert result.right.val == 2
    assert result.right.right.val == 3

    print("✅ All tests passed!")