
//  * Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

function serialize(root) {
    let res = []

    function dfs(node){
        if(!node) {
            res.push('null')
            return null
        }
        res.push(node.val)

        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return res.join(',')
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    let root = data.split(',')
    let count = 0

    function dfs(){
        if(root[count] === 'null'){
            count++
            return null
        }

        let node = new TreeNode(root[count])
        count++

        node.left = dfs()
        node.right = dfs()

        return node
    }

    return dfs()
}

module.exports = { TreeNode, serialize, deserialize }