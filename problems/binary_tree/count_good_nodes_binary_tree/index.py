

def goodNodes(root):
    if not root: return 0

    def dfs(node, maxVal):
        if not node: return 0

        res = 0
        if node.val >= maxVal:
            res+=1
        
        maxVal = max(node.val, maxVal)

        res += dfs(node.left, maxVal)
        res += dfs(node.right, maxVal)

        return res

    return dfs(root, root.val)

# --------------------
# Test cases
# --------------------
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


if __name__ == "__main__":
    # Empty tree
    print(goodNodes(None) == 0)

    # Single node
    root = TreeNode(1)
    print(goodNodes(root) == 1)

    # Example tree [3,1,4,3,null,1,5]
    root = TreeNode(
        3,
        TreeNode(1, TreeNode(3)),
        TreeNode(4, TreeNode(1), TreeNode(5))
    )
    print(goodNodes(root) == 4)

    # Tree where all nodes are good [2,2,2]
    root = TreeNode(2, TreeNode(2), TreeNode(2))
    print(goodNodes(root) == 3)

    # Tree where only root is good [5,4,3]
    root = TreeNode(5, TreeNode(4), TreeNode(3))
    print(goodNodes(root) == 1)

    print("All tests passed ✅")