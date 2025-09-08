const maxPathSum = require('./index');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe("maxPathSum", () => {
    test("simple tree", () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(maxPathSum(root)).toBe(6); // 2 + 1 + 3
    });

    test("tree with negative values", () => {
        const root = new TreeNode(-10,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        expect(maxPathSum(root)).toBe(42); // 15 + 20 + 7
    });

    test("single node", () => {
        const root = new TreeNode(5);
        expect(maxPathSum(root)).toBe(5);
    });

    test("left-skewed tree", () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(3,
                    new TreeNode(4)
                )
            )
        );
        expect(maxPathSum(root)).toBe(10); // 4 + 3 + 2 + 1
    });

    test("right-skewed tree with negatives", () => {
        const root = new TreeNode(-1, null,
            new TreeNode(-2, null,
                new TreeNode(-3)
            )
        );
        expect(maxPathSum(root)).toBe(-1); // choose the single -1 node
    });
});
