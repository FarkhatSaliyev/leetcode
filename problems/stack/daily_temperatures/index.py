from typing import List

def dailyTemperatures(temperatures: List[int]) -> List[int]:
    res = []
    stack = []

    for index, item in enumerate(temperatures):
        while len(stack) > 0 and item > temperatures[stack[-1]]:
            prevIdx = stack.pop()
            res[prevIdx] = index - prevIdx
        
        stack.append(index)
        res.append(0)

    return res


# Test cases
if __name__ == "__main__":
    print("Testing dailyTemperatures function:")
    print("=" * 50)
    
    # Test case 1: Example from LeetCode
    print("Test 1: [73,74,75,71,69,72,76,73]")
    test1 = [73, 74, 75, 71, 69, 72, 76, 73]
    expected1 = [1, 1, 4, 2, 1, 1, 0, 0]
    result1 = dailyTemperatures(test1)
    print(f"Expected: {expected1}")
    print(f"Got: {result1}")
    print(f"Status: {'✅ PASS' if result1 == expected1 else '❌ FAIL'}")
    print()
    
    # Test case 2: Simple increasing
    print("Test 2: [30,40,50,60]")
    test2 = [30, 40, 50, 60]
    expected2 = [1, 1, 1, 0]
    result2 = dailyTemperatures(test2)
    print(f"Expected: {expected2}")
    print(f"Got: {result2}")
    print(f"Status: {'✅ PASS' if result2 == expected2 else '❌ FAIL'}")
    print()
    
    # Test case 3: Complex pattern
    print("Test 3: [30,38,30,36,35,40,28]")
    test3 = [30, 38, 30, 36, 35, 40, 28]
    expected3 = [1, 4, 1, 2, 1, 0, 0]
    result3 = dailyTemperatures(test3)
    print(f"Expected: {expected3}")
    print(f"Got: {result3}")
    print(f"Status: {'✅ PASS' if result3 == expected3 else '❌ FAIL'}")
    print()
    
    # Test case 4: All decreasing
    print("Test 4: [90,80,70,60,50]")
    test4 = [90, 80, 70, 60, 50]
    expected4 = [0, 0, 0, 0, 0]
    result4 = dailyTemperatures(test4)
    print(f"Expected: {expected4}")
    print(f"Got: {result4}")
    print(f"Status: {'✅ PASS' if result4 == expected4 else '❌ FAIL'}")
    print()
    
    # Test case 5: Empty array
    print("Test 5: []")
    test5 = []
    expected5 = []
    result5 = dailyTemperatures(test5)
    print(f"Expected: {expected5}")
    print(f"Got: {result5}")
    print(f"Status: {'✅ PASS' if result5 == expected5 else '❌ FAIL'}")
    print()
    
    # Test case 6: Single element
    print("Test 6: [75]")
    test6 = [75]
    expected6 = [0]
    result6 = dailyTemperatures(test6)
    print(f"Expected: {expected6}")
    print(f"Got: {result6}")
    print(f"Status: {'✅ PASS' if result6 == expected6 else '❌ FAIL'}")
    print()
    
    print("=" * 50)
    print("All tests completed!")