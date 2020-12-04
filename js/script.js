'use strict'

function topSalary(obj) {
    let max = 0;
    let name = null;
    for (let [key, value] of Object.entries(obj)) {
        if (value < max) continue;
        max = value;
        name = key;
    }
    return name;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));