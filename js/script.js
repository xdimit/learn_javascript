'use strict'

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return (item) => item >= a && item <= b;    
}

function inArray(arr) {
    return (item) => arr.includes(item);
}

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2