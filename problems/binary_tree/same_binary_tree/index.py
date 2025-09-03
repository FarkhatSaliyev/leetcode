class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isSameTree(p, q):
    if not p and not q:
        return True
    
    if not p or not q:
        return False

    if p.val != q.val:
        return False

    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
    

# ---------------- TEST CASES ----------------
if __name__ == "__main__":
    # same trees
    p = TreeNode(1, TreeNode(2), TreeNode(3))
    q = TreeNode(1, TreeNode(2), TreeNode(3))
    assert isSameTree(p, q) == True

    # different trees - one has extra child
    p = TreeNode(1, TreeNode(2))
    q = TreeNode(1, TreeNode(2, None, TreeNode(3)))
    assert isSameTree(p, q) == False

    # different trees - different values
    p = TreeNode(1, TreeNode(2), TreeNode(3))
    q = TreeNode(1, TreeNode(2), TreeNode(4))
    assert isSameTree(p, q) == False

    # both trees are null
    assert isSameTree(None, None) == True

    # one tree is null
    p = TreeNode(1)
    assert isSameTree(p, None) == False

    print("✅ All isSameTree tests passed!")