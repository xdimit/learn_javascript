'use strict'

function delay(f, ms) {

    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
}

function f(x) {
    alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 3500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс