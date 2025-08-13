function dailyTemperatures(temperatures) {
  // O (n sqaure) solution
  //   const res = [];
  //   let l = 0;
  //   let r = 0;
  //Visual
  //   L
  //   R
  //     i
  // [30,38,30,36,35,40,28]
  //  0,  1, 2, 3, 4, 5, 6
  // while(l<=temperatures.length && r<=temperatures.length){
  //     if(temperatures[l] < temperatures[r]){
  //         res.push(r-l)
  //         l++
  //         r=l
  //     }
  //     if(r === temperatures.length){
  //         res.push(0)
  //         l++
  //         r=l
  //     }
  //     r++
  // }
  // return res

  //Stack O(n)
  const res = [];
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let prev = stack.pop();
      res[prev] = i - prev;
    }

    stack.push(i);
    res.push(0);
  }

  return res;
}

module.exports = dailyTemperatures;
