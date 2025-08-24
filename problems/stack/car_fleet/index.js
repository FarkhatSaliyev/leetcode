function carFleet(target, position, speed) {
  const stack = [];

  //Merge position and speed create cars
  const cars = position
    .map((pos, idx) => [pos, speed[idx]])
    .sort((a, b) => b[0] - a[0]);

  for (let [pos, spd] of cars) {
    let time = (target - pos) / spd;

    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }

  return stack.length;
}

module.exports = carFleet;
