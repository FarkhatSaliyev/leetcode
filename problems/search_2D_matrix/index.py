from operator import truth
from typing import List

# Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
# Output: true

def searchMatrixScan(nums: List[List[int]], target: int)-> bool:
    for i in nums:
        start = i[0]
        end = i[-1]

        if start <= target <= end:
            for val in i:
                if val == target:
                    return True

    return False


if __name__ == "__main__":
    print("Testing searchMatrixScan function...\n")

    # Test 1: Target exists in matrix
    print("Test 1: Target exists in matrix")
    result = searchMatrixScan([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)
    expected = True
    print(f"Input: matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3")
    print(f"Expected: {expected}, Got: {result}\n")

    # Test 2: Target not in matrix
    print("Test 2: Target not in matrix")
    result = searchMatrixScan([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)
    expected = False
    print(f"Input: matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=13")
    print(f"Expected: {expected}, Got: {result}\n")

    # Test 3: Single row matrix
    print("Test 3: Single row matrix")
    result = searchMatrixScan([[1, 2, 3, 4, 5]], 4)
    expected = True
    print(f"Input: matrix=[[1,2,3,4,5]], target=4")
    print(f"Expected: {expected}, Got: {result}\n")

    # Test 4: Single column matrix
    print("Test 4: Single column matrix")
    result = searchMatrixScan([[1], [3], [5], [7]], 2)
    expected = False
    print(f"Input: matrix=[[1],[3],[5],[7]], target=2")
    print(f"Expected: {expected}, Got: {result}\n")

    # Test 5: Empty matrix
    print("Test 5: Empty matrix")
    result = searchMatrixScan([], 1)
    expected = False
    print(f"Input: matrix=[], target=1")
    print(f"Expected: {expected}, Got: {result}\n")