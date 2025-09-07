class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kthSmallest(root, k):
    res = []

    def inorder(node): 
        if not node: return

        inorder(node.left)
        res.append(node.val)
        inorder(node.right)

    inorder(root)
    return res[k-1]

# ----------------
# Tests
# ----------------
if __name__ == "__main__":
    # Test 1: Simple BST - root = [3,1,4,null,2], k = 1
    # Expected inorder: [1,2,3,4]
    root = TreeNode(3, TreeNode(1, None, TreeNode(2)), TreeNode(4))
    assert kthSmallest(root, 1) == 1
    assert kthSmallest(root, 2) == 2
    assert kthSmallest(root, 3) == 3
    assert kthSmallest(root, 4) == 4

    # Test 2: Single node tree
    root = TreeNode(1)
    assert kthSmallest(root, 1) == 1

    # Test 3: Left-skewed tree - root = [5,3,6,2,4,null,null,1]
    # Expected inorder: [1,2,3,4,5,6]
    root = TreeNode(5, TreeNode(3, TreeNode(2, TreeNode(1)), TreeNode(4)), TreeNode(6))
    assert kthSmallest(root, 1) == 1
    assert kthSmallest(root, 2) == 2
    assert kthSmallest(root, 3) == 3
    assert kthSmallest(root, 4) == 4
    assert kthSmallest(root, 5) == 5
    assert kthSmallest(root, 6) == 6

    # Test 4: Right-skewed tree - root = [1,null,2,null,3,null,4]
    # Expected inorder: [1,2,3,4]
    root = TreeNode(1)
    root.right = TreeNode(2)
    root.right.right = TreeNode(3)
    root.right.right.right = TreeNode(4)
    assert kthSmallest(root, 1) == 1
    assert kthSmallest(root, 2) == 2
    assert kthSmallest(root, 3) == 3
    assert kthSmallest(root, 4) == 4

    # Test 5: Original example - root = [2,1,3], k = 1
    # Expected inorder: [1,2,3]
    root = TreeNode(2, TreeNode(1), TreeNode(3))
    assert kthSmallest(root, 1) == 1
    assert kthSmallest(root, 2) == 2
    assert kthSmallest(root, 3) == 3

    # Test 6: Larger BST - root = [5,3,6,2,4,null,null,1], k = 3
    # Expected inorder: [1,2,3,4,5,6]
    root = TreeNode(5, TreeNode(3, TreeNode(2, TreeNode(1)), TreeNode(4)), TreeNode(6))
    assert kthSmallest(root, 3) == 3

    # Test 8: Edge case - k = 1 (smallest element)
    root = TreeNode(10, TreeNode(5, TreeNode(3), TreeNode(7)), TreeNode(15, TreeNode(12), TreeNode(20)))
    assert kthSmallest(root, 1) == 3

    # Test 9: Edge case - k = total number of nodes (largest element)
    root = TreeNode(10, TreeNode(5, TreeNode(3), TreeNode(7)), TreeNode(15, TreeNode(12), TreeNode(20)))
    assert kthSmallest(root, 7) == 20

    print("✅ All tests passed!")
