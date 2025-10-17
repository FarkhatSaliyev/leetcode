const maxProfit = require('./index'); // adjust path if needed

describe('maxProfit', () => {
  test('should calculate total profit for increasing prices', () => {
    const prices = [1, 2, 3, 4, 5];
    const result = maxProfit(prices);
    // Buy at 1, sell at 2 → +1, 2→3→+1, 3→4→+1, 4→5→+1 = total 4
    expect(result).toBe(4);
  });

  test('should return 0 when prices are decreasing', () => {
    const prices = [7, 6, 4, 3, 1];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  test('should handle fluctuating prices correctly', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    // Profitable moves: 1→5 = 4, 3→6 = 3 → total 7
    const result = maxProfit(prices);
    expect(result).toBe(7);
  });

  test('should handle small array of 2 elements (profit possible)', () => {
    const prices = [2, 5];
    const result = maxProfit(prices);
    expect(result).toBe(3);
  });

  test('should handle small array of 2 elements (no profit)', () => {
    const prices = [5, 2];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  test('should handle single-day prices', () => {
    const prices = [10];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  test('should handle empty array', () => {
    const prices = [];
    const result = maxProfit(prices);
    expect(result).toBe(0);
  });

  test('should handle alternating up and down prices', () => {
    const prices = [1, 5, 3, 8, 4, 9];
    // (1→5)=4, (3→8)=5, (4→9)=5 → total 14
    const result = maxProfit(prices);
    expect(result).toBe(14);
  });
});
