const orangesRotting = require('./index');

describe('orangesRotting', () => {
    test('grid where all oranges rot in 4 minutes', () => {
        const grid = [
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
        ];
        expect(orangesRotting(grid)).toBe(4);
    });

    test('grid where some oranges never rot (return -1)', () => {
        const grid = [
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1]
        ];
        expect(orangesRotting(grid)).toBe(-1);
    });

    test('grid with no fresh oranges initially (return 0)', () => {
        const grid = [
            [2, 2, 0],
            [0, 2, 2],
            [2, 0, 2]
        ];
        expect(orangesRotting(grid)).toBe(0);
    });

    test('grid with all fresh oranges and no rotten ones (return -1)', () => {
        const grid = [
            [1, 1],
            [1, 1]
        ];
        expect(orangesRotting(grid)).toBe(-1);
    });

    test('grid with no oranges at all (empty cells only, return 0)', () => {
        const grid = [
            [0, 0],
            [0, 0]
        ];
        expect(orangesRotting(grid)).toBe(0);
    });

    test('single cell grid with a fresh orange (return -1)', () => {
        const grid = [[1]];
        expect(orangesRotting(grid)).toBe(-1);
    });

    test('single cell grid with a rotten orange (return 0)', () => {
        const grid = [[2]];
        expect(orangesRotting(grid)).toBe(0);
    });
});
