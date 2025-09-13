def combinationSum(nums, target):
    res = []

    def dfs(start, remaining, path):
        if remaining == 0:
            res.append(path.copy())
        
        if remaining < 0: return

        for i in range(start, len(nums)):
            path.append(nums[i])
            dfs(i, remaining-nums[i], path)
            path.pop()


    dfs(0, target, [])
    return res

    # -------------------------
# Inline tests
# -------------------------
import unittest

class TestCombinationSum(unittest.TestCase):
    def test_example_case(self):
        nums = [2, 3, 6, 7]
        target = 7
        result = combinationSum(nums, target)
        expected = [[2, 2, 3], [7]]
        self.assertCountEqual(result, expected)

    def test_no_combination(self):
        nums = [5, 10]
        target = 3
        result = combinationSum(nums, target)
        self.assertEqual(result, [])

    def test_multiple_combinations(self):
        nums = [2, 3, 5]
        target = 8
        result = combinationSum(nums, target)
        expected = [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
        self.assertCountEqual(result, expected)

    def test_single_element_repeated(self):
        nums = [4]
        target = 12
        result = combinationSum(nums, target)
        expected = [[4, 4, 4]]
        self.assertEqual(result, expected)

    def test_empty_candidates(self):
        nums = []
        target = 7
        result = combinationSum(nums, target)
        self.assertEqual(result, [])


if __name__ == '__main__':
    unittest.main()