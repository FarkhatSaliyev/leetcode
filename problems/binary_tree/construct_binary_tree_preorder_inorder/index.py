# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def buildTree(preorder, inorder):
    if not preorder or not inorder: return None

    root = TreeNode(preorder[0])
    mid = inorder.index(preorder[0])

    root.left = buildTree(preorder[1: mid+1], inorder[:mid])
    root.right = buildTree(preorder[mid+1:], inorder[mid+1:])

    return root


# Helper function for level-order traversal
def levelOrderTraversal(root):
    if not root: return []
    res = []
    queue = [root]
    while queue:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            node = queue.pop(0)
            if node:
                level.append(node.val)
                queue.append(node.left)
                queue.append(node.right)
        if level:
            res.append(level)
    return res

# -------------------------
# TEST CASES
# -------------------------
if __name__ == "__main__":
    # Example case
    preorder = [3,9,20,15,7]
    inorder = [9,3,15,20,7]
    root = buildTree(preorder, inorder)
    assert levelOrderTraversal(root) == [[3], [9, 20], [15, 7]]

    # Only left child
    preorder = [1,2,3]
    inorder = [3,2,1]
    root = buildTree(preorder, inorder)
    assert levelOrderTraversal(root) == [[1], [2], [3]]

    # Only right child
    preorder = [1,2,3]
    inorder = [1,2,3]
    root = buildTree(preorder, inorder)
    assert levelOrderTraversal(root) == [[1], [2], [3]]

    # Single node
    preorder = [1]
    inorder = [1]
    root = buildTree(preorder, inorder)
    assert levelOrderTraversal(root) == [[1]]

    # Empty input
    preorder = []
    inorder = []
    root = buildTree(preorder, inorder)
    assert root is None

    print("✅ All buildTree tests passed!")