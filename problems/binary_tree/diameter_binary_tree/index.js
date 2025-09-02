// Input: root = [1,null,2,3,4,5]
// Output: 3

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(root) {
    if (!root) return 0;

    let left = depth(root.left);
    let right = depth(root.right);

    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }

  depth(root);
  return diameter;
}

module.exports = diameterOfBinaryTree;
