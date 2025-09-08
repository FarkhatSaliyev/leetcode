class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def maxPathSum(root):
    res = float('-inf')

    def dfs(node):
        nonlocal res
        if not node: return 0

        leftMax = max(dfs(node.left), 0)
        rightMax = max(dfs(node.right), 0)

        res = max(res, node.val + leftMax + rightMax)

        return node.val + max(leftMax, rightMax)

    dfs(root)
    return res

# ---------------- TESTS ----------------
def test_maxPathSum():
    # simple tree
    root = TreeNode(1, TreeNode(2), TreeNode(3))
    assert maxPathSum(root) == 6  # 2 + 1 + 3

    # tree with negatives
    root = TreeNode(-10,
        TreeNode(9),
        TreeNode(20, TreeNode(15), TreeNode(7))
    )
    assert maxPathSum(root) == 42  # 15 + 20 + 7

    # single node
    root = TreeNode(5)
    assert maxPathSum(root) == 5

    # left-skewed
    root = TreeNode(1,
        TreeNode(2,
            TreeNode(3,
                TreeNode(4)
            )
        )
    )
    assert maxPathSum(root) == 10  # 4 + 3 + 2 + 1

    # right-skewed with negatives
    root = TreeNode(-1, None,
        TreeNode(-2, None,
            TreeNode(-3)
        )
    )
    assert maxPathSum(root) == -1  # best is the root node itself

    print("✅ All Python tests for maxPathSum passed!")


if __name__ == "__main__":
    test_maxPathSum()