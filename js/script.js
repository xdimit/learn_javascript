'use strict'

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0
    for (let i = 0; i < arr.length; i++) {
    	partialSum += arr[i];
    	maxSum = Math.max(maxSum, partialSum);
    	if (partialSum < 0) partialSum = 0;

    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));