def findKthLargest(nums, k):
    nums.sort()
    return nums[len(nums)-k]

import unittest
class TestFindKthLargest(unittest.TestCase):

    def test_example1(self):
        self.assertEqual(findKthLargest([3,2,1,5,6,4], 2), 5)

    def test_example2(self):
        self.assertEqual(findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4)

    def test_single_element(self):
        self.assertEqual(findKthLargest([10], 1), 10)

    def test_with_duplicates(self):
        self.assertEqual(findKthLargest([1,1,1,2,2,3], 2), 2)

    def test_k_equals_length(self):
        self.assertEqual(findKthLargest([7,8,9], 3), 7)

    def test_negative_numbers(self):
        self.assertEqual(findKthLargest([-1,-2,-3,-4], 2), -2)

if __name__ == "__main__":
    unittest.main()
