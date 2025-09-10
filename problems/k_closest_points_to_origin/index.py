import heapq

def kClosest(points, k):
    maxHeap = []

    for x, y in points:
        dist = -(x**2 + y**2)
        heapq.heappush(maxHeap, [dist, x, y])

        if len(maxHeap) > k:
            heapq.heappop(maxHeap)

    return [[point[1], point[2]] for point in maxHeap]


def test_kClosest():
    points = [[0,2],[2,2],[3,3]]
    k = 2
    result = kClosest(points, k)
    assert sorted(result) == sorted([[0,2],[2,2]]), f"Unexpected result: {result}"

    points = [[1,3],[-2,2]]
    k = 1
    result = kClosest(points, k)
    assert result == [[-2,2]], f"Unexpected result: {result}"

    points = [[3,3],[5,-1],[-2,4]]
    k = 2
    result = kClosest(points, k)
    assert sorted(result) == sorted([[3,3],[-2,4]]), f"Unexpected result: {result}"

    print("All tests passed for kClosest!")

if __name__ == "__main__":
    test_kClosest()