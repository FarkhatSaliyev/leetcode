// Input: root = [1,2,3,4,5,6,7]
// Output: [[1],[2,3],[4,5,6,7]]

//BFS
function levelOrderBFS(root) {
  if (!root) return [];

  const res = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let level = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      level.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    res.push(level);
  }

  return res;
}

//DFS
function levelOrderDFS(root) {
  const res = [];

  function dfs(root, level) {
    if (!root) return;
    if (res.length === level) res.push([]);

    res[level].push(root.val);

    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }

  dfs(root, 0);
  return res;
}

module.exports = { levelOrderBFS, levelOrderDFS };
