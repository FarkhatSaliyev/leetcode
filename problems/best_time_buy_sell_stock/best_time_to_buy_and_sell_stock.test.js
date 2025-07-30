const maxProfit = require('./best_time_to_buy_and_sell_stock');

test('Example 1: [7,1,5,3,6,4]', () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(5); // Buy at 1, sell at 6
});

test('Example 2: [7,6,4,3,1]', () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0); // No profit possible
});

test('Single day', () => {
  expect(maxProfit([1])).toBe(0);
});

test('Two days - profit', () => {
  expect(maxProfit([1, 5])).toBe(4);
});

test('Two days - no profit', () => {
  expect(maxProfit([5, 1])).toBe(0);
});

test('Multiple peaks', () => {
  expect(maxProfit([3,2,6,5,0,3])).toBe(4); // Buy at 2, sell at 6
});

test('All same price', () => {
  expect(maxProfit([5,5,5,5,5])).toBe(0);
});

test('Increasing prices', () => {
  expect(maxProfit([1,2,3,4,5])).toBe(4); // Buy at 1, sell at 5
});

test('Decreasing prices', () => {
  expect(maxProfit([5,4,3,2,1])).toBe(0);
}); 