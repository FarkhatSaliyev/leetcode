function generateParenthesis(n) {
  const res = [];
  const stack = [];
  if (n === 0) return [];

  function backTrack(open, closed) {
    if (open === n && closed === n) {
      res.push(stack.join(""));
      return;
    }

    if (open < n) {
      stack.push("(");
      backTrack(open + 1, closed);
      stack.pop();
    }
    if (closed < open) {
      stack.push(")");
      backTrack(open, closed + 1);
      stack.pop();
    }
  }

  //Vissual
  // n = 2
  // 2 open, 2 closed
  // []
  // [(]
  // [(,(,),)],
  // [(]
  // [(,)]
  // [(,),(]
  // [(,),(,)]
  //res = [(,(,),)]
  //res = [(,(,),),(,),(,)]

  backTrack(0, 0);
  return res;
}

module.exports = generateParenthesis;
