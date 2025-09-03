class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isSubtree(root, subRoot) -> bool:
    def sameTree(root, subRoot):
        if not root and not subRoot: return True
        if not root or not subRoot: return False
        if root.val != subRoot.val: return False

        return sameTree(root.left, subRoot.left) and sameTree(root.right, subRoot.right)


    if not subRoot: return True
    if not root: return False

    if sameTree(root, subRoot): return True
    
    return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)
    

# ---------------- TESTS ----------------
def run_tests():
    # Test 1: subtree exists
    root = TreeNode(3,
        TreeNode(4, TreeNode(1), TreeNode(2)),
        TreeNode(5)
    )
    subRoot = TreeNode(4, TreeNode(1), TreeNode(2))
    assert isSubtree(root, subRoot) == True

    # Test 2: subtree does not exist
    root = TreeNode(3,
        TreeNode(4, TreeNode(1), TreeNode(2)),
        TreeNode(5)
    )
    subRoot = TreeNode(4, TreeNode(1), TreeNode(3))
    assert isSubtree(root, subRoot) == False

    # Test 3: empty subtree is always valid
    root = TreeNode(1, TreeNode(2), TreeNode(3))
    assert isSubtree(root, None) == True

    # Test 4: empty root but non-empty subtree
    subRoot = TreeNode(1)
    assert isSubtree(None, subRoot) == False

    print("✅ All isSubtree tests passed!")


if __name__ == "__main__":
    run_tests()