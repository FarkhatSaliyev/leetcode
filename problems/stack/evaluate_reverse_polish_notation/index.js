//Evaluate Reverse Polish Notation

// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
// Return the integer that represents the evaluation of the expression.
// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.

// Input: tokens = ["1","2","+","3","*","4","-"]
// Output: 5
// Explanation: ((1 + 2) * 3) - 4 = 5

function evalRPN(tokens) {
  if (!tokens.length) return [];

  const stack = [];
  // Every time you see a number, push it onto the stack.
  // When you see an operator, pop the last two numbers, apply the operation, and push the result back

  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(Number(tokens[i]))) {
      stack.push(Number(tokens[i]));
    } else {
      let a = stack.pop();
      let b = stack.pop();
      let res;

      if (tokens[i] === "+") {
        res = b + a;
      }
      if (tokens[i] === "-") {
        res = b - a;
      }
      if (tokens[i] === "*") {
        res = b * a;
      }
      if (tokens[i] === "/") {
        res = Math.trunc(b / a);
      }

      stack.push(res);
    }
  }

  return stack.pop();
}

module.exports = evalRPN;
