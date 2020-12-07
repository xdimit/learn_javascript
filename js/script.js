'use strict'

function printNumbers(from, to) {

    let num = from;

    setTimeout(function f() {
        alert(num);
        if (num < to) {
            setTimeout(f, 1000);
        }
        num++;
    }, 1000);

}

printNumbers(5, 10);