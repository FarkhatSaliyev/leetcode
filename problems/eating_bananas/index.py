from typing import List

def eatingBananas(piles: List[int], h: int)-> int:
    start = 1
    end = max(piles)
    res = end

    while start<=end:
        mid = (start+end)//2
        totalHours = 0

        for i in piles:
            hours = -(-i//mid)
            totalHours += hours
        
        if totalHours <= h:
            res = mid
            end = mid -1
        else:
            start = mid +1 
    
    return res

if __name__ == "__main__":
    print("Testing eatingBananas function...\n")

    # Test 1: Example from LeetCode
    print("Test 1: Basic case")
    result = eatingBananas([3, 6, 7, 11], 8)
    expected = 4
    print(f"Input: piles=[3,6,7,11], h=8")
    print(f"Expected: {expected}")
    print(f"Got:      {result}\n")

    # Test 2: Single pile
    print("Test 2: Single pile")
    result = eatingBananas([30], 30)
    expected = 1
    print(f"Input: piles=[30], h=30")
    print(f"Expected: {expected}")
    print(f"Got:      {result}\n")

    # Test 3: Large pile, small h
    print("Test 3: Large pile, small h")
    result = eatingBananas([30], 1)
    expected = 30
    print(f"Input: piles=[30], h=1")
    print(f"Expected: {expected}")
    print(f"Got:      {result}\n")

    # Test 4: Mixed piles
    print("Test 4: Mixed piles")
    result = eatingBananas([25,10,23,4], 4)
    expected = 25
    print(f"Input: piles=[25,10,23,4], h=4")
    print(f"Expected: {expected}")
    print(f"Got:      {result}\n")

    # Test 5: Enough time (h >= sum of piles)
    print("Test 5: Plenty of hours")
    result = eatingBananas([1, 1, 1, 1], 10)
    expected = 1
    print(f"Input: piles=[1,1,1,1], h=10")
    print(f"Expected: {expected}")
    print(f"Got:      {result}\n")