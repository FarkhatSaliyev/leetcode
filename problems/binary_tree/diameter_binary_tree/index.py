class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def diameterOfBinaryTree(root):
    diameter = 0

    def depth(root):
        nonlocal diameter
        if not root:
            return 0
        
        left = depth(root.left)
        right = depth(root.right)

        diameter = max(diameter, left + right)
        return max(left, right) + 1

    depth(root)
    return diameter


# --------------------------
# Manual Tests
# --------------------------
if __name__ == "__main__":
    # empty tree
    assert diameterOfBinaryTree(None) == 0

    # single node
    root = TreeNode(1)
    assert diameterOfBinaryTree(root) == 0

    # two nodes
    root = TreeNode(1, TreeNode(2))
    assert diameterOfBinaryTree(root) == 1

    # balanced tree
    root = TreeNode(1,
        TreeNode(2, TreeNode(4), TreeNode(5)),
        TreeNode(3)
    )
    assert diameterOfBinaryTree(root) == 3  # 4-2-1-3 path

    # skewed tree (linked list)
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.left.left = TreeNode(3)
    root.left.left.left = TreeNode(4)
    root.left.left.left.left = TreeNode(5)
    assert diameterOfBinaryTree(root) == 4

    print("✅ All tests passed!")
