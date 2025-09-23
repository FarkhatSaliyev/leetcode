const solve = require("./index");

describe("Surrounded Regions", () => {
    test("Example 1 (LeetCode case)", () => {
        const board = [
            ['X','X','X','X'],
            ['X','O','O','X'],
            ['X','X','O','X'],
            ['X','O','X','X']
        ];
        const expected = [
            ['X','X','X','X'],
            ['X','X','X','X'],
            ['X','X','X','X'],
            ['X','O','X','X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    test("Single cell 'O' at border", () => {
        const board = [['O']];
        const expected = [['O']]; // safe, border-connected
        solve(board);
        expect(board).toEqual(expected);
    });

    test("Single cell 'O' inside surrounded", () => {
        const board = [
            ['X','X','X'],
            ['X','O','X'],
            ['X','X','X']
        ];
        const expected = [
            ['X','X','X'],
            ['X','X','X'],
            ['X','X','X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    test("All O's with no X's", () => {
        const board = [
            ['O','O','O'],
            ['O','O','O'],
            ['O','O','O']
        ];
        const expected = [
            ['O','O','O'],
            ['O','O','O'],
            ['O','O','O']
        ]; // all are border-connected
        solve(board);
        expect(board).toEqual(expected);
    });

    test("Mixed O's connected to border", () => {
        const board = [
            ['O','X','O','X'],
            ['X','O','X','O'],
            ['X','X','O','X'],
            ['O','X','X','O']
        ];
        const expected = [
            ['O','X','O','X'],
            ['X','X','X','O'],
            ['X','X','X','X'],
            ['O','X','X','O']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });
});
