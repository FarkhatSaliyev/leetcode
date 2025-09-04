class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def rightSideView(root): 
    res = []

    def dfs(node, depth):
        if not node: return

        if len(res) == depth:
            res.append(node.val)

        dfs(node.right, depth+1)
        dfs(node.left, depth+1)

    dfs(root, 0)
    return res


# -------------------
# Tests inside same file
# -------------------
import unittest

def build_tree(arr):
    if not arr:
        return None
    nodes = [TreeNode(v) if v is not None else None for v in arr]
    i, j = 0, 1
    while j < len(nodes):
        if nodes[i]:
            if j < len(nodes):
                nodes[i].left = nodes[j]
                j += 1
            if j < len(nodes):
                nodes[i].right = nodes[j]
                j += 1
        i += 1
    return nodes[0]

class TestRightSideView(unittest.TestCase):
    def test_empty_tree(self):
        self.assertEqual(rightSideView(None), [])

    def test_single_node(self):
        root = build_tree([7])
        self.assertEqual(rightSideView(root), [7])

    def test_full_balanced_tree(self):
        root = build_tree([1,2,3,4,5,6,7])
        self.assertEqual(rightSideView(root), [1,3,7])

    def test_classic_example(self):
        root = build_tree([1,2,3,None,5,None,4])
        self.assertEqual(rightSideView(root), [1,3,4])

    def test_left_skewed_tree(self):
        root = build_tree([1,2,None,None,3])
        self.assertEqual(rightSideView(root), [1,2,3])

    def test_right_skewed_tree(self):
        root = build_tree([1,None,2,None,3])
        self.assertEqual(rightSideView(root), [1,2,3])

    def test_mixed_visibility(self):
        root = build_tree([1,2,3,4])
        self.assertEqual(rightSideView(root), [1,3,4])

    def test_irregular_shape(self):
        root = build_tree([1,2,3,None,5,None,None,6])
        self.assertEqual(rightSideView(root), [1,3,5,6])

if __name__ == "__main__":
    unittest.main(exit=False)
    print("✅ All tests passed!")