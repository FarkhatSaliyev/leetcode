// Input: root = [1,2,3,4,5,6,7]
// Output: [1,3,2,7,6,5,4]

function invertTree(root) {
    if(!root) return null

    //Swap tree branches
    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
}

module.exports = invertTree