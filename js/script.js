'use strict'

function Calculator() {

    this.methods = {
        "-": (a, b) => a = b,
        "+": (a, b) => a + b,
    };

    this.calculate = function(str) {
        let arr = str.split(' '),

            num1 = +arr[0],
            op = arr[1],
            num2 = +arr[2]

        if (!this.methods || isNaN(num1) || isNaN(num2)) {
            return NaN;
        }

        return this.methods[op](num1, num2);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);