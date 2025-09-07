// Input: root = [2,1,3], k = 1
// Output: 1

function kthSmallest(root, k) {
    let res = [];

    function inorder(node){
        if(!node) return;

        inorder(node.left)
        res.push(node.val)
        inorder(node.right)
    }

    inorder(root)
    return res[k-1]
}

module.exports = kthSmallest;