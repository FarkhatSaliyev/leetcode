class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right



def serialize(root):
    res = []

    def dfs(node):
        if not node:
            res.append('null')
            return None

        res.append(str(node.val))
        dfs(node.left)
        dfs(node.right)

    dfs(root)
    return ','.join(res)


def deserialize(data):
    nodes = data.split(',')
    count = 0

    def dfs():
        nonlocal count
        if nodes[count] == 'null':
            count += 1
            return None
        
        node = TreeNode(int(nodes[count]))
        count+=1
        node.left = dfs()
        node.right = dfs()

        return node

    return dfs()

# --------------------------
# ✅ TEST CASES
# --------------------------
def run_tests():
    # Test 1: Simple tree
    root = TreeNode(1, TreeNode(2), TreeNode(3))
    data = serialize(root)
    assert data == "1,2,null,null,3,null,null"
    new_root = deserialize(data)
    assert serialize(new_root) == data

    # Test 2: Larger tree
    root = TreeNode(
        1,
        TreeNode(2, TreeNode(4), TreeNode(5)),
        TreeNode(3, None, TreeNode(6))
    )
    data = serialize(root)
    assert data == "1,2,4,null,null,5,null,null,3,null,6,null,null"
    new_root = deserialize(data)
    assert serialize(new_root) == data

    # Test 3: Single node
    root = TreeNode(7)
    data = serialize(root)
    assert data == "7,null,null"
    new_root = deserialize(data)
    assert serialize(new_root) == data

    # Test 4: Null tree
    root = None
    data = serialize(root)
    assert data == "null"
    new_root = deserialize(data)
    assert new_root is None

    # Test 5: Skewed tree
    root = TreeNode(1, None, TreeNode(2, None, TreeNode(3)))
    data = serialize(root)
    assert data == "1,null,2,null,3,null,null"
    new_root = deserialize(data)
    assert serialize(new_root) == data

    print("✅ All Python tests passed!")


if __name__ == "__main__":
    run_tests()