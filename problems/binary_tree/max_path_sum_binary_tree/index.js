function maxPathSum(root) {
    let res = -Infinity

    function dfs(node){
        if(!node) return 0

        let leftMax = Math.max(dfs(node.left), 0)
        let rightMax = Math.max(dfs(node.right), 0)

        res = Math.max(res, node.val + leftMax + rightMax)

        return node.val + Math.max(leftMax, rightMax)
    }

    dfs(root)
    return res
}

module.exports = maxPathSum