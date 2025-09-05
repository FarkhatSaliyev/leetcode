// Input: root = [2,1,1,3,null,1,5]
// Output: 3

//Count good nodes if currenr node greater then left or right node

function goodNodes(root){
    if(!root) return 0

    function dfs(node, maxVal){
        if(!node) return 0

        let res = 0
        if(node.val >= maxVal){
            res += 1
        }

        maxVal = Math.max(node.val, maxVal)

        res += dfs(node.left, maxVal)
        res += dfs(node.right, maxVal)
        return res
    }

    return dfs(root, root.val)
}

module.exports = goodNodes