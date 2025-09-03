class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def lowestCommonAncestor(root, p,q):
    if not root: return None

    if root.val < p.val and root.val < q.val:
        return lowestCommonAncestor(root.right, p, q)
    if root.val > p.val and root.val > q.val:
        return lowestCommonAncestor(root.left, p, q)

    return root


# ---------------- TESTS ----------------
if __name__ == "__main__":
    # Tree:     6
    #         /   \
    #        2     8
    #       / \   / \
    #      0   4 7   9
    #         / \
    #        3   5
    root = TreeNode(6)
    root.left = TreeNode(2)
    root.right = TreeNode(8)
    root.left.left = TreeNode(0)
    root.left.right = TreeNode(4, TreeNode(3), TreeNode(5))
    root.right.left = TreeNode(7)
    root.right.right = TreeNode(9)

    p = root.left        # 2
    q = root.right       # 8
    assert lowestCommonAncestor(root, p, q).val == 6

    p = root.left        # 2
    q = root.left.right  # 4
    assert lowestCommonAncestor(root, p, q).val == 2

    single_root = TreeNode(2, TreeNode(1))
    p = single_root.left
    q = single_root.left
    assert lowestCommonAncestor(single_root, p, q).val == 1

    print("✅ All lowestCommonAncestor tests passed!")