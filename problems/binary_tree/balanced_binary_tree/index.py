class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isBalanced(root):

    def validate(root):
        if not root:
            return [True, 0]
        
        left = validate(root.left)
        right = validate(root.right)

        balance = (left[0] and right[0]) and abs(left[1] - right[1]) <= 1

        return [ balance, 1 + max(left[1], right[1]) ]

    return validate(root)[0]

# --------------------------
# Manual Tests
# --------------------------
if __name__ == "__main__":
    # Empty tree
    assert isBalanced(None) == True

    # Single node
    root = TreeNode(1)
    assert isBalanced(root) == True

    # Two nodes
    root = TreeNode(1, TreeNode(2))
    assert isBalanced(root) == True

    # Balanced tree
    root = TreeNode(1,
        TreeNode(2, TreeNode(4), TreeNode(5)),
        TreeNode(3)
    )
    assert isBalanced(root) == True

    # Unbalanced tree (linked list)
    root = TreeNode(1)
    root.left = TreeNode(2)
    root.left.left = TreeNode(3)
    root.left.left.left = TreeNode(4)
    assert isBalanced(root) == False

    print("✅ All tests passed for isBalanced!")
