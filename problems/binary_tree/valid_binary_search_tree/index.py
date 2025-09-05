class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isValidBST(root):

    def dfs(node, min, max):
        if not node: return True

        if max != None and node.val <= min: return False
        if min != None and node.val >= max: return False

        return dfs(node.left, min, node.val) and dfs(node.right, node.val, max)
    return dfs(root)

def test_isValidBST():
    def isValidBST(root, min_val=None, max_val=None):
        if not root:
            return True
        if (min_val is not None and root.val <= min_val) or (max_val is not None and root.val >= max_val):
            return False
        return isValidBST(root.left, min_val, root.val) and isValidBST(root.right, root.val, max_val)

    # Test 1: Valid BST [2,1,3]
    root = TreeNode(2, TreeNode(1), TreeNode(3))
    assert isValidBST(root) == True

    # Test 2: Invalid BST [5,1,4,null,null,3,6]
    root = TreeNode(5, TreeNode(1), TreeNode(4, TreeNode(3), TreeNode(6)))
    assert isValidBST(root) == False

    # Test 3: Single node
    root = TreeNode(1)
    assert isValidBST(root) == True

    # Test 4: Valid BST [10,5,15,null,null,12,20]
    root = TreeNode(10, TreeNode(5), TreeNode(15, TreeNode(12), TreeNode(20)))
    assert isValidBST(root) == True

    # Test 5: Invalid BST left child greater
    root = TreeNode(10, TreeNode(12), TreeNode(15))
    assert isValidBST(root) == False

    print("✅ All isValidBST tests passed!")

test_isValidBST()