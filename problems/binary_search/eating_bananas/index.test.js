const minEatingSpeed = require("./index");

describe("minEatingSpeed", () => {
    test("Basic case: piles=[3,6,7,11], h=8", () => {
        expect(minEatingSpeed([3, 6, 7, 11], 8)).toBe(4);
    });

    test("Single pile with enough hours", () => {
        expect(minEatingSpeed([30], 30)).toBe(1);
    });

    test("Single pile with only 1 hour", () => {
        expect(minEatingSpeed([30], 1)).toBe(30);
    });

    test("Mixed piles example", () => {
        expect(minEatingSpeed([25, 10, 23, 4], 4)).toBe(25);
    });

    test("Plenty of hours (h greater than total bananas)", () => {
        expect(minEatingSpeed([1, 1, 1, 1], 10)).toBe(1);
    });

    test("Large numbers case", () => {
        expect(minEatingSpeed([1000000, 1000000], 2)).toBe(1000000);
    });

    test("Edge case: h equals number of piles", () => {
        expect(minEatingSpeed([5, 9, 7], 3)).toBe(9);
    });
});
