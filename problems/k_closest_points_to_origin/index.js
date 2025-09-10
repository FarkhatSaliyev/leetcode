// Find closest subarray to origin (0,0)

// Input: points = [[0,2],[2,2]], k = 1
// Output: [[0,2]]

function kClosest(points, k) {
    let sorted = points.sort((a,b)=>{
        let distA = a[0]**2 + a[1]**2
        let distB = b[0]**2 + b[1]**2

        return distA - distB
    })

    return sorted.slice(0, k)
}

module.exports = kClosest