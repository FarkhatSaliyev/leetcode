from typing import List

def search(nums: List[int], target:int )-> int:
    start = 0
    end = len(nums)-1

    while start <= end:
        mid = (start + end) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            start = mid + 1
        else:
            end = mid - 1 
    
    return -1

# Test cases
if __name__ == "__main__":
    print("Testing search function:")
    print("=" * 50)

    # Test case 1: Middle element
    print("Test 1: [-1,0,2,4,6,8], target=4")
    test1 = [-1, 0, 2, 4, 6, 8]
    expected1 = 3
    result1 = search(test1, 4)
    print(f"Expected: {expected1}")
    print(f"Got: {result1}")
    print(f"Status: {'✅ PASS' if result1 == expected1 else '❌ FAIL'}")
    print()

    # Test case 2: First element
    print("Test 2: [-1,0,2,4,6,8], target=-1")
    test2 = [-1, 0, 2, 4, 6, 8]
    expected2 = 0
    result2 = search(test2, -1)
    print(f"Expected: {expected2}")
    print(f"Got: {result2}")
    print(f"Status: {'✅ PASS' if result2 == expected2 else '❌ FAIL'}")
    print()

    # Test case 3: Last element
    print("Test 3: [-1,0,2,4,6,8], target=8")
    test3 = [-1, 0, 2, 4, 6, 8]
    expected3 = 5
    result3 = search(test3, 8)
    print(f"Expected: {expected3}")
    print(f"Got: {result3}")
    print(f"Status: {'✅ PASS' if result3 == expected3 else '❌ FAIL'}")
    print()

    # Test case 4: Not found
    print("Test 4: [-1,0,2,4,6,8], target=5")
    test4 = [-1, 0, 2, 4, 6, 8]
    expected4 = -1
    result4 = search(test4, 5)
    print(f"Expected: {expected4}")
    print(f"Got: {result4}")
    print(f"Status: {'✅ PASS' if result4 == expected4 else '❌ FAIL'}")
    print()

    # Test case 5: Empty array
    print("Test 5: [], target=3")
    test5 = []
    expected5 = -1
    result5 = search(test5, 3)
    print(f"Expected: {expected5}")
    print(f"Got: {result5}")
    print(f"Status: {'✅ PASS' if result5 == expected5 else '❌ FAIL'}")
    print()

    # Test case 6: Single element match
    print("Test 6: [10], target=10")
    test6 = [10]
    expected6 = 0
    result6 = search(test6, 10)
    print(f"Expected: {expected6}")
    print(f"Got: {result6}")
    print(f"Status: {'✅ PASS' if result6 == expected6 else '❌ FAIL'}")
    print()

    # Test case 7: Single element no match
    print("Test 7: [10], target=5")
    test7 = [10]
    expected7 = -1
    result7 = search(test7, 5)
    print(f"Expected: {expected7}")
    print(f"Got: {result7}")
    print(f"Status: {'✅ PASS' if result7 == expected7 else '❌ FAIL'}")
    print()

    print("=" * 50)
    print("All tests completed!")