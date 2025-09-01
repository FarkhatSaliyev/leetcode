// Input: root = [1,2,3,null,null,4]
// Output: 3


function maxDepth(root, depth = 0){
    if(!root) return depth

    return Math.max(maxDepth(root.left, depth+1), maxDepth(root.right, depth+1))
}

module.exports = maxDepth