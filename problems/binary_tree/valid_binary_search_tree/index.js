// Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.

// A valid binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.


function isValidBST(root) {

    function dfs(node, min, max){
        if(!node) return true

        if(min !== null && node.val <= min) return false
        if(max !== null && node.val >= max) return false

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max) 
    }

    return dfs(root, null, null)
}

module.exports = isValidBST