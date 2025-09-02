// Input: root = [1,2,3,null,null,4]
// Output: true

// Input: root = [1,2,3,null,null,4,null,5]
// Output: false

function isBalanced(root) {
  function validate(root) {
    if (!root) return [true, 0];

    let left = validate(root.left);
    let right = validate(root.right);

    let balance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balance, 1 + Math.max(left[1], right[1])];
  }

  return validate(root)[0];
}

module.exports = isBalanced;
