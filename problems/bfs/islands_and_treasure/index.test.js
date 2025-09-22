const islandsAndTreasure = require('./index');

describe('islandsAndTreasure', () => {
    const INF = 2147483647;

    test('handles grid with single treasure', () => {
        const grid = [
            [INF, INF, INF],
            [INF, 0, INF],
            [INF, INF, INF],
        ];

        const expected = [
            [2, 1, 2],
            [1, 0, 1],
            [2, 1, 2],
        ];

        expect(islandsAndTreasure(grid)).toEqual(expected);
    });

    test('handles grid with walls', () => {
        const grid = [
            [INF, -1, 0, INF],
            [INF, INF, INF, -1],
            [INF, -1, INF, -1],
            [0, -1, INF, INF],
        ];

        const expected = [
            [3, -1, 0, 1],
            [2, 2, 1, -1],
            [1, -1, 2, -1],
            [0, -1, 3, 4],
        ];

        expect(islandsAndTreasure(grid)).toEqual(expected);
    });

    test('handles grid with no treasures', () => {
        const grid = [
            [INF, INF],
            [INF, INF],
        ];

        const expected = [
            [INF, INF],
            [INF, INF],
        ];

        expect(islandsAndTreasure(grid)).toEqual(expected);
    });

    test('handles grid with all walls', () => {
        const grid = [
            [-1, -1],
            [-1, -1],
        ];

        const expected = [
            [-1, -1],
            [-1, -1],
        ];

        expect(islandsAndTreasure(grid)).toEqual(expected);
    });

    test('handles grid with treasure surrounded by walls', () => {
        const grid = [
            [-1, -1, -1],
            [-1, 0, -1],
            [-1, -1, -1],
        ];

        const expected = [
            [-1, -1, -1],
            [-1, 0, -1],
            [-1, -1, -1],
        ];

        expect(islandsAndTreasure(grid)).toEqual(expected);
    });
});
