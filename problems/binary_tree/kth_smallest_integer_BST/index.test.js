const kthSmallest = require('./index');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('kthSmallest', () => {
    test('should return the kth smallest element in a simple BST', () => {
        // Test case: root = [3,1,4,null,2], k = 1
        // Expected inorder: [1,2,3,4]
        const root = new TreeNode(3);
        root.left = new TreeNode(1);
        root.right = new TreeNode(4);
        root.left.right = new TreeNode(2);
        
        expect(kthSmallest(root, 1)).toBe(1);
        expect(kthSmallest(root, 2)).toBe(2);
        expect(kthSmallest(root, 3)).toBe(3);
        expect(kthSmallest(root, 4)).toBe(4);
    });

    test('should return the kth smallest element in a single node tree', () => {
        const root = new TreeNode(1);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    test('should return the kth smallest element in a left-skewed tree', () => {
        // Test case: root = [5,3,6,2,4,null,null,1], k = 3
        // Expected inorder: [1,2,3,4,5,6]
        const root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.left.left.left = new TreeNode(1);
        
        expect(kthSmallest(root, 1)).toBe(1);
        expect(kthSmallest(root, 2)).toBe(2);
        expect(kthSmallest(root, 3)).toBe(3);
        expect(kthSmallest(root, 4)).toBe(4);
        expect(kthSmallest(root, 5)).toBe(5);
        expect(kthSmallest(root, 6)).toBe(6);
    });

    test('should return the kth smallest element in a right-skewed tree', () => {
        // Test case: root = [1,null,2,null,3,null,4], k = 2
        // Expected inorder: [1,2,3,4]
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        root.right.right.right = new TreeNode(4);
        
        expect(kthSmallest(root, 1)).toBe(1);
        expect(kthSmallest(root, 2)).toBe(2);
        expect(kthSmallest(root, 3)).toBe(3);
        expect(kthSmallest(root, 4)).toBe(4);
    });

    test('should handle the original example correctly', () => {
        // Test case: root = [2,1,3], k = 1
        // Expected inorder: [1,2,3]
        const root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        
        expect(kthSmallest(root, 1)).toBe(1);
        expect(kthSmallest(root, 2)).toBe(2);
        expect(kthSmallest(root, 3)).toBe(3);
    });

    test('should handle a larger BST correctly', () => {
        // Test case: root = [5,3,6,2,4,null,null,1], k = 3
        // Expected inorder: [1,2,3,4,5,6]
        const root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.left.left.left = new TreeNode(1);
        
        expect(kthSmallest(root, 3)).toBe(3);
    });

    test('should handle edge case with k = 1 (smallest element)', () => {
        const root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(12);
        root.right.right = new TreeNode(20);
        
        expect(kthSmallest(root, 1)).toBe(3);
    });

    test('should handle edge case with k = total number of nodes (largest element)', () => {
        const root = new TreeNode(10);
        root.left = new TreeNode(5);
        root.right = new TreeNode(15);
        root.left.left = new TreeNode(3);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(12);
        root.right.right = new TreeNode(20);
        
        expect(kthSmallest(root, 7)).toBe(20);
    });
});
