
def findDuplicate(nums):
    obj = {}

    for i in nums:
        if i in obj:
            return i
        obj[i] = True

    return None

# ---------------- TESTS ----------------
print(findDuplicate([1, 3, 4, 2, 2]))  # expected 2
print(findDuplicate([3, 1, 3, 4, 2]))  # expected 3
print(findDuplicate([1, 2, 3, 4, 5]))  # expected None
print(findDuplicate([-1, -2, -3, -1])) # expected -1
print(findDuplicate([0, 1, 2, 0]))     # expected 0
