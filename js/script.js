'use strict'

function sumInput() {
    let numbers = [];
    let sum = 0;

    while (true) {

        let value = prompt("Enter num: ", "");

        if (!isFinite(value) || value === "" || value === null) break;

        numbers.push(+value);
    }

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(sumInput());