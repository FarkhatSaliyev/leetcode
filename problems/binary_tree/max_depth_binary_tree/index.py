class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root, depth = 0):
    if not root:
        return depth

    return max(maxDepth(root.left, depth+1), maxDepth(root.right, depth+1))

# ----------------
# Inline tests
# ----------------
if __name__ == "__main__":
    # Test 1: Empty tree
    assert maxDepth(None) == 0

    # Test 2: Single node
    root = TreeNode(1)
    assert maxDepth(root) == 1

    # Test 3: Balanced tree
    #    1
    #   / \
    #  2   3
    root = TreeNode(1, TreeNode(2), TreeNode(3))
    assert maxDepth(root) == 2

    # Test 4: Left heavy
    #    1
    #   /
    #  2
    # /
    #3
    root = TreeNode(1, TreeNode(2, TreeNode(3)))
    assert maxDepth(root) == 3

    # Test 5: Right heavy
    # 1 -> 2 -> 3 -> 4
    root = TreeNode(1, None, TreeNode(2, None, TreeNode(3, None, TreeNode(4))))
    assert maxDepth(root) == 4

    print("✅ All maxDepth tests passed!")