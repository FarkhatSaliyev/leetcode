// Input: preorder = [1,2,3,4], inorder = [2,1,3,4]
// Output: [1,2,3,null,null,null,4]

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null

    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(preorder[0])

    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))

    return root
}

module.exports = buildTree
