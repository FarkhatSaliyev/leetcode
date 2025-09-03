// Input: root = [1,2,3,4,5], subRoot = [2,4,5]
// Output: true

function isSubtree(root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function isSameTree(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    if (root.val !== subRoot.val) return false;

    return (
      isSameTree(root.left, subRoot.left) &&
      isSameTree(root.right, subRoot.right)
    );
  }
}

module.exports = isSubtree;
