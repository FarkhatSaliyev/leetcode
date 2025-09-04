// Input: root = [1,2,3]
// Output: [1,3]

function rightSideView(root) {
  const res = [];

  function dfs(node, depth) {
    if (!node) return;

    if (res.length === depth) {
      res.push(node.val);
    }

    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);
  return res;
}

module.exports = rightSideView;
