from typing import List

def maxSlidingWindow(nums: List[int], k: int) -> List[int]:
    res = []
    l =r 0
    r = k

    while r<=len(nums):
        maxInWindow = float('-inf') 

        for item in range(l, r):
            if nums[item] > maxInWindow:
                maxInWindow = nums[item]

        res.append(maxInWindow)
        l+=1
        r+=1
    
    return res

# Test cases
if __name__ == "__main__":
    print("Testing maxSlidingWindow function...\n")
    
    # Test 1: Basic case
    print("Test 1: Basic case")
    result = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)
    expected = [3, 3, 5, 5, 6, 7]
    print(f"Input: [1, 3, -1, -3, 5, 3, 6, 7], k=3")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 2: Single element
    print("Test 2: Single element")
    result = maxSlidingWindow([1], 1)
    expected = [1]
    print(f"Input: [1], k=1")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 3: Window size equal to array length
    print("Test 3: Window size equal to array length")
    result = maxSlidingWindow([1, 2, 3], 3)
    expected = [3]
    print(f"Input: [1, 2, 3], k=3")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 4: Window size of 1
    print("Test 4: Window size of 1")
    result = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 1)
    expected = [1, 3, -1, -3, 5, 3, 6, 7]
    print(f"Input: [1, 3, -1, -3, 5, 3, 6, 7], k=1")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 5: Negative numbers
    print("Test 5: Negative numbers")
    result = maxSlidingWindow([-1, -3, -5, -7], 2)
    expected = [-1, -3, -5]
    print(f"Input: [-1, -3, -5, -7], k=2")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 6: Duplicate numbers
    print("Test 6: Duplicate numbers")
    result = maxSlidingWindow([1, 1, 1, 1], 2)
    expected = [1, 1, 1]
    print(f"Input: [1, 1, 1, 1], k=2")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 7: Increasing sequence
    print("Test 7: Increasing sequence")
    result = maxSlidingWindow([1, 2, 3, 4, 5], 3)
    expected = [3, 4, 5]
    print(f"Input: [1, 2, 3, 4, 5], k=3")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 8: Decreasing sequence
    print("Test 8: Decreasing sequence")
    result = maxSlidingWindow([5, 4, 3, 2, 1], 3)
    expected = [5, 4, 3]
    print(f"Input: [5, 4, 3, 2, 1], k=3")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 9: Edge cases
    print("Test 9: Edge cases")
    result = maxSlidingWindow([], 1)
    expected = []
    print(f"Input: [], k=1")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 10: Two element array
    print("Test 10: Two element array")
    result = maxSlidingWindow([1, 2], 2)
    expected = [2]
    print(f"Input: [1, 2], k=2")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 11: Complex case
    print("Test 11: Complex case")
    result = maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5)
    expected = [10, 10, 9, 2]
    print(f"Input: [9, 10, 9, -7, -4, -8, 2, -6], k=5")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    # Test 12: Window size larger than array
    print("Test 12: Window size larger than array")
    result = maxSlidingWindow([1, 2, 3], 5)
    expected = []
    print(f"Input: [1, 2, 3], k=5")
    print(f"Expected: {expected}")
    print(f"Got: {result}")
    print(f"✅ PASS" if result == expected else "❌ FAIL")
    print()

    print("All tests completed!")


