from typing import List
import unittest

def findMin(nums: List[int])-> int:
    left = 0
    right = len(nums) - 1

    while left<right:
        mid = (left+right)//2

        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    
    return nums[left]


class TestFindMin(unittest.TestCase):
    def test_rotated_middle(self):
        self.assertEqual(findMin([3,4,5,1,2]), 1)

    def test_rotated_end(self):
        self.assertEqual(findMin([4,5,6,7,0,1,2]), 0)

    def test_sorted_array(self):
        self.assertEqual(findMin([1,2,3,4,5]), 1)

    def test_rotated_once(self):
        self.assertEqual(findMin([2,3,4,5,1]), 1)

    def test_single_element(self):
        self.assertEqual(findMin([10]), 10)

    def test_two_elements_rotated(self):
        self.assertEqual(findMin([2,1]), 1)

    def test_two_elements_sorted(self):
        self.assertEqual(findMin([1,2]), 1)

    def test_large_rotation(self):
        self.assertEqual(findMin([30,40,50,10,20]), 10)

    def test_descending_rotation(self):
        self.assertEqual(findMin([5,6,7,8,1,2,3,4]), 1)


if __name__ == "__main__":
    unittest.main()