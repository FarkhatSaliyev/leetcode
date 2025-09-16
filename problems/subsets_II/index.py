def subsetsWithDup(nums):
    res = []

    def backTrack(i, subset):
        if i == len(nums):
            res.append(subset[::])
            return

        # Include nums[i]
        subset.append(nums[i])
        backTrack(i+1, subset)
        subset.pop()

        #Dont include nums[i]
        while i+1 < len(nums) and nums[i] == nums[i+1]:
            i+=1
        backTrack(i+1, subset)

    backTrack(0, [])
    return res    

# ------------------ TESTS ------------------
import unittest

class TestSubsetsWithDup(unittest.TestCase):
    def normalize(self, result):
        """Helper to sort subsets and result list for comparison"""
        return sorted([sorted(r) for r in result])

    def test_with_duplicates(self):
        result = subsetsWithDup([1,2,2])
        expected = [[], [1], [2], [1,2], [2,2], [1,2,2]]
        self.assertEqual(self.normalize(result), self.normalize(expected))

    def test_without_duplicates(self):
        result = subsetsWithDup([1,2,3])
        expected = [
            [], [1], [2], [3],
            [1,2], [1,3], [2,3],
            [1,2,3]
        ]
        self.assertEqual(self.normalize(result), self.normalize(expected))

    def test_empty(self):
        self.assertEqual(subsetsWithDup([]), [[]])

    def test_all_same(self):
        result = subsetsWithDup([2,2,2])
        expected = [[], [2], [2,2], [2,2,2]]
        self.assertEqual(self.normalize(result), self.normalize(expected))


if __name__ == "__main__":
    unittest.main()