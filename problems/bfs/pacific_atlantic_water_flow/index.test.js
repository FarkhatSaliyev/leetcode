const pacificAtlantic = require("./index");

describe("Pacific Atlantic Water Flow", () => {
    test("Example case 1", () => {
        const heights = [
            [1,2,2,3,5],
            [3,2,3,4,4],
            [2,4,5,3,1],
            [6,7,1,4,5],
            [5,1,1,2,4]
        ];
        const result = pacificAtlantic(heights);
        const expected = [
            [0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]
        ];
        expect(result.sort()).toEqual(expected.sort());
    });

    test("Single cell grid", () => {
        expect(pacificAtlantic([[10]])).toEqual([[0,0]]);
    });

    test("Strictly increasing rows", () => {
        const heights = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];
        const result = pacificAtlantic(heights);
        const expected = [[0,2],[1,2],[2,2],[2,0],[2,1]];
        expect(result.sort()).toEqual(expected.sort());
    });
});
