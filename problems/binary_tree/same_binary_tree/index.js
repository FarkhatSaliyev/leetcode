// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Input: p = [4,7], q = [4,null,7]
// Output: false

function isSameTree(p, q) {
  //Both are null, return true
  if (!p && !q) return true;

  //On of the branch is null return false
  if (!p || !q) return false;

  //Check if value differ, return false
  if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

module.exports = isSameTree;
