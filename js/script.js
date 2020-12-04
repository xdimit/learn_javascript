'use strict'

function sumSalaries(obj) {
    return Object.values(obj).reduce((a, b) => a + b, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(sumSalaries(salaries)); // 650