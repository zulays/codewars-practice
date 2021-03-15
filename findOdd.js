// Given an array of integers,
// find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  // arr = []

  for (let i = 0; i < A.length; i++) {
    let count = 0
    for (let j = 0; j < A.length; j++) {
      if (A[i] == A[j]) {
        count++
        if (count % 2 != 0) {
          return A[i]
        }
      }
    }
  }
  return -1
}

console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5))
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1))
