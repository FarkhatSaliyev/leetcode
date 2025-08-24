from typing import List
import unittest

def search(nums: List[int], target:int )-> int:
    left = 0
    right = len(nums)-1

    while left<=right:
        mid = (left+right)//2

        if nums[mid]==target:
            return mid
        if nums[left]<=nums[mid]:
            if target >= nums[left] and target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if target <= nums[right] and target > nums[mid]:
                left = mid + 1
            else: 
                right = mid - 1

    return -1

class TestSearchInRotatedArray(unittest.TestCase):
    def test_target_in_middle(self):
        self.assertEqual(search([4,5,6,7,0,1,2], 0), 4)

    def test_target_at_beginning(self):
        self.assertEqual(search([4,5,6,7,0,1,2], 4), 0)

    def test_target_at_end(self):
        self.assertEqual(search([4,5,6,7,0,1,2], 2), 6)

    def test_target_not_found(self):
        self.assertEqual(search([4,5,6,7,0,1,2], 3), -1)

    def test_non_rotated_array(self):
        self.assertEqual(search([1,2,3,4,5,6,7], 3), 2)

    def test_single_element_found(self):
        self.assertEqual(search([1], 1), 0)

    def test_single_element_not_found(self):
        self.assertEqual(search([1], 2), -1)

    def test_two_elements_first(self):
        self.assertEqual(search([3,1], 3), 0)

    def test_two_elements_second(self):
        self.assertEqual(search([3,1], 1), 1)

    def test_large_rotated_array(self):
        nums = [15,16,19,20,25,1,3,4,5,7,10,14]
        self.assertEqual(search(nums, 5), 8)
        self.assertEqual(search(nums, 15), 0)
        self.assertEqual(search(nums, 14), 11)
        self.assertEqual(search(nums, 100), -1)

    def test_empty_array(self):
        self.assertEqual(search([], 3), -1)


if __name__ == "__main__":
    unittest.main()