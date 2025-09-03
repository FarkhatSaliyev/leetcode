// Input: root = [5,3,8,1,4,7,9,null,2], p = 3, q = 8
// Output: 5

function lowestCommonAncestor(root, p, q) {
  if (!root) return null;

  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.rigth, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
}

module.exports = lowestCommonAncestor;
