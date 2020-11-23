'use strict'

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function() {
        let num = +prompt("Enter number: ", "");
        return this.value += num;
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений